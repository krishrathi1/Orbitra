"use strict";
!(function () {
  try {
    var e =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
              ? self
              : {};
    e.SENTRY_RELEASE = { id: "1.0.3" };
  } catch (e2) {}
})();
{
  try {
    (function () {
      var e =
          "undefined" != typeof window
            ? window
            : "undefined" != typeof global
              ? global
              : "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof self
                  ? self
                  : {},
        n = new e.Error().stack;
      n &&
        ((e._sentryDebugIds = e._sentryDebugIds || {}),
        (e._sentryDebugIds[n] = "73ed3d70-b8e7-4eb9-a201-e3865a61da47"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-73ed3d70-b8e7-4eb9-a201-e3865a61da47"));
    })();
  } catch (e) {}
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const electron = require("electron");
/*!
 * Copyright (c) 2017-present Ghostery GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const SCRIPT_ID = "ghostery-adblocker-script";
const IGNORED_TAGS = /* @__PURE__ */ new Set([
  "br",
  "head",
  "link",
  "meta",
  "script",
  "style",
  "s",
]);
function debounce(fn, { waitFor, maxWait }) {
  let delayedTimer;
  let maxWaitTimer;
  const clear = () => {
    clearTimeout(delayedTimer);
    clearTimeout(maxWaitTimer);
    delayedTimer = void 0;
    maxWaitTimer = void 0;
  };
  const run = () => {
    clear();
    fn();
  };
  return [
    () => {
      if (maxWaitTimer === void 0) {
        maxWaitTimer = setTimeout(run, maxWait);
      }
      clearTimeout(delayedTimer);
      delayedTimer = setTimeout(run, waitFor);
    },
    clear,
  ];
}
function isElement(node) {
  return node.nodeType === 1;
}
function getElementsFromMutations(mutations) {
  const elements = [];
  for (const mutation of mutations) {
    if (mutation.type === "attributes") {
      if (isElement(mutation.target)) {
        elements.push(mutation.target);
      }
    } else if (mutation.type === "childList") {
      for (const addedNode of mutation.addedNodes) {
        if (isElement(addedNode) && addedNode.id !== SCRIPT_ID) {
          elements.push(addedNode);
        }
      }
    }
  }
  return elements;
}
function extractFeaturesFromDOM(roots = [document.documentElement]) {
  const ignoredTags = /* @__PURE__ */ new Set([
    "br",
    "head",
    "link",
    "meta",
    "script",
    "style",
    "s",
  ]);
  const classes = /* @__PURE__ */ new Set();
  const hrefs = /* @__PURE__ */ new Set();
  const ids = /* @__PURE__ */ new Set();
  const seenElements = /* @__PURE__ */ new Set();
  for (const root of roots) {
    for (const element2 of [
      root,
      ...root.querySelectorAll(
        "[id]:not(html):not(body),[class]:not(html):not(body),[href]:not(html):not(body)",
      ),
    ]) {
      if (seenElements.has(element2)) {
        continue;
      }
      seenElements.add(element2);
      if (ignoredTags.has(element2.nodeName.toLowerCase())) {
        continue;
      }
      const id = element2.getAttribute("id");
      if (typeof id === "string") {
        ids.add(id);
      }
      const classList = element2.classList;
      for (const classEntry of classList) {
        classes.add(classEntry);
      }
      const href = element2.getAttribute("href");
      if (typeof href === "string") {
        hrefs.add(href);
      }
    }
  }
  return {
    classes: Array.from(classes),
    hrefs: Array.from(hrefs),
    ids: Array.from(ids),
  };
}
class DOMMonitor {
  constructor(cb) {
    this.cb = cb;
    this.knownIds = /* @__PURE__ */ new Set();
    this.knownHrefs = /* @__PURE__ */ new Set();
    this.knownClasses = /* @__PURE__ */ new Set();
    this.observer = null;
  }
  queryAll(window2) {
    this.cb({ type: "elements", elements: [window2.document.documentElement] });
    this.handleUpdatedNodes([window2.document.documentElement]);
  }
  start(window2) {
    if (this.observer === null && window2.MutationObserver !== void 0) {
      const nodes = /* @__PURE__ */ new Set();
      const handleUpdatedNodesCallback = () => {
        this.handleUpdatedNodes(Array.from(nodes));
        nodes.clear();
      };
      const [debouncedHandleUpdatedNodes, cancelHandleUpdatedNodes] = debounce(
        handleUpdatedNodesCallback,
        {
          waitFor: 25,
          maxWait: 1e3,
        },
      );
      this.observer = new window2.MutationObserver((mutations) => {
        getElementsFromMutations(mutations).forEach(nodes.add, nodes);
        if (nodes.size > 512) {
          cancelHandleUpdatedNodes();
          handleUpdatedNodesCallback();
        } else {
          debouncedHandleUpdatedNodes();
        }
      });
      this.observer.observe(window2.document.documentElement, {
        // Monitor some attributes
        attributes: true,
        attributeFilter: ["class", "id", "href"],
        childList: true,
        subtree: true,
      });
    }
  }
  stop() {
    if (this.observer !== null) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
  handleNewFeatures({ hrefs, ids, classes }) {
    const newIds = [];
    const newClasses = [];
    const newHrefs = [];
    for (const id of ids) {
      if (this.knownIds.has(id) === false) {
        newIds.push(id);
        this.knownIds.add(id);
      }
    }
    for (const cls of classes) {
      if (this.knownClasses.has(cls) === false) {
        newClasses.push(cls);
        this.knownClasses.add(cls);
      }
    }
    for (const href of hrefs) {
      if (this.knownHrefs.has(href) === false) {
        newHrefs.push(href);
        this.knownHrefs.add(href);
      }
    }
    if (
      newIds.length !== 0 ||
      newClasses.length !== 0 ||
      newHrefs.length !== 0
    ) {
      this.cb({
        type: "features",
        classes: newClasses,
        hrefs: newHrefs,
        ids: newIds,
      });
      return true;
    }
    return false;
  }
  handleUpdatedNodes(elements) {
    if (elements.length !== 0) {
      this.cb({
        type: "elements",
        elements: elements.filter(
          (e) => IGNORED_TAGS.has(e.nodeName.toLowerCase()) === false,
        ),
      });
      return this.handleNewFeatures(extractFeaturesFromDOM(elements));
    }
    return false;
  }
}
function autoRemoveScript(script) {
  return `try{${script}}catch(c){}!function(){var c=document.currentScript,e=c&&c.parentNode;e&&e.removeChild(c)}();`;
}
const DEFAULT_CONFIG = {
  lang: void 0,
  message: void 0,
  abortEarly: void 0,
  abortPipeEarly: void 0,
};
// @__NO_SIDE_EFFECTS__
function getGlobalConfig(config$1) {
  return DEFAULT_CONFIG;
}
let store$3;
// @__NO_SIDE_EFFECTS__
function getGlobalMessage(lang) {
  return store$3?.get(lang);
}
let store$2;
// @__NO_SIDE_EFFECTS__
function getSchemaMessage(lang) {
  return store$2?.get(lang);
}
let store$1;
// @__NO_SIDE_EFFECTS__
function getSpecificMessage(reference, lang) {
  return store$1?.get(reference)?.get(lang);
}
// @__NO_SIDE_EFFECTS__
function _stringify(input) {
  const type = typeof input;
  if (type === "string") return `"${input}"`;
  if (type === "number" || type === "bigint" || type === "boolean")
    return `${input}`;
  if (type === "object" || type === "function")
    return (input && Object.getPrototypeOf(input)?.constructor?.name) ?? "null";
  return type;
}
function _addIssue(context, label, dataset, config$1, other) {
  const input = other && "input" in other ? other.input : dataset.value;
  const expected = other?.expected ?? context.expects ?? null;
  const received = other?.received ?? /* @__PURE__ */ _stringify(input);
  const issue = {
    kind: context.kind,
    type: context.type,
    input,
    expected,
    received,
    message: `Invalid ${label}: ${expected ? `Expected ${expected} but r` : "R"}eceived ${received}`,
    requirement: context.requirement,
    path: other?.path,
    issues: other?.issues,
    lang: config$1.lang,
    abortEarly: config$1.abortEarly,
    abortPipeEarly: config$1.abortPipeEarly,
  };
  const isSchema = context.kind === "schema";
  const message$1 =
    other?.message ??
    context.message ??
    /* @__PURE__ */ getSpecificMessage(context.reference, issue.lang) ??
    (isSchema ? /* @__PURE__ */ getSchemaMessage(issue.lang) : null) ??
    config$1.message ??
    /* @__PURE__ */ getGlobalMessage(issue.lang);
  if (message$1 !== void 0)
    issue.message =
      typeof message$1 === "function" ? message$1(issue) : message$1;
  if (isSchema) dataset.typed = false;
  if (dataset.issues) dataset.issues.push(issue);
  else dataset.issues = [issue];
}
const _standardCache = /* @__PURE__ */ new WeakMap();
// @__NO_SIDE_EFFECTS__
function _getStandardProps(context) {
  let cached = _standardCache.get(context);
  if (!cached) {
    cached = {
      version: 1,
      vendor: "valibot",
      validate(value$1) {
        return context["~run"](
          { value: value$1 },
          /* @__PURE__ */ getGlobalConfig(),
        );
      },
    };
    _standardCache.set(context, cached);
  }
  return cached;
}
// @__NO_SIDE_EFFECTS__
function _joinExpects(values$1, separator) {
  const list = [...new Set(values$1)];
  if (list.length > 1) return `(${list.join(` ${separator} `)})`;
  return list[0] ?? "never";
}
var ValiError = class extends Error {
  /**
   * Creates a Valibot error with useful information.
   *
   * @param issues The error issues.
   */
  constructor(issues) {
    super(issues[0].message);
    this.name = "ValiError";
    this.issues = issues;
  }
};
// @__NO_SIDE_EFFECTS__
function integer(message$1) {
  return {
    kind: "validation",
    type: "integer",
    reference: integer,
    async: false,
    expects: null,
    requirement: Number.isInteger,
    message: message$1,
    "~run"(dataset, config$1) {
      if (dataset.typed && !this.requirement(dataset.value))
        _addIssue(this, "integer", dataset, config$1);
      return dataset;
    },
  };
}
// @__NO_SIDE_EFFECTS__
function maxLength(requirement, message$1) {
  return {
    kind: "validation",
    type: "max_length",
    reference: maxLength,
    async: false,
    expects: `<=${requirement}`,
    requirement,
    message: message$1,
    "~run"(dataset, config$1) {
      if (dataset.typed && dataset.value.length > this.requirement)
        _addIssue(this, "length", dataset, config$1, {
          received: `${dataset.value.length}`,
        });
      return dataset;
    },
  };
}
// @__NO_SIDE_EFFECTS__
function minValue(requirement, message$1) {
  return {
    kind: "validation",
    type: "min_value",
    reference: minValue,
    async: false,
    expects: `>=${requirement instanceof Date ? requirement.toJSON() : /* @__PURE__ */ _stringify(requirement)}`,
    requirement,
    message: message$1,
    "~run"(dataset, config$1) {
      if (dataset.typed && !(dataset.value >= this.requirement))
        _addIssue(this, "value", dataset, config$1, {
          received:
            dataset.value instanceof Date
              ? dataset.value.toJSON()
              : /* @__PURE__ */ _stringify(dataset.value),
        });
      return dataset;
    },
  };
}
const ABORT_EARLY_CONFIG = { abortEarly: true };
// @__NO_SIDE_EFFECTS__
function getFallback(schema, dataset, config$1) {
  return typeof schema.fallback === "function"
    ? schema.fallback(dataset, config$1)
    : schema.fallback;
}
// @__NO_SIDE_EFFECTS__
function getDefault(schema, dataset, config$1) {
  return typeof schema.default === "function"
    ? schema.default(dataset, config$1)
    : schema.default;
}
// @__NO_SIDE_EFFECTS__
function array(item, message$1) {
  return {
    kind: "schema",
    type: "array",
    reference: array,
    expects: "Array",
    async: false,
    item,
    message: message$1,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config$1) {
      const input = dataset.value;
      if (Array.isArray(input)) {
        dataset.typed = true;
        dataset.value = [];
        for (let key = 0; key < input.length; key++) {
          const value$1 = input[key];
          const itemDataset = this.item["~run"]({ value: value$1 }, config$1);
          if (itemDataset.issues) {
            const pathItem = {
              type: "array",
              origin: "value",
              input,
              key,
              value: value$1,
            };
            for (const issue of itemDataset.issues) {
              if (issue.path) issue.path.unshift(pathItem);
              else issue.path = [pathItem];
              dataset.issues?.push(issue);
            }
            if (!dataset.issues) dataset.issues = itemDataset.issues;
            if (config$1.abortEarly) {
              dataset.typed = false;
              break;
            }
          }
          if (!itemDataset.typed) dataset.typed = false;
          dataset.value.push(itemDataset.value);
        }
      } else _addIssue(this, "type", dataset, config$1);
      return dataset;
    },
  };
}
// @__NO_SIDE_EFFECTS__
function literal(literal_, message$1) {
  return {
    kind: "schema",
    type: "literal",
    reference: literal,
    expects: /* @__PURE__ */ _stringify(literal_),
    async: false,
    literal: literal_,
    message: message$1,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config$1) {
      if (dataset.value === this.literal) dataset.typed = true;
      else _addIssue(this, "type", dataset, config$1);
      return dataset;
    },
  };
}
// @__NO_SIDE_EFFECTS__
function number(message$1) {
  return {
    kind: "schema",
    type: "number",
    reference: number,
    expects: "number",
    async: false,
    message: message$1,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config$1) {
      if (typeof dataset.value === "number" && !isNaN(dataset.value))
        dataset.typed = true;
      else _addIssue(this, "type", dataset, config$1);
      return dataset;
    },
  };
}
// @__NO_SIDE_EFFECTS__
function object(entries$1, message$1) {
  return {
    kind: "schema",
    type: "object",
    reference: object,
    expects: "Object",
    async: false,
    entries: entries$1,
    message: message$1,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config$1) {
      const input = dataset.value;
      if (input && typeof input === "object") {
        dataset.typed = true;
        dataset.value = {};
        for (const key in this.entries) {
          const valueSchema = this.entries[key];
          if (
            key in input ||
            ((valueSchema.type === "exact_optional" ||
              valueSchema.type === "optional" ||
              valueSchema.type === "nullish") &&
              valueSchema.default !== void 0)
          ) {
            const value$1 =
              key in input
                ? input[key]
                : /* @__PURE__ */ getDefault(valueSchema);
            const valueDataset = valueSchema["~run"](
              { value: value$1 },
              config$1,
            );
            if (valueDataset.issues) {
              const pathItem = {
                type: "object",
                origin: "value",
                input,
                key,
                value: value$1,
              };
              for (const issue of valueDataset.issues) {
                if (issue.path) issue.path.unshift(pathItem);
                else issue.path = [pathItem];
                dataset.issues?.push(issue);
              }
              if (!dataset.issues) dataset.issues = valueDataset.issues;
              if (config$1.abortEarly) {
                dataset.typed = false;
                break;
              }
            }
            if (!valueDataset.typed) dataset.typed = false;
            dataset.value[key] = valueDataset.value;
          } else if (valueSchema.fallback !== void 0)
            dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
          else if (
            valueSchema.type !== "exact_optional" &&
            valueSchema.type !== "optional" &&
            valueSchema.type !== "nullish"
          ) {
            _addIssue(this, "key", dataset, config$1, {
              input: void 0,
              expected: `"${key}"`,
              path: [
                {
                  type: "object",
                  origin: "key",
                  input,
                  key,
                  value: input[key],
                },
              ],
            });
            if (config$1.abortEarly) break;
          }
        }
      } else _addIssue(this, "type", dataset, config$1);
      return dataset;
    },
  };
}
// @__NO_SIDE_EFFECTS__
function optional(wrapped, default_) {
  return {
    kind: "schema",
    type: "optional",
    reference: optional,
    expects: `(${wrapped.expects} | undefined)`,
    async: false,
    wrapped,
    default: default_,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config$1) {
      if (dataset.value === void 0) {
        if (this.default !== void 0)
          dataset.value = /* @__PURE__ */ getDefault(this, dataset, config$1);
        if (dataset.value === void 0) {
          dataset.typed = true;
          return dataset;
        }
      }
      return this.wrapped["~run"](dataset, config$1);
    },
  };
}
// @__NO_SIDE_EFFECTS__
function string(message$1) {
  return {
    kind: "schema",
    type: "string",
    reference: string,
    expects: "string",
    async: false,
    message: message$1,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config$1) {
      if (typeof dataset.value === "string") dataset.typed = true;
      else _addIssue(this, "type", dataset, config$1);
      return dataset;
    },
  };
}
// @__NO_SIDE_EFFECTS__
function variant(key, options, message$1) {
  return {
    kind: "schema",
    type: "variant",
    reference: variant,
    expects: "Object",
    async: false,
    key,
    options,
    message: message$1,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config$1) {
      const input = dataset.value;
      if (input && typeof input === "object") {
        let outputDataset;
        let maxDiscriminatorPriority = 0;
        let invalidDiscriminatorKey = this.key;
        let expectedDiscriminators = [];
        const parseOptions = (variant$1, allKeys) => {
          for (const schema of variant$1.options) {
            if (schema.type === "variant")
              parseOptions(schema, new Set(allKeys).add(schema.key));
            else {
              let keysAreValid = true;
              let currentPriority = 0;
              for (const currentKey of allKeys) {
                const discriminatorSchema = schema.entries[currentKey];
                if (
                  currentKey in input
                    ? discriminatorSchema["~run"](
                        {
                          typed: false,
                          value: input[currentKey],
                        },
                        ABORT_EARLY_CONFIG,
                      ).issues
                    : discriminatorSchema.type !== "exact_optional" &&
                      discriminatorSchema.type !== "optional" &&
                      discriminatorSchema.type !== "nullish"
                ) {
                  keysAreValid = false;
                  if (
                    invalidDiscriminatorKey !== currentKey &&
                    (maxDiscriminatorPriority < currentPriority ||
                      (maxDiscriminatorPriority === currentPriority &&
                        currentKey in input &&
                        !(invalidDiscriminatorKey in input)))
                  ) {
                    maxDiscriminatorPriority = currentPriority;
                    invalidDiscriminatorKey = currentKey;
                    expectedDiscriminators = [];
                  }
                  if (invalidDiscriminatorKey === currentKey)
                    expectedDiscriminators.push(
                      schema.entries[currentKey].expects,
                    );
                  break;
                }
                currentPriority++;
              }
              if (keysAreValid) {
                const optionDataset = schema["~run"](
                  { value: input },
                  config$1,
                );
                if (
                  !outputDataset ||
                  (!outputDataset.typed && optionDataset.typed)
                )
                  outputDataset = optionDataset;
              }
            }
            if (outputDataset && !outputDataset.issues) break;
          }
        };
        parseOptions(this, /* @__PURE__ */ new Set([this.key]));
        if (outputDataset) return outputDataset;
        _addIssue(this, "type", dataset, config$1, {
          input: input[invalidDiscriminatorKey],
          expected: /* @__PURE__ */ _joinExpects(expectedDiscriminators, "|"),
          path: [
            {
              type: "object",
              origin: "value",
              input,
              key: invalidDiscriminatorKey,
              value: input[invalidDiscriminatorKey],
            },
          ],
        });
      } else _addIssue(this, "type", dataset, config$1);
      return dataset;
    },
  };
}
function parse(schema, input, config$1) {
  const dataset = schema["~run"](
    { value: input },
    /* @__PURE__ */ getGlobalConfig(),
  );
  if (dataset.issues) throw new ValiError(dataset.issues);
  return dataset.value;
}
// @__NO_SIDE_EFFECTS__
function pipe(...pipe$1) {
  return {
    ...pipe$1[0],
    pipe: pipe$1,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config$1) {
      for (const item of pipe$1)
        if (item.kind !== "metadata") {
          if (
            dataset.issues &&
            (item.kind === "schema" || item.kind === "transformation")
          ) {
            dataset.typed = false;
            break;
          }
          if (
            !dataset.issues ||
            (!config$1.abortEarly && !config$1.abortPipeEarly)
          )
            dataset = item["~run"](dataset, config$1);
        }
      return dataset;
    },
  };
}
const value = /* @__PURE__ */ pipe(
  /* @__PURE__ */ string(),
  /* @__PURE__ */ maxLength(16384),
);
const optionIndex = /* @__PURE__ */ pipe(
  /* @__PURE__ */ number(),
  /* @__PURE__ */ integer(),
  /* @__PURE__ */ minValue(0),
);
const browserRequestResponseSchema = /* @__PURE__ */ variant("action", [
  /* @__PURE__ */ object({
    action: /* @__PURE__ */ literal("accept"),
    text: /* @__PURE__ */ optional(value),
  }),
  /* @__PURE__ */ object({ action: /* @__PURE__ */ literal("dismiss") }),
  /* @__PURE__ */ object({
    action: /* @__PURE__ */ literal("choose-files"),
    files: /* @__PURE__ */ pipe(
      /* @__PURE__ */ array(
        /* @__PURE__ */ pipe(
          /* @__PURE__ */ string(),
          /* @__PURE__ */ maxLength(4096),
        ),
      ),
      /* @__PURE__ */ maxLength(1e3),
    ),
  }),
  /* @__PURE__ */ object({
    action: /* @__PURE__ */ literal("choose"),
    value: /* @__PURE__ */ optional(value),
    optionIndices: /* @__PURE__ */ optional(
      /* @__PURE__ */ pipe(
        /* @__PURE__ */ array(optionIndex),
        /* @__PURE__ */ maxLength(1e3),
      ),
    ),
  }),
  /* @__PURE__ */ object({ action: /* @__PURE__ */ literal("click") }),
  /* @__PURE__ */ object({ action: /* @__PURE__ */ literal("close") }),
]);
const AUTHFILL_ACTIVATE = "authfill:activate-observer";
const AUTHFILL_DOCUMENT_READY = "authfill:document-ready";
function installAuthFillActivation(onActivated) {
  let script;
  let active = true;
  const activate = () => {
    if (!active || document.readyState === "loading" || !script) return;
    const pending = script;
    script = void 0;
    void electron.webFrame.executeJavaScript(pending).catch(() => {});
    onActivated();
  };
  electron.ipcRenderer.on(AUTHFILL_ACTIVATE, (_event, value2) => {
    if (typeof value2 !== "string") return;
    script = value2;
    activate();
  });
  const ready = () => {
    activate();
    electron.ipcRenderer.send(AUTHFILL_DOCUMENT_READY);
  };
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", ready, { once: true });
  else ready();
  window.addEventListener("pagehide", () => {
    active = false;
    script = void 0;
  });
  window.addEventListener("pageshow", (event) => {
    active = true;
    if (event.persisted) ready();
  });
}
const GESTURE_EVENTS = ["pointerdown", "mousedown", "keydown", "touchstart"];
function installAuthFillGesture() {
  let lastGestureAt = 0;
  let spentGestureAt = 0;
  const record = (event) => {
    if (event.isTrusted) lastGestureAt = performance.now();
  };
  const watchWindow = (target) => {
    for (const type of GESTURE_EVENTS) {
      target.addEventListener(type, record, { capture: true, passive: true });
    }
  };
  const watchedFrames = /* @__PURE__ */ new WeakSet();
  const watchFrame = (frame) => {
    if (watchedFrames.has(frame)) return;
    watchedFrames.add(frame);
    const attach = () => {
      try {
        const child = frame.contentWindow;
        const childDocument = child?.document;
        if (!child || !childDocument) return;
        watchWindow(child);
        for (const nested of Array.from(
          childDocument.querySelectorAll("iframe, frame"),
        )) {
          watchFrame(nested);
        }
      } catch {}
    };
    attach();
    frame.addEventListener("load", attach);
  };
  let watchingChildFrames = false;
  watchWindow(window);
  return {
    spend() {
      if (navigator.userActivation?.isActive !== true) return false;
      if (lastGestureAt <= spentGestureAt) return false;
      spentGestureAt = lastGestureAt;
      return true;
    },
    watchChildFrames() {
      if (watchingChildFrames || !document.documentElement) return;
      watchingChildFrames = true;
      for (const frame of Array.from(
        document.querySelectorAll("iframe, frame"),
      ))
        watchFrame(frame);
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of Array.from(mutation.addedNodes)) {
            if (node.nodeType !== Node.ELEMENT_NODE) continue;
            const element2 = node;
            if (
              element2.localName === "iframe" ||
              element2.localName === "frame"
            )
              watchFrame(element2);
            for (const nested of Array.from(
              element2.querySelectorAll("iframe, frame"),
            )) {
              watchFrame(nested);
            }
          }
        }
      }).observe(document.documentElement, { childList: true, subtree: true });
    },
  };
}
function isBirthDateField(field) {
  const autocomplete = (field.autocomplete ?? "").toLowerCase().split(/\s+/);
  if (autocomplete.some((token) => /^bday(?:-(day|month|year))?$/.test(token)))
    return true;
  const text = [
    field.id,
    field.name,
    field.placeholder,
    field.ariaLabel,
    field.label,
  ]
    .join(" ")
    .toLowerCase();
  return /birth|bday|(?:^|[\s_-])dob(?:$|[\s_-]|month|year|day)/.test(text);
}
function installAutofillDocumentObserver(options, helpers) {
  const paymentFieldAttr = "data-payment-autofill-id";
  let activation = null;
  let paymentAnchor = null;
  let profileAnchor = null;
  const submissions = /* @__PURE__ */ new WeakMap();
  const truncate = (value2) => value2.slice(0, options.maxStringLength);
  const normalize = (value2) => (value2 ?? "").toLowerCase().trim();
  const boundedOptional = (value2) => (value2 ? truncate(value2) : void 0);
  const send = (channel, payload) => {
    try {
      options.send(channel, { ...payload, documentId: options.documentId() });
    } catch {}
  };
  const isAutofillElement = (value2) =>
    value2 instanceof HTMLInputElement || value2 instanceof HTMLSelectElement;
  const isVisible = (element2) => {
    const style = window.getComputedStyle(element2);
    if (style.visibility === "hidden" || style.display === "none") return false;
    const rect = element2.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  };
  const isCandidate = (element2) => {
    if (element2.disabled) return false;
    if (element2 instanceof HTMLInputElement && element2.readOnly) return false;
    if (!isVisible(element2) && !(element2 instanceof HTMLSelectElement))
      return false;
    if (!(element2 instanceof HTMLInputElement)) return true;
    return ![
      "hidden",
      "submit",
      "button",
      "checkbox",
      "radio",
      "file",
    ].includes(normalize(element2.type));
  };
  const selectorFor = (element2) => {
    const existingId = element2.getAttribute(paymentFieldAttr);
    const idIsUnique =
      existingId !== null &&
      /^[a-f0-9]{32}$/.test(existingId) &&
      document.querySelectorAll(`[${paymentFieldAttr}="${existingId}"]`)
        .length === 1;
    if (!idIsUnique) {
      const bytes = new Uint8Array(16);
      crypto.getRandomValues(bytes);
      element2.setAttribute(
        paymentFieldAttr,
        Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
          "",
        ),
      );
    }
    return `[${paymentFieldAttr}="${element2.getAttribute(paymentFieldAttr)}"]`;
  };
  const labelTextFor = (element2) => {
    try {
      let result = "";
      for (const label of element2.labels ?? []) {
        result = truncate(`${result} ${label.textContent ?? ""}`.trim());
        if (result.length === options.maxStringLength) break;
      }
      return result;
    } catch {
      return "";
    }
  };
  const optionSnapshot = (element2) =>
    Array.from(element2.options)
      .slice(0, options.maxOptions)
      .map((option) => ({
        value: truncate(option.value),
        label: truncate(option.label || option.text),
      }));
  const buildField = (element2, includeValues, shouldIncludeValue) => {
    const field = {
      selector: selectorFor(element2),
      autocomplete: boundedOptional(element2.getAttribute("autocomplete")),
      id: boundedOptional(element2.id),
      name: boundedOptional(element2.getAttribute("name")),
      placeholder:
        element2 instanceof HTMLInputElement
          ? boundedOptional(element2.placeholder)
          : void 0,
      ariaLabel: boundedOptional(element2.getAttribute("aria-label")),
      label: boundedOptional(labelTextFor(element2)),
      tagName: element2 instanceof HTMLSelectElement ? "select" : "input",
      type:
        element2 instanceof HTMLInputElement
          ? boundedOptional(element2.type)
          : void 0,
      inputMode:
        element2 instanceof HTMLInputElement
          ? boundedOptional(element2.inputMode)
          : void 0,
      maxLength:
        element2 instanceof HTMLInputElement ? element2.maxLength : void 0,
      options:
        element2 instanceof HTMLSelectElement
          ? optionSnapshot(element2)
          : void 0,
      disabled: element2.disabled,
      readOnly:
        element2 instanceof HTMLInputElement ? element2.readOnly : false,
      visible: isVisible(element2),
    };
    if (includeValues && shouldIncludeValue(field))
      field.value = truncate(element2.value);
    return field;
  };
  const fieldText = (field) =>
    normalize(
      [
        field.autocomplete,
        field.id,
        field.name,
        field.placeholder,
        field.ariaLabel,
        field.label,
        field.type,
        field.inputMode,
      ]
        .filter(Boolean)
        .join(" "),
    );
  const hasContiguousRange = (values, start, end) => {
    const valueSet = new Set(values);
    for (let value2 = start; value2 <= end; value2++)
      if (!valueSet.has(value2)) return false;
    return true;
  };
  const shouldIncludePaymentValue = (field) => {
    if (isBirthDateField(field)) return false;
    if (
      normalize(field.autocomplete)
        .split(/\s+/)
        .some((token) => token.startsWith("cc-"))
    )
      return true;
    const text = fieldText(field);
    if (
      /\b(card|cc|credit|cardholder|card holder|cvc|cvv|security code|card code|cid)\b/.test(
        text,
      )
    )
      return true;
    if (/(exp|expiry|expiration)/.test(text)) return true;
    if (field.tagName === "select" && field.options) {
      const values = field.options
        .map((option) => Number(option.value || option.label))
        .filter((value2) => Number.isInteger(value2));
      return hasContiguousRange(values, 1, 12);
    }
    return false;
  };
  const shouldIncludeProfileValue = (field) => {
    const tokens = normalize(field.autocomplete).split(/\s+/);
    if (
      tokens.some((token) =>
        [
          "name",
          "given-name",
          "additional-name",
          "family-name",
          "organization",
          "street-address",
          "address-line1",
          "address-line2",
          "address-line3",
          "address-level1",
          "address-level2",
          "address-level3",
          "address-level4",
          "postal-code",
          "country",
          "country-name",
          "email",
        ].includes(token),
      )
    )
      return true;
    if (tokens.some((token) => token.startsWith("tel"))) return true;
    const text = fieldText(field);
    if (/\b(cc|card|credit|cvc|cvv|expiry|expiration)\b/.test(text))
      return false;
    return /\b(name|company|organization|organisation|business|address|street|apt|suite|unit|city|town|state|province|region|county|zip|postal|postcode|country|e-?mail|phone|mobile|telephone|tel)\b/.test(
      text,
    );
  };
  const buildSnapshot = (root, includeValues, shouldIncludeValue) => {
    const action =
      root instanceof HTMLFormElement ? boundedOptional(root.action) : void 0;
    const fields = [];
    let totalStringLength = action?.length ?? 0;
    for (const element2 of root.querySelectorAll("input, select")) {
      if (!isAutofillElement(element2) || !isCandidate(element2)) continue;
      const field = buildField(element2, includeValues, shouldIncludeValue);
      let fieldStringLength = field.selector.length;
      for (const value2 of [
        field.autocomplete,
        field.id,
        field.name,
        field.placeholder,
        field.ariaLabel,
        field.label,
        field.type,
        field.inputMode,
        field.value,
      ]) {
        fieldStringLength += value2?.length ?? 0;
      }
      for (const option of field.options ?? []) {
        fieldStringLength += option.value.length + option.label.length;
      }
      if (
        totalStringLength + fieldStringLength >
        options.maxSnapshotStringLength
      )
        break;
      totalStringLength += fieldStringLength;
      fields.push(field);
      if (fields.length === options.maxFields) break;
    }
    return { action, fields };
  };
  const isPaymentField = (element2) =>
    shouldIncludePaymentValue(
      buildField(element2, false, shouldIncludePaymentValue),
    );
  const isProfileField = (element2) =>
    shouldIncludeProfileValue(
      buildField(element2, false, shouldIncludeProfileValue),
    );
  const closePaymentFill = () => {
    paymentAnchor = null;
    send("webpage:close-payment-fill", {});
  };
  const closeProfileFill = () => {
    profileAnchor = null;
    send("webpage:close-profile-fill", {});
  };
  const closeForTarget = (target) => {
    if (target !== paymentAnchor) closePaymentFill();
    if (target !== profileAnchor) closeProfileFill();
  };
  const trustworthyAnchor = (element2, rect) => {
    if (
      !element2.checkVisibility({
        opacityProperty: true,
        visibilityProperty: true,
        contentVisibilityAuto: true,
      })
    )
      return false;
    if (
      !helpers.meetsAnchorSizeFloor(
        {
          clientWidth: element2.clientWidth,
          clientHeight: element2.clientHeight,
          scrollWidth: element2.scrollWidth,
          scrollHeight: element2.scrollHeight,
          renderedWidth: rect.width,
          renderedHeight: rect.height,
        },
        helpers.minAnchorPixelSize,
      )
    )
      return false;
    const root = element2.getRootNode();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const hit =
      root instanceof ShadowRoot
        ? root.elementFromPoint(x, y)
        : document.elementFromPoint(x, y);
    return Boolean(hit && (hit === element2 || element2.contains(hit)));
  };
  const activationMatches = (rect) =>
    helpers.isActivationBoundToAnchor(
      activation,
      {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      },
      Date.now(),
      helpers.activationExpiryMs,
    );
  const submitSnapshots = (root, trigger) => {
    const payment = buildSnapshot(root, true, shouldIncludePaymentValue);
    if (payment.fields.length)
      send("webpage:payment-form-submitted", { form: payment, trigger });
    const profile = buildSnapshot(root, true, shouldIncludeProfileValue);
    if (profile.fields.length)
      send("webpage:profile-form-submitted", { form: profile, trigger });
  };
  const requestPrompts = (anchor) => {
    const payment = isPaymentField(anchor);
    const profile = isProfileField(anchor);
    if (!payment && !profile) return;
    const rect = anchor.getBoundingClientRect();
    if (!trustworthyAnchor(anchor, rect) || !activationMatches(rect)) return;
    activation = null;
    const root = anchor.closest("form") ?? document;
    const coordinates = {
      x: rect.left,
      y: rect.bottom,
      inputHeight: rect.height,
    };
    if (payment) {
      const form = buildSnapshot(root, false, shouldIncludePaymentValue);
      if (form.fields.length) {
        paymentAnchor = anchor;
        send("webpage:request-payment-fill", { form, coordinates });
      }
    }
    if (profile) {
      const form = buildSnapshot(root, false, shouldIncludeProfileValue);
      if (form.fields.length) {
        profileAnchor = anchor;
        send("webpage:request-profile-fill", { form, coordinates });
      }
    }
  };
  document.addEventListener(
    "pointerdown",
    (event) => {
      if (!event.isTrusted) return;
      activation = { x: event.clientX, y: event.clientY, at: Date.now() };
      closeForTarget(event.target);
      if (
        isAutofillElement(event.target) &&
        event.target === document.activeElement
      ) {
        requestPrompts(event.target);
      }
    },
    true,
  );
  document.addEventListener(
    "focusin",
    (event) => {
      if (event.isTrusted) closeForTarget(event.target);
      if (!event.isTrusted || !isAutofillElement(event.target)) return;
      requestPrompts(event.target);
    },
    true,
  );
  window.addEventListener(
    "scroll",
    () => {
      closePaymentFill();
      closeProfileFill();
    },
    true,
  );
  document.addEventListener(
    "submit",
    (event) => {
      if (!event.isTrusted || !(event.target instanceof Element)) return;
      submissions.set(event.target, (submissions.get(event.target) ?? 0) + 1);
      submitSnapshots(event.target, "submit");
    },
    true,
  );
  document.addEventListener(
    "click",
    (event) => {
      if (!event.isTrusted || !(event.target instanceof Element)) return;
      const control = event.target.closest("button, input");
      if (!control || !helpers.isSubmitControl(control)) return;
      const root = control.form;
      if (!root) return;
      const captured = submissions.get(root) ?? 0;
      window.setTimeout(() => {
        if ((submissions.get(root) ?? 0) === captured)
          submitSnapshots(root, "submit-click");
      }, 0);
    },
    true,
  );
}
const AUTOFILL_FILL_REQUEST = "autofill:fill-fields";
const AUTOFILL_FILL_REPLY = "autofill:fill-result";
const AUTHFILL_ATTRIBUTE = "data-authfill-id";
const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
const MAX_SELECTOR_LENGTH = 4096;
function fillAuthFillDocumentFields(fields) {
  if (fields.length === 0 || fields.length > 2) return [];
  const filledFieldIds = [];
  for (const field of fields) {
    if (!isAuthFillDocumentField(field) || filledFieldIds.includes(field.id))
      continue;
    const element2 = findAuthFillInput(field.selector);
    if (!element2 || !canFillAuthField(element2, field.kind)) continue;
    if (!setAuthFillInputValue(element2, field.value)) continue;
    if (field.kind === "new-password") {
      for (const confirmation of emptyPasswordFieldsAfter(element2)) {
        setAuthFillInputValue(confirmation, field.value);
      }
    }
    filledFieldIds.push(field.id);
  }
  return filledFieldIds;
}
function emptyPasswordFieldsAfter(element2) {
  const form = element2.form;
  if (!form) return [];
  const fields = Array.from(
    form.querySelectorAll('input[type="password"]'),
  ).filter((field) => isInput(field));
  const index = fields.indexOf(element2);
  if (index < 0) return [];
  return fields
    .slice(index + 1)
    .filter(
      (field) =>
        field.value === "" &&
        !field.autocomplete
          .toLowerCase()
          .split(/\s+/)
          .includes("current-password") &&
        canFillAuthField(field, "new-password"),
    );
}
function isAuthFillDocumentField(field) {
  return (
    (field.id === "username" || field.id === "password") &&
    (field.kind === "username" ||
      field.kind === "current-password" ||
      field.kind === "new-password") &&
    typeof field.selector === "string" &&
    field.selector.length > 0 &&
    field.selector.length <= MAX_SELECTOR_LENGTH &&
    typeof field.value === "string" &&
    field.value.length > 0 &&
    field.value.length <= 4096
  );
}
function findAuthFillInput(selectorValue) {
  try {
    const parsed = JSON.parse(selectorValue);
    if (parsed.strategy === "authfill") {
      if (
        typeof parsed.attr !== "string" ||
        parsed.attr.length === 0 ||
        parsed.attr.length > 256 ||
        !Array.isArray(parsed.frameChain)
      ) {
        return null;
      }
      let targetDocument = document;
      for (const frameId of parsed.frameChain) {
        if (
          typeof frameId !== "string" ||
          frameId.length === 0 ||
          frameId.length > 256
        )
          return null;
        const frame = targetDocument.querySelector(
          `[${AUTHFILL_ATTRIBUTE}="${CSS.escape(frameId)}"]`,
        );
        if (!isFrame(frame) || !frame.contentDocument) return null;
        targetDocument = frame.contentDocument;
      }
      const identified = targetDocument.querySelector(
        `[${AUTHFILL_ATTRIBUTE}="${CSS.escape(parsed.attr)}"]`,
      );
      if (isInput(identified)) return identified;
      if (
        typeof parsed.fallback !== "string" ||
        parsed.fallback.length === 0 ||
        parsed.fallback.length > MAX_SELECTOR_LENGTH
      ) {
        return null;
      }
      const fallback = targetDocument.querySelector(parsed.fallback);
      return isInput(fallback) ? fallback : null;
    }
  } catch {}
  try {
    const element2 = document.querySelector(selectorValue);
    return isInput(element2) ? element2 : null;
  } catch {
    return null;
  }
}
function isInput(element2) {
  return (
    element2?.namespaceURI === HTML_NAMESPACE && element2.localName === "input"
  );
}
function isFrame(element2) {
  return (
    element2?.namespaceURI === HTML_NAMESPACE &&
    (element2.localName === "iframe" || element2.localName === "frame")
  );
}
function canFillAuthField(element2, kind) {
  if (!element2.isConnected || element2.disabled || element2.readOnly)
    return false;
  if (!element2.getClientRects().length) return false;
  const autocompleteTokens = element2.autocomplete.toLowerCase().split(/\s+/);
  switch (kind) {
    case "current-password":
      return (
        element2.type === "password" &&
        !autocompleteTokens.includes("new-password")
      );
    case "new-password":
      return element2.type === "password";
    case "username":
      return ![
        "button",
        "checkbox",
        "file",
        "hidden",
        "password",
        "radio",
        "submit",
      ].includes(element2.type);
  }
}
function setAuthFillInputValue(element2, value2) {
  try {
    const previousValue = element2.value;
    const descriptor = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    );
    if (!descriptor?.set) return false;
    descriptor.set.call(element2, value2);
    if (element2.value !== value2) return false;
    const valueTracker = Reflect.get(element2, "_valueTracker");
    valueTracker?.setValue(previousValue);
    element2.setAttribute("filled", "true");
    element2.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        composed: true,
        inputType: "insertReplacementText",
        data: value2,
      }),
    );
    element2.dispatchEvent(
      new Event("change", { bubbles: true, composed: true }),
    );
    return true;
  } catch {
    return false;
  }
}
function installAutofillFill() {
  let documentId = createAutofillDocumentId();
  let active = true;
  window.addEventListener("pagehide", () => {
    active = false;
  });
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) documentId = createAutofillDocumentId();
    active = true;
  });
  electron.ipcRenderer.on(AUTOFILL_FILL_REQUEST, (_event, request) => {
    if (!active || request?.documentId !== documentId) return;
    if (isCredentialFillRequest(request)) {
      if (!Array.isArray(request.fields)) return;
      const filledFieldIds = fillAuthFillDocumentFields(request.fields);
      electron.ipcRenderer.send(AUTOFILL_FILL_REPLY, {
        requestId: request.requestId,
        documentId,
        filledCount: filledFieldIds.length,
        filledFieldIds,
      });
      return;
    }
    let filledCount = 0;
    for (const field of request.fields) {
      if (!active || request.documentId !== documentId) break;
      try {
        const element2 = document.querySelector(field.selector);
        if (
          !(
            element2 instanceof HTMLInputElement ||
            element2 instanceof HTMLSelectElement ||
            element2 instanceof HTMLTextAreaElement
          )
        )
          continue;
        if (
          !element2.isConnected ||
          element2.disabled ||
          ("readOnly" in element2 && element2.readOnly)
        )
          continue;
        if (
          element2 instanceof HTMLInputElement &&
          ["file", "hidden", "password"].includes(element2.type)
        )
          continue;
        if (!element2.getClientRects().length) continue;
        let value2 = field.values[0];
        if (element2 instanceof HTMLSelectElement) {
          const options = Array.from(element2.options).filter(
            (option) => !option.disabled,
          );
          const match =
            field.values
              .map((candidate) =>
                options.find((option) => option.value === candidate),
              )
              .find(Boolean) ??
            field.values
              .map((candidate) =>
                options.find((option) => option.text.trim() === candidate),
              )
              .find(Boolean);
          if (!match) continue;
          value2 = match.value;
        }
        if (!value2) continue;
        let prototype;
        if (element2 instanceof HTMLSelectElement) {
          prototype = HTMLSelectElement.prototype;
        } else if (element2 instanceof HTMLTextAreaElement) {
          prototype = HTMLTextAreaElement.prototype;
        } else {
          prototype = HTMLInputElement.prototype;
        }
        Object.getOwnPropertyDescriptor(prototype, "value").set.call(
          element2,
          value2,
        );
        if (element2.value !== value2) continue;
        filledCount++;
        element2.dispatchEvent(
          new InputEvent("input", {
            bubbles: true,
            composed: true,
            inputType: "insertReplacementText",
            data: value2,
          }),
        );
        element2.dispatchEvent(
          new Event("change", { bubbles: true, composed: true }),
        );
      } catch {}
    }
    electron.ipcRenderer.send(AUTOFILL_FILL_REPLY, {
      requestId: request.requestId,
      documentId,
      filledCount,
    });
  });
  return () => documentId;
}
function isCredentialFillRequest(request) {
  return "kind" in request && request.kind === "credentials";
}
function createAutofillDocumentId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  const bytes = new Uint8Array(16);
  window.crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
}
const AUTOFILL_FRAME_OFFSET_REQUEST_CHANNEL = "webpage:measure-frame-offset";
const AUTOFILL_FRAME_OFFSET_REPLY_CHANNEL = "webpage:frame-offset-measured";
const WATCH_EXPIRY_MS = 1e3;
const MAX_WATCHED_TOKENS = 8;
function installAutofillFrameOffset() {
  const watched = /* @__PURE__ */ new Map();
  const unwatch = (token) => {
    clearTimeout(watched.get(token));
    watched.delete(token);
  };
  const reply = (message) => {
    try {
      electron.ipcRenderer.send(AUTOFILL_FRAME_OFFSET_REPLY_CHANNEL, message);
    } catch {}
  };
  electron.ipcRenderer.on(
    AUTOFILL_FRAME_OFFSET_REQUEST_CHANNEL,
    (_event, request) => {
      const requestId = request?.requestId;
      if (typeof requestId !== "string" || !requestId) return;
      if (request?.role === "identify") {
        if (window.parent === window) return;
        try {
          window.parent.postMessage(requestId, "*");
        } catch {}
        return;
      }
      if (request?.role !== "watch") return;
      if (watched.size >= MAX_WATCHED_TOKENS) {
        const oldest = watched.keys().next().value;
        if (oldest !== void 0) unwatch(oldest);
      }
      watched.set(
        requestId,
        setTimeout(() => watched.delete(requestId), WATCH_EXPIRY_MS),
      );
      reply({ requestId, watching: true });
    },
  );
  window.addEventListener(
    "message",
    (event) => {
      const token = event.data;
      if (typeof token !== "string" || !watched.has(token)) return;
      event.stopImmediatePropagation();
      unwatch(token);
      const owner = findFrameOwner(event.source);
      const offset = owner ? contentBoxOrigin(owner) : null;
      reply(offset ? { requestId: token, ...offset } : { requestId: token });
    },
    true,
  );
}
function findFrameOwner(source) {
  if (!source || source === window) return null;
  for (const owner of document.querySelectorAll("iframe, frame, object")) {
    if (owner.contentWindow === source) return owner;
  }
  return null;
}
function contentBoxOrigin(owner) {
  const rect = owner.getBoundingClientRect();
  const style = window.getComputedStyle(owner);
  const x =
    rect.left + owner.clientLeft + (Number.parseFloat(style.paddingLeft) || 0);
  const y =
    rect.top + owner.clientTop + (Number.parseFloat(style.paddingTop) || 0);
  return Number.isFinite(x) && Number.isFinite(y) ? { x, y } : null;
}
function installDialogCapture(bridgeName) {
  const reflectGet = Reflect.get.bind(Reflect);
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor.bind(Object);
  const defineProperty = Object.defineProperty.bind(Object);
  const marker = Symbol.for(`${bridgeName}:dialog-capture`);
  function readTrustedBridge(target) {
    let candidate = target;
    let trusted;
    let mayUseAncestor = false;
    try {
      const location2 = reflectGet(target, "location");
      mayUseAncestor =
        reflectGet(location2, "protocol") === "about:" &&
        reflectGet(location2, "href") === "about:blank";
      if (!mayUseAncestor) {
        const frame = reflectGet(target, "frameElement");
        const src = frame?.getAttribute("src");
        mayUseAncestor =
          !!frame &&
          !frame.hasAttribute("srcdoc") &&
          (!src || src.toLowerCase() === "about:blank");
      }
    } catch {}
    while (true) {
      try {
        const descriptor = getOwnPropertyDescriptor(candidate, bridgeName);
        if (descriptor?.configurable === false) {
          const current = reflectGet(candidate, bridgeName);
          if (
            typeof reflectGet(current, "shouldCaptureBrowserRequest") ===
              "function" &&
            typeof reflectGet(current, "showAlert") === "function" &&
            typeof reflectGet(current, "showConfirm") === "function" &&
            typeof reflectGet(current, "showPrompt") === "function"
          ) {
            trusted = current;
            mayUseAncestor = true;
          }
        }
        const parent = reflectGet(candidate, "parent");
        if (candidate === parent || !mayUseAncestor) return trusted;
        candidate = parent;
      } catch {
        return trusted;
      }
    }
  }
  function blocksModals(target) {
    if (target === target.top) return false;
    try {
      const frame = reflectGet(target, "frameElement");
      const sandbox = frame?.getAttribute("sandbox");
      if (sandbox != null) return !/(^|\s)allow-modals(\s|$)/i.test(sandbox);
      const location2 = reflectGet(target, "location");
      return (
        reflectGet(location2, "origin") === "null" &&
        reflectGet(location2, "protocol") !== "about:"
      );
    } catch {
      return true;
    }
  }
  function isAgentControlled(bridge) {
    if (!bridge) return void 0;
    try {
      const value2 = bridge.shouldCaptureBrowserRequest();
      if (value2 === true) return true;
      if (value2 === false) return false;
      return void 0;
    } catch {
      return void 0;
    }
  }
  function install(target) {
    try {
      const realm = target;
      const windowPrototype = realm.Window.prototype;
      const existing = reflectGet(windowPrototype, marker);
      if (existing === target.document) return;
      defineProperty(windowPrototype, marker, {
        value: target.document,
        configurable: false,
        enumerable: false,
        writable: false,
      });
      const nativeAlert = target.alert.bind(target);
      const nativeConfirm = target.confirm.bind(target);
      const nativePrompt = target.prompt.bind(target);
      target.alert = function (message) {
        if (blocksModals(target)) return;
        const bridge = readTrustedBridge(target);
        const controlled = isAgentControlled(bridge);
        if (controlled === void 0 || !bridge) return;
        const text = message === void 0 ? "" : String(message);
        if (controlled) {
          bridge.showAlert(text);
          return;
        }
        try {
          bridge.showAlert(text);
        } catch {
          nativeAlert(message);
        }
      };
      target.confirm = function (message) {
        if (blocksModals(target)) return false;
        const bridge = readTrustedBridge(target);
        const controlled = isAgentControlled(bridge);
        if (controlled === void 0 || !bridge) return false;
        const text = message === void 0 ? "" : String(message);
        if (controlled) return bridge.showConfirm(text);
        try {
          return bridge.showConfirm(text);
        } catch {
          return nativeConfirm(message);
        }
      };
      target.prompt = function (message, defaultValue) {
        if (blocksModals(target)) return null;
        const bridge = readTrustedBridge(target);
        const controlled = isAgentControlled(bridge);
        if (controlled === void 0 || !bridge) return null;
        const text = message === void 0 ? "" : String(message);
        const initial = defaultValue === void 0 ? "" : String(defaultValue);
        if (controlled) return bridge.showPrompt(text, initial);
        try {
          return bridge.showPrompt(text, initial);
        } catch {
          return nativePrompt(message, defaultValue);
        }
      };
      for (const Frame of [realm.HTMLIFrameElement, realm.HTMLFrameElement]) {
        for (const name of ["contentWindow", "contentDocument"]) {
          const descriptor = getOwnPropertyDescriptor(Frame.prototype, name);
          if (!descriptor?.get || !descriptor.configurable) continue;
          defineProperty(Frame.prototype, name, {
            ...descriptor,
            get: function () {
              const result = descriptor.get?.call(this) ?? null;
              const child =
                name === "contentWindow" ? result : result?.defaultView;
              if (child) install(child);
              return result;
            },
          });
        }
      }
      const nativeOpen = target.open.bind(target);
      target.open = function (...args) {
        const child = nativeOpen.apply(target, args);
        if (child) install(child);
        return child;
      };
    } catch {}
  }
  install(window);
}
function installMediaPermissionStatus(bridgeName) {
  const reflectGet = Reflect.get.bind(Reflect);
  const reflectApply = Reflect.apply.bind(Reflect);
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor.bind(Object);
  const defineProperty = Object.defineProperty.bind(Object);
  const permissions = globalThis.Permissions?.prototype;
  const statuses = globalThis.PermissionStatus?.prototype;
  const mediaDevices = globalThis.MediaDevices?.prototype;
  const devices = globalThis.navigator?.mediaDevices;
  if (!permissions || !statuses || !mediaDevices || !devices) return;
  const marker = Symbol.for(`${bridgeName}:media-permission-status`);
  if (reflectGet(globalThis, marker) === true) return;
  defineProperty(globalThis, marker, {
    value: true,
    configurable: false,
    enumerable: false,
    writable: false,
  });
  const queryDescriptor = getOwnPropertyDescriptor(permissions, "query");
  const getUserMediaDescriptor = getOwnPropertyDescriptor(
    mediaDevices,
    "getUserMedia",
  );
  const stateDescriptor = getOwnPropertyDescriptor(statuses, "state");
  const nativeQuery = queryDescriptor?.value;
  const nativeGetUserMedia = getUserMediaDescriptor?.value;
  const nativeState = stateDescriptor
    ? reflectGet(stateDescriptor, "get")
    : void 0;
  const nativeEnumerate = reflectGet(mediaDevices, "enumerateDevices");
  if (
    typeof nativeQuery !== "function" ||
    typeof nativeGetUserMedia !== "function" ||
    typeof nativeState !== "function" ||
    typeof nativeEnumerate !== "function" ||
    !queryDescriptor?.configurable ||
    !getUserMediaDescriptor?.configurable ||
    !stateDescriptor?.configurable
  )
    return;
  const NativeEvent = Event;
  const WeakRefs = WeakRef;
  const reportedStates = /* @__PURE__ */ new WeakMap();
  let tracked = [];
  const refusedKinds = /* @__PURE__ */ new Set();
  const deviceKindFor = (name) => {
    if (name === "camera") return "videoinput";
    if (name === "microphone") return "audioinput";
    return void 0;
  };
  const requestedKinds = (constraints) => {
    const kinds = [];
    try {
      if (reflectGet(constraints, "video")) kinds.push("videoinput");
      if (reflectGet(constraints, "audio")) kinds.push("audioinput");
    } catch {}
    return kinds;
  };
  const isRefusal = (error) => {
    try {
      return reflectGet(error, "name") === "NotAllowedError";
    } catch {
      return false;
    }
  };
  const stubbedKinds = async () => {
    const list = await reflectApply(nativeEnumerate, devices, []);
    return new Set(
      list
        .filter((device) => device.deviceId === "")
        .map((device) => device.kind),
    );
  };
  const stateFor = (kind, stubbed) => {
    if (!stubbed.has(kind)) return "granted";
    if (refusedKinds.has(kind)) return "denied";
    return "prompt";
  };
  const settle = async (kinds, outcome) => {
    for (const kind of kinds) {
      if (outcome === "refused") refusedKinds.add(kind);
      if (outcome === "allowed") refusedKinds.delete(kind);
    }
    if (tracked.length === 0) return;
    const entries = tracked;
    tracked = [];
    const stubbed = await stubbedKinds();
    for (const entry of entries) {
      const status = entry.status.deref();
      if (!status) continue;
      const state = stateFor(entry.kind, stubbed);
      if (state !== "granted") tracked.push(entry);
      if (state === reportedStates.get(status)) continue;
      reportedStates.set(status, state);
      status.dispatchEvent(new NativeEvent("change"));
    }
  };
  const replacements = {
    query(descriptor) {
      const result = reflectApply(nativeQuery, this, [descriptor]);
      let name;
      try {
        name = String(reflectGet(descriptor, "name"));
      } catch {
        return result;
      }
      const kind = deviceKindFor(name);
      if (!kind) return result;
      return result.then(async (status) => {
        try {
          if (reflectApply(nativeState, status, []) !== "granted")
            return status;
          const state = stateFor(kind, await stubbedKinds());
          if (state === "granted") return status;
          reportedStates.set(status, state);
          tracked.push({ status: new WeakRefs(status), kind });
        } catch {}
        return status;
      });
    },
    // A rest parameter contributes nothing to `length`, matching the platform's 0.
    getUserMedia(...args) {
      const result = reflectApply(nativeGetUserMedia, this, args);
      const kinds = requestedKinds(args[0]);
      result.then(
        () => void settle(kinds, "allowed").catch(() => {}),
        (error) =>
          void settle(kinds, isRefusal(error) ? "refused" : "failed").catch(
            () => {},
          ),
      );
      return result;
    },
    get state() {
      const status = this;
      return (
        reportedStates.get(status) ?? reflectApply(nativeState, status, [])
      );
    },
  };
  const stateReplacement = getOwnPropertyDescriptor(replacements, "state");
  defineProperty(statuses, "state", {
    ...stateDescriptor,
    get: stateReplacement && reflectGet(stateReplacement, "get"),
  });
  defineProperty(permissions, "query", {
    ...queryDescriptor,
    value: reflectGet(replacements, "query"),
  });
  defineProperty(mediaDevices, "getUserMedia", {
    ...getUserMediaDescriptor,
    value: reflectGet(replacements, "getUserMedia"),
  });
}
function installNativePickerCapture(bridgeName) {
  const reflectGet = Reflect.get.bind(Reflect);
  const reflectSet = Reflect.set.bind(Reflect);
  const reflectApply = Reflect.apply.bind(Reflect);
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor.bind(Object);
  const defineProperty = Object.defineProperty.bind(Object);
  const marker = Symbol.for(`${bridgeName}:native-picker-capture`);
  const readTrustedBridge = (target) => {
    try {
      const descriptor = getOwnPropertyDescriptor(target, bridgeName);
      if (!descriptor || descriptor.configurable) return void 0;
      const candidate = reflectGet(target, bridgeName);
      if (
        typeof candidate?.shouldCaptureBrowserRequest !== "function" ||
        typeof candidate.requestBrowserInteraction !== "function" ||
        typeof candidate.cancelBrowserInteraction !== "function" ||
        typeof candidate.captureBrowserRequest !== "function" ||
        typeof candidate.onBrowserControlChanged !== "function"
      )
        return void 0;
      return candidate;
    } catch {
      return void 0;
    }
  };
  const findHighestTrustedBridge = (start) => {
    let candidate = start;
    let trusted;
    while (true) {
      try {
        reflectGet(candidate, "document");
        trusted = readTrustedBridge(candidate) ?? trusted;
        const parent = reflectGet(candidate, "parent");
        if (parent === candidate) return trusted;
        candidate = parent;
      } catch {
        return trusted;
      }
    }
  };
  const findBridge = (target) => {
    try {
      const href = reflectGet(reflectGet(target, "location"), "href");
      if (href === "about:blank") {
        const parent2 = reflectGet(target, "parent");
        if (parent2 !== target) {
          return findHighestTrustedBridge(parent2);
        }
        const opener = reflectGet(target, "opener");
        if (opener) return findHighestTrustedBridge(opener);
      }
      const parent = reflectGet(target, "parent");
      if (parent !== target) {
        try {
          reflectGet(parent, "document");
          return readTrustedBridge(target);
        } catch {
          return readTrustedBridge(target);
        }
      }
      return readTrustedBridge(target);
    } catch {
      return readTrustedBridge(target);
    }
  };
  function install(target) {
    try {
      const doc = target.document;
      if (reflectGet(doc, marker)) return;
      defineProperty(doc, marker, {
        value: true,
        configurable: false,
        enumerable: false,
        writable: false,
      });
      const realm = target;
      const rejectPromise = realm.Promise.reject.bind(realm.Promise);
      const pending = /* @__PURE__ */ new Map();
      let pageActive = true;
      let boundBridge;
      let removeControlListener;
      const suspendedLists = /* @__PURE__ */ new Map();
      const pickerTypes = /* @__PURE__ */ new Set([
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
        "color",
      ]);
      const suggestionTypes = /* @__PURE__ */ new Set([
        "text",
        "search",
        "url",
        "tel",
        "email",
        "number",
      ]);
      const restoreList = (input) => {
        const suspended = suspendedLists.get(input);
        if (!suspended) return;
        suspendedLists.delete(input);
        if (!input.hasAttribute("list"))
          input.setAttribute("list", suspended.id);
      };
      const suspendList = (input) => {
        const list = input.list ?? suspendedLists.get(input)?.list ?? null;
        const id = input.getAttribute("list");
        if (id !== null && list) {
          suspendedLists.set(input, { id, list });
          input.removeAttribute("list");
        }
        return list;
      };
      let updateControl = () => {};
      const cancelPending = (onlyBridge) => {
        const cancelled = [];
        for (const [element2, request] of pending) {
          if (onlyBridge && request.bridge !== onlyBridge) continue;
          pending.delete(element2);
          cancelled.push(request);
        }
        for (const { token, bridge } of cancelled) {
          try {
            bridge.cancelBrowserInteraction(token);
          } catch {}
        }
      };
      const bindBridge = (bridge) => {
        if (boundBridge === bridge) return;
        if (boundBridge) cancelPending(boundBridge);
        removeControlListener?.();
        boundBridge = bridge;
        try {
          const remove = bridge.onBrowserControlChanged((active) => {
            if (boundBridge === bridge) updateControl(active);
          });
          removeControlListener =
            typeof remove === "function" ? remove : void 0;
        } catch {
          removeControlListener = void 0;
        }
      };
      const currentControl = () => {
        const bridge = findBridge(target);
        if (!bridge) return { capture: true };
        bindBridge(bridge);
        let capture2 = true;
        try {
          capture2 = bridge.shouldCaptureBrowserRequest() !== false;
        } catch {}
        if (!capture2 && (pending.size > 0 || suspendedLists.size > 0))
          updateControl(false);
        return { bridge, capture: capture2 };
      };
      const isPicker = (element2) => {
        if (element2 instanceof realm.HTMLSelectElement) {
          return !element2.disabled && !element2.multiple && element2.size <= 1;
        }
        return (
          element2 instanceof realm.HTMLInputElement &&
          !element2.disabled &&
          !element2.readOnly &&
          (pickerTypes.has(element2.type) ||
            (suggestionTypes.has(element2.type) &&
              (element2.list !== null || suspendedLists.has(element2))))
        );
      };
      const capture = (element2) => {
        const control = currentControl();
        if (
          !pageActive ||
          !control.capture ||
          !control.bridge ||
          !element2.isConnected ||
          element2.ownerDocument !== doc
        )
          return;
        const isSelect = element2 instanceof realm.HTMLSelectElement;
        const list = isSelect ? null : suspendList(element2);
        if (pending.has(element2)) return;
        const options = [
          ...(isSelect ? element2.options : (list?.options ?? [])),
        ];
        const shorten = (text) => text.slice(0, 16384).toWellFormed();
        const shownOptions = [];
        let optionBudget = 32768;
        let truncated = element2.value.length > 16384;
        for (const [index, option] of options.entries()) {
          if (shownOptions.length === 1e3 || optionBudget === 0) break;
          const value2 = shorten(option.value)
            .slice(0, optionBudget)
            .toWellFormed();
          optionBudget -= value2.length;
          const label = shorten(option.label)
            .slice(0, optionBudget)
            .toWellFormed();
          optionBudget -= label.length;
          truncated ||= value2 !== option.value || label !== option.label;
          shownOptions.push({
            index,
            value: value2,
            label,
            disabled:
              option.disabled ||
              (option.parentElement instanceof realm.HTMLOptGroupElement &&
                option.parentElement.disabled),
            selected: option.selected,
          });
        }
        truncated ||= options.length !== shownOptions.length;
        let inputType;
        if (isSelect) {
          inputType = "select";
        } else if (list && suggestionTypes.has(element2.type)) {
          inputType = "datalist";
        } else {
          inputType = element2.type;
        }
        const request = {
          kind: "input-picker",
          message: truncated
            ? `Choose a value for the page input, or dismiss its picker. The option metadata is abbreviated (${shownOptions.length} of ${options.length} options). Inspect the page for additional options; original option indices remain usable.`
            : "Choose a value for the page input, or dismiss its picker.",
          inputType,
          value: shorten(element2.value),
          multiple: false,
          options: shownOptions,
          ...(isSelect
            ? {}
            : {
                min: shorten(element2.min),
                max: shorten(element2.max),
                step: shorten(element2.step),
              }),
        };
        const requestToken = realm.crypto.randomUUID();
        const requestBridge = control.bridge;
        pending.set(element2, { token: requestToken, bridge: requestBridge });
        void requestBridge
          .requestBrowserInteraction(
            request,
            (response) => {
              const pendingRequest = pending.get(element2);
              if (
                !pageActive ||
                pendingRequest?.token !== requestToken ||
                pendingRequest.bridge !== requestBridge
              )
                return false;
              if (response.action === "dismiss") return true;
              const liveControl = currentControl();
              if (
                response.action !== "choose" ||
                !liveControl.capture ||
                liveControl.bridge !== requestBridge ||
                !element2.isConnected ||
                element2.ownerDocument !== doc ||
                element2.disabled ||
                (!isSelect && element2.readOnly)
              )
                return false;
              const previous = element2.value;
              const previousSelected = isSelect
                ? [...element2.selectedOptions]
                : [];
              if (isSelect) {
                const indices = response.optionIndices;
                if (!indices || indices.length !== 1) return false;
                if (
                  indices.some(
                    (index) =>
                      !Number.isInteger(index) ||
                      !options[index] ||
                      element2.options[index] !== options[index] ||
                      options[index].disabled ||
                      (options[index].parentElement instanceof
                        realm.HTMLOptGroupElement &&
                        options[index].parentElement.disabled),
                  )
                )
                  return false;
                for (let i = 0; i < element2.options.length; i++) {
                  element2.options[i].selected = indices.includes(i);
                }
              } else {
                const optionIndex2 = response.optionIndices?.[0];
                const value2 =
                  response.value ??
                  (optionIndex2 !== void 0
                    ? options[optionIndex2]?.value
                    : void 0);
                if (value2 === void 0) return false;
                element2.value = value2;
                const expected =
                  element2.type === "color" ? value2.toLowerCase() : value2;
                if (
                  element2.value !== expected ||
                  element2.validity.rangeUnderflow ||
                  element2.validity.rangeOverflow ||
                  element2.validity.stepMismatch
                ) {
                  element2.value = previous;
                  return false;
                }
              }
              const selectionChanged =
                isSelect &&
                (element2.selectedOptions.length !== previousSelected.length ||
                  [...element2.selectedOptions].some(
                    (option, index) => option !== previousSelected[index],
                  ));
              if (element2.value !== previous || selectionChanged) {
                element2.dispatchEvent(
                  new realm.Event("input", { bubbles: true, composed: true }),
                );
                element2.dispatchEvent(
                  new realm.Event("change", { bubbles: true }),
                );
              }
              return true;
            },
            requestToken,
          )
          .catch(() => {})
          .finally(() => {
            if (pending.get(element2)?.token === requestToken)
              pending.delete(element2);
          });
      };
      const captureEvent = (event) => {
        if (!currentControl().capture) return;
        const element2 = event.composedPath().find((entry) => isPicker(entry));
        if (!element2 || !isPicker(element2)) return;
        if (
          element2 instanceof realm.HTMLInputElement &&
          suggestionTypes.has(element2.type)
        ) {
          suspendList(element2);
        } else {
          event.preventDefault();
          element2.focus({ preventScroll: true });
        }
        realm.queueMicrotask(() => capture(element2));
      };
      doc.addEventListener("mousedown", captureEvent, true);
      doc.addEventListener("click", captureEvent, true);
      doc.addEventListener(
        "keydown",
        (event) => {
          if (
            event.key === "F4" ||
            (event.altKey && event.key === "ArrowDown") ||
            event.key === " "
          ) {
            const element2 = event
              .composedPath()
              .find((entry) => isPicker(entry));
            if (
              event.key === " " &&
              element2 instanceof realm.HTMLInputElement &&
              !pickerTypes.has(element2.type)
            )
              return;
            captureEvent(event);
          }
        },
        true,
      );
      doc.addEventListener(
        "focus",
        (event) => {
          const element2 = event.composedPath()[0];
          if (
            currentControl().capture &&
            element2 instanceof realm.HTMLInputElement &&
            suggestionTypes.has(element2.type) &&
            element2.list
          ) {
            suspendList(element2);
            realm.queueMicrotask(() => capture(element2));
          }
        },
        true,
      );
      doc.addEventListener(
        "blur",
        (event) => {
          const element2 = event.composedPath()[0];
          if (element2 instanceof realm.HTMLInputElement) restoreList(element2);
        },
        true,
      );
      updateControl = (active) => {
        if (!active) {
          cancelPending();
          for (const input of suspendedLists.keys()) restoreList(input);
        } else if (
          doc.activeElement instanceof realm.HTMLInputElement &&
          suggestionTypes.has(doc.activeElement.type) &&
          doc.activeElement.list
        ) {
          capture(doc.activeElement);
        }
      };
      const listObserver = new realm.MutationObserver((records) => {
        for (const record of records) {
          const element2 = record.target;
          if (
            currentControl().capture &&
            element2 instanceof realm.HTMLInputElement &&
            suggestionTypes.has(element2.type) &&
            (element2 === doc.activeElement || suspendedLists.has(element2)) &&
            element2.list
          )
            capture(element2);
        }
      });
      listObserver.observe(doc, {
        attributes: true,
        subtree: true,
        attributeFilter: ["list"],
      });
      target.addEventListener("pagehide", () => {
        pageActive = false;
        updateControl(false);
        removeControlListener?.();
        removeControlListener = void 0;
        boundBridge = void 0;
        listObserver.disconnect();
      });
      target.addEventListener("pageshow", () => {
        pageActive = true;
        listObserver.observe(doc, {
          attributes: true,
          subtree: true,
          attributeFilter: ["list"],
        });
        updateControl(currentControl().capture);
      });
      for (const prototype of [
        realm.HTMLInputElement.prototype,
        realm.HTMLSelectElement.prototype,
      ]) {
        const nativeShowPicker = prototype.showPicker;
        if (typeof nativeShowPicker !== "function") continue;
        prototype.showPicker = function () {
          if (currentControl().capture && isPicker(this)) capture(this);
          else reflectApply(nativeShowPicker, this, []);
        };
      }
      for (const name of [
        "showOpenFilePicker",
        "showSaveFilePicker",
        "showDirectoryPicker",
      ]) {
        const nativePicker = reflectGet(target, name);
        if (typeof nativePicker !== "function") continue;
        reflectSet(target, name, function (options) {
          const control = currentControl();
          if (control.bridge && !control.capture)
            return reflectApply(nativePicker, target, [options]);
          try {
            control.bridge?.captureBrowserRequest({
              kind: "file-system",
              disposition: "human-required",
              message: `${name} requires human takeover to choose a real file-system handle.`,
            });
          } catch {}
          return rejectPromise(
            new realm.DOMException(
              "A person must take over to choose a file or folder.",
              "NotAllowedError",
            ),
          );
        });
      }
      for (const prototype of [
        realm.HTMLIFrameElement.prototype,
        realm.HTMLFrameElement.prototype,
      ]) {
        for (const name of ["contentWindow", "contentDocument"]) {
          const descriptor = getOwnPropertyDescriptor(prototype, name);
          if (!descriptor?.get) continue;
          const descriptorGet = descriptor.get;
          defineProperty(prototype, name, {
            ...descriptor,
            get: function () {
              const result = reflectApply(descriptorGet, this, []) ?? null;
              const child =
                name === "contentWindow" ? result : result?.defaultView;
              if (
                child &&
                !this.hasAttribute("srcdoc") &&
                (!this.getAttribute("src") ||
                  this.getAttribute("src") === "about:blank")
              )
                install(child);
              return result;
            },
          });
        }
      }
      const nativeOpen = target.open.bind(target);
      target.open = function (...args) {
        const child = reflectApply(nativeOpen, target, args);
        if (child) install(child);
        return child;
      };
    } catch {}
  }
  install(window);
}
function getErrorMessage(reason, host) {
  if (reason.startsWith("ERR_CERT_")) {
    const certErrors = {
      ERR_CERT_COMMON_NAME_INVALID:
        "The certificate is not valid for this domain",
      ERR_CERT_DATE_INVALID: "The certificate has expired or is not yet valid",
      ERR_CERT_AUTHORITY_INVALID: "The certificate is not trusted",
      ERR_CERT_REVOKED: "The certificate has been revoked",
      ERR_CERT_INVALID: "The certificate is invalid",
      ERR_CERT_WEAK_SIGNATURE_ALGORITHM:
        "The certificate uses a weak signature",
      ERR_CERT_CONTAINS_ERRORS: "The certificate contains errors",
    };
    return {
      title: "Your connection is not private",
      description:
        certErrors[reason] ||
        "This site has a certificate issue. Attackers might be trying to steal your information.",
      suggestions: [],
    };
  }
  if (reason.startsWith("ERR_SSL_")) {
    const sslErrors = {
      ERR_SSL_PROTOCOL_ERROR: "The site uses an unsupported SSL/TLS protocol.",
      ERR_SSL_VERSION_OR_CIPHER_MISMATCH:
        "The site uses outdated or insecure encryption that is no longer supported.",
      ERR_SSL_WEAK_SERVER_EPHEMERAL_DH_KEY:
        "The site uses weak encryption keys that are vulnerable to attacks.",
    };
    return {
      title: "Cannot establish secure connection",
      description:
        sslErrors[reason] ||
        "This site uses outdated or insecure encryption protocols.",
      suggestions: [
        "Contact the website owner to update their security configuration",
        "Try accessing the site from a different network",
      ],
    };
  }
  const subject = host || "This site";
  const object2 = host || "this site";
  switch (reason) {
    case "ERR_INVALID_URL":
      return {
        title: "That address doesn't look right",
        description: "Check it for typos and try again.",
        suggestions: [
          "Check if the URL is spelled correctly",
          "Verify the URL format is correct",
        ],
      };
    case "ERR_NAME_NOT_RESOLVED":
      return {
        title: `Couldn't find ${object2}`,
        description:
          "The address might have a typo, or the site might be down.",
        suggestions: [
          "Check the website address",
          "Refresh this page",
          "Check your internet connection",
        ],
      };
    case "ERR_CONNECTION_REFUSED":
      return {
        title: `${subject} refused to connect`,
        description:
          "Nothing answered at this address. If it's a site you run yourself, check that it's started.",
        suggestions: ["Check the website address", "Refresh this page"],
      };
    case "ERR_TIMED_OUT":
    case "ERR_CONNECTION_TIMED_OUT":
      return {
        title: `${subject} took too long to respond`,
        description: "The site might be busy or down.",
        suggestions: [
          "Refresh this page",
          "Check your internet connection",
          "Try again later",
        ],
      };
    case "ERR_CONNECTION_CLOSED":
    case "ERR_EMPTY_RESPONSE":
      return {
        title: `${subject} didn't send any data`,
        description: "The site closed the connection before the page arrived.",
        suggestions: ["Refresh this page", "Try again later"],
      };
    case "ERR_CONNECTION_RESET":
      return {
        title: "The connection was reset",
        description: `Something interrupted the connection to ${object2}. Refreshing usually fixes it.`,
        suggestions: ["Refresh this page", "Check your internet connection"],
      };
    case "ERR_CONNECTION_FAILED":
    case "ERR_ADDRESS_UNREACHABLE":
      return {
        title: `Couldn't reach ${object2}`,
        description:
          "The site might be down, or your network might be blocking it.",
        suggestions: [
          "Refresh this page",
          "Check your internet connection",
          "Try again later",
        ],
      };
    case "ERR_INTERNET_DISCONNECTED":
      return {
        title: "No internet connection",
        description: "Check your internet connection and try again.",
        suggestions: [
          "Check your Wi-Fi or ethernet connection",
          "Try refreshing once connected",
        ],
      };
    case "ERR_NETWORK_CHANGED":
      return {
        title: "Your network changed",
        description: "The connection dropped while the page was loading.",
        suggestions: [
          "Try refreshing once connected",
          "Check your internet connection",
        ],
      };
    case "ERR_NETWORK_IO_SUSPENDED":
      return {
        title: "The connection was paused",
        description: "Your computer went to sleep while the page was loading.",
        suggestions: ["Refresh this page"],
      };
    case "ERR_NETWORK_ACCESS_DENIED":
      return {
        title: "Orbitra was blocked from the network",
        description:
          "A firewall or security app might be blocking Orbitra. Check its settings, then refresh.",
        suggestions: ["Refresh this page"],
      };
    case "ERR_PROXY_CONNECTION_FAILED":
    case "ERR_TUNNEL_CONNECTION_FAILED":
      return {
        title: "Couldn't connect through your proxy",
        description: "Check your proxy or VPN settings, then refresh.",
        suggestions: ["Refresh this page"],
      };
    case "ERR_TOO_MANY_REDIRECTS":
      return {
        title: `${subject} redirected you too many times`,
        description:
          "The site keeps sending you around in a loop. Clearing its cookies often fixes this.",
        suggestions: ["Clear this site's cookies", "Refresh this page"],
      };
    case "ERR_TEMPORARILY_THROTTLED":
      return {
        title: "Too many requests",
        description: `${subject} asked Orbitra to slow down. Wait a moment, then refresh.`,
        suggestions: ["Try again later"],
      };
    case "ERR_BLOCKED_BY_ADMINISTRATOR":
      return {
        title: "Your administrator blocked this page",
        description: "Ask whoever manages this computer if you need access.",
        suggestions: [],
      };
    case "ERR_FILE_NOT_FOUND":
      return {
        title: "We can't find this file",
        description: "It may have been moved, renamed, or deleted.",
        suggestions: [
          "Check that the file is still in that folder",
          "If you moved it, open it again from its new location",
        ],
      };
    default:
      return {
        title: "This page didn't load",
        description: `Orbitra couldn't load ${object2}. If refreshing doesn't help, the site might be down.`,
        suggestions: [
          "Refresh this page",
          "Check your internet connection",
          "Try again later",
        ],
      };
  }
}
const NAVIGATION_ERROR_DOCUMENT_URL = "chrome-error://chromewebdata/";
const NAVIGATION_ERROR_SHOW_CHANNEL = "webpage:navigation-error";
const NAVIGATION_ERROR_BYPASS_CHANNEL = "webpage:bypass-certificate-error";
function isSecurityNavigationError(reason) {
  return reason.startsWith("ERR_CERT_") || reason.startsWith("ERR_SSL_");
}
function canBypassNavigationError(reason) {
  return reason.startsWith("ERR_CERT_") && reason !== "ERR_CERT_REVOKED";
}
const WARNING_ICON = {
  fill: true,
  paths: [
    "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
  ],
};
const LOCK_ICON = {
  fill: false,
  paths: [
    "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  ],
};
const SUGGESTION_ICONS = {
  "Refresh this page": {
    fill: false,
    paths: [
      "M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",
    ],
  },
  "Check your internet connection": {
    fill: false,
    paths: [
      "M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8",
      "M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18",
    ],
  },
  "Try again later": {
    fill: false,
    paths: [
      "M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
      "M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01",
    ],
  },
};
const STYLE = `
  :root {
    color-scheme: light dark;
    --background: oklch(1 0 0);
    --foreground: oklch(0.145 0 0);
    --muted: oklch(0.556 0 0);
    --secondary: oklch(0.97 0 0 / 0.6);
    --border: oklch(0.922 0 0);
    --badge: #fff;
    --danger: #dc2626;
    --link: #2563eb;
    --warning-bg: #fefce8;
    --warning-border: #fef08a;
    --warning-text: #713f12;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --background: oklch(0.228 0 0);
      --foreground: oklch(1 0 0);
      --muted: oklch(0.708 0 0);
      --secondary: oklch(0.325 0 0 / 0.6);
      --border: oklch(0.36 0 0);
      --badge: oklch(0.262 0 0);
      --danger: #f87171;
      --link: #60a5fa;
      --warning-bg: rgb(113 63 18 / 0.2);
      --warning-border: #854d0e;
      --warning-text: #fef08a;
    }
    .badge { border: 1px solid var(--border); }
  }
  html, body { height: 100%; margin: 0; }
  body {
    display: flex; align-items: center; justify-content: center; padding: 0 32px;
    box-sizing: border-box; background: var(--background); color: var(--foreground);
    font: 16px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    user-select: none;
  }
  main {
    display: flex; flex-direction: column; align-items: center; max-width: 448px; text-align: center;
    animation: rebuild 240ms ease-out both;
  }
  /* A retry that fails again draws identical content, so the entrance is what shows it ran. */
  @keyframes rebuild { from { opacity: 0; transform: translateY(8px); } }
  @media (prefers-reduced-motion: reduce) {
    @keyframes rebuild { from { opacity: 0; } }
  }
  svg { flex-shrink: 0; }
  .badge { display: flex; margin-bottom: 12px; padding: 20px; border-radius: 9999px; background: var(--badge); scale: 0.8; }
  .badge svg { width: 56px; height: 56px; }
  .badge.security { color: var(--danger); }
  h1 { margin: 0 0 8px; font-size: 24px; line-height: 32px; font-weight: 600; }
  .description { margin: 0 0 24px; color: var(--muted); }
  ul { display: flex; gap: 16px; margin: 0; padding: 0; list-style: none; font-size: 14px; white-space: nowrap; }
  li { display: flex; align-items: center; gap: 6px; }
  li + li::before { content: ''; width: 1px; height: 16px; margin-right: 10px; background: var(--border); }
  li svg { width: 16px; height: 16px; }
  .url {
    margin-top: 48px; padding: 8px 16px; border-radius: 8px; background: var(--secondary);
    color: var(--muted); font: 14px/20px ui-monospace, SFMono-Regular, Menlo, monospace;
    word-break: break-all; user-select: text; cursor: text;
  }
  .panel { margin-top: 16px; padding: 16px; border-radius: 8px; border: 1px solid var(--border); background: var(--secondary); color: var(--muted); font-size: 14px; text-align: left; }
  .panel.warning { border-color: var(--warning-border); background: var(--warning-bg); color: var(--warning-text); }
  .panel p { margin: 0; }
  .panel.warning p { margin-bottom: 12px; }
  button { padding: 0; border: 0; background: none; font: inherit; font-size: 14px; cursor: pointer; }
  button:hover { text-decoration: underline; }
  button:disabled { opacity: 0.5; cursor: not-allowed; text-decoration: none; }
  .advanced { margin-top: 24px; color: var(--link); }
  .proceed { color: var(--danger); font-weight: 500; }
  .code { margin-top: 12px; font-size: 12px; color: var(--muted); opacity: 0.6; }
`;
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== void 0) node.textContent = text;
  return node;
}
function icon({ fill, paths }) {
  const namespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(namespace, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  for (const d of paths) {
    const path = document.createElementNS(namespace, "path");
    path.setAttribute("d", d);
    if (fill) {
      path.setAttribute("fill", "currentColor");
      path.setAttribute("fill-rule", "evenodd");
    } else {
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-width", "2");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
    }
    svg.append(path);
  }
  return svg;
}
function hostOf(url, fallback = "site") {
  try {
    return new URL(url).hostname || fallback;
  } catch {
    return fallback;
  }
}
function whyConnectionIsRefused(reason) {
  if (reason.startsWith("ERR_SSL_")) {
    return "This connection cannot be established due to incompatible security protocols.";
  }
  return "Orbitra won't open this site, because someone could be pretending to be it. If it's your site, replace its certificate.";
}
function securityPanel(error) {
  if (!canBypassNavigationError(error.reason)) {
    const panel2 = element("div", "panel");
    panel2.append(element("p", void 0, whyConnectionIsRefused(error.reason)));
    return [panel2];
  }
  const advanced = element("button", "advanced", "Advanced");
  const panel = element("div", "panel warning");
  panel.hidden = true;
  const proceed = element(
    "button",
    "proceed",
    `Temporarily allow insecure connection to ${hostOf(error.url)}`,
  );
  panel.append(
    element(
      "p",
      void 0,
      "Proceeding will expose you to security risks. Only continue if you trust this site and understand the risks.",
    ),
    proceed,
  );
  advanced.addEventListener("click", () => {
    panel.hidden = !panel.hidden;
    advanced.textContent = panel.hidden ? "Advanced" : "Hide advanced";
  });
  proceed.addEventListener("click", () => {
    const label = proceed.textContent;
    proceed.disabled = true;
    proceed.textContent = "Proceeding...";
    void electron.ipcRenderer
      .invoke(NAVIGATION_ERROR_BYPASS_CHANNEL)
      .catch(() => false)
      .then((reloading) => {
        if (reloading === true) return;
        proceed.disabled = false;
        proceed.textContent = label;
      });
  });
  return [advanced, panel];
}
function render(error) {
  const message = getErrorMessage(error.reason, hostOf(error.url, ""));
  const isSecurityError = isSecurityNavigationError(error.reason);
  const badge = element("div", isSecurityError ? "badge security" : "badge");
  badge.append(icon(isSecurityError ? LOCK_ICON : WARNING_ICON));
  const suggestions = element("ul");
  for (const suggestion of message.suggestions) {
    const item = element("li");
    const suggestionIcon = SUGGESTION_ICONS[suggestion];
    if (suggestionIcon) item.append(icon(suggestionIcon));
    item.append(suggestion);
    suggestions.append(item);
  }
  const main = element("main");
  main.append(
    badge,
    element("h1", void 0, message.title),
    element("p", "description", message.description),
    suggestions,
    element("div", "url", error.url),
    ...(isSecurityError ? securityPanel(error) : []),
    element("div", "code", `Error code: ${error.reason}`),
  );
  const style = element("style", void 0, STYLE);
  document.head.replaceChildren(style);
  document.body.replaceChildren(main);
}
function installNavigationErrorDocument() {
  if (
    window !== window.top ||
    window.location.href !== NAVIGATION_ERROR_DOCUMENT_URL
  )
    return;
  electron.ipcRenderer.on(NAVIGATION_ERROR_SHOW_CHANNEL, (_event, error) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => render(error), {
        once: true,
      });
    } else {
      render(error);
    }
  });
}
function installPasskeyRequestCapture(bridgeName) {
  const installed = /* @__PURE__ */ new WeakMap();
  const reflectGet = Reflect.get.bind(Reflect);
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor.bind(Object);
  const defineProperty = Object.defineProperty.bind(Object);
  const installMarker = Symbol.for(
    `${bridgeName}:credentials-container-capture`,
  );
  const installedBridges = /* @__PURE__ */ new WeakMap();
  function ownBridge(target) {
    try {
      const descriptor = getOwnPropertyDescriptor(target, bridgeName);
      if (!descriptor || descriptor.configurable) return void 0;
      return reflectGet(target, bridgeName);
    } catch {
      return void 0;
    }
  }
  function inheritedBlank(target) {
    try {
      return (
        String(reflectGet(reflectGet(target, "location"), "href")) ===
        "about:blank"
      );
    } catch {
      return false;
    }
  }
  function highestTrustedBridge(start) {
    let candidate = start;
    let trusted;
    while (true) {
      try {
        const current = ownBridge(candidate);
        if (current) trusted = current;
        const parent = reflectGet(candidate, "parent");
        if (candidate === parent) return trusted;
        candidate = parent;
      } catch {
        return trusted;
      }
    }
  }
  function findBridge(target) {
    const direct = ownBridge(target);
    if (direct) return direct;
    if (!inheritedBlank(target)) return void 0;
    try {
      const parent = reflectGet(target, "parent");
      if (parent !== target) return highestTrustedBridge(parent);
    } catch {}
    try {
      const opener = reflectGet(target, "opener");
      if (opener) return highestTrustedBridge(opener);
    } catch {}
    return void 0;
  }
  function checkRequest(target) {
    const bridge = installedBridges.get(target);
    if (bridge && !bridge.shouldCaptureBrowserRequest()) return;
    bridge?.captureBrowserRequest({
      kind: "passkey",
      message:
        "Credential manager and passkey authentication require you to ask the user to take over and complete them.",
      disposition: "human-required",
    });
    const RequestError = reflectGet(target, "DOMException");
    throw new RequestError(
      "Credential authentication requires user takeover.",
      "NotAllowedError",
    );
  }
  function install(target) {
    try {
      if (installed.get(target) === target.document) return;
      installed.set(target, target.document);
      const Container = reflectGet(target, "CredentialsContainer");
      const prototype = Container?.prototype;
      if (prototype) {
        if (reflectGet(prototype, installMarker) === target.document) return;
        installedBridges.set(target, findBridge(target));
        defineProperty(prototype, installMarker, {
          value: target.document,
          configurable: false,
          enumerable: false,
          writable: false,
        });
        const create = getOwnPropertyDescriptor(prototype, "create");
        if (typeof create?.value === "function") {
          const nativeCreate = create.value;
          defineProperty(prototype, "create", {
            ...create,
            value: async function (options) {
              checkRequest(target);
              const result = await nativeCreate.call(this, options);
              checkRequest(target);
              return result;
            },
          });
        }
        const get = getOwnPropertyDescriptor(prototype, "get");
        if (typeof get?.value === "function") {
          const nativeGet = get.value;
          defineProperty(prototype, "get", {
            ...get,
            value: async function (options) {
              checkRequest(target);
              const result = await nativeGet.call(this, options);
              checkRequest(target);
              return result;
            },
          });
        }
      }
      for (const name of ["HTMLIFrameElement", "HTMLFrameElement"]) {
        const Frame = reflectGet(target, name);
        if (!Frame) continue;
        const contentWindow = getOwnPropertyDescriptor(
          Frame.prototype,
          "contentWindow",
        );
        if (contentWindow?.get && contentWindow.configurable) {
          defineProperty(Frame.prototype, "contentWindow", {
            ...contentWindow,
            get: function () {
              const child = contentWindow.get?.call(this) ?? null;
              if (child) install(child);
              return child;
            },
          });
        }
        const contentDocument = getOwnPropertyDescriptor(
          Frame.prototype,
          "contentDocument",
        );
        if (contentDocument?.get && contentDocument.configurable) {
          defineProperty(Frame.prototype, "contentDocument", {
            ...contentDocument,
            get: function () {
              const document2 = contentDocument.get?.call(this) ?? null;
              if (document2?.defaultView) install(document2.defaultView);
              return document2;
            },
          });
        }
      }
      const nativeOpen = target.open.bind(target);
      target.open = function (...args) {
        const child = nativeOpen.apply(target, args);
        if (child) install(child);
        return child;
      };
    } catch {}
  }
  install(window);
}
function installPresentationCapture(bridgeName) {
  const reflectGet = Reflect.get.bind(Reflect);
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor.bind(Object);
  const defineProperty = Object.defineProperty.bind(Object);
  const marker = Symbol.for(`${bridgeName}:presentation-capture`);
  const states = /* @__PURE__ */ new WeakMap();
  const videoPipSettings = /* @__PURE__ */ new WeakMap();
  const videoRoots = /* @__PURE__ */ new WeakMap();
  const messages = {
    fullscreen:
      "This page requested fullscreen. Take over to use fullscreen; page content remains available in the tab.",
    "pointer-lock":
      "This page requested exclusive keyboard or pointer control. Take over to grant it.",
    "picture-in-picture":
      "This page requested a Picture-in-Picture window. Take over to open it; inline video remains available in the tab.",
  };
  function trustedOwnBridge(target) {
    try {
      const descriptor = getOwnPropertyDescriptor(target, bridgeName);
      if (descriptor?.configurable !== false) return void 0;
      const candidate = reflectGet(target, bridgeName);
      if (
        !candidate ||
        typeof reflectGet(candidate, "shouldCaptureBrowserRequest") !==
          "function" ||
        typeof reflectGet(candidate, "captureBrowserRequest") !== "function" ||
        typeof reflectGet(candidate, "onBrowserControlChanged") !== "function"
      ) {
        return void 0;
      }
      return candidate;
    } catch {
      return void 0;
    }
  }
  function highestInheritedBridge(target) {
    let candidate = null;
    try {
      const parent = reflectGet(target, "parent");
      candidate = parent === target ? reflectGet(target, "opener") : parent;
    } catch {
      return void 0;
    }
    let trusted;
    const visited = /* @__PURE__ */ new Set();
    while (candidate && !visited.has(candidate)) {
      visited.add(candidate);
      const current = trustedOwnBridge(candidate);
      if (current) trusted = current;
      try {
        const parent = reflectGet(candidate, "parent");
        if (parent !== candidate) {
          candidate = parent;
          continue;
        }
        candidate = reflectGet(candidate, "opener");
      } catch {
        break;
      }
    }
    return trusted;
  }
  function resolveBridge(target, state) {
    const own = trustedOwnBridge(target);
    if (own) return own;
    return state.inheritedBlank ? highestInheritedBridge(target) : void 0;
  }
  function closePresentation(target, state) {
    try {
      if (target.document !== state.document) return;
      const doc = state.document;
      if (doc.fullscreenElement) void doc.exitFullscreen().catch(() => {});
      if (doc.pointerLockElement) doc.exitPointerLock();
      if (doc.pictureInPictureElement)
        void doc.exitPictureInPicture().catch(() => {});
      const documentPipWindow = state.documentPip?.window;
      if (documentPipWindow && !documentPipWindow.closed)
        documentPipWindow.close();
    } catch {}
  }
  function updateVideoControls(target, controlled) {
    const roots = videoRoots.get(target);
    if (!roots) return;
    for (const reference of roots) {
      const root = reference.deref();
      if (!root) {
        roots.delete(reference);
        continue;
      }
      for (const video of root.querySelectorAll("video")) {
        if (controlled) {
          if (!videoPipSettings.has(video)) {
            videoPipSettings.set(
              video,
              video.hasAttribute("disablepictureinpicture"),
            );
          }
          if (!video.hasAttribute("disablepictureinpicture")) {
            video.setAttribute("disablepictureinpicture", "");
          }
        } else if (videoPipSettings.has(video)) {
          video.toggleAttribute(
            "disablepictureinpicture",
            videoPipSettings.get(video),
          );
          videoPipSettings.delete(video);
        }
      }
    }
  }
  function applyControl(target, state, controlled) {
    if (controlled && !state.controlled) state.controlVersion += 1;
    state.controlled = controlled;
    if (!state.initialized) return;
    updateVideoControls(target, controlled);
    if (controlled) closePresentation(target, state);
  }
  function bindBridge(target, state) {
    const bridge = resolveBridge(target, state);
    if (bridge === state.bridge) return bridge;
    state.cleanupBridge?.();
    state.cleanupBridge = void 0;
    state.bridge = bridge;
    if (!bridge) {
      applyControl(target, state, true);
      return void 0;
    }
    try {
      const cleanup = bridge.onBrowserControlChanged((controlled2) => {
        if (state.bridge === bridge)
          applyControl(target, state, controlled2 === true);
      });
      if (typeof cleanup === "function") state.cleanupBridge = cleanup;
    } catch {}
    let controlled = true;
    try {
      controlled = bridge.shouldCaptureBrowserRequest() === true;
    } catch {}
    applyControl(target, state, controlled);
    return bridge;
  }
  function control(target, state) {
    const bridge = bindBridge(target, state);
    let controlled = true;
    if (bridge) {
      try {
        controlled = bridge.shouldCaptureBrowserRequest() === true;
      } catch {}
    }
    if (controlled !== state.controlled)
      applyControl(target, state, controlled);
    return { bridge, controlled };
  }
  function rejectRequest(target, state, kind, bridge) {
    try {
      bridge?.captureBrowserRequest({
        kind,
        message: messages[kind],
        disposition: "human-required",
      });
    } catch {}
    return new state.RequestError(messages[kind], "NotAllowedError");
  }
  function request(target, state, kind, open, close) {
    const admission = control(target, state);
    if (admission.controlled) {
      return target.Promise.reject(
        rejectRequest(target, state, kind, admission.bridge),
      );
    }
    const openingVersion = state.controlVersion;
    return open().then((value2) => {
      const completion = control(target, state);
      if (openingVersion !== state.controlVersion || completion.controlled) {
        close(value2);
        throw rejectRequest(target, state, kind, completion.bridge);
      }
      return value2;
    });
  }
  function install(target) {
    try {
      const document2 = reflectGet(target, "document");
      const existing = reflectGet(document2, marker);
      if (typeof existing === "function") {
        existing();
        return;
      }
      let inheritedBlank = false;
      try {
        const location2 = reflectGet(target, "location");
        inheritedBlank = reflectGet(location2, "href") === "about:blank";
      } catch {}
      const state = {
        controlVersion: 0,
        controlled: true,
        document: document2,
        documentPip: reflectGet(target, "documentPictureInPicture"),
        initialized: false,
        inheritedBlank,
        RequestError: reflectGet(target, "DOMException"),
      };
      states.set(target, state);
      const activate = () => {
        if (target.document !== document2) return;
        const current = states.get(target);
        if (current === state) {
          bindBridge(target, state);
          if (state.initialized) updateVideoControls(target, state.controlled);
        }
      };
      defineProperty(document2, marker, {
        value: activate,
        configurable: false,
        enumerable: false,
        writable: false,
      });
      const roots = /* @__PURE__ */ new Set([new WeakRef(document2)]);
      videoRoots.set(target, roots);
      const observer = new target.MutationObserver(() => {
        try {
          if (target.document !== document2) {
            observer.disconnect();
            return;
          }
          updateVideoControls(target, control(target, state).controlled);
        } catch {
          observer.disconnect();
        }
      });
      const observationOptions = {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["disablepictureinpicture"],
      };
      observer.observe(document2, observationOptions);
      const elementPrototype = target.Element.prototype;
      const nativeAttachShadow = reflectGet(elementPrototype, "attachShadow");
      elementPrototype.attachShadow = function (...args) {
        const root = nativeAttachShadow.apply(this, args);
        roots.add(new WeakRef(root));
        observer.observe(root, observationOptions);
        return root;
      };
      const nativeFullscreen = reflectGet(
        elementPrototype,
        "requestFullscreen",
      );
      if (nativeFullscreen) {
        elementPrototype.requestFullscreen = function (...args) {
          return request(
            target,
            state,
            "fullscreen",
            () => nativeFullscreen.apply(this, args),
            () => closePresentation(target, state),
          );
        };
      }
      const nativePointerLock = reflectGet(
        elementPrototype,
        "requestPointerLock",
      );
      if (nativePointerLock) {
        elementPrototype.requestPointerLock = function (...args) {
          return request(
            target,
            state,
            "pointer-lock",
            () => target.Promise.resolve(nativePointerLock.apply(this, args)),
            () => closePresentation(target, state),
          );
        };
      }
      const videoPrototype = target.HTMLVideoElement.prototype;
      const nativeVideoPip = reflectGet(
        videoPrototype,
        "requestPictureInPicture",
      );
      if (nativeVideoPip) {
        videoPrototype.requestPictureInPicture = function (...args) {
          return request(
            target,
            state,
            "picture-in-picture",
            () => nativeVideoPip.apply(this, args),
            () => closePresentation(target, state),
          );
        };
      }
      const documentPip = state.documentPip;
      if (documentPip) {
        const nativeDocumentPip = documentPip.requestWindow.bind(documentPip);
        documentPip.requestWindow = function (...args) {
          return request(
            target,
            state,
            "picture-in-picture",
            () => nativeDocumentPip.apply(this, args),
            (pipWindow) => pipWindow.close(),
          );
        };
      }
      for (const [prototype, name] of [
        [elementPrototype, "webkitRequestFullscreen"],
        [elementPrototype, "webkitRequestFullScreen"],
        [videoPrototype, "webkitEnterFullscreen"],
        [videoPrototype, "webkitEnterFullScreen"],
      ]) {
        const native = reflectGet(prototype, name);
        if (typeof native !== "function") continue;
        defineProperty(prototype, name, {
          ...getOwnPropertyDescriptor(prototype, name),
          value: function (...args) {
            const admission = control(target, state);
            if (!admission.controlled) {
              native.apply(this, args);
              return;
            }
            rejectRequest(target, state, "fullscreen", admission.bridge);
            this.dispatchEvent(
              new target.Event("fullscreenerror", { bubbles: true }),
            );
          },
        });
      }
      for (const prototype of [
        target.HTMLIFrameElement.prototype,
        target.HTMLFrameElement.prototype,
      ]) {
        for (const name of ["contentWindow", "contentDocument"]) {
          const descriptor = getOwnPropertyDescriptor(prototype, name);
          if (!descriptor?.get || !descriptor.configurable) continue;
          defineProperty(prototype, name, {
            ...descriptor,
            get: function () {
              const value2 = descriptor.get?.call(this) ?? null;
              const child =
                name === "contentWindow" ? value2 : value2?.defaultView;
              if (child) install(child);
              return value2;
            },
          });
        }
      }
      const nativeOpen = target.open.bind(target);
      target.open = function (...args) {
        const child = nativeOpen.apply(this, args);
        if (child) install(child);
        return child;
      };
      target.addEventListener(
        "pagehide",
        () => {
          state.cleanupBridge?.();
          state.cleanupBridge = void 0;
          state.bridge = void 0;
          observer.disconnect();
        },
        { once: true },
      );
      state.initialized = true;
      activate();
    } catch {}
  }
  install(window);
}
function installPrintCapture(bridgeName) {
  const reflectGet = Reflect.get.bind(Reflect);
  const reflectApply = Reflect.apply.bind(Reflect);
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor.bind(Object);
  const defineProperty = Object.defineProperty.bind(Object);
  const marker = Symbol.for(`${bridgeName}:print-capture`);
  const printing = /* @__PURE__ */ new WeakSet();
  function ownBridge(target) {
    try {
      const descriptor = getOwnPropertyDescriptor(target, bridgeName);
      if (!descriptor || descriptor.configurable) return void 0;
      const candidate = reflectGet(target, bridgeName);
      if (
        typeof candidate?.shouldCapturePrint !== "function" ||
        typeof candidate.capturePrint !== "function"
      )
        return void 0;
      return candidate;
    } catch {
      return void 0;
    }
  }
  function inheritedBlank(target) {
    try {
      const href = target.location.href;
      return href === "about:blank" || href === "about:srcdoc";
    } catch {
      return false;
    }
  }
  function highestAccessibleBridge(start) {
    let candidate = start;
    let trusted;
    while (candidate) {
      const current = ownBridge(candidate);
      if (current) trusted = current;
      try {
        const parent = reflectGet(candidate, "parent");
        if (candidate === parent) break;
        candidate = parent;
      } catch {
        break;
      }
    }
    return trusted;
  }
  function initialAuthority(target) {
    const exact = ownBridge(target);
    if (exact || !inheritedBlank(target)) return exact;
    try {
      const parent = reflectGet(target, "parent");
      if (parent !== target) {
        const inherited = highestAccessibleBridge(parent);
        if (inherited) return inherited;
      }
    } catch {}
    try {
      const opener = reflectGet(target, "opener");
      return highestAccessibleBridge(opener);
    } catch {
      return void 0;
    }
  }
  function snapshot(target) {
    try {
      const doc = target.document;
      if (
        doc.contentType === "application/pdf" ||
        doc.querySelector("iframe, frame, object, embed, video")
      ) {
        return { status: "failed", reason: "unsupported-content" };
      }
      const clone = doc.documentElement.cloneNode(true);
      const source = [
        doc.documentElement,
        ...doc.documentElement.querySelectorAll("*"),
      ];
      const copies = [clone, ...clone.querySelectorAll("*")];
      for (let i = 0; i < source.length; i++) {
        const original = source[i];
        const copy = copies[i];
        if (original.shadowRoot || original.localName.includes("-"))
          return { status: "failed", reason: "unsupported-content" };
        for (const name of copy.getAttributeNames()) {
          if (name.toLowerCase().startsWith("on")) copy.removeAttribute(name);
        }
        if (original.tagName === "INPUT") {
          const input = original;
          copy.setAttribute("value", input.value);
          copy.toggleAttribute("checked", input.checked);
        } else if (original.tagName === "TEXTAREA") {
          copy.textContent = original.value;
        } else if (original.tagName === "OPTION") {
          copy.toggleAttribute("selected", original.selected);
        } else if (original.tagName === "CANVAS") {
          const canvas = original;
          const style = copy.style;
          style.backgroundImage = `url(${JSON.stringify(canvas.toDataURL("image/png"))})`;
          style.backgroundSize = "100% 100%";
          style.backgroundRepeat = "no-repeat";
        } else if (original.tagName === "IMG") {
          const image = original;
          copy.setAttribute("src", image.currentSrc || image.src);
          copy.removeAttribute("srcset");
          copy.removeAttribute("loading");
          if (image.complete && image.naturalWidth > 0) {
            try {
              const canvas = doc.createElement("canvas");
              canvas.width = image.naturalWidth;
              canvas.height = image.naturalHeight;
              canvas.getContext("2d")?.drawImage(image, 0, 0);
              copy.setAttribute("src", canvas.toDataURL("image/png"));
            } catch {
              if (image.src.startsWith("blob:"))
                return { status: "failed", reason: "unsupported-content" };
            }
          }
        }
      }
      for (const sheet of [...doc.styleSheets, ...doc.adoptedStyleSheets]) {
        try {
          if (sheet.disabled) {
            const ownerIndex2 = sheet.ownerNode
              ? source.indexOf(sheet.ownerNode)
              : -1;
            if (ownerIndex2 >= 0) copies[ownerIndex2].remove();
            continue;
          }
          const style = doc.createElement("style");
          const base = sheet.href || doc.baseURI;
          style.textContent = [...sheet.cssRules]
            .map((rule) => rule.cssText)
            .join("\n")
            .replace(
              /url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/g,
              (_match, _quote, url) =>
                `url(${JSON.stringify(new URL(url, base).href)})`,
            );
          if (sheet.media.mediaText) style.media = sheet.media.mediaText;
          const ownerIndex = sheet.ownerNode
            ? source.indexOf(sheet.ownerNode)
            : -1;
          if (ownerIndex >= 0) copies[ownerIndex].replaceWith(style);
          else clone.querySelector("head")?.append(style);
        } catch {}
      }
      for (const element2 of clone.querySelectorAll(
        'script, base, meta[http-equiv], link:not([rel~="stylesheet"])',
      ))
        element2.remove();
      if (!doc.baseURI.startsWith("data:")) {
        const base = doc.createElement("base");
        base.href = doc.baseURI;
        clone.querySelector("head")?.prepend(base);
      }
      const html = "<!doctype html>\n" + clone.outerHTML;
      if (html.length > 16 * 1024 * 1024)
        return { status: "failed", reason: "snapshot-too-large" };
      return {
        status: "captured",
        html: html.toWellFormed(),
      };
    } catch {
      return { status: "failed", reason: "snapshot-unavailable" };
    }
  }
  function install(target) {
    try {
      const existing = reflectGet(target, marker);
      if (existing?.version === 1) return;
      defineProperty(target, marker, {
        value: { version: 1 },
        configurable: false,
        enumerable: false,
        writable: false,
      });
      let bridge = initialAuthority(target);
      const resolveBridge = () => {
        if (!bridge) bridge = ownBridge(target);
        return bridge;
      };
      const printDecision = () => {
        const current = resolveBridge();
        if (!current) return "blocked";
        try {
          return current.shouldCapturePrint() ? "capture" : "native";
        } catch {
          return "blocked";
        }
      };
      const nativePrint = reflectGet(target, "print");
      target.print = function () {
        const decision = printDecision();
        if (decision === "native") {
          reflectApply(nativePrint, target, []);
          return;
        }
        if (decision === "blocked") return;
        const sandbox = target.frameElement?.getAttribute("sandbox");
        if (sandbox != null && !/(^|\s)allow-modals(\s|$)/.test(sandbox))
          return;
        if (printing.has(target)) return;
        printing.add(target);
        try {
          const TargetEvent = reflectGet(target, "Event");
          target.dispatchEvent(new TargetEvent("beforeprint"));
          resolveBridge()?.capturePrint(snapshot(target));
        } finally {
          const TargetEvent = reflectGet(target, "Event");
          target.dispatchEvent(new TargetEvent("afterprint"));
          printing.delete(target);
        }
      };
      target.addEventListener(
        "keydown",
        (event) => {
          if (
            !(event.ctrlKey || event.metaKey) ||
            event.altKey ||
            event.key.toLowerCase() !== "p"
          )
            return;
          const decision = printDecision();
          if (decision === "native") return;
          event.preventDefault();
          event.stopImmediatePropagation();
          if (decision === "capture" && !event.repeat) target.print();
        },
        true,
      );
      if (
        target.location.origin ===
        "chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai"
      )
        target.addEventListener(
          "click",
          (event) => {
            const TargetElement = reflectGet(target, "Element");
            if (
              !event
                .composedPath()
                .some(
                  (node) =>
                    node instanceof TargetElement && node.id === "print",
                )
            )
              return;
            const decision = printDecision();
            if (decision === "native") return;
            event.preventDefault();
            event.stopImmediatePropagation();
            if (decision === "capture")
              resolveBridge()?.capturePrint({
                status: "failed",
                reason: "unsupported-content",
              });
          },
          true,
        );
      for (const name of ["HTMLIFrameElement", "HTMLFrameElement"]) {
        const Frame = reflectGet(target, name);
        if (!Frame) continue;
        const contentWindow = getOwnPropertyDescriptor(
          Frame.prototype,
          "contentWindow",
        );
        const getContentWindow = contentWindow
          ? reflectGet(contentWindow, "get")
          : void 0;
        if (getContentWindow && contentWindow?.configurable)
          defineProperty(Frame.prototype, "contentWindow", {
            ...contentWindow,
            get: function () {
              const child = reflectApply(getContentWindow, this, []) ?? null;
              if (
                child &&
                (!this.getAttribute("src") ||
                  this.getAttribute("src") === "about:blank")
              )
                install(child);
              return child;
            },
          });
        const contentDocument = getOwnPropertyDescriptor(
          Frame.prototype,
          "contentDocument",
        );
        const getContentDocument = contentDocument
          ? reflectGet(contentDocument, "get")
          : void 0;
        if (getContentDocument && contentDocument?.configurable)
          defineProperty(Frame.prototype, "contentDocument", {
            ...contentDocument,
            get: function () {
              const document2 =
                reflectApply(getContentDocument, this, []) ?? null;
              if (
                document2?.defaultView &&
                (!this.getAttribute("src") ||
                  this.getAttribute("src") === "about:blank")
              )
                install(document2.defaultView);
              return document2;
            },
          });
      }
      const nativeOpen = reflectGet(target, "open");
      target.open = function (...args) {
        const child = reflectApply(nativeOpen, target, args);
        if (child) install(child);
        return child;
      };
    } catch {}
  }
  install(window);
}
const ACTIVATION_EXPIRY_MS = 1e3;
function isActivationBoundToAnchor(activation, rect, now, expiryMs) {
  if (!activation) return false;
  if (now - activation.at > expiryMs) return false;
  const withinX =
    activation.x >= rect.left && activation.x <= rect.left + rect.width;
  const withinY =
    activation.y >= rect.top && activation.y <= rect.top + rect.height;
  return withinX && withinY;
}
const MIN_ANCHOR_PIXEL_SIZE = 10;
function meetsAnchorSizeFloor(metrics, minPixelSize) {
  const clientClears =
    metrics.clientWidth >= minPixelSize && metrics.clientHeight >= minPixelSize;
  const scrollClears =
    metrics.scrollWidth >= minPixelSize && metrics.scrollHeight >= minPixelSize;
  const renderedClears =
    metrics.renderedWidth >= minPixelSize &&
    metrics.renderedHeight >= minPixelSize;
  return (clientClears || scrollClears) && renderedClears;
}
const AUTOFILL_MAX_FIELDS = 200;
const AUTOFILL_MAX_STRING_LENGTH = 1024;
const AUTOFILL_MAX_OPTIONS = 512;
const AUTOFILL_MAX_SNAPSHOT_STRING_LENGTH = 128 * 1024;
function isSubmitControl(element2) {
  const type = (element2.getAttribute("type") ?? "").trim().toLowerCase();
  if (element2.localName === "button") return type === "" || type === "submit";
  return (
    element2.localName === "input" && (type === "submit" || type === "image")
  );
}
const WEBPAGE_BRIDGE_GLOBAL = "__pageBridge";
const WEBPAGE_MEDIA_CAPTURE_ACTIVITY_CHANNEL = "webpage:media-capture-activity";
async function executeAdBlockScriptlets(frame, scripts, injectedScripts) {
  for (const script of scripts) {
    if (!script.trim() || injectedScripts.has(script)) {
      continue;
    }
    try {
      await frame.executeJavaScript(autoRemoveScript(script), true);
      injectedScripts.add(script);
    } catch {}
  }
}
const BLOCK_ELEMENTS = [
  "ADDRESS",
  "ARTICLE",
  "ASIDE",
  "BLOCKQUOTE",
  "BR",
  "DETAILS",
  "DIALOG",
  "DD",
  "DIV",
  "DL",
  "DT",
  "FIELDSET",
  "FIGCAPTION",
  "FIGURE",
  "FOOTER",
  "FORM",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "HEADER",
  "HGROUP",
  "HR",
  "LI",
  "MAIN",
  "NAV",
  "OL",
  "P",
  "PRE",
  "SECTION",
  "TABLE",
  "UL",
  "TR",
  "TH",
  "TD",
  "COLGROUP",
  "COL",
  "CAPTION",
  "THEAD",
  "TBODY",
  "TFOOT",
];
const BOUNDARY_CHARS =
  /[\t-\r -#%-*,-/:;?@[-\]_{}\x85\xA0\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/u;
const NON_BOUNDARY_CHARS =
  /[^\t-\r -#%-*,-/:;?@[-\]_{}\x85\xA0\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/u;
const processTextFragmentDirective = (
  textFragment,
  documentToProcess = document,
  root = document.body,
) => {
  const results = [];
  const searchRange = documentToProcess.createRange();
  searchRange.selectNodeContents(root);
  while (!searchRange.collapsed && results.length < 2) {
    let potentialMatch;
    if (textFragment.prefix) {
      const prefixMatch = findTextInRange(textFragment.prefix, searchRange);
      if (prefixMatch == null) {
        break;
      }
      advanceRangeStartPastOffset(
        searchRange,
        prefixMatch.startContainer,
        prefixMatch.startOffset,
      );
      const matchRange = documentToProcess.createRange();
      matchRange.setStart(prefixMatch.endContainer, prefixMatch.endOffset);
      matchRange.setEnd(searchRange.endContainer, searchRange.endOffset);
      advanceRangeStartToNonWhitespace(matchRange);
      if (matchRange.collapsed) {
        break;
      }
      potentialMatch = findTextInRange(textFragment.textStart, matchRange);
      if (potentialMatch == null) {
        break;
      }
      if (
        potentialMatch.compareBoundaryPoints(
          Range.START_TO_START,
          matchRange,
        ) !== 0
      ) {
        continue;
      }
    } else {
      potentialMatch = findTextInRange(textFragment.textStart, searchRange);
      if (potentialMatch == null) {
        break;
      }
      advanceRangeStartPastOffset(
        searchRange,
        potentialMatch.startContainer,
        potentialMatch.startOffset,
      );
    }
    if (textFragment.textEnd) {
      const textEndRange = documentToProcess.createRange();
      textEndRange.setStart(
        potentialMatch.endContainer,
        potentialMatch.endOffset,
      );
      textEndRange.setEnd(searchRange.endContainer, searchRange.endOffset);
      let matchFound = false;
      while (!textEndRange.collapsed && results.length < 2) {
        const textEndMatch = findTextInRange(
          textFragment.textEnd,
          textEndRange,
        );
        if (textEndMatch == null) {
          break;
        }
        advanceRangeStartPastOffset(
          textEndRange,
          textEndMatch.startContainer,
          textEndMatch.startOffset,
        );
        potentialMatch.setEnd(
          textEndMatch.endContainer,
          textEndMatch.endOffset,
        );
        if (textFragment.suffix) {
          const suffixResult = checkSuffix(
            textFragment.suffix,
            potentialMatch,
            searchRange,
            documentToProcess,
          );
          if (suffixResult === CheckSuffixResult.NO_SUFFIX_MATCH) {
            break;
          } else if (suffixResult === CheckSuffixResult.SUFFIX_MATCH) {
            matchFound = true;
            results.push(potentialMatch.cloneRange());
            continue;
          } else if (suffixResult === CheckSuffixResult.MISPLACED_SUFFIX) {
            continue;
          }
        } else {
          matchFound = true;
          results.push(potentialMatch.cloneRange());
        }
      }
      if (!matchFound) {
        break;
      }
    } else if (textFragment.suffix) {
      const suffixResult = checkSuffix(
        textFragment.suffix,
        potentialMatch,
        searchRange,
        documentToProcess,
      );
      if (suffixResult === CheckSuffixResult.NO_SUFFIX_MATCH) {
        break;
      } else if (suffixResult === CheckSuffixResult.SUFFIX_MATCH) {
        results.push(potentialMatch.cloneRange());
        advanceRangeStartPastOffset(
          searchRange,
          searchRange.startContainer,
          searchRange.startOffset,
        );
        continue;
      } else if (suffixResult === CheckSuffixResult.MISPLACED_SUFFIX) {
        continue;
      }
    } else {
      results.push(potentialMatch.cloneRange());
    }
  }
  return results;
};
const CheckSuffixResult = {
  NO_SUFFIX_MATCH: 0,
  // Suffix wasn't found at all. Search should halt.
  SUFFIX_MATCH: 1,
  // The suffix matches the expectation.
  MISPLACED_SUFFIX: 2,
  // The suffix was found, but not in the right place.
};
const checkSuffix = (
  suffix,
  potentialMatch,
  searchRange,
  documentToProcess,
) => {
  const suffixRange = documentToProcess.createRange();
  suffixRange.setStart(potentialMatch.endContainer, potentialMatch.endOffset);
  suffixRange.setEnd(searchRange.endContainer, searchRange.endOffset);
  advanceRangeStartToNonWhitespace(suffixRange);
  const suffixMatch = findTextInRange(suffix, suffixRange);
  if (suffixMatch == null) {
    return CheckSuffixResult.NO_SUFFIX_MATCH;
  }
  if (
    suffixMatch.compareBoundaryPoints(Range.START_TO_START, suffixRange) !== 0
  ) {
    return CheckSuffixResult.MISPLACED_SUFFIX;
  }
  return CheckSuffixResult.SUFFIX_MATCH;
};
const advanceRangeStartPastOffset = (range, node, offset) => {
  try {
    range.setStart(node, offset + 1);
  } catch (err) {
    range.setStartAfter(node);
  }
};
const advanceRangeStartToNonWhitespace = (range) => {
  const walker = makeTextNodeWalker(range);
  let node = walker.nextNode();
  while (!range.collapsed && node != null) {
    if (node !== range.startContainer) {
      range.setStart(node, 0);
    }
    if (node.textContent.length > range.startOffset) {
      const firstChar = node.textContent[range.startOffset];
      if (!firstChar.match(/\s/)) {
        return;
      }
    }
    try {
      range.setStart(node, range.startOffset + 1);
    } catch (err) {
      node = walker.nextNode();
      if (node == null) {
        range.collapse();
      } else {
        range.setStart(node, 0);
      }
    }
  }
};
const makeTextNodeWalker = (range) => {
  const walker = document.createTreeWalker(
    range.commonAncestorContainer,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
    (node) => {
      return acceptTextNodeIfVisibleInRange(node, range);
    },
  );
  return walker;
};
const isHiddenUntilFound = (elt) => {
  if (elt.hidden === "until-found") {
    return true;
  }
  const attributes = elt.attributes;
  if (attributes && attributes["hidden"]) {
    const value2 = attributes["hidden"].value;
    if (value2 === "until-found") {
      return true;
    }
  }
  return false;
};
const isNodeVisible = (node) => {
  let elt = node;
  while (elt != null && !(elt instanceof HTMLElement)) elt = elt.parentNode;
  if (elt != null) {
    if (isHiddenUntilFound(elt)) {
      return true;
    }
    const nodeStyle = window.getComputedStyle(elt);
    if (
      nodeStyle.visibility === "hidden" ||
      nodeStyle.display === "none" ||
      (parseInt(nodeStyle.height, 10) === 0 &&
        nodeStyle.overflowY != "visible") ||
      (parseInt(nodeStyle.width, 10) === 0 &&
        nodeStyle.overflowX != "visible") ||
      parseInt(nodeStyle.opacity, 10) === 0
    ) {
      return false;
    }
  }
  return true;
};
const acceptNodeIfVisibleInRange = (node, range) => {
  if (range != null && !range.intersectsNode(node))
    return NodeFilter.FILTER_REJECT;
  return isNodeVisible(node)
    ? NodeFilter.FILTER_ACCEPT
    : NodeFilter.FILTER_REJECT;
};
const acceptTextNodeIfVisibleInRange = (node, range) => {
  if (range != null && !range.intersectsNode(node))
    return NodeFilter.FILTER_REJECT;
  if (!isNodeVisible(node)) {
    return NodeFilter.FILTER_REJECT;
  }
  return node.nodeType === Node.TEXT_NODE
    ? NodeFilter.FILTER_ACCEPT
    : NodeFilter.FILTER_SKIP;
};
const getAllTextNodes = (root, range) => {
  const blocks = [];
  let tmp = [];
  const nodes = Array.from(
    getElementsIn(root, (node) => {
      return acceptNodeIfVisibleInRange(node, range);
    }),
  );
  for (const node of nodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      tmp.push(node);
    } else if (
      node instanceof HTMLElement &&
      BLOCK_ELEMENTS.includes(node.tagName.toUpperCase()) &&
      tmp.length > 0
    ) {
      blocks.push(tmp);
      tmp = [];
    }
  }
  if (tmp.length > 0) blocks.push(tmp);
  return blocks;
};
const getTextContent = (nodes, startOffset, endOffset) => {
  let str = "";
  if (nodes.length === 1) {
    str = nodes[0].textContent.substring(startOffset, endOffset);
  } else {
    str =
      nodes[0].textContent.substring(startOffset) +
      nodes.slice(1, -1).reduce((s, n) => s + n.textContent, "") +
      nodes.slice(-1)[0].textContent.substring(0, endOffset);
  }
  return str.replace(/[\t\n\r ]+/g, " ");
};
function* getElementsIn(root, filter) {
  const treeWalker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    { acceptNode: filter },
  );
  const finishedSubtrees = /* @__PURE__ */ new Set();
  while (forwardTraverse(treeWalker, finishedSubtrees) !== null) {
    yield treeWalker.currentNode;
  }
}
const findTextInRange = (query, range) => {
  const textNodeLists = getAllTextNodes(range.commonAncestorContainer, range);
  const segmenter = makeNewSegmenter();
  for (const list of textNodeLists) {
    const found = findRangeFromNodeList(query, range, list, segmenter);
    if (found !== void 0) return found;
  }
  return void 0;
};
const findRangeFromNodeList = (query, range, textNodes, segmenter) => {
  if (!query || !range || !(textNodes || []).length) return void 0;
  const startOffset =
    textNodes[0] === range.startContainer ? range.startOffset : 0;
  const data = normalizeString(getTextContent(textNodes, startOffset, void 0));
  const normalizedQuery = normalizeString(query);
  let searchStart = 0;
  let start;
  let end;
  while (searchStart < data.length) {
    const matchIndex = data.indexOf(normalizedQuery, searchStart);
    if (matchIndex === -1) return void 0;
    if (isWordBounded(data, matchIndex, normalizedQuery.length, segmenter)) {
      const normalizedStartOffset = normalizeString(
        textNodes[0].data.slice(0, startOffset),
      ).length;
      start = getBoundaryPointAtIndex(
        normalizedStartOffset + matchIndex,
        textNodes,
        /* isEnd=*/
        false,
      );
      end = getBoundaryPointAtIndex(
        normalizedStartOffset + matchIndex + normalizedQuery.length,
        textNodes,
        /* isEnd=*/
        true,
      );
    }
    if (start != null && end != null) {
      const foundRange = new Range();
      foundRange.setStart(start.node, start.offset);
      foundRange.setEnd(end.node, end.offset);
      if (
        range.compareBoundaryPoints(Range.START_TO_START, foundRange) <= 0 &&
        range.compareBoundaryPoints(Range.END_TO_END, foundRange) >= 0
      ) {
        return foundRange;
      }
    }
    searchStart = matchIndex + 1;
  }
  return void 0;
};
const getBoundaryPointAtIndex = (index, textNodes, isEnd) => {
  let counted = 0;
  let normalizedData;
  for (let i = 0; i < textNodes.length; i++) {
    const node = textNodes[i];
    if (!normalizedData) normalizedData = normalizeString(node.data);
    let nodeEnd = counted + normalizedData.length;
    if (isEnd) nodeEnd += 1;
    if (nodeEnd > index) {
      const normalizedOffset = index - counted;
      let denormalizedOffset = Math.min(index - counted, node.data.length);
      const targetSubstring = isEnd
        ? normalizedData.substring(0, normalizedOffset)
        : normalizedData.substring(normalizedOffset);
      let candidateSubstring = isEnd
        ? normalizeString(node.data.substring(0, denormalizedOffset))
        : normalizeString(node.data.substring(denormalizedOffset));
      const direction =
        (isEnd ? -1 : 1) *
        (targetSubstring.length > candidateSubstring.length ? -1 : 1);
      while (
        denormalizedOffset >= 0 &&
        denormalizedOffset <= node.data.length
      ) {
        if (candidateSubstring.length === targetSubstring.length) {
          return { node, offset: denormalizedOffset };
        }
        denormalizedOffset += direction;
        candidateSubstring = isEnd
          ? normalizeString(node.data.substring(0, denormalizedOffset))
          : normalizeString(node.data.substring(denormalizedOffset));
      }
    }
    counted += normalizedData.length;
    if (i + 1 < textNodes.length) {
      const nextNormalizedData = normalizeString(textNodes[i + 1].data);
      if (
        normalizedData.slice(-1) === " " &&
        nextNormalizedData.slice(0, 1) === " "
      ) {
        counted -= 1;
      }
      normalizedData = nextNormalizedData;
    }
  }
  return void 0;
};
const isWordBounded = (text, startPos, length, segmenter) => {
  if (
    startPos < 0 ||
    startPos >= text.length ||
    length <= 0 ||
    startPos + length > text.length
  ) {
    return false;
  }
  if (segmenter) {
    const segments = segmenter.segment(text);
    const startSegment = segments.containing(startPos);
    if (!startSegment) return false;
    if (startSegment.isWordLike && startSegment.index != startPos) return false;
    const endPos = startPos + length;
    const endSegment = segments.containing(endPos);
    if (endSegment && endSegment.isWordLike && endSegment.index != endPos)
      return false;
  } else {
    if (text[startPos].match(BOUNDARY_CHARS)) {
      ++startPos;
      --length;
      if (!length) {
        return false;
      }
    }
    if (text[startPos + length - 1].match(BOUNDARY_CHARS)) {
      --length;
      if (!length) {
        return false;
      }
    }
    if (startPos !== 0 && !text[startPos - 1].match(BOUNDARY_CHARS))
      return false;
    if (
      startPos + length !== text.length &&
      !text[startPos + length].match(BOUNDARY_CHARS)
    )
      return false;
  }
  return true;
};
const normalizeString = (str) => {
  return (str || "")
    .normalize("NFKD")
    .replace(/\s+/g, " ")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};
