"use strict";
(function () {
  try {
    var i =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    i.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var i =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new i.Error().stack;
    e &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[e] = "ff7e1c14-07eb-446a-8f7e-0992a8143028"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-ff7e1c14-07eb-446a-8f7e-0992a8143028"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const we = require("fs/promises"),
  X = require("node:crypto"),
  H = require("node:timers/promises"),
  b = require("path"),
  q = require("electron"),
  y = require("../main-app.js"),
  Se = require("valibot"),
  ye = require("./savedCertificateBlocklist-BUtmL3xA.js"),
  ve = require("./onboarding-BugjMquY.js"),
  W = require("./UserRequests-cRpr0CFi.js"),
  Z = require("./handoff-Bo_9UuVg.js"),
  x = require("./windowChat-OLnWTvHU.js");
require("node:path");
require("os");
require("node:events");
require("@electron-toolkit/utils");
require("./appPaths-eBQvtv9Z.js");
require("./appDataPath-20zIIRaW.js");
require("node:util");
require("node:worker_threads");
require("node:fs/promises");
require("node:os");
require("node:fs");
require("node:http");
require("node:https");
require("./protocol-BGN1BQCi.js");
require("events");
require("child_process");
require("util");
require("./sourceTypes-BtnpKV6Z.js");
require("node:async_hooks");
require("@reflect/auth/workos-session");
require("crypto");
require("./errors-DsbnElf-.js");
require("@reflect/auth/device-policy");
require("node:process");
require("node:assert");
require("node:stream");
require("./_commonjsHelpers-DJP3_Dvh.js");
require("./index-CSlo9i6Z.js");
require("tty");
require("node-machine-id");
require("./config-CdpnFYk6.js");
require("./contracts-rChhtF3C.js");
require("@reflect/auth/desktop");
require("./worker-protocol-CFgWGf-A.js");
require("./unicode-CSAGP0Z8.js");
require("fs");
require("better-sqlite3");
require("node:child_process");
require("url");
require("stream");
require("zlib");
require("electron-updater");
require("@reflect/auth/last-login-method");
require("@reflect/auth/oauth-state");
require("@reflect/auth/session-identity");
require("./settled-read-r0Yf0ORp.js");
require("module");
require("./fs-native-KvxiM8hl.js");
require("node:module");
require("node:tls");
require("tldts");
require("node:buffer");
require("./rustImageLimits-zqqoE-LA.js");
require("mime-types");
require("./resourcePolicy-DcbBChq3.js");
require("./resourcePolicy-BX-8H2Pm.js");
require("http");
require("@ghostery/adblocker-electron");
require("./wav-DElqHA--.js");
require("js-yaml");
require("stream/promises");
require("https");
require("net");
require("tls");
require("buffer");
require("electron-chrome-web-store");
require("./ids-B2sWlG17.js");
require("@modelcontextprotocol/sdk/client/auth.js");
require("@modelcontextprotocol/sdk/client/index.js");
require("@modelcontextprotocol/sdk/client/sse.js");
require("@modelcontextprotocol/sdk/client/streamableHttp.js");
require("@modelcontextprotocol/sdk/client/stdio.js");
require("@modelcontextprotocol/sdk/shared/stdio.js");
require("./process-tree-DTtONxmb.js");
require("cross-spawn");
require("piscina");
require("@modelcontextprotocol/sdk/shared/auth-utils.js");
require("@modelcontextprotocol/sdk/server/auth/errors.js");
require("@modelcontextprotocol/sdk/shared/auth.js");
require("node:readline");
require("async-mutex");
require("node:net");
require("electron-dl");
require("tar");
require("node:inspector/promises");
require("node:v8");
require("tokenx");
require("marked");
require("lodash/debounce");
require("./worker-protocol-CcOBX8D2.js");
require("node:zlib");
require("node:diagnostics_channel");
require("worker_threads");
require("diagnostics_channel");
require("./singleInstance-CuMDgUKt.js");
require("./boot-B3ykpiVV.js");
require("node:url");
require("./suggestion-utils-CLM94tkM.js");
require("./profileLayoutLifecycle-BDYjrhKu.js");
require("./commitRecord-DR9i1ecT.js");
require("./storageObjectCache-ClYu2auD.js");
require("./routine-suggestion-store-Bb2MYDKl.js");
require("fastest-levenshtein");
require("./workspace-surface-model-CMo0ac7-.js");
require("node:stream/promises");
require("fzstd");
require("./ContentExtractionService-D9pFX80C.js");
require("./ExternalAppManager-DAuHmeTi.js");
require("./chatDeletionFence-7kC13ojz.js");
require("./CompanionManagerRegistry-CqhzzsGy.js");
require("./CompanionFolderStore-BW078c_O.js");
require("./artifact-host-roots-C3OUVgF3.js");
require("./import-media-sIcNcY_k.js");
require("./DirectHostTransport-BOda5Eqc.js");
require("node:string_decoder");
require("istextorbinary");
require("./sandbox-tooling-singleton-DYdbpKPS.js");
require("./sandbox-helper-process-CQ6JyI_j.js");
require("./OptMemQueryService-1Nw8Jpet.js");
require("./replica-files-CUHDGfIt.js");
require("./dream-sessions-CNZob7px.js");
require("./ToolExecutionClient-BcKJhnOl.js");
require("./sandboxRuntimeSetupStatus-CmP0UsOY.js");
require("./base-B19nE_Cx.js");
require("./onboarding-BMM5mweS.js");
require("./reconnectActions-CyU2QCny.js");
require("./web-extraction-DB7thO2y.js");
require("./python-runtime-BF_2cFN_.js");
require("node:vm");
require("./parse-MOHEM7uu.js");
require("./template-CmpXTu8Z.js");
require("./schedule-AlkLCp6i.js");
require("./folder-listing-DokmAYAd.js");
require("./artifact-session-B2A1eOvr.js");
function ae(i) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (i) {
    for (const s in i)
      if (s !== "default") {
        const r = Object.getOwnPropertyDescriptor(i, s);
        Object.defineProperty(
          e,
          s,
          r.get ? r : { enumerable: !0, get: () => i[s] },
        );
      }
  }
  return ((e.default = i), Object.freeze(e));
}
const E = ae(we),
  u = ae(Se);
function Ce() {
  const i = {
    mimeTypes: [],
    extensions: [],
    mimeToExtension: new Map(),
    extensionToMime: new Map(),
    mimeToLabel: new Map(),
  };
  Object.values(y.ATTACHMENT_FILE_TYPES).forEach((e) => {
    const { mimeTypes: s, extensions: r, label: t } = e;
    (s.forEach((n) => {
      (i.mimeTypes.includes(n) || i.mimeTypes.push(n), i.mimeToLabel.set(n, t));
      const o = i.mimeToExtension.get(n) || [];
      (r.forEach((a) => {
        o.includes(a) || o.push(a);
      }),
        i.mimeToExtension.set(n, o));
    }),
      r.forEach((n) => {
        (i.extensions.includes(n) || i.extensions.push(n),
          !i.extensionToMime.has(n) &&
            s.length > 0 &&
            i.extensionToMime.set(n, s[0]));
      }));
  });
  for (const e of y.ATTACHMENT_MANIFEST.image.svg.extensions)
    i.extensionToMime.set(e, y.ATTACHMENT_MANIFEST.image.svg.mime);
  return i;
}
function Te(i) {
  return Ce().extensionToMime.get(i.toLowerCase()) || null;
}
const U = u.pipe(u.string(), u.trim(), u.nonEmpty()),
  be = u.union([
    u.strictObject({
      profile: u.strictObject({ name: U, roleTitle: U, company: U }),
      connectedApps: u.array(U),
    }),
    u.strictObject({ researchContext: U }),
  ]),
  le =
    '[data-testid="tiptap-input-editor"][contenteditable="true"], [data-testid="tiptap-input"][contenteditable="true"], [data-testid="tiptap-input"] [contenteditable="true"]',
  ce = '[data-testid="newtab-chat-editor"]',
  ue = '[data-testid="chat-send-stop-btn"]',
  Re = '[data-testid="newtab-send-btn"]',
  D = 12e4,
  Ee = { editorSelector: ce, sendButtonSelector: Re, label: "new-tab" },
  Ie = { editorSelector: le, sendButtonSelector: ue, label: "chat" };
class Me {
  constructor(e) {
    this.deps = e;
  }
  async executeScenario(e, s, r, t) {
    (this.deps.signal?.throwIfAborted(), this.assertUiScenarioSupported(e));
    let n,
      o,
      a = 0;
    if (
      this.scenarioHasSeedHistory(e) ||
      e.sessionId !== void 0 ||
      e.permissionMode !== void 0
    ) {
      const p = await this.deps.prepareScenarioSession(e);
      (t?.(p),
        e.permissionMode && p.setPermissionMode(e.permissionMode),
        await this.deps.seedScenarioHistory(p, e),
        (a = p.messages.length),
        (n = await this.openChatLayerForUiPrompt(p.id)),
        (o = p.id));
    } else n = await this.openNewTabForUiPrompt();
    const d = o ? Ie : Ee;
    (await this.dropAttachmentsInUi(n, e.attachments ?? [], d, o),
      await this.fillAndSubmitPromptInUi(
        n,
        e.prompt,
        d,
        e.preSubmitDelayMs ?? 0,
        o ? { sessionId: o, initialMessageCount: a, prompt: e.prompt } : void 0,
      ),
      o || (o = await this.waitForSubmittedChatSession(e.prompt)));
    const l = await this.deps.chatSessionManager.getSession(o);
    l && t?.(l);
    const h = await this.waitForSessionTurnComplete(o, a);
    return await this.deps.buildScenarioResultFromSession(e, s, h, r);
  }
  scenarioHasSeedHistory(e) {
    return e.seedMessages && e.seedMessages.length > 0 ? !0 : !!e.seedHistory;
  }
  assertUiScenarioSupported(e) {
    if (e.onboarding)
      throw new Error(
        "--startPromptViaUi does not support hidden onboarding turns",
      );
    if (e.reuseSessionForRepeats)
      throw new Error(
        "--startPromptViaUi does not support reusing a session across repeats",
      );
    if (e.sharedChatId)
      throw new Error(
        "--startPromptViaUi currently supports fresh chats, not shared-chat imports",
      );
    if (e.projectFolders && e.projectFolders.length > 0)
      throw new Error(
        "--startPromptViaUi currently supports text-only prompts, not project folders",
      );
    if (e.companionId)
      throw new Error(
        "--startPromptViaUi currently uses the selected new-tab companion",
      );
    if (e.chatMode)
      throw new Error(
        "--startPromptViaUi currently uses the visible new-tab effort setting",
      );
  }
  async openNewTabForUiPrompt() {
    const e = await this.deps.chatService.tabs.openNewTab(
      AbortSignal.timeout(D),
    );
    if (!e)
      throw new Error(
        "This profile could not open a new tab to drive the prompt through",
      );
    return (
      await e.waitForLoad(D),
      await this.waitForValue("new-tab composer", D, async () =>
        (await this.executeUiJavaScript(
          e,
          "new-tab composer lookup",
          `Boolean(document.querySelector(${JSON.stringify(ce)}))`,
        )) === !0
          ? !0
          : null,
      ),
      e
    );
  }
  async openChatLayerForUiPrompt(e) {
    if (!this.deps.chatService.tabs.openOrSwitchToChatTab(e))
      throw new Error(`Failed to activate seeded chat tab for session ${e}`);
    const s = await this.waitForValue(
      "seeded chat layer",
      3e4,
      () => this.deps.chatService.tabs.getChatLayer(e) ?? null,
    );
    return (
      await s.waitForLoad(D),
      await this.waitForValue("chat composer", D, async () =>
        (await this.executeUiJavaScript(
          s,
          "chat composer lookup",
          `Boolean(
          document.querySelector(${JSON.stringify(le)}) &&
          document.querySelector(${JSON.stringify(ue)})
        )`,
        )) === !0
          ? !0
          : null,
      ),
      s
    );
  }
  async dropAttachmentsInUi(e, s, r, t) {
    if (s.length === 0) return;
    console.log(
      `[ChatScriptRunner] Dropping ${s.length} attachment(s) in ${r.label} composer`,
    );
    const n = await this.loadUiDropAttachments(s),
      o = await this.executeUiJavaScript(
        e,
        `${r.label} attachment drop`,
        `
      new Promise((resolve) => {
        try {
          if (typeof DataTransfer === 'undefined') {
            resolve({ ok: false, reason: 'data-transfer-unavailable' });
            return;
          }
          const target =
            document.querySelector(${JSON.stringify(r.editorSelector)}) ||
            document.querySelector(${JSON.stringify(r.sendButtonSelector)}) ||
            document.body;
          if (!target) {
            resolve({ ok: false, reason: 'drop-target-not-found' });
            return;
          }
          const dt = new DataTransfer();
          const attachments = ${JSON.stringify(n)};
          for (const attachment of attachments) {
            const binary = atob(attachment.base64);
            const bytes = new Uint8Array(binary.length);
            for (let index = 0; index < binary.length; index += 1) {
              bytes[index] = binary.charCodeAt(index);
            }
            const file = new File([bytes], attachment.filename, {
              type: attachment.mimeType,
              lastModified: Date.now()
            });
            dt.items.add(file);
          }
          target.dispatchEvent(new DragEvent('drop', {
            bubbles: true,
            cancelable: true,
            dataTransfer: dt
          }));
          resolve({ ok: true });
        } catch (error) {
          resolve({
            ok: false,
            reason: error instanceof Error ? error.message : String(error)
          });
        }
      })
    `,
      );
    if (!o?.ok)
      throw new Error(
        `Failed to drop attachment(s) in ${r.label} composer: ${o?.reason ?? "unknown"}`,
      );
    const a = n.map((c) => c.filename);
    (await this.waitForValue(`${r.label} attachment chips`, 3e4, async () =>
      (await this.executeUiJavaScript(
        e,
        `${r.label} attachment chip lookup`,
        `
        new Promise((resolve) => {
          const text = document.body.textContent || '';
          const filenames = ${JSON.stringify(a)};
          resolve(filenames.every((filename) => text.includes(filename)));
        })
      `,
      )) === !0
        ? !0
        : null,
    ),
      console.log(
        `[ChatScriptRunner] Attachment chip(s) rendered in ${r.label} composer`,
      ),
      t && (await this.waitForSessionDraftAttachmentsSettled(t, a, r.label)));
  }
  async waitForSessionDraftAttachmentsSettled(e, s, r) {
    (await this.waitForValue(`${r} attachment uploads`, 3e4, async () => {
      const n =
          (
            await this.deps.chatSessionManager.getSession(e)
          )?.chatContext.getMessageInputDraft()?.attachmentContext ?? [],
        o = this.deps.getAttachmentReadiness(s, n);
      if (o.state === "failed") throw new Error(o.detail);
      return o.state === "ready" ? !0 : null;
    }),
      console.log(
        `[ChatScriptRunner] Attachment upload(s) settled in ${r} composer`,
      ));
  }
  async fillAndSubmitPromptInUi(e, s, r, t, n) {
    console.log(`[ChatScriptRunner] Filling ${r.label} composer`);
    const o = await this.executeUiJavaScript(
      e,
      `${r.label} composer fill`,
      `
      new Promise((resolve) => {
        const editor = document.querySelector(${JSON.stringify(r.editorSelector)});
        if (!editor) {
          resolve({ ok: false, reason: 'editor-not-found' });
          return;
        }

        editor.focus();
        if (editor instanceof HTMLTextAreaElement || editor instanceof HTMLInputElement) {
          editor.value = ${JSON.stringify(s)};
        } else {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(editor);
          range.collapse(false);
          selection?.removeAllRanges();
          selection?.addRange(range);
          document.execCommand('insertText', false, ${JSON.stringify(s)});
        }
        editor.dispatchEvent(new InputEvent('input', {
          bubbles: true,
          inputType: 'insertText',
          data: ${JSON.stringify(s)}
        }));
        resolve({ ok: true });
      })
    `,
    );
    if (!o?.ok)
      throw new Error(
        `Failed to fill ${r.label} composer: ${o?.reason ?? "unknown"}`,
      );
    (await this.waitForSendButtonReady(e, r, s),
      t > 0 &&
        (console.log(
          `[ChatScriptRunner] Waiting ${t}ms before Enter for first-input prewarm`,
        ),
        await this.sleep(t)),
      console.log(
        `[ChatScriptRunner] Focusing ${r.label} composer for native Enter`,
      ));
    const a = await this.executeUiJavaScript(
      e,
      `${r.label} composer focus`,
      `
      new Promise((resolve) => {
        const editor = document.querySelector(${JSON.stringify(r.editorSelector)});
        if (!editor) {
          resolve({
            ok: false,
            reason: 'editor-not-found'
          });
          return;
        }

        editor.focus();
        resolve({
          ok: document.activeElement === editor || editor.contains(document.activeElement)
        });
      })
    `,
    );
    if (!a?.ok)
      throw new Error(
        `Failed to focus ${r.label} composer before Enter: ${a?.reason ?? "unknown"}`,
      );
    if (
      (console.log(
        `[ChatScriptRunner] Sending native Enter in ${r.label} composer`,
      ),
      this.deps.signal?.throwIfAborted(),
      !e.focus("user-activation"))
    )
      throw new Error(
        `Cannot send Enter because ${r.label} tab focus was redirected`,
      );
    const c = y.safeWithLayerWebContents(e, (d) => {
      (d.sendInputEvent({ type: "keyDown", keyCode: "Enter" }),
        d.sendInputEvent({ type: "keyUp", keyCode: "Enter" }));
    });
    if (!c.ok)
      throw new Error(
        `Cannot send Enter because tab webContents is ${c.error}`,
      );
    n && (await this.waitForSeededChatSubmitAccepted(n, r.label));
  }
  async waitForSendButtonReady(e, s, r) {
    let t = null;
    try {
      await this.waitForValue(`${s.label} send button`, 6e4, async () => {
        const n = await this.executeUiJavaScript(
          e,
          `${s.label} send button state`,
          `
          new Promise((resolve) => {
            const button = document.querySelector(${JSON.stringify(s.sendButtonSelector)});
            const editor = document.querySelector(${JSON.stringify(s.editorSelector)});
            const normalize = (value) => value.replace(/\\s+/g, ' ').trim();
            const compact = (value) => value.trim().replace(/\\s+/g, '');
            const editorText =
              editor instanceof HTMLTextAreaElement || editor instanceof HTMLInputElement
                ? editor.value
                : editor?.textContent ?? '';
            const prompt = ${JSON.stringify(r)};
            const normalizedMatches = normalize(editorText) === normalize(prompt);
            const compactMatches = compact(editorText) === compact(prompt);
            resolve({
              exists: Boolean(button),
              disabled: Boolean(button?.disabled),
              title: button?.getAttribute('title') ?? null,
              text: button?.textContent?.trim() ?? '',
              editorTextLength: editorText.length,
              editorTextMatchesPrompt: normalizedMatches || compactMatches
            });
          })
        `,
        );
        t = n;
        const o = n?.title === "Send message" || n?.title === "Queue message";
        return n?.exists === !0 && !n.disabled && o && n.editorTextMatchesPrompt
          ? !0
          : null;
      });
    } catch (n) {
      const o = t ? JSON.stringify(t) : "button state unavailable",
        a = n instanceof Error ? n.message : String(n);
      throw new Error(`${a}; last ${s.label} send button state: ${o}`);
    }
    console.log(`[ChatScriptRunner] ${s.label} send button is ready`);
  }
  async waitForSeededChatSubmitAccepted(e, s) {
    (await this.waitForValue(
      `${s} Enter submit`,
      1e4,
      async () => {
        const r = await this.deps.chatSessionManager.getSession(e.sessionId);
        return (r?.messages.length ?? 0) <= e.initialMessageCount
          ? null
          : this.deps.hasSubmittedPrompt(
                r?.messages ?? [],
                e.prompt,
                e.initialMessageCount,
              )
            ? !0
            : null;
      },
      null,
    ),
      console.log(`[ChatScriptRunner] ${s} Enter submit accepted`));
  }
  async waitForSubmittedChatSession(e) {
    return await this.waitForValue(
      "submitted chat session user message",
      3e4,
      async () => {
        const s = this.deps.chatService.tabs.getViewedChatSessionId();
        if (!s) return null;
        const r = await this.deps.chatSessionManager.getSession(s);
        return r && this.deps.hasSubmittedPrompt(r.messages, e, 0) ? s : null;
      },
      null,
    );
  }
  async waitForSessionTurnComplete(e, s = 0) {
    return await this.waitForValue(
      "chat turn completion",
      this.deps.getScenarioTimeoutMs(),
      async () => {
        const r = await this.deps.chatSessionManager.getSession(e);
        return r &&
          r.messages.slice(s).some((o) => o.role === "assistant") &&
          !y.isUnsettledTurn(r.getTurnPhase())
          ? r
          : null;
      },
    );
  }
  async waitForValue(e, s, r, t = this.deps.signal) {
    const n = Date.now() + s;
    for (; Date.now() < n; ) {
      t?.throwIfAborted();
      const o = await r();
      if ((t?.throwIfAborted(), o !== null)) return o;
      await H.setTimeout(100, void 0, { signal: t ?? void 0 });
    }
    throw new Error(`Timed out waiting for ${e}`);
  }
  async executeUiJavaScript(e, s, r, t = 5e3) {
    this.deps.signal?.throwIfAborted();
    let n = null;
    try {
      return await Promise.race([
        y.safeExecuteJavaScriptInLayer(e, r).then((o) => {
          if (!o.ok)
            throw new Error(
              `Cannot execute UI script because tab webContents is ${o.error}`,
            );
          return o.value;
        }),
        new Promise((o, a) => {
          n = setTimeout(() => {
            a(new Error(`Timed out executing UI script: ${s}`));
          }, t);
        }),
      ]);
    } finally {
      n && clearTimeout(n);
    }
  }
  async loadUiDropAttachments(e) {
    const s = [];
    for (const r of e) {
      const t = this.deps.resolveAttachmentPath(r.path),
        n = r.filename ?? b.basename(t),
        o = this.resolveUiAttachmentMimeType(r, n),
        a = await E.readFile(t);
      s.push({ filename: n, mimeType: o, base64: a.toString("base64") });
    }
    return s;
  }
  resolveUiAttachmentMimeType(e, s) {
    if (e.mimeType) return e.mimeType;
    const r = b.extname(s).slice(1),
      t = r ? Te(r) : null;
    if (t) return t;
    throw new Error(`Unable to infer MIME type for UI attachment: ${s}`);
  }
  async sleep(e) {
    await H.setTimeout(e, void 0, { signal: this.deps.signal });
  }
}
const Ae = u.object({
  score: u.pipe(u.number(), u.finite(), u.minValue(0), u.maxValue(100)),
  passed: u.boolean(),
  reasoning: u.string(),
  criteriaMet: u.array(u.string()),
  criteriaNotMet: u.array(u.string()),
  failuresTriggered: u.array(u.string()),
});
function Pe(i, e, s, r, t) {
  const n = `You are an expert evaluator assessing AI assistant responses against specific criteria.

Your task is to evaluate whether an AI assistant's response to a user prompt meets the defined evaluation criteria and avoids specified failure modes.

## Evaluation Guidelines

1. **Score (0-100)**: Assign a score based on how well the response meets ALL evaluation criteria:
   - 90-100: Excellent - Meets all criteria exceptionally well
   - 70-89: Good - Meets most criteria satisfactorily
   - 50-69: Partial - Meets some criteria but has notable gaps
   - 25-49: Poor - Fails to meet most criteria
   - 0-24: Very Poor - Fails to meet criteria and triggers failure modes

2. **Pass/Fail**: A response passes if:
   - Score is >= 70, AND
   - No critical failure modes are triggered

3. **Be Thorough**: Examine the full conversation log, not just the final response.

4. **Be Fair**: Some criteria may be partially met - acknowledge partial credit.

5. **Be Specific**: Cite specific parts of the response when explaining your evaluation.

## Response Format

You MUST respond with a valid JSON object matching this exact structure:
{
  "score": <number 0-100>,
  "passed": <boolean>,
  "reasoning": "<detailed explanation string>",
  "criteriaMet": ["<criterion 1>", "<criterion 2>", ...],
  "criteriaNotMet": ["<criterion 1>", ...],
  "failuresTriggered": ["<failure mode 1>", ...]
}

Respond ONLY with the JSON object, no additional text.`;
  let o = `## Scenario: ${i.title}

### Original User Prompt
${e}

### Evaluation Criteria
The response SHOULD:
${i.evaluationCriteria.map((a, c) => `${c + 1}. ${a}`).join(`
`)}

### Failure Modes to Avoid
The response should NOT:
${i.failureModes.map((a, c) => `${c + 1}. ${a}`).join(`
`)}`;
  if (i.evaluateToolsWithLLM && t) {
    const a = t.filter((c) => c.toolName === "memorizeTool");
    a.length > 0
      ? ((o += `

### Tool Calls Made
`),
        (o += `The assistant called memorizeTool ${a.length} time(s):

`),
        a.forEach((c, d) => {
          const l = c.input.content || c.input.text || "No content captured",
            h = c.input.path || "No path specified";
          o += `${d + 1}. Path: ${h}
   Content: ${l}

`;
        }),
        (o +=
          "IMPORTANT: Evaluate the CONTENT of what was saved. Was it relevant? Complete? Well-structured?"))
      : ((o += `

### Tool Calls Made
`),
        (o += `The assistant did NOT call memorizeTool.
`));
  }
  return (
    (o += `

### Full Conversation Log
${r}

### Final Assistant Response
${s}

---

Evaluate the response and provide your assessment as a JSON object.`),
    { systemPrompt: n, userPrompt: o }
  );
}
function _e(i) {
  const e = (r) =>
      r
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;"),
    s = ["<conversation>"];
  for (const r of i)
    s.push(`<message role="${e(r.role)}">${e(r.content)}</message>`);
  return (
    s.push("</conversation>"),
    s.join(`
`)
  );
}
function $e(i, e, s) {
  const r = {
      "gpt-4o-mini": { input: 0.15, output: 0.6 },
      "gpt-4o": { input: 2.5, output: 10 },
      "gpt-4-turbo": { input: 10, output: 30 },
    },
    t = r[s] || r["gpt-4o-mini"];
  return (i * t.input + e * t.output) / 1e6;
}
async function qe(i, e, s) {
  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${s}`,
    },
    body: JSON.stringify({
      model: e,
      messages: i,
      temperature: 0,
      max_tokens: 2e3,
      response_format: { type: "json_object" },
    }),
  });
  if (!r.ok) {
    const n = await r.text();
    throw new Error(`OpenAI API error: ${r.status} ${n}`);
  }
  const t = await r.json();
  return { content: t.choices[0]?.message?.content || "", usage: t.usage };
}
class ee {
  modelName;
  constructor(e = "gpt-4o-mini") {
    this.modelName = e;
  }
  static hasApiKey() {
    return !!process.env.OPENAI_API_KEY;
  }
  async evaluate(e, s, r) {
    const t = Date.now(),
      n = process.env.OPENAI_API_KEY;
    if (!n)
      return {
        scenarioId: e.id,
        title: e.title,
        category: e.category,
        score: 0,
        passed: !1,
        reasoning: "Evaluation skipped: OPENAI_API_KEY not set",
        criteriaMet: [],
        criteriaNotMet: e.evaluationCriteria,
        failuresTriggered: [],
        evalCost: 0,
        evalDurationMs: 0,
      };
    try {
      const o = s.filter((w) => w.role === "user"),
        a = s.filter((w) => {
          if (w.role !== "assistant") return !1;
          const R = w.content.trim();
          return !(R.startsWith("[") && R.includes('"type":"tool-call"'));
        }),
        c = o[0]?.content || e.prompt,
        d = a[a.length - 1]?.content || "No response",
        l = _e(s),
        { systemPrompt: h, userPrompt: p } = Pe(e, c, d, l, r),
        { content: S, usage: g } = await qe(
          [
            { role: "system", content: h },
            { role: "user", content: p },
          ],
          this.modelName,
          n,
        ),
        m = Date.now() - t,
        f = $e(g.prompt_tokens, g.completion_tokens, this.modelName);
      let v;
      try {
        const w = JSON.parse(S);
        v = u.parse(Ae, w);
      } catch (w) {
        return {
          scenarioId: e.id,
          title: e.title,
          category: e.category,
          score: 0,
          passed: !1,
          reasoning: `Evaluation failed: Could not parse response - ${w instanceof Error ? w.message : "Unknown error"}`,
          criteriaMet: [],
          criteriaNotMet: e.evaluationCriteria,
          failuresTriggered: [],
          evalCost: f,
          evalDurationMs: m,
        };
      }
      return {
        scenarioId: e.id,
        title: e.title,
        category: e.category,
        score: v.score,
        passed: v.passed,
        reasoning: v.reasoning,
        criteriaMet: v.criteriaMet,
        criteriaNotMet: v.criteriaNotMet,
        failuresTriggered: v.failuresTriggered,
        evalCost: f,
        evalDurationMs: m,
      };
    } catch (o) {
      const a = Date.now() - t;
      return {
        scenarioId: e.id,
        title: e.title,
        category: e.category,
        score: 0,
        passed: !1,
        reasoning: `Evaluation failed: ${o instanceof Error ? o.message : "Unknown error"}`,
        criteriaMet: [],
        criteriaNotMet: e.evaluationCriteria,
        failuresTriggered: [],
        evalCost: 0,
        evalDurationMs: a,
      };
    }
  }
}
const xe = u.array(
  u.object({
    organizationId: u.string(),
    directory: u.pipe(
      u.string(),
      u.regex(/^team-[a-z0-9]+(?:[-_][a-z0-9]+)*$/),
    ),
  }),
);
function Fe(i, e, s) {
  return i.every((r) =>
    e.some(
      (t) =>
        t.organizationId === r.organizationId && t.name === r.directory && s(t),
    ),
  );
}
const te = u.strictObject({
  observationCount: u.pipe(u.number(), u.safeInteger(), u.minValue(0)),
  summaryCount: u.pipe(u.number(), u.safeInteger(), u.minValue(0)),
});
function de(i, e) {
  const s = new Set(i),
    r = e.filter((c) => s.has(c.filename)),
    t = new Set(r.map((c) => c.filename)),
    n = i.filter((c) => !t.has(c)),
    o = r.filter(
      (c) =>
        c.uploadStatus === y.AttachmentUploadStatus.PENDING ||
        c.uploadStatus === y.AttachmentUploadStatus.UPLOADING,
    ),
    a = r.filter((c) => c.uploadStatus === y.AttachmentUploadStatus.FAILED);
  return a.length > 0
    ? {
        state: "failed",
        detail: `Attachment upload failed: ${a.map((d) => `${d.filename} (${d.id})`).join(", ")}`,
      }
    : n.length > 0 || o.length > 0
      ? {
          state: "pending",
          detail: [
            ...n.map((d) => `${d} (missing)`),
            ...o.map((d) => `${d.filename} (${d.uploadStatus})`),
          ].join(", "),
        }
      : { state: "ready", detail: `${r.length} attachment(s) settled` };
}
function re(i) {
  return {
    mode: "llm_simulated_user",
    maxTurns: i.maxTurns,
    simulatorModel: i.model,
    userPersona: i.userPersonaAndInformation,
    facts: {},
    completionPolicy: i.completionPolicy,
  };
}
function pe(i, e, s) {
  const r = [],
    t = [];
  if (i.requireFormulaDrivenSpreadsheet) {
    const a = ge(e);
    (r.push(...a.failures), t.push(...a.evidence));
  }
  if (i.failOnToolErrors) {
    const a = e.filter((c) => c.success === !1);
    a.length > 0
      ? r.push(`Failed tool calls: ${a.map((c) => c.toolName).join(", ")}.`)
      : t.push("All recorded tool calls completed successfully.");
  }
  const n = i.requiredToolNames ?? [];
  if (n.length > 0) {
    const a = new Set(e.filter((d) => d.success === !0).map((d) => d.toolName)),
      c = n.filter((d) => !a.has(d));
    c.length > 0
      ? r.push(`Missing successful tool calls: ${c.join(", ")}.`)
      : t.push(`Found ${n.length} required successful tool call(s).`);
  }
  const o = i.assistantOutputIncludes ?? [];
  if (o.length > 0) {
    const a = s.filter((d) => d.role === "assistant").map((d) => d.content)
        .join(`
`),
      c = o.filter((d) => !a.includes(d));
    c.length > 0
      ? r.push(`Assistant output is missing: ${c.join(", ")}.`)
      : t.push(`Assistant output contains ${o.length} required fragment(s).`);
  }
  return { passed: r.length === 0, failures: r, evidence: t };
}
function Ne(i, e) {
  if (i.toolName !== e.toolName) return !1;
  if (e.expectedInput)
    for (const [s, r] of Object.entries(e.expectedInput)) {
      const t = i.input[s];
      if (typeof r == "object" && r !== null) {
        if (JSON.stringify(t) !== JSON.stringify(r)) return !1;
      } else if (t !== r) return !1;
    }
  return !0;
}
function Oe(i, e) {
  if (i.length === 0)
    return {
      score: e.length === 0 ? 100 : 0,
      correctCalls: 0,
      totalCalls: 0,
      matchedCalls: [],
      unexpectedCalls: [],
      missingCalls: e.map((d) => d.toolName),
    };
  const s = [],
    r = [],
    t = new Set();
  for (const d of i) {
    let l = !1;
    for (let h = 0; h < e.length; h++)
      if (!t.has(h) && Ne(d, e[h])) {
        ((l = !0), t.add(h), s.push(d.toolName));
        break;
      }
    l || r.push(d.toolName);
  }
  const n = [];
  for (let d = 0; d < e.length; d++) t.has(d) || n.push(e[d].toolName);
  const o = s.length,
    a = i.length;
  return {
    score: Math.round((o / a) * 100),
    correctCalls: o,
    totalCalls: a,
    matchedCalls: s,
    unexpectedCalls: r,
    missingCalls: n,
  };
}
function Ue(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    "prompt" in i &&
    "evaluationCriteria" in i &&
    Array.isArray(i.evaluationCriteria)
  );
}
function De(i) {
  if (i.chatMode) return y.resolveChatMode(i.chatMode);
  if (i.useExtendedThinking) return "expert";
}
function k(i) {
  const e = i?.trim();
  return e || void 0;
}
function ke(i) {
  const e = i.trim(),
    s = e.match(/^orbitra:\/\/shared-chat\/([a-f0-9-]+)$/i),
    r = e.match(/shared[-/]chat\/([a-f0-9-]+)$/i),
    t = e.match(
      /([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/i,
    ),
    n = s?.[1] ?? r?.[1] ?? t?.[1] ?? e;
  if (/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(n))
    return n;
  throw new Error("Invalid shared chat ID format");
}
function se(i) {
  const e = k(i);
  return e ? ke(e) : void 0;
}
function L(i) {
  return [
    i.toolName,
    JSON.stringify(i.input),
    typeof i.output == "string" ? i.output : "",
  ].join(`
`);
}
function Le(i) {
  return i.filter((e) => e.success).map((e) => L(e));
}
function J(i, e, s) {
  return i === void 0 || !Number.isFinite(i)
    ? e
    : Math.max(0, Math.min(Math.floor(i), s));
}
function oe(i, e) {
  const s = Math.max(0, Math.min(e, 2e5));
  if (s === 0) return "";
  const r = `${i}: This is deterministic seeded transcript bulk for TTFT scaling. `;
  return r.repeat(Math.ceil(s / r.length)).slice(0, s);
}
const V = "{{synced_root}}";
function B(i, e, s) {
  return typeof i == "string"
    ? i.replaceAll(e, s)
    : Array.isArray(i)
      ? i.map((r) => B(r, e, s))
      : i !== null && typeof i == "object"
        ? Object.fromEntries(
            Object.entries(i)
              .filter(([, r]) => r !== void 0)
              .map(([r, t]) => [r, B(t, e, s)]),
          )
        : i;
}
function He(i, e) {
  const s = (r) => r.replaceAll(V, e);
  switch (i.type) {
    case "text":
    case "reasoning":
      return { ...i, text: s(i.text) };
    case "tool-call":
      return { ...i, input: B(i.input, V, e) };
    case "tool-result":
      return { ...i, output: { type: "text", value: s(i.output.value) } };
    default:
      return i;
  }
}
function je(i) {
  const e = i.role ?? "user",
    s = { id: i.id, hidden: i.hidden },
    r = i.contentParts;
  if (r === void 0) {
    const n = i.content ?? "";
    if (e === "tool")
      throw new Error("A seeded tool turn needs tool-result content parts.");
    return y.createChatMessage({ ...s, role: e, content: n });
  }
  if (e === "tool") {
    const n = r.map((o) => {
      if (o.type !== "tool-result")
        throw new Error(
          `A seeded tool turn accepts only tool-result parts, not ${o.type}.`,
        );
      return o;
    });
    return y.createChatMessage({ ...s, role: e, content: n });
  }
  if (e === "assistant") {
    const n = r.map((o) => {
      if (o.type === "text" || o.type === "reasoning" || o.type === "tool-call")
        return o;
      throw new Error(
        `A seeded assistant turn does not accept ${o.type} parts.`,
      );
    });
    return y.createChatMessage({ ...s, role: e, content: n });
  }
  const t = r.map((n) => {
    if (n.type === "text" || n.type === "image") return n;
    throw new Error(`A seeded user turn does not accept ${n.type} parts.`);
  });
  return y.createChatMessage({ ...s, role: e, content: t });
}
function z(i) {
  const e = [];
  for (const o of i.seedMessages ?? []) e.push(je(o));
  const s = i.seedHistory;
  if (!s) return e;
  const r = J(s.pairs, 0, 500),
    t = J(s.userChars, 4e3, 2e5),
    n = J(s.assistantChars, 1e3, 2e5);
  for (let o = 0; o < r; o += 1) {
    const a = oe(`seed-user-${o}`, t);
    (e.push(
      y.createChatMessage({
        id: `seed-user-${o}`,
        role: "user",
        content: [{ type: "text", text: a }],
      }),
    ),
      e.push(
        y.createChatMessage({
          id: `seed-assistant-${o}`,
          role: "assistant",
          content: oe(`seed-assistant-${o}`, n),
        }),
      ));
  }
  return e;
}
function ne(i) {
  const e = i.trim();
  return (/^<user_message>\s*([\s\S]*?)\s*<\/user_message>$/.exec(e)?.[1] ?? e)
    .replace(/\s+/g, " ")
    .trim();
}
function ie(i) {
  const e = i.trim();
  return (
    /^<user_message>\s*([\s\S]*?)\s*<\/user_message>$/.exec(e)?.[1] ?? e
  ).replace(/\s+/g, "");
}
function Q(i, e) {
  const s = ne(e);
  return s ? (ne(i) === s ? !0 : ie(i) === ie(e)) : !1;
}
function K(i) {
  const e = i.content;
  if (typeof e == "string") return e;
  if (!Array.isArray(e)) return "";
  const s = [];
  for (const r of e) {
    if (typeof r == "string") {
      s.push(r);
      continue;
    }
    "text" in r && typeof r.text == "string" && s.push(r.text);
  }
  return s.join(`
`);
}
function Y(i, e, s) {
  return i.slice(s).some((r) => (r.role !== "user" ? !1 : Q(K(r), e)));
}
function We(i, e) {
  let s = -1;
  return (
    i.forEach((r, t) => {
      r.role === "user" && Q(K(r), e) && (s = t);
    }),
    s
  );
}
function Je(i) {
  return i.role === "tool"
    ? !0
    : Array.isArray(i.content)
      ? i.content.some((e) =>
          !e || typeof e != "object"
            ? !1
            : "type" in e && e.type === "tool-call"
              ? !0
              : "toolCallId" in e,
        )
      : !1;
}
function G(i, e) {
  const s = We(i, e);
  return s === -1
    ? !1
    : i
        .slice(s + 1)
        .some((r) =>
          r.role === "assistant" && K(r).trim().length > 0 ? !0 : Je(r),
        );
}
function he(i, e) {
  const s = e.flags.includes("g") ? e.flags : `${e.flags}g`,
    r = new RegExp(e.source, s);
  let t = -1,
    n = r.exec(i);
  for (; n !== null; ) ((t = n.index), (n = r.exec(i)));
  return t;
}
function Ve(i, e) {
  const s = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    r = new RegExp(
      `${s}[\\s\\S]{0,3000}(spreadsheet_set_formula|spreadsheet_set_formulas|USER_ENTERED)[\\s\\S]{0,3000}=`,
      "i",
    ),
    t = new RegExp(
      `(spreadsheet_set_formula|spreadsheet_set_formulas|USER_ENTERED)[\\s\\S]{0,3000}=[\\s\\S]{0,3000}${s}`,
      "i",
    );
  return r.test(i) || t.test(i);
}
function Be(i) {
  return Math.max(
    ...[
      /spreadsheet_set_formula/i,
      /spreadsheet_set_formulas/i,
      /gsheets_update[\s\S]{0,3000}USER_ENTERED[\s\S]{0,3000}=/i,
    ].map((s) => he(i, s)),
  );
}
function M(i, e) {
  const r = [...i.matchAll(e)].at(-1);
  if (!r?.[1]) return null;
  const t = Number(r[1]);
  return Number.isFinite(t) ? t : null;
}
function me(i) {
  const e = M(i, /Row count \(including header\):\s*(\d{2,})/gi);
  if (e !== null) return e;
  const s = M(i, /Total rows including header:\s*(\d{2,})/gi);
  if (s !== null) return s;
  const r = M(i, /"totalLines":\s*(\d{2,})/g);
  if (r !== null) return r;
  const t = M(i, /(?:^|\n)\s*(\d{2,})\s+\/[^\n]+\.csv/gm);
  if (t !== null) return t;
  const n = M(i, /Total rows:\s*(\d{2,})/gi);
  return n !== null ? n + 1 : null;
}
function fe(i) {
  const e = M(
    i,
    /Final sheet summary:[\s\S]{0,1000}Raw Data:\s*(\d{2,})\s+rows/gi,
  );
  if (e !== null) return e;
  const s = M(i, /Raw Data row count:\s*(\d{2,})/gi);
  if (s !== null) return s;
  const r = M(i, /Raw Data rows:\s*(\d{2,})/gi);
  if (r !== null) return r;
  const t = M(i, /Raw Data:\s*(\d{2,})\s+rows(?:\s*\(expected\s+\d{2,}\))?/gi);
  if (t !== null) return t;
  const n = M(i, /"name":"Raw Data"[\s\S]{0,800}?"rowCount":(\d{2,})/g);
  if (n !== null) return n;
  const o = M(i, /"name":"Raw Data","rows":(\d{2,})/g);
  if (o !== null) return o;
  const a = M(i, /Import result:\s*\{[^\n]*"rows":(\d{2,})/gi);
  return a !== null
    ? a
    : M(i, /Raw Data sheet created with\s+(\d{2,})\s+rows/gi);
}
function ge(i) {
  const e = [],
    s = [],
    r = i.map(L).join(`

`),
    t = Le(i).join(`

`),
    n = t.includes("spreadsheet_set_formula"),
    o = t.includes("spreadsheet_set_formulas"),
    a = i.some((f) => {
      if (!f.success) return !1;
      const v = L(f);
      return (
        (v.includes("USER_ENTERED") &&
          (/\\?"formulaCount\\?":\s*[1-9]\d*/.test(v) ||
            /formulaCount:\s*[1-9]\d*/.test(v))) ||
        (v.includes("gsheets_update") &&
          v.includes("USER_ENTERED") &&
          /['"`]=[^'"`\n]+['"`]/.test(v))
      );
    });
  if (n || o || a) {
    const f = [];
    (n && f.push("spreadsheet_set_formula"),
      o && f.push("spreadsheet_set_formulas"),
      a && f.push("gsheets_update USER_ENTERED formulas"),
      s.push(`Found formula write path(s): ${f.join(", ")}.`));
  } else
    e.push("No successful spreadsheet formula-setting tool usage was found.");
  const d = [
    "Monthly Revenue",
    "Region Revenue",
    "Regions",
    "Region Trends",
    "Cohort Retention",
    "New Customers",
    "Dashboard",
  ].filter((f) => Ve(t, f));
  (s.push(`Formula-backed analysis sheet evidence: ${d.join(", ") || "none"}.`),
    d.length < 3 &&
      e.push(
        `Only ${d.length} analysis sheet(s) had formula-write evidence; expected multiple derived formula tabs.`,
      ));
  const l = me(r),
    h = fe(r);
  l !== null &&
    h !== null &&
    (s.push(
      `Source CSV rows including header: ${l}; final Raw Data rows: ${h}.`,
    ),
    h < l &&
      e.push(
        `Final Raw Data has only ${h} rows for ${l} source CSV rows including header.`,
      ));
  const p = i.some((f) => {
      const v = L(f);
      return (
        f.success && v.includes("spreadsheet_push") && v.includes('"ok":true')
      );
    }),
    S = a && d.length >= 3 && l !== null && h !== null && h >= l;
  p
    ? s.push("Found successful spreadsheet_push with ok:true.")
    : S
      ? s.push(
          "Found direct Google Sheets formula workflow with final Raw Data row verification.",
        )
      : e.push(
          "No successful spreadsheet_push or direct Google Sheets formula completion was found.",
        );
  const g = Be(r),
    m = [
      {
        label: "partial raw import via Math.min/sample rows",
        pattern:
          /Math\.min\(csvRows\.length,\s*\d+\)|first\s+\d+\s+rows|preview subset/i,
        finalStateOnly: !1,
      },
      {
        label: "explicit static fallback after formula/raw-data failure",
        pattern:
          /better to use static|static values for accuracy|full dataset stats|due to import limit/i,
        finalStateOnly: !0,
      },
      {
        label: "precomputed static analysis sheet",
        pattern:
          /static data \(computed in code\)|monthlyRows\.push|regionRows\.push|trendRows\.push|cohortDataRows\.push|monthlyUniqueCustomers|precomputed formula approach/i,
        finalStateOnly: !0,
      },
      {
        label: "literal overwrite of formula-derived metrics",
        pattern:
          /Only update column .*static|Update Dashboard .*static|Update .* with static|valueInputOption:\s*['"]RAW['"][\s\S]{0,500}(Monthly Revenue|Dashboard|Regions|Region Trends|Cohort Retention)/i,
        finalStateOnly: !0,
      },
    ];
  for (const { label: f, pattern: v, finalStateOnly: w } of m) {
    const R = he(r, v);
    if (R !== -1) {
      if (!w) {
        s.push(
          `Observed intermediate spreadsheet-analysis risk pattern: ${f}.`,
        );
        continue;
      }
      R > g
        ? e.push(
            `Detected final spreadsheet-analysis pattern after formula writes: ${f}.`,
          )
        : s.push(
            `Observed repaired spreadsheet-analysis risk pattern before final formula writes: ${f}.`,
          );
    }
  }
  return { passed: e.length === 0, failures: e, evidence: s };
}
class F {
  profileRunners = new Map();
  environment = process.env;
  chatService = null;
  chatSessionManager = null;
  profileManager = null;
  isRunning = !1;
  results = [];
  evidenceExportFailure = null;
  evaluator = null;
  reusableStartPromptSession = null;
  seededReusableSessionIds = new Set();
  scenarioConcurrency = 1;
  openStartUrls = null;
  static isUiSubmitMode() {
    return process.env.CHAT_SCRIPT_SUBMIT_VIA_UI === "true";
  }
  init(e, s, r, t) {
    const n = !!process.env.ORBITRA_EVAL_TASKS_FILE && !q.app.isPackaged;
    if (n && this.chatSessionManager) {
      const o = s.getProfileId();
      if (this.profileRunners.has(o)) return;
      const a = new F();
      ((a.chatService = e),
        (a.chatSessionManager = s),
        (a.profileManager = r),
        (a.openStartUrls = t ?? null),
        this.profileRunners.set(o, a));
      return;
    }
    ((this.chatService = e),
      (this.chatSessionManager = s),
      (this.profileManager = r),
      (this.openStartUrls = t ?? null),
      n && this.profileRunners.set(s.getProfileId(), this),
      ee.hasApiKey() &&
        ((this.evaluator = new ee("gpt-4o-mini")),
        console.log("[ChatScriptRunner] LLM-as-a-judge evaluator initialized")),
      x.isChatScriptMode() &&
        (console.log(
          "[ChatScriptRunner] Script mode detected, will auto-start",
        ),
        setTimeout(() => {
          this.runScript();
        }, 5e3)));
  }
  async waitForReadiness() {
    const e = this.environment.CHAT_SCRIPT_READINESS_STATUS;
    if (!e) return;
    const s = Number(
        this.environment.CHAT_SCRIPT_READINESS_TIMEOUT_MS ?? "300000",
      ),
      r = Date.now() + s;
    for (; Date.now() < r; ) {
      try {
        const t = JSON.parse(await E.readFile(e, "utf8"));
        if (
          typeof t == "object" &&
          t !== null &&
          "ready" in t &&
          t.ready === !0 &&
          "phase" in t &&
          t.phase === "dev-ready"
        ) {
          const n = u.parse(
            xe,
            "expectedTeams" in t ? (t.expectedTeams ?? []) : [],
          );
          if (n.length > 0) {
            if (!this.chatSessionManager)
              throw new Error("ChatSessionManager not initialized");
            const { getWorkspaceAccessService: o } = await Promise.resolve()
                .then(() => require("../main-app.js"))
                .then((l) => l.WorkspaceAccessService),
              a = o(this.chatSessionManager.userProfile.accountId);
            await a.refresh("manual");
            const c = a.getCurrent(),
              d = this.chatSessionManager.getTeamWorkspaceInfos();
            if (
              !Fe(
                n,
                d,
                (l) =>
                  a.isTeamWorkspaceAccessibleInSnapshot(c, l) &&
                  a.shouldIncludeTeamWorkspaceInPrompt(c, l),
              )
            ) {
              await this.sleep(250);
              continue;
            }
          }
          console.log(`[ChatScriptRunner] Local stack ready: ${e}`);
          return;
        }
      } catch {}
      await this.sleep(250);
    }
    throw new Error(`Timed out waiting for local stack readiness at ${e}`);
  }
  getResults() {
    return this.results;
  }
  async ensureSignedIn() {
    const { getBorrowedAuthAppId: e, getBorrowedAuthHeader: s } =
        await Promise.resolve()
          .then(() => require("../main-app.js"))
          .then((c) => c.borrowedAuth),
      r = e();
    if (r)
      return (await s(r))
        ? (console.log(`[ChatScriptRunner] Borrowing auth from app data: ${r}`),
          !0)
        : (console.error(
            `[ChatScriptRunner] Could not borrow a current auth token from: ${r}`,
          ),
          !1);
    const t = this.environment.CHAT_SCRIPT_EMAIL,
      n = this.environment.CHAT_SCRIPT_PASSWORD;
    if (!t || !n) {
      console.log(
        "[ChatScriptRunner] No credentials provided, checking existing session...",
      );
      const { user: c } = await y.authManager.getUser();
      return c
        ? (console.log(`[ChatScriptRunner] Already signed in as: ${c.email}`),
          !0)
        : (console.error(
            "[ChatScriptRunner] Not signed in and no credentials provided",
          ),
          !1);
    }
    const { user: o } = await y.authManager.getUser();
    if (o?.email === t)
      return (
        console.log(
          "[ChatScriptRunner] Existing session already matches requested user",
        ),
        !0
      );
    console.log(`[ChatScriptRunner] Signing in as: ${t}`);
    const a = await y.authManager.signInWithPassword(t, n);
    return a.error
      ? (console.error(`[ChatScriptRunner] Sign-in failed: ${a.error}`), !1)
      : (console.log("[ChatScriptRunner] Sign-in successful"), !0);
  }
  async loadInput() {
    const e = await this.loadStartPromptInput();
    if (e) return { scenarios: e, isEvaluationMode: !1 };
    const s = this.environment.CHAT_SCRIPT_FILE,
      r = this.environment.CHAT_SCRIPT_PROMPT;
    if (s) {
      console.log(`[ChatScriptRunner] Loading from: ${s}`);
      const t = await E.readFile(s, "utf-8"),
        n = JSON.parse(t);
      if (Array.isArray(n))
        return n.length > 0 && Ue(n[0])
          ? (console.log(
              "[ChatScriptRunner] Detected evaluation scenarios format",
            ),
            { scenarios: n, isEvaluationMode: !0 })
          : {
              scenarios: n.map((o, a) => ({
                id: o.id || `prompt-${a + 1}`,
                number: a + 1,
                title: o.title || o.description || `Prompt ${a + 1}`,
                prompt: typeof o == "string" ? o : o.prompt,
                evaluationCriteria: [],
                failureModes: [],
                category: o.category || "general",
                seedMessages: typeof o == "string" ? void 0 : o.seedMessages,
                seedHistory: typeof o == "string" ? void 0 : o.seedHistory,
              })),
              isEvaluationMode: !1,
            };
      throw new Error(
        "Invalid file format. Expected array of prompts or scenarios.",
      );
    }
    if (r) {
      console.log("[ChatScriptRunner] Using single prompt from environment");
      const t = se(this.environment.CHAT_SCRIPT_SHARED_CHAT);
      return {
        scenarios: [
          {
            id: "prompt-1",
            number: 1,
            title: "Single Prompt",
            prompt: r,
            evaluationCriteria: [],
            failureModes: [],
            category: "general",
            sharedChatId: t,
            sharedChatApiUrl: k(
              this.environment.CHAT_SCRIPT_SHARED_CHAT_API_URL,
            ),
          },
        ],
        isEvaluationMode: !1,
      };
    }
    throw new Error(
      "No input provided. Set CHAT_SCRIPT_FILE or CHAT_SCRIPT_PROMPT",
    );
  }
  async loadStartPromptInput() {
    const e = this.environment.CHAT_SCRIPT_START_PROMPT_FILE,
      s = this.environment.CHAT_SCRIPT_START_PROMPT_JSON;
    if (!e && !s) return null;
    let r;
    e
      ? (console.log(`[ChatScriptRunner] Loading start prompt from: ${e}`),
        (r = await E.readFile(e, "utf-8")))
      : (r = s ?? "{}");
    const t = JSON.parse(r);
    if (!t.prompt || typeof t.prompt != "string")
      throw new Error('startPrompt JSON must include a string "prompt" field.');
    const n = t.prompt,
      o = t.interaction ?? void 0,
      a = t.onboarding !== void 0 ? u.parse(be, t.onboarding) : void 0,
      c = se(
        t.sharedChat ??
          t.sharedChatId ??
          this.environment.CHAT_SCRIPT_SHARED_CHAT,
      ),
      d =
        k(t.sharedChatApiUrl) ??
        k(this.environment.CHAT_SCRIPT_SHARED_CHAT_API_URL),
      l = k(t.sessionId);
    if (
      l !== void 0 &&
      !/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(l)
    )
      throw new Error('startPrompt "sessionId" must be a UUID.');
    if (l && c)
      throw new Error(
        'startPrompt cannot combine "sessionId" with a shared chat.',
      );
    if (a && (l || c))
      throw new Error("startPrompt onboarding requires a fresh chat session.");
    if (t.resume !== void 0 && typeof t.resume != "boolean")
      throw new Error('startPrompt "resume" must be a boolean.');
    if (t.resume) {
      if (!((t.seedMessages?.length ?? 0) > 0 || !!l || !!c))
        throw new Error(
          'startPrompt "resume" needs seedMessages, a sessionId, or a shared chat to continue.',
        );
      if (a)
        throw new Error(
          'startPrompt "resume" cannot be combined with onboarding.',
        );
      if (o)
        throw new Error(
          'startPrompt "resume" cannot be combined with a simulated user.',
        );
    }
    if (l && ((t.seedMessages?.length ?? 0) > 0 || t.seedHistory !== void 0))
      throw new Error(
        'startPrompt cannot combine "sessionId" with renderer-only seeded history. Seed the persisted session before running the prompt.',
      );
    const h = t.repeat ?? 1;
    if (!Number.isInteger(h) || h < 1 || h > 100)
      throw new Error('startPrompt "repeat" must be an integer from 1 to 100.');
    const p = t.concurrency ?? 1;
    if (!Number.isInteger(p) || p < 1 || p > 32)
      throw new Error(
        'startPrompt "concurrency" must be an integer from 1 to 32.',
      );
    if (
      t.preSubmitDelayMs !== void 0 &&
      (!Number.isFinite(t.preSubmitDelayMs) ||
        t.preSubmitDelayMs < 0 ||
        t.preSubmitDelayMs > 6e4)
    )
      throw new Error(
        'startPrompt "preSubmitDelayMs" must be from 0 to 60000.',
      );
    if (
      t.reuseSessionForRepeats !== void 0 &&
      typeof t.reuseSessionForRepeats != "boolean"
    )
      throw new Error(
        'startPrompt "reuseSessionForRepeats" must be a boolean.',
      );
    if (p > 1 && t.reuseSessionForRepeats)
      throw new Error(
        "startPrompt concurrency cannot reuse one session across repeats.",
      );
    if (p > 1 && l)
      throw new Error(
        "startPrompt concurrency cannot target one existing session.",
      );
    if (p > 1 && F.isUiSubmitMode())
      throw new Error(
        "startPrompt concurrency is available only for direct submission.",
      );
    if (a && t.reuseSessionForRepeats)
      throw new Error(
        "startPrompt onboarding cannot reuse one session across repeats.",
      );
    if (
      a &&
      ((t.attachments?.length ?? 0) > 0 ||
        (t.followups?.length ?? 0) > 0 ||
        (t.seedMessages?.length ?? 0) > 0 ||
        t.seedHistory !== void 0 ||
        t.preSubmitDelayMs !== void 0 ||
        (t.projectFolders?.length ?? 0) > 0)
    )
      throw new Error(
        "startPrompt onboarding supports the production text kickoff without attachments, followups, seeded history, project folders, or submit delays.",
      );
    if (
      t.followups !== void 0 &&
      (!Array.isArray(t.followups) ||
        t.followups.length > 16 ||
        t.followups.some(
          (m) =>
            !Number.isInteger(m.afterMs) ||
            m.afterMs < 0 ||
            m.afterMs > 12e4 ||
            typeof m.prompt != "string" ||
            m.prompt.length === 0 ||
            !["queue", "steer"].includes(m.mode) ||
            (m.requireUnsettledTurn !== void 0 &&
              typeof m.requireUnsettledTurn != "boolean"),
        ))
    )
      throw new Error(
        "startPrompt followups must contain up to 16 timed queue or steer inputs within 120000ms.",
      );
    if (
      o !== void 0 &&
      (!Number.isSafeInteger(o.maxTurns) ||
        o.maxTurns < 1 ||
        o.maxTurns > 12 ||
        typeof o.model != "string" ||
        o.model.trim().length === 0 ||
        typeof o.userPersonaAndInformation != "string" ||
        o.userPersonaAndInformation.trim().length === 0 ||
        typeof o.completionPolicy != "string" ||
        o.completionPolicy.trim().length === 0)
    )
      throw new Error(
        "startPrompt interaction needs 1-12 turns, a model, user persona and information, and a completion policy.",
      );
    if (o && (t.followups?.length ?? 0) > 0)
      throw new Error(
        "startPrompt cannot combine interaction with timed followups.",
      );
    const S = t.verification?.requiredToolNames;
    if (
      S !== void 0 &&
      (!Array.isArray(S) ||
        S.length > 32 ||
        S.some((m) => typeof m != "string" || m.length === 0 || m.length > 128))
    )
      throw new Error(
        "startPrompt verification.requiredToolNames must contain up to 32 non-empty tool names.",
      );
    if (
      t.startUrls !== void 0 &&
      (!Array.isArray(t.startUrls) ||
        t.startUrls.some(
          (m) =>
            typeof m != "string" ||
            !URL.canParse(m) ||
            !["http:", "https:"].includes(new URL(m).protocol),
        ))
    )
      throw new Error(
        "startPrompt startUrls must contain valid HTTP(S) URL strings.",
      );
    const g = De(t);
    if (a && g && g !== "default")
      throw new Error("startPrompt onboarding runs in default chat mode.");
    return (
      (this.scenarioConcurrency = p),
      Array.from({ length: h }, (m, f) => ({
        id: h === 1 ? "start-prompt" : `start-prompt-${f + 1}`,
        number: f + 1,
        title: h === 1 ? "Start Prompt" : `Start Prompt ${f + 1}`,
        prompt: n,
        evaluationCriteria: [],
        failureModes: [],
        category: "start-prompt",
        attachments: t.attachments ?? [],
        followups: t.followups ?? [],
        onboarding: a,
        interaction: o
          ? {
              maxTurns: o.maxTurns,
              model: o.model.trim(),
              userPersonaAndInformation: o.userPersonaAndInformation.trim(),
              completionPolicy: o.completionPolicy.trim(),
            }
          : void 0,
        seedMessages: t.seedMessages,
        seedHistory: t.seedHistory,
        resume: t.resume,
        sessionId: l,
        companionId: t.companionId,
        sharedChatId: c,
        sharedChatApiUrl: d,
        chatMode: a ? "default" : g,
        permissionMode: t.permissionMode,
        projectFolders: t.projectFolders,
        verification: t.verification,
        preSubmitDelayMs: t.preSubmitDelayMs,
        reuseSessionForRepeats: t.reuseSessionForRepeats,
        startUrls: t.startUrls,
      }))
    );
  }
  extractToolCalls(e) {
    const s = [],
      r = new Map();
    for (const t of e)
      if (t.role === "tool" && Array.isArray(t.content)) {
        for (const n of t.content)
          if (n && typeof n == "object" && "toolCallId" in n) {
            const o = n;
            r.set(o.toolCallId, {
              output:
                typeof o.output == "string"
                  ? o.output
                  : JSON.stringify(o.output ?? ""),
              success: !o.isError && o.status !== "error",
            });
          }
      }
    for (const t of e)
      if (t.role === "assistant" && Array.isArray(t.content)) {
        for (const n of t.content)
          if (
            n &&
            typeof n == "object" &&
            "type" in n &&
            n.type === "tool-call"
          ) {
            const o = n,
              a = r.get(o.toolCallId);
            s.push({
              toolName: o.toolName,
              toolCallId: o.toolCallId,
              input: o.input ?? {},
              output: a?.output,
              success: a?.success,
            });
          }
      }
    return s;
  }
  async executeScenario(e, s, r, t) {
    const n = Date.now();
    let o;
    const a = new Map(),
      c = (d) => {
        ((o = d.id),
          a.has(d.id) ||
            a.set(d.id, W.userRequests.skipCaptchaHelpForSession(d.id)),
          r?.(d),
          t?.throwIfAborted());
      };
    if (!this.chatService || !this.chatSessionManager)
      return {
        promptId: e.id,
        prompt: e.prompt,
        success: !1,
        messages: [],
        toolCalls: [],
        durationMs: 0,
        error: "ChatService not initialized",
      };
    try {
      if ((t?.throwIfAborted(), F.isUiSubmitMode()))
        return await this.createUiPromptRunner(t).executeScenario(e, s, n, c);
      let d = null;
      const l = (w) => {
          d ??= w;
        },
        h = () => {
          if (d === null) return;
          const w = d instanceof Error ? d.message : String(d);
          throw new Error(`Simulated user request failed: ${w}`);
        };
      let p,
        S = null;
      if (e.onboarding) {
        const w = await this.launchOnboardingScenario(e, e.onboarding, c, l, t);
        ((p = w.session), (o = p.id), (S = w.completedSession));
      } else
        ((p = await this.prepareScenarioSession(e)),
          c(p),
          e.permissionMode && p.setPermissionMode(e.permissionMode),
          await this.seedScenarioHistory(p, e));
      (e.category === "memory-implicit" || e.category === "memory") &&
        (p.setMemoryEnabled(!0),
        (p.overrideFeedback = !0),
        console.log(
          `[ChatScriptRunner] Memory enabled with auto-approval for scenario: ${e.title}`,
        ));
      const g =
        e.companionId ??
        p.getCompanionId() ??
        this.chatSessionManager.companionManager.getCurrentSidebarCompanion()
          .id;
      t?.throwIfAborted();
      const m = await this.prepareScenarioAttachments(e.attachments ?? []);
      t?.throwIfAborted();
      const f = await Promise.all(
        (e.followups ?? []).map(async (w) => ({
          ...w,
          attachmentContext: await this.prepareScenarioAttachments(
            w.attachments ?? [],
          ),
        })),
      );
      if ((t?.throwIfAborted(), (e.preSubmitDelayMs ?? 0) > 0)) {
        console.log(
          `[ChatScriptRunner] Waiting ${e.preSubmitDelayMs}ms before direct submit for first-input prewarm`,
        );
        let w = e.preSubmitDelayMs ?? 0;
        for (; w > 0; ) {
          const R = Math.min(w, 5e3);
          (await this.sleep(R, t),
            (w -= R),
            w > 0 && (await this.chatService.startFirstRequestPrewarm(p.id)));
        }
      }
      if (e.interaction) {
        let w = S,
          R = S !== null,
          A = 0;
        const C = re(e.interaction),
          I = this.setScenarioQuestionResponder(p, e, l, t),
          _ = async (T) => {
            if ((t?.throwIfAborted(), R)) {
              R = !1;
              return;
            }
            const P = w?.messages.length ?? p.messages.length,
              $ = {
                message: T,
                companionId: g,
                attachmentContext: A === 0 ? m : [],
                attachedTabs: [],
                attachedWindows: [],
                selections: [],
                autoTrackedTabId: void 0,
                startTime: Date.now(),
                chatMode: e.chatMode,
                permissionMode: e.permissionMode,
                projectFolders: e.projectFolders,
              };
            ((A += 1),
              await this.chatService.handleChatCompletion($, p.id, Date.now()),
              (w = await this.waitForDirectScenarioTurnComplete(
                p.id,
                e,
                P,
                T,
                t,
              )));
          };
        try {
          await x.runInteractiveBenchmarkConversation({
            signal: t,
            accountId: p.accountId,
            initialMessage: e.prompt,
            taskText: e.prompt,
            interaction: C,
            getMessages: () => w?.messages ?? p.messages,
            sendUserMessage: _,
            shouldContinue: x.continueAfterAnyAssistantTurn,
            requestSimulatedUserReply: (T) =>
              this.askSimulatedUser(T, p.accountId, l, t),
          });
        } finally {
          I();
        }
        if ((h(), !w))
          throw new Error("Interactive task completed without a chat turn");
        return await this.buildScenarioResultFromSession(e, s, w, n);
      }
      if (S)
        return (h(), await this.buildScenarioResultFromSession(e, s, S, n));
      const v = this.setScenarioQuestionResponder(p, e, l, t);
      try {
        const w = {
            message: e.resume ? "" : e.prompt,
            companionId: g,
            attachmentContext: m,
            attachedTabs: [],
            attachedWindows: [],
            selections: [],
            autoTrackedTabId: void 0,
            startTime: Date.now(),
            chatMode: e.chatMode,
            permissionMode: e.permissionMode,
            projectFolders: e.projectFolders,
          },
          R = p.messages.length,
          A = p.getTranscriptWindow();
        (t?.throwIfAborted(),
          await this.chatService.handleChatCompletion(
            w,
            p.id,
            Date.now(),
            e.resume
              ? {
                  hidden: !0,
                  continueFrom: {
                    throughIndex: A.throughIndex,
                    expectedRewriteEpoch: A.transcriptRewriteEpoch,
                  },
                }
              : void 0,
          ));
        const C = Date.now();
        for (const T of f) {
          t?.throwIfAborted();
          const P = C + T.afterMs - Date.now();
          P > 0 && (await this.sleep(P, t));
          const $ = await this.chatSessionManager.getSession(p.id);
          if ((t?.throwIfAborted(), !$))
            throw new Error(`Chat session disappeared: ${p.id}`);
          const N = $.getTurnPhase();
          if (T.requireUnsettledTurn && !y.isUnsettledTurn(N))
            throw new Error(
              `Timed ${T.mode} input reached a settled turn (afterMs=${T.afterMs}, phase=${N}).`,
            );
          const O = {
              message: T.prompt,
              companionId: g,
              attachmentContext: T.attachmentContext,
              attachedTabs: [],
              attachedWindows: [],
              selections: [],
              autoTrackedTabId: void 0,
              startTime: Date.now(),
              chatMode: e.chatMode,
              permissionMode: e.permissionMode,
              projectFolders: e.projectFolders,
            },
            j = await this.chatService.handleChatCompletion(
              O,
              p.id,
              Date.now(),
              { steerActiveTurn: T.mode === "steer" },
            );
          if (
            T.mode === "queue" &&
            T.requireUnsettledTurn &&
            !j.queuedRequestId
          )
            throw new Error(
              `Timed queue input was not queued (afterMs=${T.afterMs}, phase=${N}).`,
            );
          console.log(
            `[ChatScriptRunner] Timed ${T.mode} input accepted (afterMs=${T.afterMs}, phase=${N}, attachments=${T.attachmentContext.length})`,
          );
        }
        const I = f.length > 0 ? f[f.length - 1].prompt : e.prompt,
          _ = await this.waitForDirectScenarioTurnComplete(p.id, e, R, I, t);
        return await this.buildScenarioResultFromSession(e, s, _, n);
      } finally {
        v();
      }
    } catch (d) {
      return {
        promptId: e.id,
        prompt: e.prompt,
        success: !1,
        ...(o ? { sessionId: o } : {}),
        messages: [],
        toolCalls: [],
        durationMs: Date.now() - n,
        error: d instanceof Error ? d.message : "Unknown error",
      };
    } finally {
      for (const d of a.values()) d();
    }
  }
  createUiPromptRunner(e) {
    if (!this.chatService || !this.chatSessionManager)
      throw new Error("ChatService not initialized");
    return new Me({
      signal: e,
      chatService: this.chatService,
      chatSessionManager: this.chatSessionManager,
      getScenarioTimeoutMs: () => this.getScenarioTimeoutMs(),
      resolveAttachmentPath: (s) => this.resolveAttachmentPath(s),
      prepareScenarioSession: (s) => this.prepareScenarioSession(s),
      seedScenarioHistory: (s, r) => this.seedScenarioHistory(s, r),
      buildScenarioResultFromSession: (s, r, t, n) =>
        this.buildScenarioResultFromSession(s, r, t, n),
      getAttachmentReadiness: de,
      hasSubmittedPrompt: Y,
    });
  }
  getScenarioTimeoutMs() {
    const e = Number(this.environment.CHAT_SCRIPT_TIMEOUT_MS || "0");
    return Number.isFinite(e) && e > 0 ? e : 12e4;
  }
  evalToolAnswer(e, s) {
    const r = u.safeParse(
      u.looseObject({
        suspendState: u.optional(u.string()),
        status: u.optional(u.string()),
        needsFolderPicker: u.optional(u.boolean()),
        approvalRequest: u.optional(u.object({ requestId: u.string() })),
        subToolCalls: u.optional(
          u.array(
            u.object({
              id: u.string(),
              actionName: u.string(),
              appId: u.string(),
              status: u.string(),
            }),
          ),
        ),
      }),
      s,
    );
    if (!r.success) throw new Error(`Eval cannot read ${e} feedback metadata`);
    const t = r.output;
    if (t.needsFolderPicker || t.status === "needs_api_key")
      throw new Error(
        `Eval cannot answer ${e}: a folder selection or API key is required`,
      );
    if (t.suspendState === "pending_tool_permission") {
      if (t.approvalRequest)
        return {
          pending_tool_permission: {
            networkApproval: {
              requestId: t.approvalRequest.requestId,
              decision: "allow_always",
            },
          },
        };
      const n = t.subToolCalls?.filter(
        (o) => o.status === "waiting_permission",
      );
      if (n?.length)
        return {
          pending_tool_permission: {
            batch: n.map((o) => ({
              decision: "allow_always",
              subToolId: o.id,
              actionName: o.actionName,
              appId: o.appId,
            })),
          },
        };
      throw new Error(`Eval cannot identify the pending ${e} permission`);
    }
    if (
      t.suspendState === "pending_permission" ||
      t.status === "needs_permission"
    )
      return { pending_permission: { decision: "allow_always" } };
    if (t.suspendState === "pending_confirmation")
      return { pending_confirmation: { confirmed: !0, scope: "always" } };
    if (t.suspendState === "waiting_connection")
      return { waiting_connection: { confirmed: !0 } };
    if (t.suspendState === "pending_auth" || t.status === "needs_to_connect")
      return { pending_auth: { confirmed: !0 } };
    if (t.suspendState === "pending_feedback")
      return { pending_feedback: { confirmed: !1 } };
    throw new Error(
      `Eval cannot answer ${e} feedback (state=${t.suspendState ?? "missing"})`,
    );
  }
  async waitForDirectScenarioTurnComplete(e, s, r, t, n) {
    if (!this.chatSessionManager)
      throw new Error("ChatService not initialized");
    const o = Date.now() + this.getScenarioTimeoutMs(),
      a = s.resume === !0;
    let c = "unknown",
      d = 0,
      l = a;
    const h = new Set();
    for (; Date.now() < o; ) {
      n?.throwIfAborted();
      const p = await this.chatSessionManager.getSession(e);
      if ((n?.throwIfAborted(), p)) {
        if (
          ((c = p.getChatStatus()),
          (d = p.messages.length),
          (l = l || Y(p.messages, t, r)),
          this.environment.ORBITRA_EVAL_RUN_ID)
        ) {
          const g = p.messages.at(-1);
          if (g?.role === "tool" && Array.isArray(g.content))
            for (const m of g.content) {
              n?.throwIfAborted();
              const f = y.normalizeToolResultPart(m);
              if (
                f?.status !== "waiting_feedback" ||
                h.has(f.toolCallId) ||
                !p.isPermissionAnswerReady(f.toolCallId)
              )
                continue;
              const v = f.orbitraToolMetadata,
                w = this.evalToolAnswer(
                  f.toolName,
                  typeof v == "object" && v !== null ? v : void 0,
                );
              if (
                !(await this.chatService?.resolveToolInputFromRenderer(
                  p.id,
                  f.toolCallId,
                  w,
                ))
              )
                throw new Error(`Eval could not answer ${f.toolName} feedback`);
              (h.add(f.toolCallId),
                console.log(
                  `[ChatScriptRunner] Auto-answered ${f.toolName} feedback`,
                ));
            }
          if (
            (y.hasWaitingPermissionFrontier(p.messages) || h.clear(),
            y.hasWaitingPermissionFrontier(p.messages))
          ) {
            await this.sleep(100, n);
            continue;
          }
        }
        if (
          l &&
          !y.isUnsettledTurn(p.getTurnPhase()) &&
          p.hasPendingToolConfirmation()
        )
          throw new Error(
            'Chat turn requires tool permission; set "permissionMode": "permissive" for an unattended startPrompt run.',
          );
        const S = a ? p.messages.length > r : G(p.messages, t);
        if (l && !y.isUnsettledTurn(p.getTurnPhase()) && S) {
          if (this.environment.ORBITRA_EVAL_RUN_ID) {
            if ((await this.fetchEvalRootPhase(e, n)) !== "idle") {
              await this.sleep(250, n);
              continue;
            }
            (await (
              await this.chatService.getOrCreateSessionCoordinator(e)
            ).reloadCloudTail(0),
              n?.throwIfAborted());
          }
          return p;
        }
      }
      await this.sleep(100, n);
    }
    throw new Error(
      [
        "Timed out waiting for chat turn completion after prompt submission",
        `(submitted=${String(l)}, status=${c}, messages=${d})`,
      ].join(" "),
    );
  }
  async waitForHiddenMemoryNoteSplits() {
    if (!this.chatSessionManager)
      throw new Error("ChatService not initialized");
    const e = Date.now() + this.getScenarioTimeoutMs();
    for (; Date.now() < e; ) {
      const s = [
        ...this.chatSessionManager.getLoadedSessions().values(),
      ].filter(
        (t) => t.isMemoryReflection && t.memoryNoteSplitScope !== void 0,
      );
      if (
        s.filter(
          (t) =>
            y.isUnsettledTurn(t.getTurnPhase()) ||
            t.getCloudLoopRenderState().paused ||
            !t.messages.some((n) => n.role === "user"),
        ).length === 0
      ) {
        s.length > 0 &&
          console.log(
            `[ChatScriptRunner] ${s.length} memory note splitter(s) settled`,
          );
        return;
      }
      await this.sleep(100);
    }
    throw new Error(
      "Timed out waiting for hidden memory note splitting to settle",
    );
  }
  async sleep(e, s) {
    await H.setTimeout(e, void 0, { signal: s });
  }
  async buildScenarioResultFromSession(e, s, r, t) {
    const n = Date.now() - t,
      o = this.extractToolCalls(r.messages);
    console.log(`[ChatScriptRunner] Extracted ${o.length} tool calls`);
    const a = r.messages.map((m) => ({
      role: m.role,
      content:
        typeof m.content == "string" ? m.content : JSON.stringify(m.content),
    }));
    let c;
    s &&
      this.evaluator &&
      e.evaluationCriteria.length > 0 &&
      (console.log(`[ChatScriptRunner] Running LLM evaluation for: ${e.title}`),
      (c = await this.evaluator.evaluate(e, a, o)));
    let d;
    e.expectedToolCalls &&
      e.expectedToolCalls.length > 0 &&
      ((d = Oe(o, e.expectedToolCalls)),
      console.log(
        `[ChatScriptRunner] Tool call evaluation: ${d.correctCalls}/${d.totalCalls} correct (score: ${d.score})`,
      ));
    let l;
    e.verification &&
      ((l = pe(e.verification, o, a)),
      l.passed
        ? console.log("[ChatScriptRunner] Deterministic verification passed")
        : console.error(
            `[ChatScriptRunner] Deterministic verification failed: ${l.failures.join("; ")}`,
          ));
    const h = l ? l.passed : !0,
      p = e.resume
        ? r.messages
            .slice(e.seedMessages?.length ?? 0)
            .some((m) => m.role === "assistant" && !m.hidden)
        : G(r.messages, e.prompt);
    let S;
    p
      ? (S = void 0)
      : e.resume
        ? (S =
            "The resumed turn produced no assistant output or tool activity.")
        : (S =
            "No assistant output or tool activity was produced after the submitted prompt.");
    const g = h
      ? S
      : `Deterministic verification failed: ${l?.failures.join("; ")}`;
    return {
      promptId: e.id,
      prompt: e.prompt,
      success: h && p,
      sessionId: r.id,
      messages: a,
      toolCalls: o,
      durationMs: n,
      error: g,
      evaluation: c,
      toolCallEvaluation: d,
      verification: l,
    };
  }
  async askSimulatedUser(e, s, r, t) {
    const n = X.randomUUID();
    try {
      await this.writeSimulatedUserEvidence({
        requestId: n,
        status: "requested",
        request: e,
      });
      const o = await x.requestSimulatedUserReply(e, s, t);
      return (
        await this.writeSimulatedUserEvidence({
          requestId: n,
          status: "answered",
          response: o,
        }),
        o
      );
    } catch (o) {
      throw (r(o), o);
    }
  }
  async writeSimulatedUserEvidence(e) {
    const s = this.environment.CHAT_SCRIPT_AGENT_EVIDENCE_OUT;
    if (!s) return;
    const r = b.dirname(b.resolve(process.cwd(), s));
    (await E.mkdir(r, { recursive: !0 }),
      await E.appendFile(
        b.join(r, "simulated-user.jsonl"),
        `${JSON.stringify({ timestamp: new Date().toISOString(), ...e })}
`,
        { mode: 384 },
      ));
  }
  setScenarioQuestionResponder(e, s, r = () => {}, t) {
    if (!s.interaction)
      return W.userRequests.setScriptedQuestionResponder(e.id, async () => ({
        status: t?.aborted ? "cancelled" : "skipped",
      }));
    const n = re(s.interaction);
    return W.userRequests.setScriptedQuestionResponder(
      e.id,
      async (o, a, c) => {
        const d = t ? AbortSignal.any([t, a]) : a;
        if (c)
          return {
            status: "failed",
            reason: "Scripted questions cannot attach browser pages.",
          };
        const l = x.projectVisibleBenchmarkMessages(e.messages),
          h = [];
        for (const p of o) {
          if (d.aborted) return { status: "cancelled" };
          l.push({ role: "assistant", content: x.questionTranscript(p) });
          const S = await this.askSimulatedUser(
            { task: s.prompt, interaction: n, messages: l },
            e.accountId,
            r,
            d,
          );
          if (d.aborted) return { status: "cancelled" };
          const g = S.reply.trim();
          if (!S.shouldReply || !g) return { status: "skipped" };
          (h.push(g), l.push({ role: "user", content: g }));
        }
        return o.length === 1
          ? { status: "answered", reply: h[0] }
          : { status: "answered", replies: h };
      },
    );
  }
  async launchOnboardingScenario(e, s, r, t = () => {}, n) {
    const o = this.chatService,
      a = this.chatSessionManager;
    if (!o || !a) throw new Error("ChatService not initialized");
    let c;
    "researchContext" in s
      ? (c = s.researchContext)
      : (c = Z.handoffStep(
          ve.normalizeOnboardingFormData(s.profile),
          s.connectedApps,
          {},
          { confirmedFields: ["name", "roleTitle", "company"] },
        ).text);
    let d = () => {},
      l;
    try {
      const h = await Z.launchOnboardingResearchChatWithContext(
        {
          chat: {
            companionManager: o.companionManager,
            createNewSession: (...g) => o.createNewSession(...g),
            getDraftController: (g) => o.getDraftController(g),
            handleChatCompletion: (...g) => (
              n?.throwIfAborted(),
              (l = o.handleChatCompletion(...g)),
              l
            ),
          },
          prepareChat: async () => {},
        },
        {
          researchContext: c,
          kickoffMessage: e.prompt,
          companionId: e.companionId,
          permissionMode: e.permissionMode,
          beforeCompletion: async (g) => {
            const m = await a.getSession(g);
            if (!m) throw new Error(`Chat session disappeared: ${g}`);
            (r?.(m),
              n?.throwIfAborted(),
              (d = this.setScenarioQuestionResponder(m, e, t, n)));
          },
        },
      );
      await l;
      const p = await a.getSession(h);
      if (!p) throw new Error(`Chat session disappeared: ${h}`);
      const S = await this.waitForDirectScenarioTurnComplete(
        h,
        e,
        0,
        e.prompt,
        n,
      );
      return { session: p, completedSession: S };
    } finally {
      d();
    }
  }
  async prepareScenarioSession(e) {
    if (!this.chatService) throw new Error("ChatService not initialized");
    if (e.reuseSessionForRepeats && this.reusableStartPromptSession)
      return this.reusableStartPromptSession;
    if (e.sessionId) {
      const a = await this.chatService.ensureSessionLoaded(e.sessionId);
      return (
        await this.chatService.startFirstRequestPrewarm(a.id),
        e.reuseSessionForRepeats && (this.reusableStartPromptSession = a),
        console.log(`[ChatScriptRunner] Loaded existing session: ${a.id}`),
        a
      );
    }
    if (e.resume && (e.seedMessages?.length ?? 0) > 0) {
      if (!this.chatSessionManager)
        throw new Error("ChatSessionManager not initialized");
      const a = await this.chatSessionManager.importSharedChatArchive({
        version: 3,
        messages: z({
          seedMessages: this.expandSeedSyncedRoot(e.seedMessages),
        }),
        metadata: {
          title: e.title,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          totalCredits: 0,
          messageCount: e.seedMessages?.length ?? 0,
        },
      });
      return (
        await this.chatService.ensureSessionLoaded(a.id),
        console.log(
          `[ChatScriptRunner] Resuming imported conversation: ${a.id} (${a.messages.length} messages)`,
        ),
        a
      );
    }
    if (!e.sharedChatId) {
      const a = await this.chatService.createNewSession();
      return (
        await this.chatService.startFirstRequestPrewarm(a.id),
        e.reuseSessionForRepeats && (this.reusableStartPromptSession = a),
        console.log(`[ChatScriptRunner] Created session: ${a.id}`),
        a
      );
    }
    const s = e.sharedChatApiUrl ? ` via ${e.sharedChatApiUrl}` : "";
    console.log(
      `[ChatScriptRunner] Loading shared chat: ${e.sharedChatId}${s}`,
    );
    const { importSharedChat: r } = await Promise.resolve()
        .then(() => require("./windowChat-OLnWTvHU.js"))
        .then((a) => a.shareChat),
      t = await r(this.chatService, {
        sharedChatId: e.sharedChatId,
        apiUrl: e.sharedChatApiUrl,
      });
    if (!t.success)
      throw new Error(`Failed to download shared chat: ${t.error}`);
    if (t.messageCount === 0)
      throw new Error(
        `Downloaded shared chat imported zero messages: ${e.sharedChatId}`,
      );
    const n = t.localSessionId,
      o = await this.chatService.ensureSessionLoaded(n);
    if (!this.chatService.tabs.openOrSwitchToChatTab(n))
      throw new Error(`Failed to activate imported chat session ${n}`);
    return (
      o.emitMessagesUpdated(),
      await this.chatService.emitSessionMetadataUpdated(n, !0),
      e.reuseSessionForRepeats && (this.reusableStartPromptSession = o),
      console.log(
        `[ChatScriptRunner] Loaded shared chat session: ${n} (${t.messageCount} messages)`,
      ),
      o
    );
  }
  expandSeedSyncedRoot(e) {
    if (!e) return;
    const s = this.chatSessionManager?.filePaths.synced.root,
      r = s ? `$ORBITRA/${b.basename(s)}` : "$ORBITRA";
    return e.map((t) => ({
      ...t,
      ...(t.content === void 0 ? {} : { content: t.content.replaceAll(V, r) }),
      ...(t.contentParts === void 0
        ? {}
        : { contentParts: t.contentParts.map((n) => He(n, r)) }),
    }));
  }
  async seedScenarioHistory(e, s) {
    if (
      (s.reuseSessionForRepeats && this.seededReusableSessionIds.has(e.id)) ||
      s.resume
    )
      return;
    const r = z({
      seedMessages: this.expandSeedSyncedRoot(s.seedMessages),
      seedHistory: s.seedHistory,
    });
    r.length !== 0 &&
      (await e.push(...r),
      await e.save(),
      s.reuseSessionForRepeats && this.seededReusableSessionIds.add(e.id),
      console.log(
        `[ChatScriptRunner] Seeded ${r.length} history messages into session ${e.id}`,
      ));
  }
  async prepareScenarioAttachments(e) {
    if (e.length === 0 || !this.chatService || !this.chatSessionManager)
      return [];
    const s = [];
    for (const r of e) {
      const t = this.resolveAttachmentPath(r.path),
        n = r.filename ?? b.basename(t),
        o = await E.stat(t);
      if (!o.isFile())
        throw new Error(`StartPrompt attachment is not a file: ${n}`);
      const a = r.mimeType ?? ye.mimeFromExt(n) ?? "application/octet-stream",
        c = y.createAttachmentSource(a);
      if (!c)
        throw new Error(`StartPrompt attachment type is unsupported: ${n}`);
      s.push({
        id: X.randomUUID(),
        attachmentSource: c,
        filename: n,
        filepath: t,
        mimeType: c.mediaType,
        size: o.size,
        lastModified: o.mtimeMs,
        uploadStatus: y.AttachmentUploadStatus.PENDING,
        collapseState: { isFullyCollapsed: !1, wasAutoCollapsed: !1 },
      });
    }
    return s;
  }
  resolveAttachmentPath(e) {
    if (b.isAbsolute(e)) return e;
    const s = e.replace(/\\/g, "/"),
      r = "my downloads/";
    if (s.toLowerCase().startsWith(r)) {
      const t = s.slice(r.length);
      return b.join(q.app.getPath("downloads"), t);
    }
    return s.startsWith("~/")
      ? b.join(q.app.getPath("home"), s.slice(2))
      : b.resolve(process.cwd(), e);
  }
  async executeScenarioWithTimeout(e, s) {
    const r = Number(this.environment.CHAT_SCRIPT_TIMEOUT_MS || "0");
    if (!Number.isFinite(r) || r <= 0) return await this.executeScenario(e, s);
    const t = new AbortController();
    let n = null,
      o = Promise.resolve(null),
      a,
      c;
    const d = new Promise((l, h) => {
      a = setTimeout(() => {
        (t.abort(new DOMException(`Timed out after ${r}ms`, "TimeoutError")),
          (o = this.stopTimedOutScenario(n)),
          (c = setTimeout(() => {
            const p = new Error(
              "Timed-out scenario driver did not exit within 30000ms",
            );
            ((this.evidenceExportFailure = p), h(p));
          }, 3e4)));
      }, r);
    });
    try {
      const l = await Promise.race([
        this.executeScenario(
          e,
          s,
          (p) => {
            n = p;
          },
          t.signal,
        ),
        d,
      ]);
      if ((clearTimeout(c), !t.signal.aborted)) return l;
      await o;
      const h = await this.stopTimedOutScenario(n);
      if (h)
        throw (
          (this.evidenceExportFailure = new Error(
            `Timed-out scenario stop failed: ${h}`,
          )),
          this.evidenceExportFailure
        );
      return {
        promptId: e.id,
        prompt: e.prompt,
        success: !1,
        ...(l.sessionId ? { sessionId: l.sessionId } : {}),
        messages: [],
        toolCalls: [],
        durationMs: r,
        error: `Timed out after ${r}ms`,
      };
    } finally {
      (clearTimeout(a), clearTimeout(c));
    }
  }
  async stopTimedOutScenario(e) {
    if (!e) return null;
    console.log(`[ChatScriptRunner] Stopping timed-out session: ${e.id}`);
    const s = 3e4;
    let r;
    try {
      return (
        await Promise.race([
          e.stopGenerating(),
          new Promise((t, n) => {
            r = setTimeout(() => {
              n(new Error(`Stop timed out after ${s}ms`));
            }, s);
          }),
        ]),
        null
      );
    } catch (t) {
      return t instanceof Error ? t.message : "Unknown stop error";
    } finally {
      clearTimeout(r);
    }
  }
  async waitForSeededMemory(e, s, r) {
    if (!this.chatSessionManager)
      throw new Error("ChatSessionManager not initialized");
    const t = this.chatSessionManager.getProfileId(),
      n = this.chatSessionManager.companionManager,
      [
        { inspectOwnOptMem: o, openOptMemCompanionNoteLanes: a },
        { companionSourceWorkspaceId: c },
        { getFeatureFlags: d },
      ] = await Promise.all([
        Promise.resolve().then(() => require("./shared-memory-s9w_2juE.js")),
        Promise.resolve()
          .then(() => require("../main-app.js"))
          .then((l) => l.companionIdentity),
        Promise.resolve()
          .then(() => require("../main-app.js"))
          .then((l) => l.featureFlags),
      ]);
    for (;;) {
      r.throwIfAborted();
      const l = await Promise.try(async () => {
        (await n.ensureCompanionLocation(e), r.throwIfAborted());
        const S = c(n, e);
        if (!S) return null;
        const g = y.authManager.forProfile(t).accountId ?? null,
          m = {
            profileId: t,
            accountId: g,
            companionId: e,
            sourceWorkspaceId: S,
          };
        if (d(g).injectMemoriesWithMessage) {
          const f = await a(m);
          if (f.kind !== "result") return null;
          (await Promise.all(
            f.lanes.map(({ replica: v }) => v.prepareSearchIndex(e, S, "wait")),
          ),
            r.throwIfAborted());
        }
        return o(m);
      }).catch(() => null);
      r.throwIfAborted();
      const h = l?.observations.length ?? 0,
        p = l?.nodes.filter((S) => S.kind === "summary").length ?? 0;
      if (l && h >= s.observationCount && p >= s.summaryCount) {
        console.log("[ChatScriptRunner] Companion memory ready", {
          profileId: t,
          companionId: e,
          observationCount: h,
          summaryCount: p,
        });
        return;
      }
      await H.setTimeout(1e3, void 0, { signal: r });
    }
  }
  async runIsolatedTasks(e) {
    const s = u.parse(
      u.strictObject({
        schemaVersion: u.literal(1),
        concurrency: u.pipe(
          u.number(),
          u.integer(),
          u.minValue(1),
          u.maxValue(4),
        ),
        tasks: u.pipe(
          u.array(
            u.strictObject({
              key: u.pipe(
                u.string(),
                u.regex(/^[A-Za-z0-9]+(?:[-_][A-Za-z0-9]+)*$/),
              ),
              profileId: u.pipe(u.string(), u.uuid()),
              inputFile: u.pipe(u.string(), u.nonEmpty()),
              outputDirectory: u.pipe(u.string(), u.nonEmpty()),
              timeoutMs: u.pipe(
                u.number(),
                u.integer(),
                u.minValue(1),
                u.maxValue(36e5),
              ),
              memory: u.optional(te),
            }),
          ),
          u.minLength(1),
        ),
      }),
      JSON.parse(await E.readFile(e, "utf8")),
    );
    for (const l of ["key", "profileId", "outputDirectory"])
      if (new Set(s.tasks.map((h) => h[l])).size !== s.tasks.length)
        throw new Error(`Isolated tasks must have distinct ${l} values`);
    const r = this.environment.CHAT_SCRIPT_AGENT_EVIDENCE_OUT;
    if (!r || !this.profileManager)
      throw new Error("Isolated task output is unavailable");
    const { default: t } = await Promise.resolve()
        .then(() => require("../main-app.js"))
        .then((l) => l.WindowManager$1),
      { agentPermissionManager: n } = await Promise.resolve()
        .then(() => require("../main-app.js"))
        .then((l) => l.AgentPermissionManager),
      o = t.getInstance(),
      a = [];
    let c = 0;
    const d = async () => {
      for (; c < s.tasks.length; ) {
        const l = s.tasks[c++],
          h = new Date().toISOString(),
          p = Date.now();
        let S = null,
          g;
        const m = new AbortController(),
          f = l.memory ? 18e4 : 6e4;
        let v;
        const w = new F();
        w.environment = {
          ...this.environment,
          CHAT_SCRIPT_START_PROMPT_FILE: l.inputFile,
          CHAT_SCRIPT_START_PROMPT_JSON: "",
          CHAT_SCRIPT_TIMEOUT_MS: String(l.timeoutMs),
          CHAT_SCRIPT_TRANSCRIPT_OUT: b.join(
            l.outputDirectory,
            "transcript.jsonl",
          ),
          CHAT_SCRIPT_AGENT_EVIDENCE_OUT: b.join(
            l.outputDirectory,
            "agent-evidence.json",
          ),
          CHAT_SCRIPT_RESULTS_OUT: b.join(
            l.outputDirectory,
            "task-results.json",
          ),
        };
        const R = async () => {
          if (
            (await E.mkdir(l.outputDirectory, { recursive: !0 }),
            m.signal.throwIfAborted(),
            !this.profileRunners.has(l.profileId))
          ) {
            const $ = await this.profileManager.loadProfile(l.profileId);
            if ((m.signal.throwIfAborted(), !$))
              throw new Error(`Missing task profile ${l.profileId}`);
            (n.setYoloMode($.id), n.setSandboxMode($.id, "unrestricted"));
            const N = await o.createWindow($, !1),
              O = o.getManagedWindowById(N);
            if (!O)
              throw new Error(`Task profile ${l.profileId} has no window`);
            if (((g = () => O.close()), m.signal.aborted)) {
              const j = g;
              ((g = void 0), await j(), m.signal.throwIfAborted());
            }
            (await O.whenChatReady(), m.signal.throwIfAborted());
          }
          const C = this.profileRunners.get(l.profileId);
          if (!C?.chatSessionManager || !C.chatService)
            throw new Error(`Task profile ${l.profileId} has no chat driver`);
          ((w.chatService = C.chatService),
            (w.chatSessionManager = C.chatSessionManager),
            (w.profileManager = this.profileManager),
            (w.openStartUrls = C.openStartUrls));
          const { scenarios: I } = await w.loadInput();
          if ((m.signal.throwIfAborted(), I.length !== 1))
            throw new Error("An isolated task needs exactly one chat");
          const _ = I[0],
            T = _.companionId;
          if (!T)
            throw new Error("An isolated task needs an explicit companion");
          const P = C.chatSessionManager.companionManager;
          if (
            (await P.setCurrentSidebarCompanion(T, () => !m.signal.aborted),
            m.signal.throwIfAborted(),
            P.getCurrentSidebarCompanion().id !== T)
          )
            throw new Error(
              `Task ${l.key} could not select its declared companion`,
            );
          if (
            (l.memory && (await w.waitForSeededMemory(T, l.memory, m.signal)),
            _.startUrls?.length)
          ) {
            if (!w.openStartUrls)
              throw new Error("Start URL opener is unavailable");
            (await w.openStartUrls(_.startUrls), m.signal.throwIfAborted());
          }
          return _;
        };
        try {
          const C = await Promise.race([
            R(),
            new Promise((_, T) => {
              v = setTimeout(() => {
                const P = new Error(
                  `Task ${l.key} startup timed out after ${f}ms`,
                );
                (m.abort(P), T(P));
              }, f);
            }),
          ]);
          clearTimeout(v);
          const I = await w.executeScenarioWithTimeout(C, !1);
          ((w.results = [I]),
            I.success || (S = I.error ?? "Task failed"),
            await w.waitForHiddenMemoryNoteSplits());
        } catch (C) {
          S ??= C instanceof Error ? C.message : String(C);
        } finally {
          if ((clearTimeout(v), m.abort(), w.results.length > 0)) {
            const C = await Promise.allSettled([
              w.writeResultsFile(!1),
              w.writeTranscriptFile(),
              w.writeAgentEvidenceFile(),
            ]);
            for (const I of C)
              I.status === "rejected" &&
                (S ??=
                  I.reason instanceof Error
                    ? I.reason.message
                    : String(I.reason));
          }
          try {
            await g?.();
          } catch (C) {
            S ??= C instanceof Error ? C.message : String(C);
          }
        }
        const A = {
          key: l.key,
          startedAt: h,
          completedAt: new Date().toISOString(),
          durationMs: Date.now() - p,
          failure: S,
        };
        try {
          await E.writeFile(
            b.join(l.outputDirectory, "execution.json"),
            JSON.stringify(A, null, 2),
          );
        } catch (C) {
          A.failure ??= C instanceof Error ? C.message : String(C);
        }
        (a.push(A),
          console.log(
            `[ChatScriptRunner] Isolated task ${l.key}: ${A.failure ? "failed" : "complete"}`,
          ));
      }
    };
    (await Promise.all(
      Array.from({ length: Math.min(s.concurrency, s.tasks.length) }, d),
    ),
      await y.chatTraceManager.flush(),
      await E.writeFile(
        r,
        JSON.stringify(
          { schemaVersion: 1, kind: "isolated-tasks", tasks: a },
          null,
          2,
        ),
      ));
  }
  async runScript() {
    if (this.isRunning) {
      console.log("[ChatScriptRunner] Already running");
      return;
    }
    ((this.isRunning = !0),
      (this.results = []),
      (this.reusableStartPromptSession = null),
      this.seededReusableSessionIds.clear(),
      (this.scenarioConcurrency = 1),
      console.log("[ChatScriptRunner] ================================"),
      console.log("[ChatScriptRunner] Starting chat script execution"),
      console.log("[ChatScriptRunner] ================================"));
    try {
      if (
        (await this.waitForReadiness(),
        this.profileManager?.setGlobalSetting("hasCompletedOnboarding", !0),
        !(await this.ensureSignedIn()))
      ) {
        this.exitWithError("Not signed in");
        return;
      }
      const s = this.environment.ORBITRA_EVAL_TASKS_FILE;
      if (s && !q.app.isPackaged) {
        (await this.runIsolatedTasks(s), this.exitWithSuccess());
        return;
      }
      const { scenarios: r, isEvaluationMode: t } = await this.loadInput();
      (console.log(`[ChatScriptRunner] Loaded ${r.length} scenarios`),
        console.log(`[ChatScriptRunner] Evaluation mode: ${t}`));
      const n = this.environment.ORBITRA_EVAL_SEEDED_MEMORY;
      if (n && !q.app.isPackaged) {
        const g = u.parse(te, JSON.parse(n)),
          { id: m } = u.parse(
            u.object({ id: u.pipe(u.string(), u.nonEmpty()) }),
            JSON.parse(
              this.environment.ORBITRA_EVAL_MAIN_COMPANION ?? "null",
            ),
          );
        if (r.length !== 1 || (r[0].companionId && r[0].companionId !== m))
          throw new Error(
            "Seeded memory readiness requires one task using the declared companion",
          );
        const f = new AbortController(),
          v = setTimeout(() => {
            f.abort(
              new Error(
                "Seeded companion memory startup timed out after 180000ms",
              ),
            );
          }, 18e4);
        try {
          await y.raceAbort(this.waitForSeededMemory(m, g, f.signal), f.signal);
        } finally {
          clearTimeout(v);
        }
      }
      const o = r.flatMap((g) => g.startUrls ?? []);
      if (o.length > 0) {
        if (!this.openStartUrls)
          throw new Error("Start URL opener is unavailable");
        (await this.openStartUrls(o),
          console.log(
            `[ChatScriptRunner] Opened ${o.length} task start URL(s)`,
          ));
      }
      t &&
        !this.evaluator &&
        console.warn(
          "[ChatScriptRunner] Warning: Evaluation scenarios loaded but OPENAI_API_KEY not set. Skipping evaluation.",
        );
      const a = new Array(r.length);
      let c = 0;
      const d = Math.min(this.scenarioConcurrency, r.length),
        l = Date.now();
      console.log(`[ChatScriptRunner] Scenario concurrency: ${d}`);
      const h = async () => {
        for (; c < r.length; ) {
          const g = c;
          c += 1;
          const m = r[g];
          console.log(
            `[ChatScriptRunner] [${g + 1}/${r.length}] Executing: ${m.title}`,
          );
          const f = await this.executeScenarioWithTimeout(m, t);
          if (((a[g] = f), f.success))
            if (f.evaluation) {
              const v = f.evaluation.passed ? "✅ PASSED" : "❌ FAILED";
              console.log(
                `[ChatScriptRunner] [${g + 1}/${r.length}] ${v} (score: ${f.evaluation.score}, ${(f.durationMs / 1e3).toFixed(1)}s)`,
              );
            } else
              console.log(
                `[ChatScriptRunner] [${g + 1}/${r.length}] ✅ Success (${(f.durationMs / 1e3).toFixed(1)}s)`,
              );
          else
            console.log(
              `[ChatScriptRunner] [${g + 1}/${r.length}] ❌ Failed: ${f.error}`,
            );
        }
      };
      (await Promise.all(Array.from({ length: d }, () => h())),
        (this.results = a),
        this.environment.ORBITRA_EVAL_RUN_ID &&
          (await this.waitForHiddenMemoryNoteSplits()),
        this.printSummary(t, Date.now() - l),
        await this.writeResultsFile(t),
        await this.writeTranscriptFile(),
        await this.writeAgentEvidenceFile(),
        await y.chatTraceManager.flush());
      const p = this.results.every((g) => g.success),
        S = t ? this.results.every((g) => g.evaluation?.passed !== !1) : !0;
      p && S
        ? this.exitWithSuccess()
        : this.exitWithError(
            t ? "Some scenarios failed evaluation" : "Some prompts failed",
            !0,
          );
    } catch (e) {
      (console.error("[ChatScriptRunner] Fatal error:", e),
        await y.chatTraceManager.flush(),
        this.exitWithError(e instanceof Error ? e.message : "Unknown error"));
    }
  }
  printSummary(e, s) {
    const r = this.results.filter((o) => o.success).length,
      t = this.results.filter((o) => !o.success).length;
    if (
      (console.log(""),
      console.log(
        "[ChatScriptRunner] ╔════════════════════════════════════════╗",
      ),
      console.log(
        "[ChatScriptRunner] ║       CHAT SCRIPT RESULTS SUMMARY      ║",
      ),
      console.log(
        "[ChatScriptRunner] ╠════════════════════════════════════════╣",
      ),
      console.log(
        `[ChatScriptRunner] ║  Total:     ${String(this.results.length).padStart(3)}                         ║`,
      ),
      console.log(
        `[ChatScriptRunner] ║  Succeeded: ${String(r).padStart(3)}  ✅                      ║`,
      ),
      console.log(
        `[ChatScriptRunner] ║  Failed:    ${String(t).padStart(3)}  ❌                      ║`,
      ),
      console.log(
        `[ChatScriptRunner] ║  Wall time: ${(s / 1e3 / 60).toFixed(1).padStart(5)} min                  ║`,
      ),
      e)
    ) {
      const o = this.results.filter((h) => h.evaluation),
        a = o.filter((h) => h.evaluation?.passed).length,
        c = o.filter((h) => h.evaluation && !h.evaluation.passed).length,
        d =
          o.length > 0
            ? o.reduce((h, p) => h + (p.evaluation?.score || 0), 0) / o.length
            : 0,
        l = o.reduce((h, p) => h + (p.evaluation?.evalCost || 0), 0);
      (console.log(
        "[ChatScriptRunner] ╠════════════════════════════════════════╣",
      ),
        console.log(
          "[ChatScriptRunner] ║  LLM EVALUATION RESULTS                ║",
        ),
        console.log(
          "[ChatScriptRunner] ╠════════════════════════════════════════╣",
        ),
        console.log(
          `[ChatScriptRunner] ║  Passed:    ${String(a).padStart(3)}  ✅                      ║`,
        ),
        console.log(
          `[ChatScriptRunner] ║  Failed:    ${String(c).padStart(3)}  ❌                      ║`,
        ),
        console.log(
          `[ChatScriptRunner] ║  Avg Score: ${d.toFixed(1).padStart(5)}                       ║`,
        ),
        console.log(
          `[ChatScriptRunner] ║  Eval Cost: $${l.toFixed(4).padStart(6)}                    ║`,
        ));
    }
    const n = this.results.filter((o) => o.toolCallEvaluation);
    if (n.length > 0) {
      const o =
        n.reduce((a, c) => a + (c.toolCallEvaluation?.score || 0), 0) /
        n.length;
      (console.log(
        "[ChatScriptRunner] ╠════════════════════════════════════════╣",
      ),
        console.log(
          "[ChatScriptRunner] ║  TOOL CALL EVALUATION                  ║",
        ),
        console.log(
          "[ChatScriptRunner] ╠════════════════════════════════════════╣",
        ),
        console.log(
          `[ChatScriptRunner] ║  Scenarios: ${String(n.length).padStart(3)}                         ║`,
        ),
        console.log(
          `[ChatScriptRunner] ║  Avg Score: ${o.toFixed(1).padStart(5)}                       ║`,
        ));
    }
    (console.log(
      "[ChatScriptRunner] ╚════════════════════════════════════════╝",
    ),
      console.log(""));
  }
  async writeResultsFile(e) {
    const s = process.cwd(),
      r =
        this.environment.CHAT_SCRIPT_RESULTS_OUT ??
        `${s}/chat-script-results.json`,
      t = this.results.filter((a) => a.evaluation),
      n = {
        completedAt: new Date().toISOString(),
        total: this.results.length,
        succeeded: this.results.filter((a) => a.success).length,
        failed: this.results.filter((a) => !a.success).length,
        results: this.results,
      };
    e &&
      t.length > 0 &&
      (n.evaluation = {
        passed: t.filter((a) => a.evaluation?.passed).length,
        failed: t.filter((a) => a.evaluation && !a.evaluation.passed).length,
        averageScore:
          t.reduce((a, c) => a + (c.evaluation?.score || 0), 0) / t.length,
        totalEvalCost: t.reduce((a, c) => a + (c.evaluation?.evalCost || 0), 0),
      });
    const o = this.results.filter((a) => a.toolCallEvaluation);
    (o.length > 0 &&
      (n.toolCallEvaluation = {
        averageScore:
          o.reduce((a, c) => a + (c.toolCallEvaluation?.score || 0), 0) /
          o.length,
        scenariosEvaluated: o.length,
      }),
      await E.writeFile(r, JSON.stringify(n, null, 2)),
      console.log(`[ChatScriptRunner] Results written to: ${r}`));
  }
  async writeTranscriptFile() {
    const e = this.environment.CHAT_SCRIPT_TRANSCRIPT_OUT;
    if (!e) return;
    const s = b.resolve(process.cwd(), e);
    await E.mkdir(b.dirname(s), { recursive: !0 });
    const r = [];
    r.push(
      JSON.stringify({
        type: "summary",
        completedAt: new Date().toISOString(),
        total: this.results.length,
        succeeded: this.results.filter((t) => t.success).length,
        failed: this.results.filter((t) => !t.success).length,
      }),
    );
    for (const t of this.results)
      (r.push(JSON.stringify({ type: "result", ...t, messages: void 0 })),
        t.messages.forEach((n, o) => {
          r.push(
            JSON.stringify({
              type: "message",
              sessionId: t.sessionId,
              promptId: t.promptId,
              index: o,
              role: n.role,
              content: n.content,
            }),
          );
        }),
        t.toolCalls.forEach((n, o) => {
          r.push(
            JSON.stringify({
              type: "tool_call",
              sessionId: t.sessionId,
              promptId: t.promptId,
              index: o,
              ...n,
            }),
          );
        }));
    (await E.writeFile(
      s,
      `${r.join(`
`)}
`,
    ),
      console.log(`[ChatScriptRunner] Transcript written to: ${s}`));
  }
  async writeAgentEvidenceFile() {
    const e = this.environment.CHAT_SCRIPT_AGENT_EVIDENCE_OUT;
    if (!e) return;
    if (this.evidenceExportFailure) throw this.evidenceExportFailure;
    if (!this.chatSessionManager)
      throw new Error("Chat session manager is unavailable");
    const s = this.results.flatMap((n) => (n.sessionId ? [n.sessionId] : []));
    if (s.length !== 1)
      throw new Error(
        `Eval evidence requires exactly one root session; found ${s.length}`,
      );
    const r = b.resolve(process.cwd(), e),
      t = await this.collectSettledAgentEvidence(s[0]);
    (await E.mkdir(b.dirname(r), { recursive: !0 }),
      await E.writeFile(
        r,
        `${JSON.stringify(t, null, 2)}
`,
      ),
      console.log(`[ChatScriptRunner] Agent evidence written to: ${r}`));
  }
  async fetchEvalRootPhase(e, s) {
    if (!this.chatSessionManager)
      throw new Error("Chat session manager is unavailable");
    const r = this.chatSessionManager.getProfileId(),
      t = y.authManager.forProfile(r).accountId;
    if (!t) throw new Error("Eval evidence requires a signed-in account");
    const n = await y.fetchWithRetry(
      `${y.config.app.apiUrl}/api/chat/sessions/${encodeURIComponent(e)}/phase?profileId=${encodeURIComponent(r)}`,
      { accountId: t, signal: s },
    );
    if (!n.ok) throw new Error(`Eval session phase unavailable: ${n.status}`);
    return u.parse(u.object({ phase: y.SessionPhaseSchema }), await n.json())
      .phase;
  }
  async collectSettledAgentEvidence(e) {
    if (!this.chatSessionManager)
      throw new Error("Chat session manager is unavailable");
    const s = AbortSignal.timeout(6e4),
      r = () => this.fetchEvalRootPhase(e, s);
    for (;;) {
      (s.throwIfAborted(),
        await x.waitForBenchmarkTreeQuiescent({
          fetchRootPhase: r,
          sleep: (n) => this.sleep(n, s),
          now: () => Date.now(),
          timeoutMs: 6e4,
          pollIntervalMs: 250,
        }));
      const t = await this.chatSessionManager.collectEvalAgentTree(e);
      if ((s.throwIfAborted(), (await r()) === "idle")) return t;
    }
  }
  exitWithSuccess() {
    if (this.environment.CHAT_SCRIPT_HOLD_OPEN_AFTER_RUN === "true") {
      console.log(
        "[ChatScriptRunner] Run complete; waiting for the eval controller",
      );
      return;
    }
    (console.log("[ChatScriptRunner] Exiting with success (code 0)"),
      setTimeout(() => q.app.exit(0), 1e3));
  }
  exitWithError(e, s = !1) {
    if (s && this.environment.CHAT_SCRIPT_HOLD_OPEN_AFTER_RUN === "true") {
      console.error(
        `[ChatScriptRunner] Run failed: ${e}; waiting for the eval controller`,
      );
      return;
    }
    (console.error(`[ChatScriptRunner] Exiting with error (code 1): ${e}`),
      setTimeout(() => q.app.exit(1), 1e3));
  }
}
const ze = new F();
exports.ChatScriptRunner = F;
exports.buildChatScriptSeedMessages = z;
exports.chatScriptPromptTextMatches = Q;
exports.chatScriptRunner = ze;
exports.getChatScriptAttachmentReadiness = de;
exports.hasChatScriptActivityAfterSubmittedPrompt = G;
exports.hasSubmittedChatScriptPrompt = Y;
exports.inferFinalRawDataRows = fe;
exports.inferSourceCsvRowsIncludingHeader = me;
exports.verifyChatScriptRun = pe;
exports.verifyFormulaDrivenSpreadsheetRun = ge;
