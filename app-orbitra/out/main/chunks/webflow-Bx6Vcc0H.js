"use strict";
(function () {
  try {
    var e =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    e.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "9bd9b4f0-f06e-48df-9729-83bbf7acaaab"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-9bd9b4f0-f06e-48df-9729-83bbf7acaaab"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const i = {
  webflow_list_sites: {
    description:
      "List all Webflow sites the connected user has access to. Returns id, displayName, shortName, previewUrl, lastPublished, workspaceId. Start here to find a site_id for other tools.",
    inputJsonSchema:
      '{"type":"object","properties":{"accountId":{"type":"string"}},"required":[]}',
    outputJsonSchema:
      '{"type":"object","propertyNames":{"type":"string"},"additionalProperties":{},"description":"Webflow API response."}',
  },
  webflow_list_collections: {
    description:
      'List CMS collections in a Webflow site. Each collection is a content type (e.g. "Blog Posts"). Returns id, displayName, singularName, slug.',
    inputJsonSchema:
      '{"type":"object","properties":{"siteId":{"type":"string","description":"Site id from webflow_list_sites."},"accountId":{"type":"string"}},"required":["siteId"]}',
    outputJsonSchema:
      '{"type":"object","propertyNames":{"type":"string"},"additionalProperties":{},"description":"Webflow API response."}',
  },
  webflow_list_items: {
    description:
      "List CMS items (rows) in a Webflow collection. Returns id, fieldData (the full row contents), draft/archived state, timestamps.",
    inputJsonSchema:
      '{"type":"object","properties":{"start":{"type":"integer","minimum":1,"maximum":9007199254740991,"title":"ReadPaginationStart","default":1},"end":{"type":"integer","minimum":1,"maximum":9007199254740991,"title":"ReadPaginationEnd"},"cursor":{"type":"string","title":"ReadPaginationCursor"},"collectionId":{"type":"string","description":"Collection id from webflow_list_collections."},"accountId":{"type":"string"}},"required":["collectionId"]}',
    outputJsonSchema:
      '{"type":"object","properties":{"items":{"type":"array","items":{"type":"object","propertyNames":{"type":"string"},"additionalProperties":{}}},"nextCursor":{"type":"string"},"partial":{"type":"object","properties":{"reason":{"enum":["time_budget","response_size","rate_limit","provider_error","provider_result_cap"],"type":"string"},"retryAfterMs":{"type":"integer","minimum":0,"maximum":9007199254740991}},"required":["reason"],"title":"ReadPaginationPartial"}},"required":["items"]}',
    pagination: {
      kind: "list",
      legacyFields: ["limit", "offset"],
      defaultCount: 25,
    },
  },
  webflow_create_item: {
    description:
      "Create a new CMS item in a Webflow collection. The item is unpublished until you call webflow_publish_site (or set is_draft and edit in Webflow).",
    inputJsonSchema:
      '{"type":"object","properties":{"collectionId":{"type":"string","description":"Collection id to add the item to."},"fieldData":{"type":"object","propertyNames":{"type":"string"},"additionalProperties":{},"description":"Field values keyed by Webflow field slug. Required: name, slug. Reference fields take a string id (use webflow_list_items on the referenced collection to discover ids)."},"isDraft":{"type":"boolean","description":"Create as draft rather than published. Default false."},"accountId":{"type":"string"}},"required":["collectionId","fieldData"]}',
    outputJsonSchema:
      '{"type":"object","propertyNames":{"type":"string"},"additionalProperties":{},"description":"Webflow API response."}',
  },
  webflow_publish_site: {
    description:
      "Publish a Webflow site. **DESTRUCTIVE** — pushes draft changes live to the user's domain(s). Always confirm with user before calling. Returns the publish job status.",
    inputJsonSchema:
      '{"type":"object","properties":{"siteId":{"type":"string","description":"Site id from webflow_list_sites."},"customDomains":{"type":"array","items":{"type":"string"},"description":"Custom domain names to publish to (e.g. [\\"acme.com\\"]). Always also publishes to webflow.io subdomain."},"accountId":{"type":"string"}},"required":["siteId"]}',
    outputJsonSchema:
      '{"type":"object","propertyNames":{"type":"string"},"additionalProperties":{},"description":"Webflow API response."}',
  },
};
exports.NATIVE_TOOL_METADATA = i;