const makeNewSegmenter = () => {
  if (Intl.Segmenter) {
    let lang = document.documentElement.lang;
    if (!lang) {
      lang = navigator.language;
    }
    return new Intl.Segmenter(lang, { granularity: "word" });
  }
  return void 0;
};
const forwardTraverse = (walker, finishedSubtrees) => {
  if (!finishedSubtrees.has(walker.currentNode)) {
    const firstChild = walker.firstChild();
    if (firstChild !== null) {
      return firstChild;
    }
  }
  const nextSibling = walker.nextSibling();
  if (nextSibling !== null) {
    return nextSibling;
  }
  const parent = walker.parentNode();
  if (parent !== null) {
    finishedSubtrees.add(parent);
  }
  return parent;
};
const backwardTraverse = (walker, finishedSubtrees) => {
  if (!finishedSubtrees.has(walker.currentNode)) {
    const lastChild = walker.lastChild();
    if (lastChild !== null) {
      return lastChild;
    }
  }
  const previousSibling = walker.previousSibling();
  if (previousSibling !== null) {
    return previousSibling;
  }
  const parent = walker.parentNode();
  if (parent !== null) {
    finishedSubtrees.add(parent);
  }
  return parent;
};
const internal = {
  BLOCK_ELEMENTS,
  BOUNDARY_CHARS,
  NON_BOUNDARY_CHARS,
  acceptNodeIfVisibleInRange,
  normalizeString,
  makeNewSegmenter,
  forwardTraverse,
  backwardTraverse,
  makeTextNodeWalker,
  isNodeVisible,
};
if (typeof goog !== "undefined") {
  goog.declareModuleId(
    "googleChromeLabs.textFragmentPolyfill.textFragmentUtils",
  );
}
const MAX_EXACT_MATCH_LENGTH = 300;
const MIN_LENGTH_WITHOUT_CONTEXT = 20;
const ITERATIONS_BEFORE_ADDING_CONTEXT = 1;
const WORDS_TO_ADD_FIRST_ITERATION = 3;
const WORDS_TO_ADD_SUBSEQUENT_ITERATIONS = 1;
let timeoutDurationMs = 500;
let t0;
const GenerateFragmentStatus = {
  SUCCESS: 0,
  // A fragment was generated.
  INVALID_SELECTION: 1,
  // The selection provided could not be used.
  AMBIGUOUS: 2,
  // No unique fragment could be identified for this selection.
  TIMEOUT: 3,
};
const generateFragment = (selection, startTime = Date.now()) => {
  return doGenerateFragment(selection, startTime);
};
const doGenerateFragment = (selection, startTime) => {
  let range;
  try {
    range = selection.getRangeAt(0);
  } catch {
    return { status: GenerateFragmentStatus.INVALID_SELECTION };
  }
  return doGenerateFragmentFromRange(range, startTime);
};
const doGenerateFragmentFromRange = (range, startTime) => {
  recordStartTime(startTime);
  expandRangeStartToWordBound(range);
  expandRangeEndToWordBound(range);
  const rangeBeforeShrinking = range.cloneRange();
  moveRangeEdgesToTextNodes(range);
  if (range.collapsed) {
    return { status: GenerateFragmentStatus.INVALID_SELECTION };
  }
  let factory;
  if (canUseExactMatch(range)) {
    const exactText = internal.normalizeString(range.toString());
    const fragment = {
      textStart: exactText,
    };
    if (
      exactText.length >= MIN_LENGTH_WITHOUT_CONTEXT &&
      isUniquelyIdentifying(fragment)
    ) {
      return {
        status: GenerateFragmentStatus.SUCCESS,
        fragment,
      };
    }
    factory = new FragmentFactory().setExactTextMatch(exactText);
  } else {
    const startSearchSpace = getSearchSpaceForStart(range);
    const endSearchSpace = getSearchSpaceForEnd(range);
    if (startSearchSpace && endSearchSpace) {
      factory = new FragmentFactory().setStartAndEndSearchSpace(
        startSearchSpace,
        endSearchSpace,
      );
    } else {
      factory = new FragmentFactory().setSharedSearchSpace(
        range.toString().trim(),
      );
    }
  }
  const prefixRange = document.createRange();
  prefixRange.selectNodeContents(document.body);
  const suffixRange = prefixRange.cloneRange();
  prefixRange.setEnd(
    rangeBeforeShrinking.startContainer,
    rangeBeforeShrinking.startOffset,
  );
  suffixRange.setStart(
    rangeBeforeShrinking.endContainer,
    rangeBeforeShrinking.endOffset,
  );
  const prefixSearchSpace = getSearchSpaceForEnd(prefixRange);
  const suffixSearchSpace = getSearchSpaceForStart(suffixRange);
  if (prefixSearchSpace || suffixSearchSpace) {
    factory.setPrefixAndSuffixSearchSpace(prefixSearchSpace, suffixSearchSpace);
  }
  factory.useSegmenter(internal.makeNewSegmenter());
  let didEmbiggen = false;
  do {
    checkTimeout();
    didEmbiggen = factory.embiggen();
    const fragment = factory.tryToMakeUniqueFragment();
    if (fragment != null) {
      return {
        status: GenerateFragmentStatus.SUCCESS,
        fragment,
      };
    }
  } while (didEmbiggen);
  return { status: GenerateFragmentStatus.AMBIGUOUS };
};
const checkTimeout = () => {
  const delta = Date.now() - t0;
  if (delta > timeoutDurationMs) {
    const timeoutError = new Error(
      `Fragment generation timed out after ${delta} ms.`,
    );
    timeoutError.isTimeout = true;
    throw timeoutError;
  }
};
const recordStartTime = (newStartTime) => {
  t0 = newStartTime;
};
const getSearchSpaceForStart = (range) => {
  let node = getFirstNodeForBlockSearch(range);
  const walker = makeWalkerForNode(node, range.endContainer);
  if (!walker) {
    return void 0;
  }
  const finishedSubtrees = /* @__PURE__ */ new Set();
  if (
    range.startContainer.nodeType === Node.ELEMENT_NODE &&
    range.startOffset === range.startContainer.childNodes.length
  ) {
    finishedSubtrees.add(range.startContainer);
  }
  const origin = node;
  const textAccumulator = new BlockTextAccumulator(range, true);
  const tempRange = range.cloneRange();
  while (!tempRange.collapsed && node != null) {
    checkTimeout();
    if (node.contains(origin)) {
      tempRange.setStartAfter(node);
    } else {
      tempRange.setStartBefore(node);
    }
    textAccumulator.appendNode(node);
    if (textAccumulator.textInBlock !== null) {
      return textAccumulator.textInBlock;
    }
    node = internal.forwardTraverse(walker, finishedSubtrees);
  }
  return void 0;
};
const getSearchSpaceForEnd = (range) => {
  let node = getLastNodeForBlockSearch(range);
  const walker = makeWalkerForNode(node, range.startContainer);
  if (!walker) {
    return void 0;
  }
  const finishedSubtrees = /* @__PURE__ */ new Set();
  if (
    range.endContainer.nodeType === Node.ELEMENT_NODE &&
    range.endOffset === 0
  ) {
    finishedSubtrees.add(range.endContainer);
  }
  const origin = node;
  const textAccumulator = new BlockTextAccumulator(range, false);
  const tempRange = range.cloneRange();
  while (!tempRange.collapsed && node != null) {
    checkTimeout();
    if (node.contains(origin)) {
      tempRange.setEnd(node, 0);
    } else {
      tempRange.setEndAfter(node);
    }
    textAccumulator.appendNode(node);
    if (textAccumulator.textInBlock !== null) {
      return textAccumulator.textInBlock;
    }
    node = internal.backwardTraverse(walker, finishedSubtrees);
  }
  return void 0;
};
const FragmentFactory = class {
  /**
   * Initializes the basic state of the factory. Users should then call exactly
   * one of setStartAndEndSearchSpace, setSharedSearchSpace, or
   * setExactTextMatch, and optionally setPrefixAndSuffixSearchSpace.
   */
  constructor() {
    this.Mode = {
      ALL_PARTS: 1,
      SHARED_START_AND_END: 2,
      CONTEXT_ONLY: 3,
    };
    this.startOffset = null;
    this.endOffset = null;
    this.prefixOffset = null;
    this.suffixOffset = null;
    this.prefixSearchSpace = "";
    this.backwardsPrefixSearchSpace = "";
    this.suffixSearchSpace = "";
    this.numIterations = 0;
  }
  /**
   * Generates a fragment based on the current state, then tests it for
   * uniqueness.
   * @return {TextFragment|Undefined} - a text fragment if the current state is
   *     uniquely identifying, or undefined if the current state is ambiguous.
   */
  tryToMakeUniqueFragment() {
    let fragment;
    if (this.mode === this.Mode.CONTEXT_ONLY) {
      fragment = { textStart: this.exactTextMatch };
    } else {
      fragment = {
        textStart: this.getStartSearchSpace()
          .substring(0, this.startOffset)
          .trim(),
        textEnd: this.getEndSearchSpace().substring(this.endOffset).trim(),
      };
    }
    if (this.prefixOffset != null) {
      const prefix = this.getPrefixSearchSpace()
        .substring(this.prefixOffset)
        .trim();
      if (prefix) {
        fragment.prefix = prefix;
      }
    }
    if (this.suffixOffset != null) {
      const suffix = this.getSuffixSearchSpace()
        .substring(0, this.suffixOffset)
        .trim();
      if (suffix) {
        fragment.suffix = suffix;
      }
    }
    return isUniquelyIdentifying(fragment) ? fragment : void 0;
  }
  /**
   * Shifts the current state such that the candidates for textStart and textEnd
   * represent more of the possible search spaces.
   * @return {boolean} - true if the desired expansion occurred; false if the
   *     entire search space has been consumed and no further attempts can be
   *     made.
   */
  embiggen() {
    let canExpandRange = true;
    if (this.mode === this.Mode.SHARED_START_AND_END) {
      if (this.startOffset >= this.endOffset) {
        canExpandRange = false;
      }
    } else if (this.mode === this.Mode.ALL_PARTS) {
      if (
        this.startOffset === this.getStartSearchSpace().length &&
        this.backwardsEndOffset() === this.getEndSearchSpace().length
      ) {
        canExpandRange = false;
      }
    } else if (this.mode === this.Mode.CONTEXT_ONLY) {
      canExpandRange = false;
    }
    if (canExpandRange) {
      const desiredIterations = this.getNumberOfRangeWordsToAdd();
      if (this.startOffset < this.getStartSearchSpace().length) {
        let i = 0;
        if (this.getStartSegments() != null) {
          while (
            i < desiredIterations &&
            this.startOffset < this.getStartSearchSpace().length
          ) {
            this.startOffset = this.getNextOffsetForwards(
              this.getStartSegments(),
              this.startOffset,
              this.getStartSearchSpace(),
            );
            i++;
          }
        } else {
          let oldStartOffset = this.startOffset;
          do {
            checkTimeout();
            const newStartOffset = this.getStartSearchSpace()
              .substring(this.startOffset + 1)
              .search(internal.BOUNDARY_CHARS);
            if (newStartOffset === -1) {
              this.startOffset = this.getStartSearchSpace().length;
            } else {
              this.startOffset = this.startOffset + 1 + newStartOffset;
            }
            if (
              this.getStartSearchSpace()
                .substring(oldStartOffset, this.startOffset)
                .search(internal.NON_BOUNDARY_CHARS) !== -1
            ) {
              oldStartOffset = this.startOffset;
              i++;
            }
          } while (
            this.startOffset < this.getStartSearchSpace().length &&
            i < desiredIterations
          );
        }
        if (this.mode === this.Mode.SHARED_START_AND_END) {
          this.startOffset = Math.min(this.startOffset, this.endOffset);
        }
      }
      if (this.backwardsEndOffset() < this.getEndSearchSpace().length) {
        let i = 0;
        if (this.getEndSegments() != null) {
          while (i < desiredIterations && this.endOffset > 0) {
            this.endOffset = this.getNextOffsetBackwards(
              this.getEndSegments(),
              this.endOffset,
            );
            i++;
          }
        } else {
          let oldBackwardsEndOffset = this.backwardsEndOffset();
          do {
            checkTimeout();
            const newBackwardsOffset = this.getBackwardsEndSearchSpace()
              .substring(this.backwardsEndOffset() + 1)
              .search(internal.BOUNDARY_CHARS);
            if (newBackwardsOffset === -1) {
              this.setBackwardsEndOffset(this.getEndSearchSpace().length);
            } else {
              this.setBackwardsEndOffset(
                this.backwardsEndOffset() + 1 + newBackwardsOffset,
              );
            }
            if (
              this.getBackwardsEndSearchSpace()
                .substring(oldBackwardsEndOffset, this.backwardsEndOffset())
                .search(internal.NON_BOUNDARY_CHARS) !== -1
            ) {
              oldBackwardsEndOffset = this.backwardsEndOffset();
              i++;
            }
          } while (
            this.backwardsEndOffset() < this.getEndSearchSpace().length &&
            i < desiredIterations
          );
        }
        if (this.mode === this.Mode.SHARED_START_AND_END) {
          this.endOffset = Math.max(this.startOffset, this.endOffset);
        }
      }
    }
    let canExpandContext = false;
    if (
      !canExpandRange ||
      this.startOffset + this.backwardsEndOffset() <
        MIN_LENGTH_WITHOUT_CONTEXT ||
      this.numIterations >= ITERATIONS_BEFORE_ADDING_CONTEXT
    ) {
      if (
        (this.backwardsPrefixOffset() != null &&
          this.backwardsPrefixOffset() !==
            this.getPrefixSearchSpace().length) ||
        (this.suffixOffset != null &&
          this.suffixOffset !== this.getSuffixSearchSpace().length)
      ) {
        canExpandContext = true;
      }
    }
    if (canExpandContext) {
      const desiredIterations = this.getNumberOfContextWordsToAdd();
      if (this.backwardsPrefixOffset() < this.getPrefixSearchSpace().length) {
        let i = 0;
        if (this.getPrefixSegments() != null) {
          while (i < desiredIterations && this.prefixOffset > 0) {
            this.prefixOffset = this.getNextOffsetBackwards(
              this.getPrefixSegments(),
              this.prefixOffset,
            );
            i++;
          }
        } else {
          let oldBackwardsPrefixOffset = this.backwardsPrefixOffset();
          do {
            checkTimeout();
            const newBackwardsPrefixOffset =
              this.getBackwardsPrefixSearchSpace()
                .substring(this.backwardsPrefixOffset() + 1)
                .search(internal.BOUNDARY_CHARS);
            if (newBackwardsPrefixOffset === -1) {
              this.setBackwardsPrefixOffset(
                this.getBackwardsPrefixSearchSpace().length,
              );
            } else {
              this.setBackwardsPrefixOffset(
                this.backwardsPrefixOffset() + 1 + newBackwardsPrefixOffset,
              );
            }
            if (
              this.getBackwardsPrefixSearchSpace()
                .substring(
                  oldBackwardsPrefixOffset,
                  this.backwardsPrefixOffset(),
                )
                .search(internal.NON_BOUNDARY_CHARS) !== -1
            ) {
              oldBackwardsPrefixOffset = this.backwardsPrefixOffset();
              i++;
            }
          } while (
            this.backwardsPrefixOffset() < this.getPrefixSearchSpace().length &&
            i < desiredIterations
          );
        }
      }
      if (this.suffixOffset < this.getSuffixSearchSpace().length) {
        let i = 0;
        if (this.getSuffixSegments() != null) {
          while (
            i < desiredIterations &&
            this.suffixOffset < this.getSuffixSearchSpace().length
          ) {
            this.suffixOffset = this.getNextOffsetForwards(
              this.getSuffixSegments(),
              this.suffixOffset,
              this.getSuffixSearchSpace(),
            );
            i++;
          }
        } else {
          let oldSuffixOffset = this.suffixOffset;
          do {
            checkTimeout();
            const newSuffixOffset = this.getSuffixSearchSpace()
              .substring(this.suffixOffset + 1)
              .search(internal.BOUNDARY_CHARS);
            if (newSuffixOffset === -1) {
              this.suffixOffset = this.getSuffixSearchSpace().length;
            } else {
              this.suffixOffset = this.suffixOffset + 1 + newSuffixOffset;
            }
            if (
              this.getSuffixSearchSpace()
                .substring(oldSuffixOffset, this.suffixOffset)
                .search(internal.NON_BOUNDARY_CHARS) !== -1
            ) {
              oldSuffixOffset = this.suffixOffset;
              i++;
            }
          } while (
            this.suffixOffset < this.getSuffixSearchSpace().length &&
            i < desiredIterations
          );
        }
      }
    }
    this.numIterations++;
    return canExpandRange || canExpandContext;
  }
  /**
   * Sets up the factory for a range-based match with a highlight that crosses
   * block boundaries.
   *
   * Exactly one of this, setSharedSearchSpace, or setExactTextMatch should be
   * called so the factory can identify the fragment.
   *
   * @param {String} startSearchSpace - the maximum possible string which can be
   *     used to identify the start of the fragment
   * @param {String} endSearchSpace - the maximum possible string which can be
   *     used to identify the end of the fragment
   * @return {FragmentFactory} - returns |this| to allow call chaining and
   *     assignment
   */
  setStartAndEndSearchSpace(startSearchSpace, endSearchSpace) {
    this.startSearchSpace = startSearchSpace;
    this.endSearchSpace = endSearchSpace;
    this.backwardsEndSearchSpace = reverseString(endSearchSpace);
    this.startOffset = 0;
    this.endOffset = endSearchSpace.length;
    this.mode = this.Mode.ALL_PARTS;
    return this;
  }
  /**
   * Sets up the factory for a range-based match with a highlight that doesn't
   * cross block boundaries.
   *
   * Exactly one of this, setStartAndEndSearchSpace, or setExactTextMatch should
   * be called so the factory can identify the fragment.
   *
   * @param {String} sharedSearchSpace - the full text of the highlight
   * @return {FragmentFactory} - returns |this| to allow call chaining and
   *     assignment
   */
  setSharedSearchSpace(sharedSearchSpace) {
    this.sharedSearchSpace = sharedSearchSpace;
    this.backwardsSharedSearchSpace = reverseString(sharedSearchSpace);
    this.startOffset = 0;
    this.endOffset = sharedSearchSpace.length;
    this.mode = this.Mode.SHARED_START_AND_END;
    return this;
  }
  /**
   * Sets up the factory for an exact text match.
   *
   * Exactly one of this, setStartAndEndSearchSpace, or setSharedSearchSpace
   * should be called so the factory can identify the fragment.
   *
   * @param {String} exactTextMatch - the full text of the highlight
   * @return {FragmentFactory} - returns |this| to allow call chaining and
   *     assignment
   */
  setExactTextMatch(exactTextMatch) {
    this.exactTextMatch = exactTextMatch;
    this.mode = this.Mode.CONTEXT_ONLY;
    return this;
  }
  /**
   * Sets up the factory for context-based matches.
   *
   * @param {String} prefixSearchSpace - the string to be used as the search
   *     space for prefix
   * @param {String} suffixSearchSpace - the string to be used as the search
   *     space for suffix
   * @return {FragmentFactory} - returns |this| to allow call chaining and
   *     assignment
   */
  setPrefixAndSuffixSearchSpace(prefixSearchSpace, suffixSearchSpace) {
    if (prefixSearchSpace) {
      this.prefixSearchSpace = prefixSearchSpace;
      this.backwardsPrefixSearchSpace = reverseString(prefixSearchSpace);
      this.prefixOffset = prefixSearchSpace.length;
    }
    if (suffixSearchSpace) {
      this.suffixSearchSpace = suffixSearchSpace;
      this.suffixOffset = 0;
    }
    return this;
  }
  /**
   * Sets up the factory to use an instance of Intl.Segmenter when identifying
   * the start/end of words. |segmenter| is not actually retained; instead it is
   * used to create segment objects which are cached.
   *
   * This must be called AFTER any calls to setStartAndEndSearchSpace,
   * setSharedSearchSpace, and/or setPrefixAndSuffixSearchSpace, as these search
   * spaces will be segmented immediately.
   *
   * @param {Intl.Segmenter | Undefined} segmenter
   * @return {FragmentFactory} - returns |this| to allow call chaining and
   *     assignment
   */
  useSegmenter(segmenter) {
    if (segmenter == null) {
      return this;
    }
    if (this.mode === this.Mode.ALL_PARTS) {
      this.startSegments = segmenter.segment(this.startSearchSpace);
      this.endSegments = segmenter.segment(this.endSearchSpace);
    } else if (this.mode === this.Mode.SHARED_START_AND_END) {
      this.sharedSegments = segmenter.segment(this.sharedSearchSpace);
    }
    if (this.prefixSearchSpace) {
      this.prefixSegments = segmenter.segment(this.prefixSearchSpace);
    }
    if (this.suffixSearchSpace) {
      this.suffixSegments = segmenter.segment(this.suffixSearchSpace);
    }
    return this;
  }
  /**
   * @return {number} - how many words should be added to the prefix and suffix
   *     when embiggening. This changes depending on the current state of the
   *     prefix/suffix, so it should be invoked once per embiggen, before either
   *     is modified.
   */
  getNumberOfContextWordsToAdd() {
    return this.backwardsPrefixOffset() === 0 && this.suffixOffset === 0
      ? WORDS_TO_ADD_FIRST_ITERATION
      : WORDS_TO_ADD_SUBSEQUENT_ITERATIONS;
  }
  /**
   * @return {number} - how many words should be added to textStart and textEnd
   *     when embiggening. This changes depending on the current state of
   *     textStart/textEnd, so it should be invoked once per embiggen, before
   *     either is modified.
   */
  getNumberOfRangeWordsToAdd() {
    return this.startOffset === 0 && this.backwardsEndOffset() === 0
      ? WORDS_TO_ADD_FIRST_ITERATION
      : WORDS_TO_ADD_SUBSEQUENT_ITERATIONS;
  }
  /**
   * Helper method for embiggening using Intl.Segmenter. Finds the next offset
   * to be tried in the forwards direction (i.e., a prefix of the search space).
   * @param {Segments} segments - the output of segmenting the desired search
   *     space using Intl.Segmenter
   * @param {number} offset - the current offset
   * @param {string} searchSpace - the search space that was segmented
   * @return {number} - the next offset which should be tried.
   */
  getNextOffsetForwards(segments, offset, searchSpace) {
    let currentSegment = segments.containing(offset);
    while (currentSegment != null) {
      checkTimeout();
      const currentSegmentEnd =
        currentSegment.index + currentSegment.segment.length;
      if (currentSegment.isWordLike) {
        return currentSegmentEnd;
      }
      currentSegment = segments.containing(currentSegmentEnd);
    }
    return searchSpace.length;
  }
  /**
   * Helper method for embiggening using Intl.Segmenter. Finds the next offset
   * to be tried in the backwards direction (i.e., a suffix of the search
   * space).
   * @param {Segments} segments - the output of segmenting the desired search
   *     space using Intl.Segmenter
   * @param {number} offset - the current offset
   * @return {number} - the next offset which should be tried.
   */
  getNextOffsetBackwards(segments, offset) {
    let currentSegment = segments.containing(offset);
    if (!currentSegment || offset == currentSegment.index) {
      currentSegment = segments.containing(offset - 1);
    }
    while (currentSegment != null) {
      checkTimeout();
      if (currentSegment.isWordLike) {
        return currentSegment.index;
      }
      currentSegment = segments.containing(currentSegment.index - 1);
    }
    return 0;
  }
  /**
   * @return {String} - the string to be used as the search space for textStart
   */
  getStartSearchSpace() {
    return this.mode === this.Mode.SHARED_START_AND_END
      ? this.sharedSearchSpace
      : this.startSearchSpace;
  }
  /**
   * @return {Segments | Undefined} - the result of segmenting the start search
   *     space using Intl.Segmenter, or undefined if a segmenter was not
   *     provided.
   */
  getStartSegments() {
    return this.mode === this.Mode.SHARED_START_AND_END
      ? this.sharedSegments
      : this.startSegments;
  }
  /**
   * @return {String} - the string to be used as the search space for textEnd
   */
  getEndSearchSpace() {
    return this.mode === this.Mode.SHARED_START_AND_END
      ? this.sharedSearchSpace
      : this.endSearchSpace;
  }
  /**
   * @return {Segments | Undefined} - the result of segmenting the end search
   *     space using Intl.Segmenter, or undefined if a segmenter was not
   *     provided.
   */
  getEndSegments() {
    return this.mode === this.Mode.SHARED_START_AND_END
      ? this.sharedSegments
      : this.endSegments;
  }
  /**
   * @return {String} - the string to be used as the search space for textEnd,
   *     backwards.
   */
  getBackwardsEndSearchSpace() {
    return this.mode === this.Mode.SHARED_START_AND_END
      ? this.backwardsSharedSearchSpace
      : this.backwardsEndSearchSpace;
  }
  /**
   * @return {String} - the string to be used as the search space for prefix
   */
  getPrefixSearchSpace() {
    return this.prefixSearchSpace;
  }
  /**
   * @return {Segments | Undefined} - the result of segmenting the prefix
   *     search space using Intl.Segmenter, or undefined if a segmenter was not
   *     provided.
   */
  getPrefixSegments() {
    return this.prefixSegments;
  }
  /**
   * @return {String} - the string to be used as the search space for prefix,
   *     backwards.
   */
  getBackwardsPrefixSearchSpace() {
    return this.backwardsPrefixSearchSpace;
  }
  /**
   * @return {String} - the string to be used as the search space for suffix
   */
  getSuffixSearchSpace() {
    return this.suffixSearchSpace;
  }
  /**
   * @return {Segments | Undefined} - the result of segmenting the suffix
   *     search space using Intl.Segmenter, or undefined if a segmenter was not
   *     provided.
   */
  getSuffixSegments() {
    return this.suffixSegments;
  }
  /**
   * Helper method for doing arithmetic in the backwards search space.
   * @return {Number} - the current end offset, as a start offset in the
   *     backwards search space
   */
  backwardsEndOffset() {
    return this.getEndSearchSpace().length - this.endOffset;
  }
  /**
   * Helper method for doing arithmetic in the backwards search space.
   * @param {Number} backwardsEndOffset - the desired new value of the start
   *     offset in the backwards search space
   */
  setBackwardsEndOffset(backwardsEndOffset) {
    this.endOffset = this.getEndSearchSpace().length - backwardsEndOffset;
  }
  /**
   * Helper method for doing arithmetic in the backwards search space.
   * @return {Number} - the current prefix offset, as a start offset in the
   *     backwards search space
   */
  backwardsPrefixOffset() {
    if (this.prefixOffset == null) return null;
    return this.getPrefixSearchSpace().length - this.prefixOffset;
  }
  /**
   * Helper method for doing arithmetic in the backwards search space.
   * @param {Number} backwardsPrefixOffset - the desired new value of the prefix
   *     offset in the backwards search space
   */
  setBackwardsPrefixOffset(backwardsPrefixOffset) {
    if (this.prefixOffset == null) return;
    this.prefixOffset =
      this.getPrefixSearchSpace().length - backwardsPrefixOffset;
  }
};
const BlockTextAccumulator = class {
  /**
   * @param {Range} searchRange - the range for which the text in the last or
   *     first non empty block boundary will be calculated
   * @param {boolean} isForwardTraversal - true if nodes in
   *     searchRange will be forward traversed
   */
  constructor(searchRange, isForwardTraversal) {
    this.searchRange = searchRange;
    this.isForwardTraversal = isForwardTraversal;
    this.textFound = false;
    this.textNodes = [];
    this.textInBlock = null;
  }
  /**
   * Adds the next node in the search space range traversal to the accumulator.
   * The accumulator then will keep track of the text nodes in the range until a
   * block boundary is found. Once a block boundary is found and the content of
   * the text nodes in the boundary is non empty, the property textInBlock will
   * be set with the content of the text nodes, trimmed of leading and trailing
   * whitespaces.
   * @param {Node} node - next node in the traversal of the searchRange
   */
  appendNode(node) {
    if (this.textInBlock !== null) {
      return;
    }
    if (isBlock(node)) {
      if (this.textFound) {
        if (!this.isForwardTraversal) {
          this.textNodes.reverse();
        }
        this.textInBlock = this.textNodes
          .map((textNode) => textNode.textContent)
          .join("")
          .trim();
      } else {
        this.textNodes = [];
      }
      return;
    }
    if (!isText(node)) return;
    const nodeToInsert = this.getNodeIntersectionWithRange(node);
    this.textFound = this.textFound || nodeToInsert.textContent.trim() !== "";
    this.textNodes.push(nodeToInsert);
  }
  /**
   * Calculates the intersection of a node with searchRange and returns a Text
   * Node with the intersection
   * @param {Node} node - the node to intercept with searchRange
   * @return {Node} - node if node is fully within searchRange or a Text Node
   *     with the substring of the content of node inside the search range
   */
  getNodeIntersectionWithRange(node) {
    let startOffset = null;
    let endOffset = null;
    if (
      node === this.searchRange.startContainer &&
      this.searchRange.startOffset !== 0
    ) {
      startOffset = this.searchRange.startOffset;
    }
    if (
      node === this.searchRange.endContainer &&
      this.searchRange.endOffset !== node.textContent.length
    ) {
      endOffset = this.searchRange.endOffset;
    }
    if (startOffset !== null || endOffset !== null) {
      return {
        textContent: node.textContent.substring(
          startOffset ?? 0,
          endOffset ?? node.textContent.length,
        ),
      };
    }
    return node;
  }
};
const isUniquelyIdentifying = (fragment) => {
  return processTextFragmentDirective(fragment).length === 1;
};
const reverseString = (string2) => {
  return [...(string2 || "")].reverse().join("");
};
const canUseExactMatch = (range) => {
  if (range.toString().length > MAX_EXACT_MATCH_LENGTH) return false;
  return !containsBlockBoundary(range);
};
const getFirstNodeForBlockSearch = (range) => {
  let node = range.startContainer;
  if (
    node.nodeType == Node.ELEMENT_NODE &&
    range.startOffset < node.childNodes.length
  ) {
    node = node.childNodes[range.startOffset];
  }
  return node;
};
const getLastNodeForBlockSearch = (range) => {
  let node = range.endContainer;
  if (node.nodeType == Node.ELEMENT_NODE && range.endOffset > 0) {
    node = node.childNodes[range.endOffset - 1];
  }
  return node;
};
const getFirstTextNode = (range) => {
  const firstNode = getFirstNodeForBlockSearch(range);
  if (isText(firstNode) && internal.isNodeVisible(firstNode)) {
    return firstNode;
  }
  const walker = internal.makeTextNodeWalker(range);
  walker.currentNode = firstNode;
  return walker.nextNode();
};
const getLastTextNode = (range) => {
  const lastNode = getLastNodeForBlockSearch(range);
  if (isText(lastNode) && internal.isNodeVisible(lastNode)) {
    return lastNode;
  }
  const walker = internal.makeTextNodeWalker(range);
  walker.currentNode = lastNode;
  return internal.backwardTraverse(walker, /* @__PURE__ */ new Set());
};
const containsBlockBoundary = (range) => {
  const tempRange = range.cloneRange();
  let node = getFirstNodeForBlockSearch(tempRange);
  const walker = makeWalkerForNode(node);
  if (!walker) {
    return false;
  }
  const finishedSubtrees = /* @__PURE__ */ new Set();
  while (!tempRange.collapsed && node != null) {
    if (isBlock(node)) return true;
    if (node != null) tempRange.setStartAfter(node);
    node = internal.forwardTraverse(walker, finishedSubtrees);
    checkTimeout();
  }
  return false;
};
const findWordStartBoundInTextNode = (node, startOffset) => {
  if (node.nodeType !== Node.TEXT_NODE) return -1;
  const offset = startOffset != null ? startOffset : node.data.length;
  if (
    offset < node.data.length &&
    internal.BOUNDARY_CHARS.test(node.data[offset])
  )
    return offset;
  const precedingText = node.data.substring(0, offset);
  const boundaryIndex = reverseString(precedingText).search(
    internal.BOUNDARY_CHARS,
  );
  if (boundaryIndex !== -1) {
    return offset - boundaryIndex;
  }
  return -1;
};
const findWordEndBoundInTextNode = (node, endOffset) => {
  if (node.nodeType !== Node.TEXT_NODE) return -1;
  const offset = endOffset != null ? endOffset : 0;
  if (
    offset < node.data.length &&
    offset > 0 &&
    internal.BOUNDARY_CHARS.test(node.data[offset - 1])
  ) {
    return offset;
  }
  const followingText = node.data.substring(offset);
  const boundaryIndex = followingText.search(internal.BOUNDARY_CHARS);
  if (boundaryIndex !== -1) {
    return offset + boundaryIndex;
  }
  return -1;
};
const makeWalkerForNode = (node, endNode) => {
  if (!node) {
    return void 0;
  }
  let blockAncestor = node;
  const endNodeNotNull = endNode != null ? endNode : node;
  while (!blockAncestor.contains(endNodeNotNull) || !isBlock(blockAncestor)) {
    if (blockAncestor.parentNode) {
      blockAncestor = blockAncestor.parentNode;
    }
  }
  const walker = document.createTreeWalker(
    blockAncestor,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    (node2) => {
      return internal.acceptNodeIfVisibleInRange(node2);
    },
  );
  walker.currentNode = node;
  return walker;
};
const expandRangeStartToWordBound = (range) => {
  const segmenter = internal.makeNewSegmenter();
  if (segmenter) {
    const startNode = getFirstNodeForBlockSearch(range);
    if (startNode !== range.startContainer) {
      range.setStartBefore(startNode);
    }
    expandToNearestWordBoundaryPointUsingSegments(
      segmenter,
      /* expandForward= */
      false,
      range,
    );
  } else {
    const newOffset = findWordStartBoundInTextNode(
      range.startContainer,
      range.startOffset,
    );
    if (newOffset !== -1) {
      range.setStart(range.startContainer, newOffset);
      return;
    }
    if (isBlock(range.startContainer) && range.startOffset === 0) {
      return;
    }
    const walker = makeWalkerForNode(range.startContainer);
    if (!walker) {
      return;
    }
    const finishedSubtrees = /* @__PURE__ */ new Set();
    let node = internal.backwardTraverse(walker, finishedSubtrees);
    while (node != null) {
      const newOffset2 = findWordStartBoundInTextNode(node);
      if (newOffset2 !== -1) {
        range.setStart(node, newOffset2);
        return;
      }
      if (isBlock(node)) {
        if (node.contains(range.startContainer)) {
          range.setStart(node, 0);
        } else {
          range.setStartAfter(node);
        }
        return;
      }
      node = internal.backwardTraverse(walker, finishedSubtrees);
      range.collapse();
    }
  }
};
const moveRangeEdgesToTextNodes = (range) => {
  const firstTextNode = getFirstTextNode(range);
  if (firstTextNode == null) {
    range.collapse();
    return;
  }
  const firstNode = getFirstNodeForBlockSearch(range);
  if (firstNode !== firstTextNode) {
    range.setStart(firstTextNode, 0);
  }
  const lastNode = getLastNodeForBlockSearch(range);
  const lastTextNode = getLastTextNode(range);
  if (lastNode !== lastTextNode) {
    range.setEnd(lastTextNode, lastTextNode.textContent.length);
  }
};
const expandToNearestWordBoundaryPointUsingSegments = (
  segmenter,
  isRangeEnd,
  range,
) => {
  const boundary = isRangeEnd
    ? { node: range.endContainer, offset: range.endOffset }
    : { node: range.startContainer, offset: range.startOffset };
  const nodes = getTextNodesInSameBlock(boundary.node);
  const preNodeText = nodes.preNodes.reduce((prev, cur) => {
    return prev.concat(cur.textContent);
  }, "");
  const innerNodeText = nodes.innerNodes.reduce((prev, cur) => {
    return prev.concat(cur.textContent);
  }, "");
  let offsetInText = preNodeText.length;
  if (boundary.node.nodeType === Node.TEXT_NODE) {
    offsetInText += boundary.offset;
  } else if (isRangeEnd) {
    offsetInText += innerNodeText.length;
  }
  const postNodeText = nodes.postNodes.reduce((prev, cur) => {
    return prev.concat(cur.textContent);
  }, "");
  const allNodes = [...nodes.preNodes, ...nodes.innerNodes, ...nodes.postNodes];
  if (allNodes.length == 0) {
    return;
  }
  const text = preNodeText.concat(innerNodeText, postNodeText);
  const segments = segmenter.segment(text);
  const foundSegment = segments.containing(offsetInText);
  if (!foundSegment) {
    if (isRangeEnd) {
      range.setEndAfter(allNodes[allNodes.length - 1]);
    } else {
      range.setEndBefore(allNodes[0]);
    }
    return;
  }
  if (!foundSegment.isWordLike) {
    return;
  }
  if (
    offsetInText === foundSegment.index ||
    offsetInText === foundSegment.index + foundSegment.segment.length
  ) {
    return;
  }
  const desiredOffsetInText = isRangeEnd
    ? foundSegment.index + foundSegment.segment.length
    : foundSegment.index;
  let newNodeIndexInText = 0;
  for (const node of allNodes) {
    if (
      newNodeIndexInText <= desiredOffsetInText &&
      desiredOffsetInText < newNodeIndexInText + node.textContent.length
    ) {
      const offsetInNode = desiredOffsetInText - newNodeIndexInText;
      if (isRangeEnd) {
        if (offsetInNode >= node.textContent.length) {
          range.setEndAfter(node);
        } else {
          range.setEnd(node, offsetInNode);
        }
      } else {
        if (offsetInNode >= node.textContent.length) {
          range.setStartAfter(node);
        } else {
          range.setStart(node, offsetInNode);
        }
      }
      return;
    }
    newNodeIndexInText += node.textContent.length;
  }
  if (isRangeEnd) {
    range.setEndAfter(allNodes[allNodes.length - 1]);
  } else {
    range.setStartBefore(allNodes[0]);
  }
};
const getTextNodesInSameBlock = (node) => {
  const preNodes = [];
  const backWalker = makeWalkerForNode(node);
  if (!backWalker) {
    return;
  }
  const finishedSubtrees = /* @__PURE__ */ new Set();
  let backNode = internal.backwardTraverse(backWalker, finishedSubtrees);
  while (backNode != null && !isBlock(backNode)) {
    checkTimeout();
    if (backNode.nodeType === Node.TEXT_NODE) {
      preNodes.push(backNode);
    }
    backNode = internal.backwardTraverse(backWalker, finishedSubtrees);
  }
  preNodes.reverse();
  const innerNodes = [];
  if (node.nodeType === Node.TEXT_NODE) {
    innerNodes.push(node);
  } else {
    const walker = document.createTreeWalker(
      node,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      (node2) => {
        return internal.acceptNodeIfVisibleInRange(node2);
      },
    );
    walker.currentNode = node;
    let child = walker.nextNode();
    while (child != null) {
      checkTimeout();
      if (child.nodeType === Node.TEXT_NODE) {
        innerNodes.push(child);
      }
      child = walker.nextNode();
    }
  }
  const postNodes = [];
  const forwardWalker = makeWalkerForNode(node);
  if (!forwardWalker) {
    return;
  }
  const finishedSubtreesForward = /* @__PURE__ */ new Set([node]);
  let forwardNode = internal.forwardTraverse(
    forwardWalker,
    finishedSubtreesForward,
  );
  while (forwardNode != null && !isBlock(forwardNode)) {
    checkTimeout();
    if (forwardNode.nodeType === Node.TEXT_NODE) {
      postNodes.push(forwardNode);
    }
    forwardNode = internal.forwardTraverse(
      forwardWalker,
      finishedSubtreesForward,
    );
  }
  return { preNodes, innerNodes, postNodes };
};
const expandRangeEndToWordBound = (range) => {
  const segmenter = internal.makeNewSegmenter();
  if (segmenter) {
    const endNode = getLastNodeForBlockSearch(range);
    if (endNode !== range.endContainer) {
      range.setEndAfter(endNode);
    }
    expandToNearestWordBoundaryPointUsingSegments(
      segmenter,
      /* expandForward= */
      true,
      range,
    );
  } else {
    let initialOffset = range.endOffset;
    let node = range.endContainer;
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (range.endOffset < node.childNodes.length) {
        node = node.childNodes[range.endOffset];
      }
    }
    const walker = makeWalkerForNode(node);
    if (!walker) {
      return;
    }
    const finishedSubtrees = /* @__PURE__ */ new Set([node]);
    while (node != null) {
      checkTimeout();
      const newOffset = findWordEndBoundInTextNode(node, initialOffset);
      initialOffset = null;
      if (newOffset !== -1) {
        range.setEnd(node, newOffset);
        return;
      }
      if (isBlock(node)) {
        if (node.contains(range.endContainer)) {
          range.setEnd(node, node.childNodes.length);
        } else {
          range.setEndBefore(node);
        }
        return;
      }
      node = internal.forwardTraverse(walker, finishedSubtrees);
    }
    range.collapse();
  }
};
const isBlock = (node) => {
  return (
    node.nodeType === Node.ELEMENT_NODE &&
    (internal.BLOCK_ELEMENTS.includes(node.tagName.toUpperCase()) ||
      node.tagName.toUpperCase() === "HTML" ||
      node.tagName.toUpperCase() === "BODY")
  );
};
const isText = (node) => {
  return node.nodeType === Node.TEXT_NODE;
};
if (typeof goog !== "undefined") {
  goog.declareModuleId(
    "googleChromeLabs.textFragmentPolyfill.fragmentGenerationUtils",
  );
}
const REQUEST_CHANNEL = "webpage:generate-text-fragment";
const RESULT_CHANNEL = "webpage:text-fragment-result";
const encodeFragmentComponent = (text) =>
  encodeURIComponent(text).replace(/-/g, "%2D");
