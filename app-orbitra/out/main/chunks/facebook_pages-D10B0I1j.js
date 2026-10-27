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
      (e._sentryDebugIds[t] = "f1ac99cf-4f5f-4f1d-ae1c-06074b9e8825"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-f1ac99cf-4f5f-4f1d-ae1c-06074b9e8825"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const i = {
  facebook_pages_list_pages: {
    description: "Lists Facebook Pages available to the connected account.",
    inputJsonSchema:
      '{"type":"object","properties":{"accountId":{"type":"string","description":"Optional connected Orbitra account ID when multiple Facebook accounts are connected."},"start":{"type":"integer","minimum":1,"maximum":9007199254740991,"title":"ReadPaginationStart","default":1},"end":{"type":"integer","minimum":1,"maximum":9007199254740991,"title":"ReadPaginationEnd"},"cursor":{"type":"string","title":"ReadPaginationCursor"}}}',
    outputJsonSchema:
      '{"type":"object","properties":{"response_data":{"type":"object","propertyNames":{"type":"string"},"additionalProperties":{}},"error":{"anyOf":[{"type":"string"},{"type":"null"}]},"successful":{"type":"boolean"},"nextCursor":{"type":"string"},"partial":{"type":"object","properties":{"reason":{"enum":["time_budget","response_size","rate_limit","provider_error","provider_result_cap"],"type":"string"},"retryAfterMs":{"type":"integer","minimum":0,"maximum":9007199254740991}},"required":["reason"],"title":"ReadPaginationPartial"}},"required":[]}',
    pagination: {
      kind: "list",
      legacyFields: ["limit", "after", "before"],
      defaultCount: 100,
    },
  },
  facebook_pages_get_page: {
    description: "Gets profile and metadata for one Facebook Page.",
    inputJsonSchema:
      '{"type":"object","properties":{"accountId":{"type":"string","description":"Optional connected Orbitra account ID when multiple Facebook accounts are connected."},"pageId":{"type":"string","description":"Facebook Page ID from facebook_pages_list_pages."}},"required":["pageId"]}',
    outputJsonSchema:
      '{"type":"object","properties":{"response_data":{"type":"object","propertyNames":{"type":"string"},"additionalProperties":{}},"error":{"anyOf":[{"type":"string"},{"type":"null"}]},"successful":{"type":"boolean"}},"required":[],"additionalProperties":false,"title":"MetaAdsResponse"}',
  },
  facebook_pages_list_posts: {
    description: "Lists recent posts for a Facebook Page.",
    inputJsonSchema:
      '{"type":"object","properties":{"accountId":{"type":"string","description":"Optional connected Orbitra account ID when multiple Facebook accounts are connected."},"pageId":{"type":"string","description":"Facebook Page ID from facebook_pages_list_pages."},"start":{"type":"integer","minimum":1,"maximum":9007199254740991,"title":"ReadPaginationStart","default":1},"end":{"type":"integer","minimum":1,"maximum":9007199254740991,"title":"ReadPaginationEnd"},"cursor":{"type":"string","title":"ReadPaginationCursor"}},"required":["pageId"]}',
    outputJsonSchema:
      '{"type":"object","properties":{"response_data":{"type":"object","propertyNames":{"type":"string"},"additionalProperties":{}},"error":{"anyOf":[{"type":"string"},{"type":"null"}]},"successful":{"type":"boolean"},"nextCursor":{"type":"string"},"partial":{"type":"object","properties":{"reason":{"enum":["time_budget","response_size","rate_limit","provider_error","provider_result_cap"],"type":"string"},"retryAfterMs":{"type":"integer","minimum":0,"maximum":9007199254740991}},"required":["reason"],"title":"ReadPaginationPartial"}},"required":[]}',
    pagination: {
      kind: "list",
      legacyFields: ["limit", "after", "before"],
      defaultCount: 25,
    },
  },
};
exports.NATIVE_TOOL_METADATA = i;
