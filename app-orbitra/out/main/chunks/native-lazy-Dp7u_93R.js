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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "61666c45-f5bc-496c-b32a-4b7eb614bf5f"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-61666c45-f5bc-496c-b32a-4b7eb614bf5f"));
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const o = {
  affiliates: () =>
    Promise.resolve().then(() => require("./affiliates-BLuY4V2j.js")),
  airtable: () =>
    Promise.resolve().then(() => require("./airtable-BYaGfP0D.js")),
  apollo: () => Promise.resolve().then(() => require("./apollo-Zc700U9I.js")),
  asana: () => Promise.resolve().then(() => require("./asana-BtyCQyb-.js")),
  ashby: () => Promise.resolve().then(() => require("./ashby-CkmXZY8x.js")),
  box: () => Promise.resolve().then(() => require("./box-B6FJnmiH.js")),
  brevo: () => Promise.resolve().then(() => require("./brevo-CXvM9DBj.js")),
  calcom: () => Promise.resolve().then(() => require("./calcom-CQbidlek.js")),
  calendly: () =>
    Promise.resolve().then(() => require("./calendly-EL_C83IT.js")),
  clickup: () => Promise.resolve().then(() => require("./clickup-BYaLAR6I.js")),
  cloudflare: () =>
    Promise.resolve().then(() => require("./cloudflare-JzvgZdHe.js")),
  confluence: () =>
    Promise.resolve().then(() => require("./confluence-bTRRJex_.js")),
  dropbox: () => Promise.resolve().then(() => require("./dropbox-BqnFHj-b.js")),
  facebook_pages: () =>
    Promise.resolve().then(() => require("./facebook_pages-D10B0I1j.js")),
  figma: () => Promise.resolve().then(() => require("./figma-C-s49UY7.js")),
  front: () => Promise.resolve().then(() => require("./front-Bh8hdVKA.js")),
  github: () => Promise.resolve().then(() => require("./github-ENnHdYxq.js")),
  gitlab: () => Promise.resolve().then(() => require("./gitlab-Dr4g_-j-.js")),
  gmail: () => Promise.resolve().then(() => require("./gmail-D0MPeIp0.js")),
  googledocs: () =>
    Promise.resolve().then(() => require("./googledocs-l-Z6iEgJ.js")),
  googledrive: () =>
    Promise.resolve().then(() => require("./googledrive-CZwc3iVh.js")),
  googlesheets: () =>
    Promise.resolve().then(() => require("./googlesheets-BK5I2yHN.js")),
  harvest: () => Promise.resolve().then(() => require("./harvest-D3oeeBFf.js")),
  hunter: () => Promise.resolve().then(() => require("./hunter-BQvrxVLU.js")),
  jira: () => Promise.resolve().then(() => require("./jira-CbQgvvqq.js")),
  lusha: () => Promise.resolve().then(() => require("./lusha-COMD2mKr.js")),
  mailchimp: () =>
    Promise.resolve().then(() => require("./mailchimp-CRUYP-vn.js")),
  metaads: () => Promise.resolve().then(() => require("./metaads-DxQEW-IB.js")),
  microsoft_lists: () =>
    Promise.resolve().then(() => require("./microsoft_lists-C_u1N3tl.js")),
  miro: () => Promise.resolve().then(() => require("./miro-Cpj3vCWG.js")),
  native_calendar: () =>
    Promise.resolve().then(() => require("./native_calendar-1uqgNmGX.js")),
  onedrive: () =>
    Promise.resolve().then(() => require("./onedrive-DckmD9SF.js")),
  outlook: () => Promise.resolve().then(() => require("./outlook-GxePM-Ns.js")),
  outlook_calendar: () =>
    Promise.resolve().then(() => require("./outlook_calendar-WZ6pNHNK.js")),
  posthog: () => Promise.resolve().then(() => require("./posthog-K5tIP7i1.js")),
  resend: () => Promise.resolve().then(() => require("./resend-Bx1x9DgQ.js")),
  salesforce: () =>
    Promise.resolve().then(() => require("./salesforce-B65HnIsu.js")),
  sentry: () => Promise.resolve().then(() => require("./sentry-C_XKCW9C.js")),
  sharepoint: () =>
    Promise.resolve().then(() => require("./sharepoint-D7XLwCdr.js")),
  shopify: () => Promise.resolve().then(() => require("./shopify-Bn5H2bHY.js")),
  slack: () => Promise.resolve().then(() => require("./slack-DxxzEmms.js")),
  support_console: () =>
    Promise.resolve().then(() => require("./support_console-DdQogGkc.js")),
  surveymonkey: () =>
    Promise.resolve().then(() => require("./surveymonkey-hZsoJOMQ.js")),
  team_creator: () =>
    Promise.resolve().then(() => require("./team_creator-BLE_vTsT.js")),
  teams: () => Promise.resolve().then(() => require("./teams-D9-QTQB4.js")),
  telegram: () =>
    Promise.resolve().then(() => require("./telegram-BflYYpsu.js")),
  trello: () => Promise.resolve().then(() => require("./trello-QwoD3ISD.js")),
  twilio: () => Promise.resolve().then(() => require("./twilio-D1HIur_2.js")),
  typeform: () =>
    Promise.resolve().then(() => require("./typeform-Dq3G_zWX.js")),
  user_insights: () =>
    Promise.resolve().then(() => require("./user_insights-BIhs_n-5.js")),
  vercel: () => Promise.resolve().then(() => require("./vercel-Q_Qy3dPv.js")),
  webflow: () => Promise.resolve().then(() => require("./webflow-Bx6Vcc0H.js")),
  whatsapp: () =>
    Promise.resolve().then(() => require("./whatsapp-B3DtvAh0.js")),
  wrike: () => Promise.resolve().then(() => require("./wrike-DsyIeeBQ.js")),
  xero: () => Promise.resolve().then(() => require("./xero-Bv6m8ptG.js")),
  zoom: () => Promise.resolve().then(() => require("./zoom-BxcsfrIk.js")),
};
async function s() {
  const e = await Promise.all(
    Object.values(o).map(async (r) => (await r()).NATIVE_TOOL_METADATA),
  );
  return Object.assign({}, ...e);
}
exports.loadAllNativeToolMetadata = s;