const buildTextFragmentUrl = (fragment) => {
  const prefix = fragment.prefix
    ? `${encodeFragmentComponent(fragment.prefix)}-,`
    : "";
  const suffix = fragment.suffix
    ? `,-${encodeFragmentComponent(fragment.suffix)}`
    : "";
  const textStart = encodeFragmentComponent(fragment.textStart);
  const textEnd = fragment.textEnd
    ? `,${encodeFragmentComponent(fragment.textEnd)}`
    : "";
  const baseUrl = `${location.origin}${location.pathname}${location.search}`;
  const existingHash = location.hash || "#";
  return `${baseUrl}${existingHash}:~:text=${prefix}${textStart}${textEnd}${suffix}`;
};
const generateUrlFromSelection = () => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
    return { error: "no-selection" };
  }
  let result;
  try {
    result = generateFragment(selection);
  } catch {
    return { error: "execution-failed" };
  }
  if (result.status === GenerateFragmentStatus.SUCCESS && result.fragment) {
    return { url: buildTextFragmentUrl(result.fragment) };
  }
  if (result.status === GenerateFragmentStatus.AMBIGUOUS) {
    return { error: "ambiguous" };
  }
  if (result.status === GenerateFragmentStatus.TIMEOUT) {
    return { error: "timeout" };
  }
  return { error: "invalid-selection" };
};
const registerCopyLinkToHighlight = () => {
  electron.ipcRenderer.on(REQUEST_CHANNEL, (_event, request) => {
    const requestId = request?.requestId ?? "";
    const outcome = generateUrlFromSelection();
    try {
      electron.ipcRenderer.send(RESULT_CHANNEL, { requestId, ...outcome });
    } catch {}
  });
};
const createMediaCaptureActivityBridgeEventName = () => {
  const bytes = new Uint8Array(16);
  globalThis.crypto.getRandomValues(bytes);
  const token = Array.from(bytes, (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
  return `__m${token}`;
};
function installMediaCaptureActivityBridge(bridgeEventName, markerNamespace) {
  const existing = Object.getOwnPropertyDescriptor(window, markerNamespace);
  const existingBag =
    existing && typeof existing.value === "object" && existing.value !== null
      ? existing.value
      : null;
  const markers = existingBag ?? {};
  if (!existingBag) {
    Object.defineProperty(window, markerNamespace, {
      value: markers,
      configurable: true,
      writable: true,
      enumerable: true,
    });
  }
  if (markers.mediaCaptureBridge) return;
  markers.mediaCaptureBridge = true;
  const mediaDevices = navigator.mediaDevices;
  if (!mediaDevices) return;
  const liveTracks = /* @__PURE__ */ new Set();
  const trackedTracks = /* @__PURE__ */ new WeakSet();
  const trackedStreams = /* @__PURE__ */ new WeakSet();
  const dispatchBridgeEvent = window.dispatchEvent.bind(window);
  const BridgeCustomEvent = window.CustomEvent;
  let pruneTimer = null;
  let lastReportedActive = null;
  const replaceMethod = (target, name, build) => {
    if (!target) return;
    const descriptor = Object.getOwnPropertyDescriptor(target, name);
    const original = descriptor?.value;
    if (typeof original !== "function") return;
    const replacement = build(original);
    try {
      Object.defineProperty(replacement, "name", {
        value: name,
        configurable: true,
      });
      Object.defineProperty(target, name, {
        ...descriptor,
        value: replacement,
      });
    } catch {}
  };
  const report = () => {
    const active = liveTracks.size > 0;
    if (active === lastReportedActive) return;
    lastReportedActive = active;
    try {
      dispatchBridgeEvent(
        new BridgeCustomEvent(bridgeEventName, { detail: active }),
      );
    } catch {}
  };
  const pruneEndedTracks = () => {
    for (const track of liveTracks) {
      if (track.readyState === "ended") liveTracks.delete(track);
    }
    report();
    if (liveTracks.size === 0 && pruneTimer !== null) {
      window.clearInterval(pruneTimer);
      pruneTimer = null;
    }
  };
  const rememberTrack = (track) => {
    if (track.readyState !== "live" || liveTracks.has(track)) return;
    liveTracks.add(track);
    trackedTracks.add(track);
    track.addEventListener(
      "ended",
      () => {
        liveTracks.delete(track);
        pruneEndedTracks();
      },
      { once: true },
    );
    if (pruneTimer === null) {
      pruneTimer = window.setInterval(pruneEndedTracks, 1e3);
    }
    report();
  };
  const rememberStream = (stream) => {
    if (trackedStreams.has(stream)) return stream;
    trackedStreams.add(stream);
    for (const track of stream.getTracks()) rememberTrack(track);
    stream.addEventListener("addtrack", (event) => rememberTrack(event.track));
    return stream;
  };
  replaceMethod(
    typeof MediaStream === "undefined" ? void 0 : MediaStream.prototype,
    "clone",
    (original) => {
      return function clone(...args) {
        const cloned = original.apply(this, args);
        if (
          !trackedStreams.has(this) ||
          !(typeof MediaStream !== "undefined" && cloned instanceof MediaStream)
        )
          return cloned;
        return rememberStream(cloned);
      };
    },
  );
  replaceMethod(
    typeof MediaStreamTrack === "undefined"
      ? void 0
      : MediaStreamTrack.prototype,
    "clone",
    (original) => {
      return function clone(...args) {
        const cloned = original.apply(this, args);
        if (
          !trackedTracks.has(this) ||
          !(
            typeof MediaStreamTrack !== "undefined" &&
            cloned instanceof MediaStreamTrack
          )
        )
          return cloned;
        rememberTrack(cloned);
        return cloned;
      };
    },
  );
  const watchCapture = (original) => {
    return function capture(...args) {
      const result = original.apply(this, args);
      if (!(result instanceof Promise)) return result;
      return result.then((stream) =>
        typeof MediaStream !== "undefined" && stream instanceof MediaStream
          ? rememberStream(stream)
          : stream,
      );
    };
  };
  const mediaDevicesProto =
    typeof MediaDevices === "undefined" ? void 0 : MediaDevices.prototype;
  replaceMethod(mediaDevicesProto, "getUserMedia", watchCapture);
  replaceMethod(mediaDevicesProto, "getDisplayMedia", watchCapture);
  window.addEventListener(
    "pagehide",
    () => {
      liveTracks.clear();
      pruneEndedTracks();
    },
    { once: true },
  );
  report();
}
let processReplacementChannel;
const createNotificationClickBridgeEventName = () => {
  const bytes = new Uint8Array(16);
  globalThis.crypto.getRandomValues(bytes);
  const token = Array.from(bytes, (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
  return `__n${token}`;
};
const createNotificationCaptureConfig = () => {
  const markerBytes = new Uint8Array(12);
  globalThis.crypto.getRandomValues(markerBytes);
  const markerToken = Array.from(markerBytes, (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
  if (processReplacementChannel === void 0) {
    const channelBytes = new Uint8Array(12);
    globalThis.crypto.getRandomValues(channelBytes);
    processReplacementChannel = `__r${Array.from(channelBytes, (byte) => byte.toString(16).padStart(2, "0")).join("")}`;
  }
  return {
    eventName: createNotificationClickBridgeEventName(),
    markerNamespace: `__m${markerToken}`,
    replacementChannel: processReplacementChannel,
  };
};
function installNotificationClickBridge(
  bridgeEventName,
  markerNamespace,
  replacementChannelName,
  bridgeName,
  target = window,
) {
  const reflectGet = Reflect.get.bind(Reflect);
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor.bind(Object);
  const defineProperty = Object.defineProperty.bind(Object);
  const installMarker = Symbol.for(`${bridgeName}:notification-capture`);
  const randomUUID = target.crypto.randomUUID.bind(target.crypto);
  function isBridge(value2) {
    if (!value2) return false;
    try {
      return (
        typeof reflectGet(value2, "shouldCaptureBrowserRequest") ===
          "function" &&
        typeof reflectGet(value2, "requestBrowserInteraction") === "function" &&
        typeof reflectGet(value2, "cancelBrowserInteraction") === "function" &&
        typeof reflectGet(value2, "captureBrowserRequest") === "function" &&
        typeof reflectGet(value2, "onBrowserControlChanged") === "function"
      );
    } catch {
      return false;
    }
  }
  function findBridge(realm) {
    let candidate = realm;
    let trusted = null;
    while (true) {
      try {
        const descriptor = getOwnPropertyDescriptor(candidate, bridgeName);
        const value2 =
          descriptor?.configurable === false
            ? reflectGet(candidate, bridgeName)
            : null;
        if (typeof value2 === "object" && isBridge(value2)) {
          trusted = { bridge: value2, owner: candidate };
        }
        const parent = reflectGet(candidate, "parent");
        if (candidate === parent) {
          if (!trusted && realm !== window) return findBridge(window);
          return trusted;
        }
        candidate = parent;
      } catch {
        return trusted;
      }
    }
  }
  const existing = reflectGet(target, installMarker);
  if (existing) {
    existing.update(bridgeEventName, markerNamespace, replacementChannelName);
    return;
  }
  let configuredEventName = null;
  let configuredMarkerNamespace = null;
  let configuredReplacementChannel = null;
  let configuredEventTarget = null;
  let bridge = null;
  let unsubscribeControl = null;
  function currentBridge() {
    bridge = findBridge(target)?.bridge ?? null;
    return bridge;
  }
  function shouldCapture() {
    const current = currentBridge();
    if (!current) return true;
    try {
      return current.shouldCaptureBrowserRequest() !== false;
    } catch {
      return true;
    }
  }
  const state = {
    update(eventName, namespace, channel) {
      const trusted = findBridge(target);
      if (!trusted || !eventName || !namespace) return;
      if (configuredEventName === null) {
        configuredEventName = eventName;
        configuredMarkerNamespace = namespace;
        configuredReplacementChannel = channel || null;
        configuredEventTarget = trusted.owner;
      } else if (
        configuredEventName !== eventName ||
        configuredMarkerNamespace !== namespace
      ) {
        return;
      }
      bridge = trusted.bridge;
      bindControlListener();
    },
  };
  if (!target.Notification) {
    return;
  }
  defineProperty(target, installMarker, {
    value: state,
    configurable: false,
    enumerable: false,
    writable: false,
  });
  const OriginalNotification = target.Notification;
  const nativeNotifications = /* @__PURE__ */ new Set();
  const capturedNotifications = /* @__PURE__ */ new Map();
  let pageActive = true;
  const taggedNotifications = /* @__PURE__ */ new Map();
  const objectCreate = Object.create;
  const reflectApply = Reflect.apply;
  const now = Date.now;
  const closeNative = OriginalNotification.prototype.close;
  const ReplacementChannel = target.BroadcastChannel;
  const channelPrototype = ReplacementChannel?.prototype;
  const messagePrototype = target.MessageEvent?.prototype;
  const postToChannel = ReplacementChannel?.prototype.postMessage;
  const setChannelListener =
    // eslint-disable-next-line @typescript-eslint/unbound-method
    channelPrototype &&
    getOwnPropertyDescriptor(channelPrototype, "onmessage")?.set;
  const messageData =
    messagePrototype && getOwnPropertyDescriptor(messagePrototype, "data")?.get;
  let replacementChannel = null;
  function websiteTagOf(options) {
    if (typeof options !== "object" || options === null) return null;
    const tag = reflectGet(options, "tag");
    if (tag === void 0 || typeof tag === "symbol") return null;
    const text = String(tag);
    return text === "" ? null : text;
  }
  function isOlder(notification, than) {
    if (notification.shownAt !== than.shownAt)
      return notification.shownAt < than.shownAt;
    return notification.id < than.id;
  }
  function closeTag(tag, newer) {
    for (const [notification, tagged] of taggedNotifications) {
      if (tagged.tag !== tag || (newer && !isOlder(tagged, newer))) continue;
      taggedNotifications.delete(notification);
      try {
        reflectApply(closeNative, notification, []);
      } catch {}
    }
  }
  function sharedReplacementChannel() {
    if (
      replacementChannel ||
      !configuredReplacementChannel ||
      !ReplacementChannel
    ) {
      return replacementChannel;
    }
    if (!postToChannel || !setChannelListener || !messageData) return null;
    try {
      const channel = new ReplacementChannel(configuredReplacementChannel);
      reflectApply(setChannelListener, channel, [
        (event) => {
          if (!pageActive) return;
          const shown = reflectApply(messageData, event, []);
          if (typeof shown !== "object" || shown === null) return;
          const { tag, shownAt, id } = shown;
          if (
            typeof tag !== "string" ||
            typeof shownAt !== "number" ||
            typeof id !== "string"
          ) {
            return;
          }
          closeTag(tag, { tag, shownAt, id });
        },
      ]);
      replacementChannel = channel;
    } catch {
      replacementChannel = null;
    }
    return replacementChannel;
  }
  function announce(tagged) {
    const channel = sharedReplacementChannel();
    if (!channel || !postToChannel) return;
    try {
      reflectApply(postToChannel, channel, [tagged]);
    } catch {}
  }
  function showNative(args, newTarget) {
    const tag = websiteTagOf(args[1]);
    if (tag === null) {
      return Reflect.construct(OriginalNotification, args, newTarget);
    }
    const tagged = { tag, shownAt: now(), id: randomUUID() };
    const options = objectCreate(args[1], {
      tag: { value: `${tag}#${tagged.id.slice(0, 8)}`, enumerable: true },
    });
    closeTag(tag);
    const notification = Reflect.construct(
      OriginalNotification,
      [args[0], options],
      newTarget,
    );
    defineProperty(notification, "tag", { value: tag, configurable: true });
    taggedNotifications.set(notification, tagged);
    announce(tagged);
    return notification;
  }
  function forwardClick() {
    if (!configuredEventName || !configuredEventTarget) return;
    try {
      configuredEventTarget.dispatchEvent(
        new configuredEventTarget.Event(configuredEventName),
      );
    } catch {}
  }
  function captureNotification(title, options) {
    if (!pageActive) {
      throw new target.DOMException(
        "The notification document is no longer active.",
        "InvalidStateError",
      );
    }
    if (options.actions?.length) {
      throw new TypeError(
        "Notification actions require a service worker registration.",
      );
    }
    if (
      options.dir !== void 0 &&
      !["auto", "ltr", "rtl"].includes(options.dir)
    ) {
      throw new TypeError("Invalid notification direction.");
    }
    const body = options.body === void 0 ? "" : String(options.body);
    const tag = options.tag === void 0 ? "" : String(options.tag);
    if (options.renotify && !tag)
      throw new TypeError("Renotify requires a notification tag.");
    if (options.silent && options.vibrate !== void 0) {
      throw new TypeError("A silent notification cannot specify vibration.");
    }
    const notification = Object.setPrototypeOf(
      new target.EventTarget(),
      OriginalNotification.prototype,
    );
    let closed = false;
    let answering = false;
    const interactionBridge = currentBridge();
    const requestToken = randomUUID();
    const close = () => {
      if (closed) return;
      closed = true;
      capturedNotifications.delete(notification);
      if (!answering) {
        try {
          interactionBridge?.cancelBrowserInteraction(requestToken);
        } catch {}
      }
      notification.dispatchEvent(new target.Event("close"));
    };
    const absoluteURL = (value2) => {
      if (!value2) return "";
      try {
        return new URL(String(value2), target.document.baseURI).href;
      } catch {
        return "";
      }
    };
    const vibratePattern = () => {
      if (options.vibrate === void 0) return [];
      if (typeof options.vibrate === "number") return [options.vibrate];
      return [...options.vibrate];
    };
    Object.defineProperties(notification, {
      title: { value: title, enumerable: true },
      body: { value: body, enumerable: true },
      dir: { value: options.dir ?? "auto", enumerable: true },
      lang: { value: options.lang ?? "", enumerable: true },
      tag: { value: tag, enumerable: true },
      icon: { value: absoluteURL(options.icon), enumerable: true },
      badge: { value: absoluteURL(options.badge), enumerable: true },
      image: { value: absoluteURL(options.image), enumerable: true },
      actions: { value: Object.freeze([]), enumerable: true },
      renotify: { value: Boolean(options.renotify), enumerable: true },
      timestamp: { value: options.timestamp ?? Date.now(), enumerable: true },
      vibrate: {
        value: Object.freeze(vibratePattern()),
        enumerable: true,
      },
      data: {
        value:
          options.data === void 0 ? null : target.structuredClone(options.data),
        enumerable: true,
      },
      requireInteraction: {
        value: Boolean(options.requireInteraction),
        enumerable: true,
      },
      silent: { value: options.silent ?? null, enumerable: true },
      onclick: { value: null, writable: true, configurable: true },
      onclose: { value: null, writable: true, configurable: true },
      onerror: { value: null, writable: true, configurable: true },
      onshow: { value: null, writable: true, configurable: true },
      close: { value: close, writable: true, configurable: true },
    });
    for (const kind of ["click", "close", "error", "show"]) {
      notification.addEventListener(kind, (event) => {
        const handler = notification[`on${kind}`];
        if (typeof handler === "function") handler.call(notification, event);
      });
    }
    if (tag) {
      for (const [existing2, closeExisting] of capturedNotifications) {
        if (existing2.tag === tag) closeExisting();
      }
    }
    capturedNotifications.set(notification, close);
    queueMicrotask(() => {
      if (!closed) notification.dispatchEvent(new target.Event("show"));
    });
    const fail = () => {
      if (closed) return;
      notification.dispatchEvent(new target.Event("error"));
      close();
    };
    if (!interactionBridge) {
      queueMicrotask(fail);
      return notification;
    }
    let response;
    try {
      response = interactionBridge.requestBrowserInteraction(
        {
          kind: "notification",
          message: (body
            ? `${title}
${body}`
            : title
          ).slice(0, 16384),
          title: title.slice(0, 8e3),
          body: body.slice(0, 8e3),
        },
        (response2) => {
          if (closed || !pageActive || !shouldCapture()) return false;
          answering = true;
          if (response2.action === "click") {
            notification.dispatchEvent(new target.Event("click"));
          }
          close();
          return true;
        },
        requestToken,
      );
    } catch {
      queueMicrotask(fail);
      return notification;
    }
    void response.catch(fail);
    return notification;
  }
  const nativeRequestPermission =
    typeof OriginalNotification.requestPermission === "function"
      ? OriginalNotification.requestPermission.bind(OriginalNotification)
      : null;
  const requestPermission = (callback) => {
    const current = currentBridge();
    if (current && !shouldCapture()) {
      if (!nativeRequestPermission) return Promise.resolve("denied");
      return nativeRequestPermission.call(OriginalNotification, callback);
    }
    try {
      current?.captureBrowserRequest({
        kind: "notification",
        message: "Notification permission requires human takeover.",
        disposition: "human-required",
      });
    } catch {}
    return Promise.resolve("denied").then((permission) => {
      callback?.(permission);
      return permission;
    });
  };
  const NotificationConstructor = new Proxy(OriginalNotification, {
    construct(_constructor, args, newTarget) {
      if (args.length === 0) {
        throw new TypeError(
          "Failed to construct 'Notification': 1 argument required.",
        );
      }
      const title = args[0];
      const options = args[1];
      bindControlListener();
      if (shouldCapture()) {
        if (typeof title === "symbol")
          throw new TypeError("Cannot convert a Symbol to a string.");
        return captureNotification(String(title), options ?? {});
      }
      const notification = showNative(args, newTarget);
      nativeNotifications.add(notification);
      notification.addEventListener("click", forwardClick, { once: true });
      notification.addEventListener(
        "close",
        () => {
          nativeNotifications.delete(notification);
          taggedNotifications.delete(notification);
        },
        { once: true },
      );
      return notification;
    },
    apply() {
      throw new TypeError(
        "Failed to construct 'Notification': Please use the 'new' operator, this DOM object constructor cannot be called as a function.",
      );
    },
    get(constructor, property) {
      if (property === "requestPermission" && nativeRequestPermission)
        return requestPermission;
      return Reflect.get(constructor, property, constructor);
    },
  });
  Object.defineProperty(NotificationConstructor.prototype, "constructor", {
    value: NotificationConstructor,
    writable: true,
    configurable: true,
  });
  target.Notification = NotificationConstructor;
  const registrationPrototype = target.ServiceWorkerRegistration?.prototype;
  if (registrationPrototype?.showNotification) {
    const originalShowNotification = registrationPrototype.showNotification;
    registrationPrototype.showNotification = function (title, options) {
      const current = currentBridge();
      if (current && !shouldCapture()) {
        return originalShowNotification.call(this, title, options);
      }
      try {
        current?.captureBrowserRequest({
          kind: "notification",
          message: "A service worker notification requires human takeover.",
          disposition: "human-required",
        });
      } catch {}
      return Promise.reject(
        new target.DOMException(
          "Notification requires human takeover.",
          "NotAllowedError",
        ),
      );
    };
  }
  function closeCapturedNotifications() {
    for (const close of capturedNotifications.values()) close();
    capturedNotifications.clear();
  }
  const controlChanged = (active) => {
    if (active) {
      for (const notification of nativeNotifications) notification.close();
      nativeNotifications.clear();
      taggedNotifications.clear();
    } else closeCapturedNotifications();
  };
  function bindControlListener() {
    if (unsubscribeControl || !pageActive) return;
    const current = currentBridge();
    if (!current) return;
    try {
      unsubscribeControl = current.onBrowserControlChanged(controlChanged);
    } catch {}
  }
  target.addEventListener("pagehide", () => {
    pageActive = false;
    unsubscribeControl?.();
    unsubscribeControl = null;
    closeCapturedNotifications();
  });
  target.addEventListener("pageshow", () => {
    pageActive = true;
    bindControlListener();
    controlChanged(shouldCapture());
  });
  for (const prototype of [
    target.HTMLIFrameElement.prototype,
    target.HTMLFrameElement.prototype,
  ]) {
    for (const key of ["contentWindow", "contentDocument"]) {
      const descriptor = Object.getOwnPropertyDescriptor(prototype, key);
      if (!descriptor?.get) continue;
      const get = descriptor.get;
      Object.defineProperty(prototype, key, {
        ...descriptor,
        get: function () {
          const result = get.call(this);
          if (!result || this.hasAttribute("srcdoc")) return result;
          const source = this.getAttribute("src");
          if (source && source !== "about:blank") return result;
          try {
            const child = key === "contentWindow" ? result : result.defaultView;
            if (child) {
              installNotificationClickBridge(
                bridgeEventName,
                markerNamespace,
                replacementChannelName,
                bridgeName,
                child,
              );
            }
          } catch {}
          return result;
        },
      });
    }
  }
  for (const frame of target.document.querySelectorAll("iframe, frame")) {
    void frame.contentWindow;
  }
  const nativeOpen = target.open.bind(target);
  target.open = function (...args) {
    const child = nativeOpen(...args);
    if (child) {
      try {
        installNotificationClickBridge(
          bridgeEventName,
          markerNamespace,
          replacementChannelName,
          bridgeName,
          child,
        );
      } catch {}
    }
    return child;
  };
  state.update(bridgeEventName, markerNamespace, replacementChannelName);
}
const createPageMarkerNamespace = () => {
  const bytes = new Uint8Array(12);
  globalThis.crypto.getRandomValues(bytes);
  const token = Array.from(bytes, (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
  return `__m${token}`;
};
const webauthnPatchScript = `// @ts-check
/* eslint-env browser */
/**
 * WebAuthn patch script
 *
 * This minimal script runs in the page context and patches navigator.credentials
 * to use the electronCredentials bridge exposed via contextBridge.
 *
 * Architecture:
 * 1. Preload exposes electronCredentials via contextBridge.exposeInMainWorld()
 * 2. This script patches navigator.credentials to use the bridge
 * 3. Bridge is deleted after patching for security
 */
;(function webauthnPatch() {
  'use strict'

  // Check if the bridge was exposed
  if (!('electronCredentials' in globalThis)) {
    return
  }

  /** @type {any} */
  const bridge = globalThis.electronCredentials

  // Check if WebAuthn is available in this browser
  if (!('navigator' in globalThis) || !('credentials' in globalThis.navigator)) {
    // Clean up bridge - try delete first, fall back to setting undefined
    try {
      delete globalThis.electronCredentials
    } catch {
      try {
        globalThis.electronCredentials = undefined
      } catch {
        // Cannot clean up - leave it
      }
    }
    return
  }

  const credentials = globalThis.navigator.credentials
  const oldCredentialsCreate = credentials.create.bind(credentials)
  const oldCredentialsGet = credentials.get.bind(credentials)

  // Cache whether the native addon is available
  /** @type {boolean | undefined} */
  let isAddonAvailableCache

  /**
   * Check if we should use the macOS WebAuthn addon
   * @returns {Promise<boolean>}
   */
  async function shouldUseNativeAddon() {
    if (isAddonAvailableCache !== undefined) {
      return isAddonAvailableCache
    }
    try {
      const result = await bridge.isAvailable()
      isAddonAvailableCache = result === true
      return isAddonAvailableCache
    } catch {
      isAddonAvailableCache = false
      return false
    }
  }

  function isDebugLoggingEnabled() {
    try {
      return globalThis.localStorage?.getItem('orbitra:webauthn-debug') === '1'
    } catch {
      return false
    }
  }

  function logRoutingDecision(operation, route, publicKeyOptions) {
    if (!isDebugLoggingEnabled()) return

    const allowCredentials = publicKeyOptions?.allowCredentials
    const transportHints = Array.isArray(allowCredentials)
      ? allowCredentials.map((descriptor) =>
          Array.isArray(descriptor?.transports) ? descriptor.transports : []
        )
      : []

    console.info('[Orbitra WebAuthn]', {
      operation,
      route,
      authenticatorAttachment: publicKeyOptions?.authenticatorSelection?.authenticatorAttachment,
      allowCredentialsCount: Array.isArray(allowCredentials) ? allowCredentials.length : 0,
      transportHints
    })
  }

  /**
   * Convert error code string to DOMException
   * @param {string} errorCode
   * @returns {DOMException}
   */
  function createDOMException(errorCode) {
    const errorMessages = {
      NotSupportedError: 'The operation is not supported',
      InvalidStateError: 'The object is in an invalid state',
      NotAllowedError: 'The request is not allowed by the user agent or the platform',
      SecurityError: 'The operation is insecure',
      AbortError: 'The operation was aborted',
      ConstraintError: 'A constraint could not be met',
      UnknownError: 'The operation failed for an unknown reason'
    }
    const message = errorMessages[errorCode] || errorCode || 'Unknown WebAuthn error'
    return new DOMException(message, errorCode || 'UnknownError')
  }

  /**
   * Serialize ArrayBuffer to base64 string
   * @param {ArrayBuffer | ArrayBufferView} buffer
   * @returns {string}
   */
  function arrayBufferToBase64(buffer) {
    const bytes =
      buffer instanceof ArrayBuffer
        ? new Uint8Array(buffer)
        : new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength)
    let binary = ''
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
  }

  /**
   * Deserialize base64 string to ArrayBuffer
   * @param {string} base64
   * @returns {ArrayBuffer}
   */
  function base64ToArrayBuffer(base64) {
    // Handle base64url encoding
    let standardBase64 = base64.replace(/-/g, '+').replace(/_/g, '/')
    while (standardBase64.length % 4) standardBase64 += '='
    const binary = atob(standardBase64)
    const bytes = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i)
    }
    return bytes.buffer
  }

  /**
   * Serialize credential options for IPC
   * @param {Record<string, any>} options
   * @returns {Record<string, any>}
   */
  function serializeOptions(options) {
    if (!options) return options

    const result = { ...options }

    // Serialize challenge
    if (result.challenge instanceof ArrayBuffer || ArrayBuffer.isView(result.challenge)) {
      result.challenge = { __type: 'ArrayBuffer', data: arrayBufferToBase64(result.challenge) }
    }

    // Serialize user.id
    if (result.user?.id instanceof ArrayBuffer || ArrayBuffer.isView(result.user?.id)) {
      result.user = {
        ...result.user,
        id: { __type: 'ArrayBuffer', data: arrayBufferToBase64(result.user.id) }
      }
    }

    // Serialize excludeCredentials
    if (Array.isArray(result.excludeCredentials)) {
      result.excludeCredentials = result.excludeCredentials.map((cred) => ({
        ...cred,
        id:
          cred.id instanceof ArrayBuffer || ArrayBuffer.isView(cred.id)
            ? { __type: 'ArrayBuffer', data: arrayBufferToBase64(cred.id) }
            : cred.id
      }))
    }

    // Serialize allowCredentials
    if (Array.isArray(result.allowCredentials)) {
      result.allowCredentials = result.allowCredentials.map((cred) => ({
        ...cred,
        id:
          cred.id instanceof ArrayBuffer || ArrayBuffer.isView(cred.id)
            ? { __type: 'ArrayBuffer', data: arrayBufferToBase64(cred.id) }
            : cred.id
      }))
    }

    return result
  }

  /**
   * Deserialize credential response from IPC
   * @param {Record<string, any>} credential
   * @returns {Record<string, any>}
   */
  function deserializeCredential(credential) {
    if (!credential) return credential

    const result = { ...credential }

    // Deserialize rawId
    if (result.rawId?.__type === 'ArrayBuffer') {
      result.rawId = base64ToArrayBuffer(result.rawId.data)
    }

    // Deserialize response fields
    if (result.response) {
      const response = { ...result.response }

      if (response.clientDataJSON?.__type === 'ArrayBuffer') {
        response.clientDataJSON = base64ToArrayBuffer(response.clientDataJSON.data)
      }
      if (response.attestationObject?.__type === 'ArrayBuffer') {
        response.attestationObject = base64ToArrayBuffer(response.attestationObject.data)
      }
      if (response.authenticatorData?.__type === 'ArrayBuffer') {
        response.authenticatorData = base64ToArrayBuffer(response.authenticatorData.data)
      }
      if (response.signature?.__type === 'ArrayBuffer') {
        response.signature = base64ToArrayBuffer(response.signature.data)
      }
      if (response.userHandle?.__type === 'ArrayBuffer') {
        response.userHandle = base64ToArrayBuffer(response.userHandle.data)
      }
      if (response.publicKey?.__type === 'ArrayBuffer') {
        response.publicKey = base64ToArrayBuffer(response.publicKey.data)
      }

      result.response = response
    }

    return result
  }

  function deserializeExtensionArrayBuffer(value) {
    if (value?.__type === 'ArrayBuffer' && typeof value.data === 'string') {
      return base64ToArrayBuffer(value.data)
    }
    return value
  }

  function deserializeClientExtensionResults(clientExtensionResults) {
    if (!clientExtensionResults || typeof clientExtensionResults !== 'object') {
      return {}
    }

    const extensionResults = { ...clientExtensionResults }
    const prfResults = extensionResults.prf?.results
    if (prfResults) {
      extensionResults.prf = {
        ...extensionResults.prf,
        results: {
          ...prfResults,
          first: deserializeExtensionArrayBuffer(prfResults.first),
          second: deserializeExtensionArrayBuffer(prfResults.second)
        }
      }
    }

    const largeBlob = extensionResults.largeBlob
    if (largeBlob) {
      extensionResults.largeBlob = {
        ...largeBlob,
        blob: deserializeExtensionArrayBuffer(largeBlob.blob)
      }
    }

    return extensionResults
  }

  /**
   * Build a proper PublicKeyCredential object with correct prototype chain
   * @param {Record<string, any>} data
   * @param {boolean} isCreate
   * @returns {PublicKeyCredential}
   */
  function buildCredentialResult(data, isCreate) {
    const response = data.response
    const clientExtensionResults = deserializeClientExtensionResults(data.clientExtensionResults)

    // Add methods to response based on type
    if (isCreate) {
      // AuthenticatorAttestationResponse methods per WebAuthn spec
      // These return the actual values from the credential response
      response.getAuthenticatorData = () => response.authenticatorData || new ArrayBuffer(0)
      response.getPublicKey = () => response.publicKey || null
      response.getPublicKeyAlgorithm = () =>
        typeof response.publicKeyAlgorithm === 'number' ? response.publicKeyAlgorithm : null
      response.getTransports = () => response.transports || ['internal']
    }

    const credential = {
      id: data.id,
      type: data.type || 'public-key',
      rawId: data.rawId,
      response,
      authenticatorAttachment: data.authenticatorAttachment || 'platform',
      getClientExtensionResults: () => clientExtensionResults
    }

    // Set prototype chain for instanceof checks
    try {
      if (isCreate && typeof AuthenticatorAttestationResponse !== 'undefined') {
        Object.setPrototypeOf(credential.response, AuthenticatorAttestationResponse.prototype)
      } else if (!isCreate && typeof AuthenticatorAssertionResponse !== 'undefined') {
        Object.setPrototypeOf(credential.response, AuthenticatorAssertionResponse.prototype)
      }
      if (typeof PublicKeyCredential !== 'undefined') {
        Object.setPrototypeOf(credential, PublicKeyCredential.prototype)
      }
    } catch {
      // Failed to set prototype chain - credential will still work but instanceof checks may fail
    }

    // Add toJSON method
    credential.toJSON = function () {
      const toBase64URL = (buf) => {
        const base64 = arrayBufferToBase64(buf)
        return base64.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=/g, '')
      }
      const responseJSON = {
        clientDataJSON: toBase64URL(this.response.clientDataJSON)
      }
      if (this.response.attestationObject) {
        responseJSON.attestationObject = toBase64URL(this.response.attestationObject)
      }
      if (this.response.authenticatorData) {
        responseJSON.authenticatorData = toBase64URL(this.response.authenticatorData)
      }
      if (this.response.signature) {
        responseJSON.signature = toBase64URL(this.response.signature)
      }
      if (!isCreate) {
        responseJSON.userHandle = this.response.userHandle
          ? toBase64URL(this.response.userHandle)
          : null
      }
      if (this.response.publicKey) {
        responseJSON.publicKey = toBase64URL(this.response.publicKey)
      }
      if (typeof this.response.publicKeyAlgorithm === 'number') {
        responseJSON.publicKeyAlgorithm = this.response.publicKeyAlgorithm
      }
      if (this.response.transports) {
        responseJSON.transports = this.response.transports
      }

      return {
        id: this.id,
        rawId: toBase64URL(this.rawId),
        type: this.type,
        response: responseJSON,
        authenticatorAttachment: this.authenticatorAttachment,
        clientExtensionResults: this.getClientExtensionResults()
      }
    }

    return /** @type {PublicKeyCredential} */ (credential)
  }

  // Patch navigator.credentials.create()
  // Every attachment, cross-platform included, goes to the addon when it is available.
  // On macOS Chromium's own WebAuthn inside Electron has no request UI, so a security-key
  // registration handed to it waits for a key touch with nothing on screen; the addon
  // presents the macOS security-key sheet instead. Without the addon (Windows, Linux) the
  // request falls through to Chromium, which shows the OS dialog on those platforms.
  credentials.create = async function (options) {
    if (options?.publicKey && !bridge.allowRequest()) {
      throw createDOMException('NotAllowedError')
    }

    if (options?.publicKey && (await shouldUseNativeAddon())) {
      try {
        logRoutingDecision('create', 'addon', options.publicKey)
        const serializedOptions = serializeOptions(options.publicKey)
        const result = await bridge.create(serializedOptions)

        // Handle error codes
        if (typeof result === 'string') {
          throw createDOMException(result)
        }

        if (result?.error) {
          throw createDOMException(result.error)
        }

        if (result?.credential) {
          const deserialized = deserializeCredential(result.credential)
          return buildCredentialResult(deserialized, true)
        }

        return null
      } catch (e) {
        if (e instanceof DOMException) throw e
        throw createDOMException('UnknownError')
      }
    }

    // Availability checks can yield across a change in page control.
    if (options?.publicKey && !bridge.allowRequest()) {
      throw createDOMException('NotAllowedError')
    }
    const credential = await oldCredentialsCreate(options)
    if (options?.publicKey && !bridge.allowRequest()) {
      throw createDOMException('NotAllowedError')
    }
    return credential
  }

  // Patch navigator.credentials.get()
  credentials.get = async function (options) {
    const isConditional = options?.mediation === 'conditional'
    // Conditional requests only register passive AuthFill metadata. Explicit
    // requests must be gated before either the addon or Chromium can show UI.
    if (options?.publicKey && !isConditional && !bridge.allowRequest()) {
      throw createDOMException('NotAllowedError')
    }

    if (options?.publicKey && (await shouldUseNativeAddon())) {
      try {
        logRoutingDecision('get', 'addon', options.publicKey)
        const serializedOptions = serializeOptions(options.publicKey)
        const result = await bridge.get(serializedOptions, isConditional)

        // Handle error codes
        if (typeof result === 'string') {
          throw createDOMException(result)
        }

        if (result?.error) {
          throw createDOMException(result.error)
        }

        if (result?.credential) {
          const deserialized = deserializeCredential(result.credential)
          return buildCredentialResult(deserialized, false)
        }

        return null
      } catch (e) {
        if (e instanceof DOMException) throw e
        throw createDOMException('UnknownError')
      }
    }

    // When our addon is unavailable and the site uses conditional mediation,
    // return null (no passkeys) instead of falling through to the OS dialog.
    // This prevents unsolicited Windows Security / FIDO2 popups on sites like Google.
    // Explicit (non-conditional) requests still fall through so physical security
    // key users are not broken.
    if (isConditional && options?.publicKey) {
      return null
    }

    // Availability checks can yield across a change in page control.
    if (options?.publicKey && !bridge.allowRequest()) {
      throw createDOMException('NotAllowedError')
    }
    const credential = await oldCredentialsGet(options)
    if (options?.publicKey && !bridge.allowRequest()) {
      throw createDOMException('NotAllowedError')
    }
    return credential
  }

  // Patch PublicKeyCredential static methods
  if ('PublicKeyCredential' in globalThis) {
    // isUserVerifyingPlatformAuthenticatorAvailable
    // When our addon is unavailable, report false to prevent sites from triggering
    // the OS-level FIDO2 dialog (e.g. Windows Security "Insert your security key").
    PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable = async function () {
      return shouldUseNativeAddon()
    }

    // isConditionalMediationAvailable
    // When our addon is unavailable, report false so sites don't attempt
    // conditional mediation which would trigger the OS passkey dialog.
    PublicKeyCredential.isConditionalMediationAvailable = async function () {
      if (await shouldUseNativeAddon()) {
        return bridge.isConditionalMediationAvailable
          ? await bridge.isConditionalMediationAvailable()
          : true
      }
      return false
    }

    // getClientCapabilities (newer API)
    PublicKeyCredential.getClientCapabilities = async function () {
      const available = await shouldUseNativeAddon()
      return {
        conditionalCreate: false,
        conditionalGet: available,
        hybridTransport: true,
        passkeyPlatformAuthenticator: available,
        userVerifyingPlatformAuthenticator: available,
        relatedOrigins: false,
        signalAllAcceptedCredentials: false,
        signalCurrentUserDetails: false,
        signalUnknownCredential: false,
        'extension:appid': false,
        'extension:credProps': true,
        'extension:prf': available,
        'extension:largeBlob': available,
        'extension:minPinLength': false,
        'extension:hmacGetSecret': false
      }
    }
  }

  // Clean up - delete the bridge from globalThis for security
  try {
    delete globalThis.electronCredentials
  } catch {
    // Cannot delete (e.g., non-configurable) - set to undefined instead
    try {
      globalThis.electronCredentials = undefined
    } catch {
      // Ignore - best effort cleanup
    }
  }

  // Pre-warm: Check availability immediately so the first WebAuthn call doesn't have IPC latency
  // This runs async in the background while page JS loads
  shouldUseNativeAddon().catch(() => {})
})()
`;
function installSlackBackground(page) {
  const body = page.body;
  const pageWindow = page.defaultView;
  if (!body || !pageWindow) return () => {};
  const originalColor = body.style.getPropertyValue("background-color");
  const originalPriority = body.style.getPropertyPriority("background-color");
  let appliedColor = "";
  const updateBackground = () => {
    const color =
      pageWindow.getComputedStyle(body).colorScheme === "dark"
        ? "#0d0f0e"
        : "#f6f6f5";
    body.style.backgroundColor = color;
    appliedColor = body.style.backgroundColor;
  };
  const observer = new MutationObserver(updateBackground);
  observer.observe(body, { attributes: true, attributeFilter: ["class"] });
  updateBackground();
  return () => {
    observer.disconnect();
    if (body.style.backgroundColor !== appliedColor) return;
    if (originalColor) {
      body.style.setProperty(
        "background-color",
        originalColor,
        originalPriority,
      );
    } else {
      body.style.removeProperty("background-color");
    }
  };
}
const siteFixes = [
  {
    id: "slack-background",
    origins: ["https://app.slack.com"],
    install: installSlackBackground,
  },
];
function installSiteFixes(page = document, fixes = siteFixes) {
  const pageWindow = page.defaultView;
  if (!pageWindow || pageWindow !== pageWindow.top) return () => {};
  const matches = fixes.filter((fix) =>
    fix.origins.includes(pageWindow.location.origin),
  );
  if (matches.length === 0) return () => {};
  const cleanups = [];
  const apply = () => {
    for (const fix of matches) {
      try {
        cleanups.push(fix.install(page));
      } catch {
        console.warn("[SiteFix] Installation failed", { fixId: fix.id });
      }
    }
  };
  const dispose = () => {
    page.removeEventListener("DOMContentLoaded", apply);
    pageWindow.removeEventListener("pagehide", onPageHide);
    for (const cleanup of cleanups.splice(0)) {
      try {
        cleanup();
      } catch {
        console.warn("[SiteFix] Cleanup failed");
      }
    }
  };
  const onPageHide = (event) => {
    if (!event.persisted) dispose();
  };
  pageWindow.addEventListener("pagehide", onPageHide);
  if (page.readyState === "loading") {
    page.addEventListener("DOMContentLoaded", apply, { once: true });
  } else {
    apply();
  }
  return dispose;
}
function getOriginFromUrl(url, baseUrl) {
  if (!url) return null;
  try {
    const origin = new URL(url, baseUrl).origin;
    return origin === "null" ? null : origin;
  } catch {
    return null;
  }
}
function normalizeAllowToken(token) {
  return token.trim().replace(/^["']|["']$/g, "");
}
function doesFrameAllowCrossOriginWebAuthnGet({
  allow,
  frameSrc,
  relayOrigin,
  topOrigin,
  baseUrl,
}) {
  if (relayOrigin === topOrigin) return true;
  if (!allow) return false;
  for (const declaration of allow.split(";")) {
    const tokens = declaration
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map(normalizeAllowToken);
    if (tokens[0] !== "publickey-credentials-get") continue;
    const frameSrcOrigin = getOriginFromUrl(frameSrc, baseUrl);
    if (tokens.length === 1) {
      if (frameSrcOrigin === relayOrigin) return true;
      continue;
    }
    for (const token of tokens.slice(1)) {
      if (token === "*") return true;
      if (token === "src" && frameSrcOrigin === relayOrigin) return true;
      if (getOriginFromUrl(token, baseUrl) === relayOrigin) return true;
    }
  }
  return false;
}
const IS_DEV = false;
const WEBAUTHN_IFRAME_MESSAGE_TYPE = "__WEBAUTHN_IFRAME_MESSAGE__";
installSiteFixes();
installNavigationErrorDocument();
function getRelayMessageOrigin(origin) {
  try {
    const url = new URL(origin);
    if (url.origin === "null") return null;
    if (url.protocol === "https:") return url.origin;
    if (url.protocol === "http:" && url.hostname === "localhost")
      return url.origin;
    return null;
  } catch {
    return null;
  }
}
function getWebAuthnIframeMessage(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return null;
  const message = data;
  if (message.type !== WEBAUTHN_IFRAME_MESSAGE_TYPE) return null;
  return message;
}
function getFrameElementForMessageSource(source) {
  if (!source) return null;
  const frames = document.querySelectorAll("iframe, frame");
  for (const frame of frames) {
    try {
      if (frame.contentWindow && frame.contentWindow === source) {
        return frame;
      }
    } catch {}
  }
  return null;
}
function getPublicKeyOptions(options) {
  const publicKey = options?.publicKey;
  if (!publicKey || typeof publicKey !== "object" || Array.isArray(publicKey))
    return null;
  return publicKey;
}
function createPreloadRequestId(prefix) {
  if (window.crypto?.randomUUID) {
    return `${prefix}-${window.crypto.randomUUID()}`;
  }
  const bytes = new Uint8Array(16);
  window.crypto.getRandomValues(bytes);
  const suffix = Array.from(bytes, (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
  return `${prefix}-${suffix}`;
}
const pageMarkerNamespace = createPageMarkerNamespace();
const getAutofillDocumentId = installAutofillFill();
const authFillGesture = installAuthFillGesture();
installAuthFillActivation(() => authFillGesture.watchChildFrames());
const mediaCaptureActivityBridgeEventName =
  createMediaCaptureActivityBridgeEventName();
window.addEventListener(mediaCaptureActivityBridgeEventName, (event) => {
  const active = event.detail;
  if (typeof active !== "boolean") return;
  electron.ipcRenderer.send(WEBPAGE_MEDIA_CAPTURE_ACTIVITY_CHANNEL, { active });
});
try {
  electron.contextBridge.executeInMainWorld({
    func: installMediaCaptureActivityBridge,
    args: [mediaCaptureActivityBridgeEventName, pageMarkerNamespace],
  });
} catch {}
const credentialsBridgeName = createPageMarkerNamespace().replace(
  /^__m/,
  "__c",
);
const getWebpageAPI = () => ({
  isDev: IS_DEV,
  requestAutoFill: (tabId, selector, context) => {
    try {
      return electron.ipcRenderer.send("webpage:request-autofill", {
        tabId,
        selector,
        context,
      });
    } catch {}
  },
  closeAutoFill: (tabId) => {
    try {
      return electron.ipcRenderer.send("webpage:close-autofill", { tabId });
    } catch {}
  },
  handleAuthForm: (
    tabId,
    url,
    origin,
    username,
    usernameSelector,
    password,
    passwordSelector,
  ) => {
    try {
      return electron.ipcRenderer.send("webpage:handle-auth-form", {
        tabId,
        url,
        origin,
        username,
        usernameSelector,
        password,
        passwordSelector,
      });
    } catch {}
  },
  requestAuthFill: (
    tabId,
    url,
    origin,
    usernameSelector,
    passwordSelector,
    focused,
    coordinates,
    currentUsername,
    purpose,
  ) => {
    try {
      return electron.ipcRenderer.send("webpage:request-authfill", {
        tabId,
        documentId: getAutofillDocumentId(),
        userActivated: authFillGesture.spend(),
        url,
        origin,
        usernameSelector,
        passwordSelector,
        focused,
        coordinates,
        currentUsername,
        purpose,
      });
    } catch {}
  },
  closeAuthFill: (tabId) => {
    try {
      return electron.ipcRenderer.send("webpage:close-authfill", { tabId });
    } catch {}
  },
  onscroll: (scrollY) => {
    try {
      return electron.ipcRenderer.send("webpage:onscroll", scrollY);
    } catch {}
  },
  onTextSelected: (data) => {
    try {
      return electron.ipcRenderer.send("text-selected", data);
    } catch {}
  },
  onElementClicked: (data) => {
    try {
      return electron.ipcRenderer.send("element-clicked", data);
    } catch {}
  },
  onInputChanged: (data) => {
    try {
      return electron.ipcRenderer.send("input-changed", data);
    } catch {}
  },
  onFormSubmitted: (data) => {
    try {
      return electron.ipcRenderer.send("form-submitted", data);
    } catch {}
  },
  onKeyboardSubmitted: (data) => {
    try {
      return electron.ipcRenderer.send("keyboard-submitted", data);
    } catch {}
  },
  onInputFocus: () => {
    try {
      return electron.ipcRenderer.send("input-focused");
    } catch {}
  },
  onInputBlur: () => {
    try {
      return electron.ipcRenderer.send("input-blurred");
    } catch {}
  },
  onSelectionChange: () => {
    try {
      return electron.ipcRenderer.send("selection-changed");
    } catch {}
  },
  getShortcutOverrideConfig: () => {
    try {
      const windowId =
        process.argv
          .find((arg) => arg.startsWith("--window-id="))
          ?.split("=")[1] || "";
      const layerId =
        process.argv
          .find((arg) => arg.startsWith("--layer-id="))
          ?.split("=")[1] || "";
      if (windowId && layerId) {
        return electron.ipcRenderer.invoke("dendrite-invoke", {
          payload: {
            windowId,
            layerId,
            eventName: "shortcut:get-override-config",
          },
        });
      } else {
        return Promise.resolve({ overrideShortcuts: {} });
      }
    } catch {
      return Promise.resolve({ overrideShortcuts: {} });
    }
  },
  injectCosmeticFilters: (url, data) => {
    try {
      const windowId =
        process.argv
          .find((arg) => arg.startsWith("--window-id="))
          ?.split("=")[1] || "";
      const layerId =
        process.argv
          .find((arg) => arg.startsWith("--layer-id="))
          ?.split("=")[1] || "";
      if (windowId && layerId) {
        return electron.ipcRenderer.invoke("dendrite-invoke", {
          payload: {
            windowId,
            layerId,
            eventName: "adblock:inject-cosmetic-filters",
            url,
            data,
          },
        });
      } else {
        return Promise.resolve({
          success: false,
          error: "No window/layer context",
        });
      }
    } catch (error) {
      return Promise.resolve({ success: false, error: error.message });
    }
  },
  isMutationObserverEnabled: () => {
    try {
      const windowId =
        process.argv
          .find((arg) => arg.startsWith("--window-id="))
          ?.split("=")[1] || "";
      const layerId =
        process.argv
          .find((arg) => arg.startsWith("--layer-id="))
          ?.split("=")[1] || "";
      if (windowId && layerId) {
        return electron.ipcRenderer.invoke("dendrite-invoke", {
          payload: {
            windowId,
            layerId,
            eventName: "adblock:is-mutation-observer-enabled",
          },
        });
      } else {
        return Promise.resolve({ enabled: false });
      }
    } catch {
      return Promise.resolve({ enabled: false });
    }
  },
  capturePrint: (snapshot) => {
    void electron.ipcRenderer
      .invoke("dendrite-invoke", {
        payload: {
          eventName: "ipc:query",
          windowId: "",
          layerId: "",
          query: {
            domain: "tabs",
            action: "capturePrint",
            payload: { snapshot },
          },
        },
      })
      .catch(() => {});
  },
  windowClose: () => {
    try {
      electron.ipcRenderer.send("webpage:window-close");
    } catch {}
  },
  showConfirm: (message) => {
    try {
      return electron.ipcRenderer.sendSync("webpage:dialog-confirm", message);
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error("Dialog confirm IPC failed");
    }
  },
  showAlert: (message) => {
    try {
      electron.ipcRenderer.sendSync("webpage:dialog-alert", message);
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error("Dialog alert IPC failed");
    }
  },
  showPrompt: (message, defaultValue) => {
    try {
      return electron.ipcRenderer.sendSync("webpage:dialog-prompt", {
        message,
        defaultValue,
      });
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error("Dialog prompt IPC failed");
    }
  },
  submitAuthForm: (payload) => {
    try {
      return electron.ipcRenderer.send(
        "webpage:authfill-form-submitted",
        payload,
      );
    } catch {}
  },
});
let agentControlled = false;
let notificationCaptureConfig = createNotificationCaptureConfig();
{
  try {
    const bootstrap = electron.ipcRenderer.sendSync(
      "webpage:is-agent-controlled",
      {
        bootstrap: true,
      },
    );
    if (typeof bootstrap === "object" && bootstrap) {
      agentControlled = bootstrap.agentControlled === true;
      notificationCaptureConfig = bootstrap.notificationCapture;
    } else {
      agentControlled = bootstrap === true;
    }
  } catch {
    agentControlled = false;
  }
}
const browserControlListeners = /* @__PURE__ */ new Set();
electron.ipcRenderer.on(
  "webpage:agent-controlled-changed",
  (_event, value2) => {
    agentControlled = value2 === true;
    for (const listener of browserControlListeners) {
      try {
        listener(agentControlled);
      } catch {}
    }
  },
);
function shouldCaptureBrowserRequest() {
  try {
    return (
      electron.ipcRenderer.sendSync("webpage:is-agent-controlled") === true
    );
  } catch {
    return true;
  }
}
function captureBrowserRequest(request) {
  void electron.ipcRenderer
    .invoke("dendrite-invoke", {
      payload: {
        eventName: "ipc:query",
        windowId: "",
        layerId: "",
        query: {
          domain: "tabs",
          action: "captureBrowserRequest",
          payload: { request },
        },
      },
    })
    .catch(() => {});
}
async function requestBrowserInteraction(
  request,
  apply,
  token = createPreloadRequestId("browser-interaction"),
) {
  const result = await electron.ipcRenderer.invoke("dendrite-invoke", {
    payload: {
      eventName: "ipc:query",
      windowId: "",
      layerId: "",
      query: {
        domain: "tabs",
        action: "requestBrowserInteraction",
        payload: { request, token },
      },
    },
  });
  if (result?.success !== true)
    throw new Error("Browser request was cancelled or unavailable.");
  const response = parse(browserRequestResponseSchema, result.response);
  let applied = false;
  try {
    applied = apply(response) === true;
    return response;
  } finally {
    await settleBrowserInteraction(token, applied);
  }
}
async function settleBrowserInteraction(token, applied) {
  await electron.ipcRenderer.invoke("dendrite-invoke", {
    payload: {
      eventName: "ipc:query",
      windowId: "",
      layerId: "",
      query: {
        domain: "tabs",
        action: "settleBrowserInteraction",
        payload: { token, applied },
      },
    },
  });
}
const webpageAPI = getWebpageAPI();
try {
  electron.contextBridge.exposeInMainWorld(WEBPAGE_BRIDGE_GLOBAL, {
    ...webpageAPI,
    isAgentControlled: () => agentControlled,
    shouldCaptureBrowserRequest,
    captureBrowserRequest,
    requestBrowserInteraction,
    cancelBrowserInteraction: (token) => {
      void settleBrowserInteraction(token, null).catch(() => {});
    },
    onBrowserControlChanged: (listener) => {
      browserControlListeners.add(listener);
      return () => {
        browserControlListeners.delete(listener);
      };
    },
    shouldCapturePrint: () => {
      try {
        return (
          electron.ipcRenderer.sendSync("webpage:is-agent-controlled") === true
        );
      } catch {
        return agentControlled;
      }
    },
  });
} catch {}
for (const install of [
  installDialogCapture,
  installPrintCapture,
  installNativePickerCapture,
  installPasskeyRequestCapture,
  installPresentationCapture,
  installMediaPermissionStatus,
]) {
  try {
    electron.contextBridge.executeInMainWorld({
      func: install,
      args: [WEBPAGE_BRIDGE_GLOBAL],
    });
  } catch {}
}
registerCopyLinkToHighlight();
const notificationBridgeEventName = notificationCaptureConfig.eventName;
const sendNotificationClicked = () => {
  try {
    const windowId =
      process.argv
        .find((arg) => arg.startsWith("--window-id="))
        ?.split("=")[1] || "";
    const layerId =
      process.argv
        .find((arg) => arg.startsWith("--layer-id="))
        ?.split("=")[1] || "";
    electron.ipcRenderer.send("dendrite-event", {
      name: "notification:clicked",
      payload: {
        windowId,
        layerId,
      },
    });
  } catch {}
};
window.addEventListener(notificationBridgeEventName, sendNotificationClicked);
try {
  electron.contextBridge.executeInMainWorld({
    func: installNotificationClickBridge,
    args: [
      notificationBridgeEventName,
      notificationCaptureConfig.markerNamespace,
      notificationCaptureConfig.replacementChannel,
      WEBPAGE_BRIDGE_GLOBAL,
    ],
  });
} catch {}
const mainWorldPatchScript = `
  (function() {
    var bridge = window[${JSON.stringify(WEBPAGE_BRIDGE_GLOBAL)}];

    // Route window.close() through IPC for policy checks: pinned tabs and tabs
    // the page did not open should not be closable by script.
    window.close = function() {
      // Chromium ignores close() whose receiver is a subframe. This preload runs in
      // subframes too, so the same check happens here rather than sending an IPC the
      // main process would only refuse. It guards the receiver, not the caller: a
      // same-origin subframe calling window.top.close() runs the top frame's own copy of
      // this override, and a cross-origin one reaches the built-in through the
      // cross-origin property allowlist and never passes through here at all.
      if (window !== window.top) return;
      if (bridge && bridge.windowClose) {
        bridge.windowClose();
      }
    };

    // about:blank child frames never trigger a preload, so without this they keep
    // an empty window.chrome while the top frame has app/csi/loadTimes — a
    // contradiction between realms of the same page. srcdoc and same-origin
    // children do get their own preload and are skipped by the guard below.
    var installChromeMembers = function (w) {
      try {
        if (!w || !w.document) return;
        if (!w.chrome) w.chrome = {};
        if (w.chrome.loadTimes && w.chrome.csi && w.chrome.app) return;

        var perf = w.performance;
        var navEntry = function () {
          try { return perf.getEntriesByType('navigation')[0] || {}; } catch (e) { return {}; }
        };

        if (!w.chrome.loadTimes) {
          w.chrome.loadTimes = function () {
            var nav = navEntry();
            var origin = perf.timeOrigin / 1000;
            var protocol = nav.nextHopProtocol || 'unknown';
            return {
              requestTime: origin,
              startLoadTime: origin,
              commitLoadTime: origin + (nav.responseStart || 0) / 1000,
              finishDocumentLoadTime: origin + (nav.domContentLoadedEventEnd || 0) / 1000,
              finishLoadTime: origin + (nav.loadEventEnd || 0) / 1000,
              firstPaintTime: origin + (nav.responseEnd || 0) / 1000,
              firstPaintAfterLoadTime: 0,
              navigationType: 'Other',
              wasFetchedViaSpdy: protocol === 'h2' || protocol === 'h3',
              wasNpnNegotiated: protocol === 'h2' || protocol === 'h3',
              npnNegotiatedProtocol: protocol,
              wasAlternateProtocolAvailable: false,
              connectionInfo: protocol
            };
          };
        }

        if (!w.chrome.csi) {
          w.chrome.csi = function () {
            var nav = navEntry();
            return {
              startE: Math.round(perf.timeOrigin),
              onloadT: Math.round(perf.timeOrigin + (nav.loadEventEnd || 0)),
              pageT: Number(perf.now().toFixed(3)),
              tran: 15
            };
          };
        }

        try {
          Object.defineProperty(w.chrome.loadTimes, 'name', { value: '', configurable: true });
          Object.defineProperty(w.chrome.csi, 'name', { value: '', configurable: true });
        } catch (e) {}

        if (!w.chrome.app) {
          var installState = { DISABLED: 'disabled', INSTALLED: 'installed', NOT_INSTALLED: 'not_installed' };
          var runningState = { CANNOT_RUN: 'cannot_run', READY_TO_RUN: 'ready_to_run', RUNNING: 'running' };
          w.chrome.app = {
            isInstalled: false,
            InstallState: installState,
            RunningState: runningState,
            getDetails: function getDetails() { return null; },
            getIsInstalled: function getIsInstalled() { return false; },
            installState: function installState(callback) { if (callback) callback('not_installed'); },
            runningState: function runningState() { return 'cannot_run'; }
          };
        }
      } catch (e) {}
    };

    installChromeMembers(window);

    // Only frames that will never run a preload of their own. Reaching into a
    // frame's contentWindow forces its document to be created, which stops
    // Electron from running the preload there — measured: srcdoc and same-origin
    // children lost their dialog overrides and bridge entirely when this walked
    // every frame. Those two get their own preload and must be left untouched.
    var lacksOwnPreload = function (frame) {
      try {
        if (frame.srcdoc) return false;
        var src = frame.getAttribute('src');
        return !src || src === 'about:blank';
      } catch (e) {
        return false;
      }
    };

    var installIntoFrames = function () {
      try {
        var frames = document.getElementsByTagName('iframe');
        for (var i = 0; i < frames.length; i++) {
          if (lacksOwnPreload(frames[i])) installChromeMembers(frames[i].contentWindow);
        }
      } catch (e) {}
    };

    try {
      installIntoFrames();
      new MutationObserver(installIntoFrames).observe(document, { childList: true, subtree: true });
      window.addEventListener('load', installIntoFrames, true);
    } catch (e) {}
  })();
`;
try {
  electron.webFrame
    .executeJavaScript(mainWorldPatchScript, true)
    .catch(() => {});
} catch {}
installAutofillDocumentObserver(
  {
    documentId: getAutofillDocumentId,
    maxFields: AUTOFILL_MAX_FIELDS,
    maxOptions: AUTOFILL_MAX_OPTIONS,
    maxSnapshotStringLength: AUTOFILL_MAX_SNAPSHOT_STRING_LENGTH,
    maxStringLength: AUTOFILL_MAX_STRING_LENGTH,
    send: (channel, payload) => electron.ipcRenderer.send(channel, payload),
  },
  {
    activationExpiryMs: ACTIVATION_EXPIRY_MS,
    isActivationBoundToAnchor,
    isSubmitControl,
    meetsAnchorSizeFloor,
    minAnchorPixelSize: MIN_ANCHOR_PIXEL_SIZE,
  },
);
installAutofillFrameOffset();
class CosmeticFilterManager {
  isInitialized = false;
  domMonitor = null;
  injectedScripts = /* @__PURE__ */ new Set();
  injectedStyles = /* @__PURE__ */ new Set();
  isProcessing = false;
  async safeInjectFilters(data) {
    if (this.isProcessing) {
      return;
    }
    this.isProcessing = true;
    try {
      const result = await webpageAPI.injectCosmeticFilters(
        window.location.href,
        data,
      );
      if (!result) {
        return;
      }
      if (!result.success) {
        return;
      }
      if (result.styles && result.styles.trim()) {
        this.applyStyles(result.styles);
      }
      if (
        result.scripts &&
        Array.isArray(result.scripts) &&
        result.scripts.length > 0
      ) {
        await this.executeScripts(result.scripts);
      }
    } catch {
    } finally {
      this.isProcessing = false;
    }
  }
  applyStyles(styles) {
    try {
      if (this.injectedStyles.has(styles)) {
        return;
      }
      const styleElement = document.createElement("style");
      styleElement.textContent = styles;
      styleElement.setAttribute("data-adblock", "cosmetic-filters");
      if (document.head) {
        document.head.appendChild(styleElement);
        this.injectedStyles.add(styles);
      } else {
        const observer = new MutationObserver((mutations, obs) => {
          if (document.head) {
            document.head.appendChild(styleElement);
            this.injectedStyles.add(styles);
            obs.disconnect();
          }
        });
        observer.observe(document, { childList: true, subtree: true });
      }
    } catch {}
  }
  async executeScripts(scripts) {
    await executeAdBlockScriptlets(
      electron.webFrame,
      scripts,
      this.injectedScripts,
    );
  }
  async setupDOMMonitor() {
    try {
      const { enabled } = await webpageAPI.isMutationObserverEnabled();
      if (!enabled) {
        return;
      }
      this.domMonitor = new DOMMonitor((update) => {
        try {
          if (update.type === "features") {
            void this.safeInjectFilters({
              ...update,
            });
          }
        } catch {}
      });
      this.domMonitor.queryAll(window);
      this.domMonitor.start(window);
    } catch {}
  }
  cleanup() {
    try {
      if (this.domMonitor) {
        this.domMonitor.stop();
        this.domMonitor = null;
      }
      const adblockStyles = document.querySelectorAll(
        'style[data-adblock="cosmetic-filters"]',
      );
      adblockStyles.forEach((style) => style.remove());
      this.injectedScripts.clear();
      this.injectedStyles.clear();
    } catch {}
  }
  async initialize() {
    if (this.isInitialized) {
      return;
    }
    try {
      await this.safeInjectFilters();
      await this.setupDOMMonitor();
      window.addEventListener("beforeunload", () => this.cleanup(), {
        once: true,
        passive: true,
      });
      this.isInitialized = true;
    } catch {}
  }
}
if (window === window.top && !window.location.href.startsWith("devtools://")) {
  const cosmeticFilterManager = new CosmeticFilterManager();
  void cosmeticFilterManager.initialize();
}
const editableShortcutInputTypes = /* @__PURE__ */ new Set([
  "date",
  "datetime-local",
  "email",
  "month",
  "number",
  "password",
  "search",
  "tel",
  "text",
  "time",
  "url",
  "week",
]);
function isEditableShortcutElement(element2) {
  if (element2 instanceof HTMLTextAreaElement) {
    return true;
  }
  if (element2 instanceof HTMLInputElement) {
    return editableShortcutInputTypes.has(element2.type.toLowerCase());
  }
  if (element2 instanceof HTMLElement) {
    if (element2.isContentEditable) {
      return true;
    }
    const contentEditable = element2.getAttribute("contenteditable");
    if (contentEditable !== null && contentEditable.toLowerCase() !== "false") {
      return true;
    }
  }
  const role = element2.getAttribute("role")?.toLowerCase();
  return role === "textbox" || role === "searchbox";
}
function shouldSkipShortcutOverrideForEvent(shortcutString, event) {
  if (shortcutString !== "cmd+left" && shortcutString !== "cmd+right") {
    return false;
  }
  for (const target of event.composedPath()) {
    if (target instanceof Element && isEditableShortcutElement(target)) {
      return true;
    }
  }
  return false;
}
const RESERVED_SHORTCUTS = /* @__PURE__ */ new Set([
  "cmd+t",
  "cmd+w",
  "cmd+e",
  "cmd+l",
  "ctrl+t",
  "ctrl+w",
  "ctrl+e",
  "ctrl+l",
  "ctrl+tab",
  "ctrl+shift+tab",
]);
function claimIfPageIgnores(event, onClaimed) {
  const afterPageListeners = (dispatched) => {
    if (dispatched !== event) return;
    window.removeEventListener("keydown", afterPageListeners);
    if (event.defaultPrevented) return;
    event.preventDefault();
    onClaimed();
  };
  window.addEventListener("keydown", afterPageListeners);
  setTimeout(() => window.removeEventListener("keydown", afterPageListeners));
}
class ShortcutOverrideHandler {
  overrideConfig = {};
  isInitialized = false;
  async initialize() {
    if (this.isInitialized) {
      return;
    }
    try {
      const config = await webpageAPI.getShortcutOverrideConfig();
      this.overrideConfig = config.overrideShortcuts;
      window.addEventListener("keydown", this.handleKeyDown.bind(this), true);
      this.isInitialized = true;
    } catch {}
  }
  /**
   * Generate a shortcut string that matches the format used by GlobalShortcutManager
   */
  generateShortcutString(key, ctrlKey, metaKey, shiftKey, altKey) {
    const modifiers = [];
    if (ctrlKey) modifiers.push("ctrl");
    if (metaKey) modifiers.push("cmd");
    if (altKey) modifiers.push("alt");
    if (shiftKey) modifiers.push("shift");
    return [...modifiers, key.toLowerCase()].join("+");
  }
  handleKeyDown(event) {
    if (!event.isTrusted || agentControlled) return;
    const { ctrlKey, metaKey, key, code, shiftKey, altKey } = event;
    const originalKey = key;
    let normalizedKey = key.toLowerCase();
    switch (normalizedKey) {
      case "arrowleft":
        normalizedKey = "left";
        break;
      case "arrowright":
        normalizedKey = "right";
        break;
      case "arrowup":
        normalizedKey = "up";
        break;
      case "arrowdown":
        normalizedKey = "down";
        break;
      case " ":
        normalizedKey = "space";
        break;
      case "+":
      case "add":
      case "numpad+":
      case "numpadadd":
      case "plus":
        normalizedKey = "plus";
        break;
      case "subtract":
      case "numpadsubtract":
        normalizedKey = "-";
        break;
    }
    if ((ctrlKey || metaKey) && (code === "Equal" || code === "NumpadAdd")) {
      normalizedKey = "plus";
    }
    if ((ctrlKey || metaKey) && code === "NumpadSubtract") {
      normalizedKey = "-";
    }
    if (normalizedKey === "+" && shiftKey && (ctrlKey || metaKey)) {
      normalizedKey = "=";
    }
    if (normalizedKey === "plus" && shiftKey && (ctrlKey || metaKey)) {
      normalizedKey = "=";
    }
    const shortcutString = this.generateShortcutString(
      normalizedKey,
      ctrlKey,
      metaKey,
      shiftKey,
      altKey,
    );
    const shouldOverride = Boolean(this.overrideConfig[shortcutString]);
    const shouldSkipOverride = shouldSkipShortcutOverrideForEvent(
      shortcutString,
      event,
    );
    const isZoomCandidateKey =
      normalizedKey === "+" ||
      normalizedKey === "=" ||
      normalizedKey === "plus" ||
      normalizedKey === "add" ||
      normalizedKey === "numpadadd" ||
      normalizedKey === "numpad+" ||
      normalizedKey === "subtract" ||
      normalizedKey === "numpadsubtract" ||
      normalizedKey === "-";
    const isZoomCombo = (ctrlKey || metaKey) && isZoomCandidateKey;
    const shouldForceZoomRouting =
      (ctrlKey || metaKey) &&
      (normalizedKey === "plus" ||
        normalizedKey === "=" ||
        normalizedKey === "-" ||
        normalizedKey === "0");
    const shouldRouteToMain =
      !shouldSkipOverride && (shouldOverride || shouldForceZoomRouting);
    if (isZoomCombo) {
      console.warn("[ShortcutDebug][webpagePreload]", {
        phase: "keydown",
        originalKey,
        code,
        normalizedKey,
        ctrlKey,
        metaKey,
        shiftKey,
        altKey,
        shortcutString,
        shouldOverride,
        shouldSkipOverride,
        shouldForceZoomRouting,
        shouldRouteToMain,
      });
    }
    if (!shouldRouteToMain) return;
    const sendToMain = () => {
      try {
        const windowId =
          process.argv
            .find((arg) => arg.startsWith("--window-id="))
            ?.split("=")[1] || "";
        const layerId =
          process.argv
            .find((arg) => arg.startsWith("--layer-id="))
            ?.split("=")[1] || "";
        electron.ipcRenderer.send("dendrite-event", {
          name: "shortcut:pressed",
          payload: {
            windowId,
            layerId,
            key: normalizedKey,
            ctrlKey,
            metaKey,
            shiftKey,
            altKey,
          },
        });
      } catch {}
    };
    if (RESERVED_SHORTCUTS.has(shortcutString)) {
      event.preventDefault();
      event.stopPropagation();
      sendToMain();
      return;
    }
    claimIfPageIgnores(event, sendToMain);
  }
}
if (!window.location.href.startsWith("devtools://")) {
  const shortcutHandler = new ShortcutOverrideHandler();
  void shortcutHandler.initialize().catch();
}
class WebAuthnInjector {
  isInitialized = false;
  // Store pending conditional UI requests for passkey selection
  pendingConditionalRequest = null;
  pendingIframeRequest = null;
  constructor() {}
  initialize() {
    if (this.isInitialized) return;
    try {
      this.exposeBridge();
      this.injectPatchScript();
      this.setupIframeRelayListener();
      this.setupPasskeySelectionListener();
      this.isInitialized = true;
    } catch {}
  }
  notifyConditionalRequestState(mode, request) {
    void electron.ipcRenderer
      .invoke("webauthn:get", {
        options: request.options,
        origin: request.origin,
        source: request.source,
        requestId: request.requestId,
        mode,
        permissionsPolicyChecked: request.permissionsPolicyChecked,
      })
      .catch(() => {});
  }
  clearPendingConditionalRequest(request) {
    this.notifyConditionalRequestState("conditional-cleared", {
      options: request.options,
      origin: request.origin,
      requestId: request.requestId,
      source: "direct",
    });
  }
  clearPendingIframeRequest(request) {
    const publicKey = getPublicKeyOptions(request.options);
    if (!publicKey) return;
    this.notifyConditionalRequestState("conditional-cleared", {
      options: publicKey,
      origin: request.origin,
      requestId: request.requestId,
      source: "iframe-relay",
      permissionsPolicyChecked: request.permissionsPolicyChecked,
    });
  }
  rejectPendingIframeRequest(request, error) {
    this.clearPendingIframeRequest(request);
    request.sourceWindow.postMessage(
      {
        type: WEBAUTHN_IFRAME_MESSAGE_TYPE,
        action: "authResult",
        requestId: request.requestId,
        error,
      },
      request.origin,
    );
  }
  /**
   * Expose the credentials bridge to the main world under its random name
   * This provides create(), get(), isAvailable(), isConditionalMediationAvailable() methods
   *
   * Uses direct IPC channels to WebAuthnManager - works for both tabs and popups.
   */
  exposeBridge() {
    const self2 = this;
    const bridge = {
      allowRequest: () => {
        if (!shouldCaptureBrowserRequest()) return true;
        captureBrowserRequest({
          kind: "passkey",
          disposition: "human-required",
          message:
            "Passkey authentication requires you to ask the user to take over and complete it.",
        });
        return false;
      },
      /**
       * Check if native WebAuthn addon is available (macOS only)
       */
      isAvailable: async () => {
        try {
          const result = await electron.ipcRenderer.invoke(
            "webauthn:is-available",
          );
          return result.available === true;
        } catch {
          return false;
        }
      },
      /**
       * Check if conditional mediation is available
       */
      isConditionalMediationAvailable: async () => {
        try {
          const result = await electron.ipcRenderer.invoke(
            "webauthn:is-available",
          );
          return result.available === true;
        } catch {
          return false;
        }
      },
      /**
       * Create a new credential (passkey registration)
       */
      create: async (options) => {
        try {
          if (!getWebAuthnPermissions().canCreate) {
            return { error: "NotAllowedError" };
          }
          const result = await electron.ipcRenderer.invoke("webauthn:create", {
            options,
            source: "direct",
          });
          return result;
        } catch (error) {
          return {
            error: error instanceof Error ? error.message : "UnknownError",
          };
        }
      },
      /**
       * Get a credential (passkey authentication)
       */
      get: async (options, isConditional) => {
        try {
          if (!getWebAuthnPermissions().canGet) {
            return { error: "NotAllowedError" };
          }
          const origin = window.location.origin;
          if (isConditional) {
            const requestId = createPreloadRequestId("webauthn-conditional");
            if (self2.pendingConditionalRequest) {
              const previousRequest = self2.pendingConditionalRequest;
              self2.pendingConditionalRequest = null;
              self2.clearPendingConditionalRequest(previousRequest);
              previousRequest.reject(
                new Error("Conditional WebAuthn request superseded"),
              );
            }
            return new Promise((resolve) => {
              self2.pendingConditionalRequest = {
                resolve,
                reject: (error) => resolve({ error: error.message }),
                options,
                origin,
                requestId,
              };
              self2.notifyConditionalRequestState("conditional-pending", {
                options,
                origin,
                requestId,
                source: "direct",
              });
            });
          }
          const result = await electron.ipcRenderer.invoke("webauthn:get", {
            options,
            source: "direct",
          });
          return result;
        } catch (error) {
          return {
            error: error instanceof Error ? error.message : "UnknownError",
          };
        }
      },
    };
    try {
      electron.contextBridge.exposeInMainWorld(credentialsBridgeName, bridge);
    } catch {}
  }
  /**
   * Inject the minimal patch script into the page context
   */
  injectPatchScript() {
    const patchScript = webauthnPatchScript.replaceAll(
      "electronCredentials",
      credentialsBridgeName,
    );
    electron.webFrame.executeJavaScript(patchScript, true).catch(() => {});
  }
  setupIframeRelayListener() {
    if (window !== window.top) return;
    window.addEventListener("message", (event) => {
      void this.handleIframeRelayMessage(event);
    });
  }
  async handleIframeRelayMessage(event) {
    const data = getWebAuthnIframeMessage(event.data);
    if (!data) return;
    if (!event.isTrusted) {
      console.warn(
        "[WebAuthnPreload] Rejecting synthetic iframe relay message",
        {
          action: data.action,
        },
      );
      return;
    }
    const relayOrigin = getRelayMessageOrigin(event.origin);
    if (!relayOrigin) {
      console.warn(
        "[WebAuthnPreload] Rejecting iframe relay message without a secure origin",
        {
          origin: event.origin,
          topOrigin: window.location.origin,
          action: data.action,
        },
      );
      return;
    }
    const sourceFrame = getFrameElementForMessageSource(event.source);
    const sourceWindow = sourceFrame?.contentWindow ?? null;
    if (!sourceFrame || !sourceWindow) {
      console.warn(
        "[WebAuthnPreload] Rejecting iframe relay message without matching frame",
        {
          origin: event.origin,
          action: data.action,
        },
      );
      return;
    }
    if (
      !doesFrameAllowCrossOriginWebAuthnGet({
        allow: sourceFrame.getAttribute("allow"),
        frameSrc:
          sourceFrame instanceof HTMLIFrameElement
            ? sourceFrame.getAttribute("src")
            : null,
        relayOrigin,
        topOrigin: window.location.origin,
        baseUrl: window.location.href,
      })
    ) {
      console.warn(
        "[WebAuthnPreload] Rejecting iframe relay message without WebAuthn permission",
        {
          origin: event.origin,
          topOrigin: window.location.origin,
          action: data.action,
        },
      );
      return;
    }
    if (data.action === "conditionalRequestPending") {
      const publicKeyOptions = getPublicKeyOptions(data.options);
      if (!data.requestId || !data.options || !publicKeyOptions) {
        console.warn(
          "[WebAuthnPreload] Rejecting malformed pending iframe WebAuthn request",
          {
            origin: event.origin,
            hasRequestId: Boolean(data.requestId),
            hasOptions: Boolean(data.options),
          },
        );
        return;
      }
      if (this.pendingIframeRequest) {
        const previousRequest = this.pendingIframeRequest;
        this.pendingIframeRequest = null;
        this.rejectPendingIframeRequest(
          previousRequest,
          "Conditional WebAuthn request superseded",
        );
      }
      this.pendingIframeRequest = {
        requestId: data.requestId,
        origin: relayOrigin,
        rpId: data.rpId,
        options: data.options,
        sourceWindow,
        permissionsPolicyChecked: true,
      };
      this.notifyConditionalRequestState("conditional-pending", {
        options: publicKeyOptions,
        origin: relayOrigin,
        requestId: data.requestId,
        source: "iframe-relay",
        permissionsPolicyChecked: true,
      });
      console.info("[WebAuthnPreload] Stored pending iframe WebAuthn request", {
        origin: relayOrigin,
        rpId: data.rpId,
        requestId: data.requestId,
      });
      return;
    }
    if (data.action === "authenticatePasskey") {
      if (
        !data.requestId ||
        !data.options ||
        !getPublicKeyOptions(data.options)
      ) {
        console.warn(
          "[WebAuthnPreload] Rejecting malformed iframe WebAuthn auth request",
          {
            origin: event.origin,
            hasRequestId: Boolean(data.requestId),
            hasOptions: Boolean(data.options),
          },
        );
        return;
      }
      await this.authenticateIframeRequest(
        {
          requestId: data.requestId,
          origin: relayOrigin,
          rpId: data.rpId,
          options: data.options,
          sourceWindow,
          permissionsPolicyChecked: true,
        },
        data.credentialId,
      );
    }
  }
  async authenticateIframeRequest(request, credentialId) {
    const publicKey = getPublicKeyOptions(request.options);
    if (!publicKey) {
      request.sourceWindow.postMessage(
        {
          type: WEBAUTHN_IFRAME_MESSAGE_TYPE,
          action: "authResult",
          requestId: request.requestId,
          error: "Malformed WebAuthn request",
        },
        request.origin,
      );
      return;
    }
    this.clearPendingIframeRequest(request);
    const selectedCredential = credentialId
      ? {
          type: "public-key",
          id: { __type: "ArrayBuffer", data: credentialId },
        }
      : null;
    const options = selectedCredential
      ? { ...publicKey, allowCredentials: [selectedCredential] }
      : { ...publicKey };
    try {
      console.info("[WebAuthnPreload] Authenticating iframe WebAuthn request", {
        origin: request.origin,
        rpId: request.rpId,
        requestId: request.requestId,
        hasSelectedCredential: Boolean(credentialId),
      });
      const result = await electron.ipcRenderer.invoke("webauthn:get", {
        options,
        origin: request.origin,
        source: "iframe-relay",
        requestId: request.requestId,
        permissionsPolicyChecked: request.permissionsPolicyChecked,
      });
      request.sourceWindow.postMessage(
        {
          type: WEBAUTHN_IFRAME_MESSAGE_TYPE,
          action: "authResult",
          requestId: request.requestId,
          credential: result.credential,
          error: result.error,
        },
        request.origin,
      );
    } catch (error) {
      request.sourceWindow.postMessage(
        {
          type: WEBAUTHN_IFRAME_MESSAGE_TYPE,
          action: "authResult",
          requestId: request.requestId,
          error:
            error instanceof Error ? error.message : "Authentication failed",
        },
        request.origin,
      );
    }
  }
  /**
   * Set up listener for passkey selection from AuthFill component
   */
  setupPasskeySelectionListener() {
    electron.ipcRenderer.on("webauthn:trigger-native", (_event, data) => {
      const handleTrigger = async () => {
        const origin = data.origin || window.location.origin;
        if (
          this.pendingIframeRequest &&
          this.pendingIframeRequest.origin === origin
        ) {
          const request = this.pendingIframeRequest;
          this.pendingIframeRequest = null;
          await this.authenticateIframeRequest(request);
          return;
        }
        if (this.pendingConditionalRequest) {
          const request = this.pendingConditionalRequest;
          const { resolve, options } = request;
          this.pendingConditionalRequest = null;
          this.clearPendingConditionalRequest(request);
          try {
            const newOptions = { ...options };
            delete newOptions.allowCredentials;
            const result = await electron.ipcRenderer.invoke("webauthn:get", {
              options: newOptions,
              origin,
              source: "authfill-ui",
            });
            resolve(result);
          } catch (error) {
            resolve({
              error: error instanceof Error ? error.message : "UnknownError",
            });
          }
          return;
        }
        console.warn(
          "[WebAuthnPreload] Ignoring native trigger without pending WebAuthn request",
          {
            origin,
          },
        );
      };
      void handleTrigger();
    });
    electron.ipcRenderer.on("webauthn:select-passkey", (_event, data) => {
      const handleSelection = async () => {
        const { credentialId, origin: providedOrigin } = data;
        const origin = providedOrigin || window.location.origin;
        if (
          this.pendingIframeRequest &&
          this.pendingIframeRequest.origin === origin
        ) {
          const request = this.pendingIframeRequest;
          this.pendingIframeRequest = null;
          await this.authenticateIframeRequest(request, credentialId);
          return;
        }
        const selectedCredential = {
          type: "public-key",
          id: { __type: "ArrayBuffer", data: credentialId },
        };
        if (this.pendingConditionalRequest) {
          const request = this.pendingConditionalRequest;
          const { resolve, options } = request;
          this.pendingConditionalRequest = null;
          this.clearPendingConditionalRequest(request);
          try {
            const newOptions = {
              ...options,
              allowCredentials: [selectedCredential],
            };
            const result = await electron.ipcRenderer.invoke("webauthn:get", {
              options: newOptions,
              origin,
              source: "authfill-ui",
            });
            resolve(result);
          } catch (error) {
            resolve({
              error: error instanceof Error ? error.message : "UnknownError",
            });
          }
          return;
        }
        console.warn(
          "[WebAuthnPreload] Ignoring passkey selection without pending WebAuthn request",
          {
            origin,
            hasCredentialId: Boolean(credentialId),
          },
        );
      };
      void handleSelection();
    });
  }
}
function getWebAuthnPermissions() {
  const isTopFrame = window === window.top;
  try {
    const policy = document.permissionsPolicy ?? document.featurePolicy;
    if (policy?.allowsFeature) {
      const canGet = policy.allowsFeature("publickey-credentials-get");
      const canCreate = policy.allowsFeature("publickey-credentials-create");
      return { canGet, canCreate };
    }
  } catch {}
  if (isTopFrame) {
    return { canGet: true, canCreate: true };
  }
  return { canGet: false, canCreate: false };
}
function shouldInjectWebAuthn() {
  const href = window.location.href;
  if (href.startsWith("devtools://")) {
    return false;
  }
  if (
    href.startsWith("about:") ||
    href.startsWith("chrome:") ||
    href.startsWith("chrome-extension:")
  ) {
    return false;
  }
  const { canGet, canCreate } = getWebAuthnPermissions();
  return canGet || canCreate;
}
if (shouldInjectWebAuthn()) {
  const webauthnInjector = new WebAuthnInjector();
  webauthnInjector.initialize();
}
exports.getWebpageAPI = getWebpageAPI;
