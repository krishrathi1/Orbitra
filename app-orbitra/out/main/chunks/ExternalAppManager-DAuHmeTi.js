"use strict";
var k = Object.create;
var W = Object.defineProperty;
var $ = Object.getOwnPropertyDescriptor;
var N = Object.getOwnPropertyNames;
var R = Object.getPrototypeOf,
  P = Object.prototype.hasOwnProperty;
var J = (u, e, t, i) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let r of N(e))
      !P.call(u, r) &&
        r !== t &&
        W(u, r, {
          get: () => e[r],
          enumerable: !(i = $(e, r)) || i.enumerable,
        });
  return u;
};
var A = (u, e, t) => (
  (t = u != null ? k(R(u)) : {}),
  J(
    e || !u || !u.__esModule
      ? W(t, "default", { value: u, enumerable: !0 })
      : t,
    u,
  )
);
(function () {
  try {
    var u =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    u.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var u =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new u.Error().stack;
    e &&
      ((u._sentryDebugIds = u._sentryDebugIds || {}),
      (u._sentryDebugIds[e] = "c8846bb2-a974-46c6-ba06-70e4271c7584"),
      (u._sentryDebugIdIdentifier =
        "sentry-dbid-c8846bb2-a974-46c6-ba06-70e4271c7584"));
  })();
} catch {}
const n = require("../main-app.js"),
  L = require("fs"),
  O = require("path"),
  d = require("electron"),
  T = require("./protocol-BGN1BQCi.js"),
  D = require("child_process"),
  _ = require("util");
function M(u) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (u) {
    for (const t in u)
      if (t !== "default") {
        const i = Object.getOwnPropertyDescriptor(u, t);
        Object.defineProperty(
          e,
          t,
          i.get ? i : { enumerable: !0, get: () => u[t] },
        );
      }
  }
  return ((e.default = u), Object.freeze(e));
}
const p = M(L),
  y = M(O);
class E {
  runJxaModule = null;
  loadPromise = null;
  async loadModule() {
    if (!this.runJxaModule)
      return this.loadPromise
        ? this.loadPromise
        : ((this.loadPromise = (async () => {
            try {
              const e = await import("run-jxa");
              this.runJxaModule = e.runJxa;
            } catch (e) {
              n.logger.error("Failed to load run-jxa module:", e);
            }
          })()),
          this.loadPromise);
  }
  isAvailable() {
    return process.platform === "darwin";
  }
  async run(e, t = 5e3) {
    if (!this.isAvailable())
      return (n.logger.warn("JXA is only available on macOS"), null);
    if ((await this.loadModule(), !this.runJxaModule))
      return (n.logger.error("run-jxa module not loaded"), null);
    try {
      const i = Date.now(),
        r = await Promise.race([
          this.runJxaModule(e),
          new Promise((o, a) =>
            setTimeout(
              () => a(new Error(`JXA script timed out after ${t}ms`)),
              t,
            ),
          ),
        ]),
        s = Date.now() - i;
      return (
        n.logger.info(
          `[JxaRunner] Script completed in ${s}ms, result type: ${typeof r}`,
        ),
        r
      );
    } catch (i) {
      if (i instanceof Error && i.message.includes("timed out"))
        n.logger.warn(`JXA execution timed out after ${t}ms`);
      else {
        const r = i instanceof Error ? i.message : String(i);
        (n.logger.error(`[JxaRunner] JXA execution failed: ${r}`),
          i instanceof Error &&
            i.stack &&
            n.logger.error(`[JxaRunner] Stack: ${i.stack}`));
      }
      return null;
    }
  }
  async getUITree(e, t = 3, i = 50) {
    const r = e.replace(/'/g, "\\'"),
      s = `
var se = Application('System Events');
var proc = se.processes.byName('${r}');

if (!proc.exists()) {
  return JSON.stringify({ error: 'Process not found: ${r}' });
}

// Minimal skip list - only truly useless elements
var skipRoles = {
  'AXGrowArea': true, 'AXMatte': true, 'AXUnknown': true
};

// Collect all text content we find
var allText = [];

function traverse(element, depth) {
  if (depth > ${t}) return null;
  
  try {
    var role = element.role();
    
    if (skipRoles[role]) return null;
    
    var value = null;
    try {
      var v = element.value();
      if (typeof v === 'string' && v.length > 0) {
        // Allow large values for text areas, code editors, etc.
        value = v.length > 10000 ? v.substring(0, 10000) + '...' : v;
        allText.push(v.substring(0, 5000));
      }
    } catch (e) {}
    
    var title = null;
    try {
      var t = element.title();
      if (typeof t === 'string' && t.length > 0) {
        title = t.length > 500 ? t.substring(0, 500) + '...' : t;
        allText.push(t.substring(0, 500));
      }
    } catch (e) {}
    
    var description = null;
    try {
      var d = element.description();
      if (typeof d === 'string' && d.length > 0) {
        description = d.length > 500 ? d.substring(0, 500) + '...' : d;
      }
    } catch (e) {}
    
    // Also try to get help text and placeholder
    var help = null;
    try {
      var h = element.help();
      if (typeof h === 'string' && h.length > 0) {
        help = h.length > 200 ? h.substring(0, 200) + '...' : h;
        allText.push(h.substring(0, 200));
      }
    } catch (e) {}
    
    var children = [];
    try {
      var uiElements = element.uiElements();
      var limit = uiElements.length < ${i} ? uiElements.length : ${i};
      for (var i = 0; i < limit; i++) {
        var child = traverse(uiElements[i], depth + 1);
        if (child) {
          children.push(child);
        }
      }
    } catch (e) {}
    
    // Always traverse children even if current node has no content
    var hasContent = value || title || description || help;
    if (!hasContent && children.length === 0) {
      return null;
    }
    
    // Don't collapse single children - keep full structure
    return {
      role: role || 'unknown',
      value: value,
      title: title,
      description: description,
      help: help,
      children: children.length > 0 ? children : undefined
    };
  } catch (e) {
    return null;
  }
}

var windows;
try {
  windows = proc.windows();
} catch (e) {
  return JSON.stringify({ error: 'Cannot access windows: ' + e.message });
}

if (!windows || windows.length === 0) {
  return JSON.stringify({ error: 'No windows found for ${r}' });
}

var tree = traverse(windows[0], 0);

// Even if tree is null, return collected text as fallback
if (!tree && allText.length === 0) {
  return JSON.stringify({ error: 'Could not traverse window content' });
}

// Include allText as a flat array for easy extraction
var result = tree || { role: 'AXWindow', title: null, value: null };
result.allText = allText;

return JSON.stringify(result);
    `;
    try {
      n.logger.info(
        `[JxaRunner] getUITree: Starting UI tree extraction for "${e}"`,
      );
      const o = await this.run(s, 8e3);
      if (
        (n.logger.info(`[JxaRunner] getUITree: Raw result for ${e}:`, {
          hasResult: !!o,
          resultType: typeof o,
          resultLength: typeof o == "string" ? o.length : 0,
        }),
        !o || typeof o != "string")
      )
        return (
          n.logger.info(`[JxaRunner] getUITree: No result returned for ${e}`),
          null
        );
      let a;
      try {
        a = JSON.parse(o);
      } catch (c) {
        return (
          n.logger.error(
            `[JxaRunner] getUITree: Failed to parse JSON for ${e}:`,
            c,
          ),
          null
        );
      }
      if ("error" in a && typeof a.error == "string")
        return (
          n.logger.info(`[JxaRunner] getUITree error for ${e}: ${a.error}`),
          null
        );
      const l = a;
      return (
        n.logger.info(`[JxaRunner] getUITree: Success for "${e}"`, {
          role: l.role,
          childrenCount: l.children?.length || 0,
        }),
        l
      );
    } catch (o) {
      return (
        n.logger.error(`[JxaRunner] getUITree failed for ${e}:`, o),
        null
      );
    }
  }
  async getAllText(e) {
    const i = `
var se = Application('System Events');
var proc = se.processes.byName('${e.replace(/'/g, "\\'")}');

if (!proc.exists()) {
  return JSON.stringify({ error: 'Process not found' });
}

var windows;
try {
  windows = proc.windows();
} catch (e) {
  return JSON.stringify({ error: 'Cannot access windows' });
}

if (!windows || windows.length === 0) {
  return JSON.stringify({ error: 'No windows' });
}

var win = windows[0];
var allText = [];
var seen = {};

// Strategy: Use entireContents() on the first group child (main content area)
// This is MUCH faster than entireContents() on the whole window
// because it skips toolbar and window chrome
var contentRoot = null;
try {
  var groups = win.groups();
  if (groups.length > 0) {
    contentRoot = groups[0];
  }
} catch (e) {}

// Fallback to window if no groups
if (!contentRoot) {
  contentRoot = win;
}

var allElements;
try {
  allElements = contentRoot.entireContents();
} catch (e) {
  return JSON.stringify({ error: 'Cannot get contents' });
}

// Extract text from all elements
for (var i = 0; i < allElements.length; i++) {
  var el = allElements[i];
  try {
    var v = el.value();
    if (typeof v === 'string' && v.length > 0 && v.length < 50000 && !seen[v]) {
      seen[v] = true;
      allText.push(v);
    }
  } catch (e) {}
  try {
    var t = el.title();
    if (typeof t === 'string' && t.length > 0 && t.length < 1000 && !seen[t]) {
      seen[t] = true;
      allText.push(t);
    }
  } catch (e) {}
}

return JSON.stringify({ text: allText, count: allElements.length });
    `;
    try {
      n.logger.info(
        `[JxaRunner] getAllText: Starting fast extraction for "${e}"`,
      );
      const r = await this.run(i, 5e3);
      if (!r || typeof r != "string")
        return (
          n.logger.info(`[JxaRunner] getAllText: No result for ${e}`),
          null
        );
      const s = JSON.parse(r);
      if (s.error)
        return (
          n.logger.info(`[JxaRunner] getAllText: Error for ${e}: ${s.error}`),
          null
        );
      const o =
        s.text?.join(`
`) || "";
      return (
        n.logger.info(`[JxaRunner] getAllText: Success for "${e}"`, {
          elements: s.count || 0,
          textItems: s.text?.length || 0,
          chars: o.length,
        }),
        o
      );
    } catch (r) {
      return (
        n.logger.error(`[JxaRunner] getAllText failed for ${e}:`, r),
        null
      );
    }
  }
  async getSafariPageContent(e = 0) {
    const t = `
var Safari = Application('Safari');
var windows = Safari.windows();

if (!windows || windows.length === 0) {
  return JSON.stringify({ error: 'No Safari windows open' });
}

if (${e} >= windows.length) {
  return JSON.stringify({ error: 'Window index out of bounds' });
}

var win = windows[${e}];
var tab = win.currentTab();

if (!tab) {
  return JSON.stringify({ error: 'No active tab in Safari window' });
}

var url = tab.url();

// Use doJavaScript to extract content from the page DOM
var title = Safari.doJavaScript('document.title', { in: tab });
var text = Safari.doJavaScript('document.body.innerText', { in: tab });

// Truncate very long text (limit to ~50KB)
if (text && text.length > 50000) {
  text = text.substring(0, 50000) + '\\n\\n[Content truncated...]';
}

return JSON.stringify({
  title: title || '',
  url: url || '',
  text: text || ''
});
    `;
    try {
      n.logger.info(
        "[JxaRunner] getSafariPageContent: Extracting content from Safari",
      );
      const i = await this.run(t, 1e4);
      if (!i || typeof i != "string")
        return (
          n.logger.info("[JxaRunner] getSafariPageContent: No result returned"),
          null
        );
      let r;
      try {
        r = JSON.parse(i);
      } catch (s) {
        return (
          n.logger.error(
            "[JxaRunner] getSafariPageContent: Failed to parse JSON:",
            s,
          ),
          null
        );
      }
      return "error" in r
        ? (n.logger.info(`[JxaRunner] getSafariPageContent error: ${r.error}`),
          null)
        : (n.logger.info("[JxaRunner] getSafariPageContent: Success", {
            url: T.getSafeUrlLogMetadata(r.url),
            titleLength: r.title?.length || 0,
            textLength: r.text?.length || 0,
          }),
          r);
    } catch (i) {
      return (
        n.logger.error("[JxaRunner] getSafariPageContent failed:", i),
        null
      );
    }
  }
  async getMenuBar(e) {
    const t = e.replace(/'/g, "\\'"),
      i = `
var se = Application('System Events');
var proc = se.processes.byName('${t}');

if (!proc.exists()) {
  return JSON.stringify({ error: 'Process not found: ${t}' });
}

var menuBar = proc.menuBars[0];
var menus = menuBar.menus();

var result = [];
for (var m = 0; m < menus.length; m++) {
  var menu = menus[m];
  var menuTitle = menu.title();
  var menuItems = menu.menuItems();
  
  var items = [];
  for (var i = 0; i < menuItems.length; i++) {
    try {
      var item = menuItems[i];
      var title = item.title();
      if (!title || title === '') continue;
      
      var shortcut = null;
      try {
        var cmdKey = item.attributes.byName('AXMenuItemCmdChar').value();
        var modifiers = item.attributes.byName('AXMenuItemCmdModifiers').value();
        
        if (cmdKey) {
          var modList = [];
          if (modifiers & 8 || modifiers === 0) modList.push('Cmd');
          if (modifiers & 1) modList.push('Shift');
          if (modifiers & 2) modList.push('Ctrl');
          if (modifiers & 4) modList.push('Option');
          shortcut = modList.join('+') + '+' + cmdKey;
        }
      } catch (e) {}
      
      var enabled = true;
      try {
        enabled = item.enabled();
      } catch (e) {}
      
      var children = null;
      try {
        var subMenus = item.menus();
        if (subMenus && subMenus.length > 0) {
          var subMenu = subMenus[0];
          var subItems = subMenu.menuItems();
          children = [];
          for (var j = 0; j < subItems.length; j++) {
            try {
              var subItem = subItems[j];
              var subTitle = subItem.title();
              if (!subTitle || subTitle === '') continue;
              children.push({
                title: subTitle,
                shortcut: null,
                enabled: subItem.enabled()
              });
            } catch (e) {}
          }
          if (children.length === 0) children = null;
        }
      } catch (e) {}
      
      items.push({
        title: title,
        shortcut: shortcut,
        enabled: enabled,
        children: children
      });
    } catch (e) {}
  }
  
  result.push({
    title: menuTitle,
    shortcut: null,
    enabled: true,
    children: items
  });
}

return JSON.stringify({
  appName: '${t}',
  menus: result
});
    `;
    try {
      const r = await this.run(i);
      if (!r || typeof r != "string") return null;
      let s;
      try {
        s = JSON.parse(r);
      } catch (o) {
        return (
          n.logger.error(`JXA getMenuBar: Failed to parse JSON for ${e}:`, o),
          null
        );
      }
      return s.error
        ? (n.logger.warn(`JXA error getting menu bar for ${e}:`, s.error), null)
        : { appName: s.appName, menus: s.menus };
    } catch (r) {
      return (n.logger.error(`Failed to get menu bar for ${e}:`, r), null);
    }
  }
  async clickMenuItem(e, t) {
    if (t.length < 2)
      return (
        n.logger.error(
          "Menu path must have at least 2 elements (menu and item)",
        ),
        !1
      );
    const i = e.replace(/'/g, "\\'"),
      r = t.map((a) => a.replace(/'/g, "\\'"));
    let s = `proc.menuBars[0].menus.byName('${r[0]}').menuItems.byName('${r[1]}')`;
    for (let a = 2; a < r.length; a++)
      s += `.menus[0].menuItems.byName('${r[a]}')`;
    const o = `
var se = Application('System Events');
var proc = se.processes.byName('${i}');

if (!proc.exists()) {
  return JSON.stringify({ error: 'Process not found' });
}

try {
  var menuItem = ${s};
  menuItem.click();
  return JSON.stringify({ success: true });
} catch (e) {
  return JSON.stringify({ error: e.message });
}
    `;
    try {
      const a = await this.run(o);
      if (!a || typeof a != "string") return !1;
      let l;
      try {
        l = JSON.parse(a);
      } catch {
        return !1;
      }
      return l?.success
        ? !0
        : (l?.error &&
            n.logger.warn(
              `Failed to click menu item ${t.join(" > ")}: ${l.error}`,
            ),
          !1);
    } catch (a) {
      return (
        n.logger.error(`Failed to click menu item ${t.join(" > ")}:`, a),
        !1
      );
    }
  }
  async getFrontmostApp() {
    return this.run(`
var se = Application('System Events');
return se.processes.whose({ frontmost: true })[0].name();
    `);
  }
  async activateApp(e) {
    const i = `
var app = Application('${e.replace(/'/g, "\\'")}');
app.activate();
return true;
    `;
    try {
      return (await this.run(i), !0);
    } catch (r) {
      return (n.logger.error(`Failed to activate app ${e}:`, r), !1);
    }
  }
}
const b = _.promisify(D.execFile);
class C {
  available = null;
  sendkeysPath = "sendkeys";
  isAvailable() {
    return this.available !== null
      ? this.available
      : (this.checkAvailability(), this.available ?? !1);
  }
  async checkAvailability() {
    if (process.platform !== "darwin") {
      this.available = !1;
      return;
    }
    try {
      (await b("which", ["sendkeys"]), (this.available = !0));
    } catch {
      try {
        (await b("/opt/homebrew/bin/sendkeys", ["--version"]),
          (this.sendkeysPath = "/opt/homebrew/bin/sendkeys"),
          (this.available = !0));
      } catch {
        try {
          (await b("/usr/local/bin/sendkeys", ["--version"]),
            (this.sendkeysPath = "/usr/local/bin/sendkeys"),
            (this.available = !0));
        } catch {
          (n.logger.warn(
            "sendkeys CLI not found. Install with: brew install socsieng/tap/sendkeys",
          ),
            (this.available = !1));
        }
      }
    }
  }
  modifiersToString(e) {
    const t = [];
    for (const i of e)
      switch (i) {
        case "command":
          t.push("command");
          break;
        case "shift":
          t.push("shift");
          break;
        case "option":
          t.push("option");
          break;
        case "control":
          t.push("control");
          break;
      }
    return t.join(",");
  }
  async sendShortcut(e) {
    if (
      !this.isAvailable() &&
      (await this.checkAvailability(), !this.available)
    )
      return (n.logger.error("sendkeys CLI not available"), !1);
    const {
      processId: t,
      key: i,
      modifiers: r = ["command"],
      activate: s = !1,
    } = e;
    try {
      const o = this.modifiersToString(r),
        a = o ? `<c:${i}:${o}>` : i,
        l = ["--pid", t.toString()];
      return (
        s || l.push("--no-activate"),
        l.push("--characters", a),
        n.logger.debug(`Sending shortcut to PID ${t}: ${a}`),
        await b(this.sendkeysPath, l, { timeout: 5e3 }),
        !0
      );
    } catch (o) {
      return (n.logger.error(`Failed to send shortcut to PID ${t}:`, o), !1);
    }
  }
  async sendKey(e, t, i = !1) {
    return this.sendShortcut({
      processId: e,
      key: t,
      modifiers: [],
      activate: i,
    });
  }
  async sendText(e, t, i = !1) {
    if (
      !this.isAvailable() &&
      (await this.checkAvailability(), !this.available)
    )
      return (n.logger.error("sendkeys CLI not available"), !1);
    try {
      const r = ["--pid", e.toString()];
      return (
        i || r.push("--no-activate"),
        r.push("--characters", t),
        await b(this.sendkeysPath, r, { timeout: 3e4 }),
        !0
      );
    } catch (r) {
      return (n.logger.error(`Failed to send text to PID ${e}:`, r), !1);
    }
  }
  async sendSpecialKey(e, t, i = [], r = !1) {
    if (
      !this.isAvailable() &&
      (await this.checkAvailability(), !this.available)
    )
      return (n.logger.error("sendkeys CLI not available"), !1);
    try {
      const s = i.length > 0 ? this.modifiersToString(i) : "",
        o = s ? `<c:${t}:${s}>` : `<${t}>`,
        a = ["--pid", e.toString()];
      return (
        r || a.push("--no-activate"),
        a.push("--characters", o),
        await b(this.sendkeysPath, a, { timeout: 5e3 }),
        !0
      );
    } catch (s) {
      return (n.logger.error(`Failed to send special key to PID ${e}:`, s), !1);
    }
  }
  async sendNew(e) {
    return this.sendShortcut({
      processId: e,
      key: "n",
      modifiers: ["command"],
    });
  }
  async sendSave(e) {
    return this.sendShortcut({
      processId: e,
      key: "s",
      modifiers: ["command"],
    });
  }
  async sendClose(e) {
    return this.sendShortcut({
      processId: e,
      key: "w",
      modifiers: ["command"],
    });
  }
  async sendCopy(e) {
    return this.sendShortcut({
      processId: e,
      key: "c",
      modifiers: ["command"],
    });
  }
  async sendPaste(e) {
    return this.sendShortcut({
      processId: e,
      key: "v",
      modifiers: ["command"],
    });
  }
  async sendSelectAll(e) {
    return this.sendShortcut({
      processId: e,
      key: "a",
      modifiers: ["command"],
    });
  }
  async sendUndo(e) {
    return this.sendShortcut({
      processId: e,
      key: "z",
      modifiers: ["command"],
    });
  }
  async sendRedo(e) {
    return this.sendShortcut({
      processId: e,
      key: "z",
      modifiers: ["command", "shift"],
    });
  }
  async sendQuit(e) {
    return this.sendShortcut({
      processId: e,
      key: "q",
      modifiers: ["command"],
    });
  }
  async sendEscape(e) {
    return this.sendSpecialKey(e, "escape");
  }
  async sendReturn(e) {
    return this.sendSpecialKey(e, "return");
  }
  async sendTab(e) {
    return this.sendSpecialKey(e, "tab");
  }
}
const U = 600 * 1e3,
  F = 300 * 1e3,
  B = new Set([
    "com.microsoft.VSCode",
    "com.microsoft.VSCodeInsiders",
    "com.slack.Slack",
    "com.hnc.Discord",
    "com.discordapp.Discord",
    "notion.id",
    "com.figma.Desktop",
    "com.spotify.client",
    "com.tinyspeck.slackmacgap",
    "com.obsidian.Obsidian",
    "com.1password.1password",
    "com.todoist.mac.Todoist",
    "com.linear",
    "com.superhuman.Superhuman",
    "com.postmanlabs.Postman",
  ]);
class f extends n.BaseManager {
  static _instance;
  cachedWindows = new Map();
  cachedAppIcons = new Map();
  jxaRunner;
  sendKeysRunner;
  cleanupInterval = null;
  getWindowsPromise = null;
  lastWindowsList = [];
  lastWindowsListTime = 0;
  static WINDOWS_CACHE_TTL_MS = 5e3;
  static WINDOWS_STALE_CACHE_TTL_MS = 6e4;
  getWindowsWithThumbnailsPromise = null;
  lastWindowsWithThumbnailsList = [];
  lastWindowsWithThumbnailsTime = 0;
  static WINDOWS_WITH_THUMBNAILS_CACHE_TTL_MS = 5e3;
  constructor() {
    (super(),
      (f._instance = this),
      (this.jxaRunner = new E()),
      (this.sendKeysRunner = new C()));
  }
  static getInstance() {
    return super.getInstance();
  }
  init() {
    if (
      (n.logger.info("Initializing ExternalAppManager"),
      !n.isFeatureEnabledForAnyAccount("externalAppsEnabled"))
    ) {
      n.logger.info(
        "[ExternalAppManager] External apps disabled by feature flag - skipping initialization",
      );
      return;
    }
    (this.cleanupOldThumbnails().catch((e) => {
      n.logger.warn(
        "[ExternalAppManager] Initial thumbnail cleanup failed:",
        e,
      );
    }),
      (this.cleanupInterval = setInterval(() => {
        this.cleanupOldThumbnails().catch((e) => {
          n.logger.warn(
            "[ExternalAppManager] Periodic thumbnail cleanup failed:",
            e,
          );
        });
      }, F)));
  }
  stopCleanupInterval() {
    this.cleanupInterval &&
      (clearInterval(this.cleanupInterval), (this.cleanupInterval = null));
  }
  async checkPermissions() {
    const e = this.hasScreenRecordingPermission(),
      t = this.hasAccessibilityPermission();
    return { screenRecording: e, accessibility: t };
  }
  hasScreenRecordingPermission() {
    return process.platform !== "darwin"
      ? !0
      : d.systemPreferences.getMediaAccessStatus("screen") === "granted";
  }
  hasAccessibilityPermission() {
    return process.platform !== "darwin"
      ? !0
      : d.systemPreferences.isTrustedAccessibilityClient(!1);
  }
  getJxaRunner() {
    return this.jxaRunner;
  }
  async requestScreenRecordingPermission() {
    await d.shell.openExternal(
      "x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture",
    );
  }
  async requestAccessibilityPermission() {
    (d.systemPreferences.isTrustedAccessibilityClient(!0),
      await d.shell.openExternal(
        "x-apple.systempreferences:com.apple.preference.security?Privacy_Accessibility",
      ));
  }
  async getApps() {
    const e = await this.getWindows(),
      t = new Map();
    for (const i of e) {
      const r = i.appBundleId || this.getSyntheticAppBundleId(i.appName),
        s = t.get(r);
      s
        ? s.windows.push(i)
        : t.set(r, {
            bundleId: r,
            name: i.appName,
            processId: i.processId,
            path: "",
            windows: [i],
          });
    }
    return Array.from(t.values());
  }
  getCachedWindows(e = f.WINDOWS_STALE_CACHE_TTL_MS) {
    return this.lastWindowsListTime === 0 ||
      Date.now() - this.lastWindowsListTime > e
      ? null
      : this.lastWindowsList;
  }
  async getWindows() {
    if (n.cleanupManager.willQuit)
      return (
        n.logger.info(
          "[ExternalAppManager] getWindows: returning cached result during shutdown",
        ),
        this.lastWindowsList
      );
    const e = Date.now();
    return this.lastWindowsListTime > 0 &&
      e - this.lastWindowsListTime < f.WINDOWS_CACHE_TTL_MS
      ? (n.logger.info(
          "[ExternalAppManager] getWindows: returning cached result",
        ),
        this.lastWindowsList)
      : this.getWindowsPromise
        ? (n.logger.info(
            "[ExternalAppManager] getWindows: waiting for pending call",
          ),
          this.getWindowsPromise)
        : ((this.getWindowsPromise = this.getWindowsInternal()
            .then(
              (t) => (
                (this.lastWindowsList = t),
                (this.lastWindowsListTime = Date.now()),
                t
              ),
            )
            .finally(() => {
              this.getWindowsPromise = null;
            })),
          this.getWindowsPromise);
  }
  async getWindowsInternal() {
    return (
      n.logger.info("[ExternalAppManager] getWindowsInternal called"),
      this.getWindowsFromDesktopCapturer()
    );
  }
  async getWindowsFromDesktopCapturer() {
    if (!this.hasScreenRecordingPermission())
      return (
        n.logger.info(
          "[ExternalAppManager] Screen recording permission not granted, cannot list external windows",
        ),
        []
      );
    try {
      return (
        await d.desktopCapturer.getSources({
          types: ["window"],
          thumbnailSize: { width: 1, height: 1 },
        })
      ).map((t, i) => {
        const r = this.inferAppNameFromSourceName(t.name),
          s = this.getSyntheticAppBundleId(r),
          o = this.createStableDesktopCapturerWindowId(t.id, t.name, i),
          a = this.cachedWindows.get(o);
        return {
          id: o,
          title: t.name,
          bounds: { x: 0, y: 0, width: 0, height: 0 },
          appBundleId: s,
          appName: r,
          processId: 0,
          latestScreenshot: a?.latestScreenshot,
          screenshotPath: a?.screenshotPath,
          lastCapturedAt: a?.lastCapturedAt,
        };
      });
    } catch (e) {
      return (
        n.logger.error("Failed to get windows from desktopCapturer:", e),
        []
      );
    }
  }
  inferAppNameFromSourceName(e) {
    const [t] = e.split(" - ");
    return t?.trim() || e;
  }
  getSyntheticAppBundleId(e) {
    return `desktop-capturer:${e.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "unknown"}`;
  }
  createStableDesktopCapturerWindowId(e, t, i) {
    const r = `${e}:${t}:${i}`;
    let s = 0;
    for (let o = 0; o < r.length; o++) s = (s * 31 + r.charCodeAt(o)) | 0;
    return Math.abs(s);
  }
  async getWindowsWithThumbnails(e = { width: 200, height: 120 }) {
    if (n.cleanupManager.willQuit)
      return (
        n.logger.info(
          "[ExternalAppManager] getWindowsWithThumbnails: returning cached result during shutdown",
        ),
        this.lastWindowsWithThumbnailsList.length > 0
          ? this.lastWindowsWithThumbnailsList
          : this.lastWindowsList
      );
    const t = Date.now();
    return this.lastWindowsWithThumbnailsList.length > 0 &&
      t - this.lastWindowsWithThumbnailsTime <
        f.WINDOWS_WITH_THUMBNAILS_CACHE_TTL_MS
      ? (n.logger.info(
          "[ExternalAppManager] getWindowsWithThumbnails: returning cached result",
        ),
        this.lastWindowsWithThumbnailsList)
      : this.getWindowsWithThumbnailsPromise
        ? (n.logger.info(
            "[ExternalAppManager] getWindowsWithThumbnails: waiting for pending call",
          ),
          this.getWindowsWithThumbnailsPromise)
        : ((this.getWindowsWithThumbnailsPromise =
            this.getWindowsWithThumbnailsInternal(e)
              .then(
                (i) => (
                  (this.lastWindowsWithThumbnailsList = i),
                  (this.lastWindowsWithThumbnailsTime = Date.now()),
                  i
                ),
              )
              .finally(() => {
                this.getWindowsWithThumbnailsPromise = null;
              })),
          this.getWindowsWithThumbnailsPromise);
  }
  async getWindowsWithThumbnailsInternal(e) {
    n.logger.info(
      "[ExternalAppManager] getWindowsWithThumbnailsInternal called",
    );
    const t = await this.getWindows();
    if (t.length === 0) return t;
    if (!n.fileServer.isRunning())
      return (
        n.logger.warn(
          "[ExternalAppManager] FileServer not running, returning windows without thumbnails",
        ),
        t
      );
    const i = n.fileServer.getWindowThumbnailsDir();
    try {
      await p.promises.mkdir(i, { recursive: !0 });
    } catch (r) {
      return (
        n.logger.error(
          "[ExternalAppManager] Failed to create thumbnails directory:",
          r,
        ),
        t
      );
    }
    if (!this.hasScreenRecordingPermission())
      return (
        n.logger.info(
          "[ExternalAppManager] Screen recording permission not granted, skipping thumbnails",
        ),
        t
      );
    if (n.cleanupManager.willQuit)
      return (
        n.logger.info(
          "[ExternalAppManager] Skipping thumbnail capture during shutdown",
        ),
        t
      );
    try {
      const r = await d.desktopCapturer.getSources({
          types: ["window"],
          thumbnailSize: e,
          fetchWindowIcons: !1,
        }),
        s = new Map();
      for (const l of r) l.thumbnail.isEmpty() || s.set(l.name, l.thumbnail);
      const o = Date.now();
      for (const l of t) {
        let c = s.get(l.title);
        if (!c) {
          for (const [h, g] of s)
            if (h.includes(l.title) || l.title.includes(h)) {
              c = g;
              break;
            }
        }
        if (c)
          try {
            const h = `window-${l.id}-${o}.png`,
              g = y.join(i, h),
              m = c.toPNG();
            await p.promises.writeFile(g, m);
            const w = n.fileServer.getWindowThumbnailUrl(h);
            ((l.latestScreenshot = w),
              (l.lastCapturedAt = o),
              (l.screenshotPath = g));
            const v = this.cachedWindows.get(l.id),
              x = v?.latestScreenshot,
              S = x?.startsWith("data:") && x.length > 100;
            this.cachedWindows.set(l.id, {
              ...l,
              latestScreenshot: S ? x : w,
              screenshotPath: g,
              lastCapturedAt: S && v?.lastCapturedAt ? v.lastCapturedAt : o,
            });
          } catch (h) {
            n.logger.warn(
              `[ExternalAppManager] Failed to save thumbnail for window ${l.id}:`,
              h,
            );
          }
      }
      const a = t.map(async (l) => {
        if (l.appBundleId) {
          const c = await this.getAppIcon(l.appBundleId);
          c && (l.appIconUrl = c);
        }
      });
      return (
        await Promise.all(a),
        n.logger.info(
          "[ExternalAppManager] Captured and saved thumbnails for windows",
          {
            total: t.length,
            withThumbnails: t.filter((l) => l.latestScreenshot).length,
            withIcons: t.filter((l) => l.appIconUrl).length,
          },
        ),
        t
      );
    } catch (r) {
      return (
        n.logger.error("[ExternalAppManager] Failed to capture thumbnails:", r),
        t
      );
    }
  }
  async getWindowById(e) {
    return (await this.getWindows()).find((i) => i.id === e) || null;
  }
  async findWindowsByAppName(e) {
    const t = await this.getWindows(),
      i = e.toLowerCase();
    return t.filter(
      (r) =>
        r.appName.toLowerCase().includes(i) ||
        r.title.toLowerCase().includes(i),
    );
  }
  async takeScreenshot(e, t) {
    const i = t?.width ?? 1920,
      r = t?.height ?? 1080;
    if (
      (n.logger.info(
        `[ExternalAppManager] takeScreenshot: Starting for windowId=${e}`,
      ),
      n.cleanupManager.willQuit)
    )
      return (
        n.logger.info(
          "[ExternalAppManager] takeScreenshot: Skipping capture during shutdown",
        ),
        null
      );
    if (!this.hasScreenRecordingPermission())
      return (
        n.logger.info(
          "[ExternalAppManager] takeScreenshot: Screen recording permission not granted",
        ),
        null
      );
    try {
      let s = this.cachedWindows.get(e);
      if (
        (!s &&
          this.lastWindowsList.length > 0 &&
          (s = this.lastWindowsList.find((g) => g.id === e)),
        !s)
      ) {
        n.logger.info(
          `[ExternalAppManager] takeScreenshot: Window ${e} not in cache, fetching...`,
        );
        const g = await this.getWindowById(e);
        g && (s = g);
      }
      if (!s)
        return (
          n.logger.warn(
            `[ExternalAppManager] takeScreenshot: Window ${e} not found`,
          ),
          null
        );
      if (
        (n.logger.info(
          `[ExternalAppManager] takeScreenshot: Using window ${s.id}`,
        ),
        n.cleanupManager.willQuit)
      )
        return (
          n.logger.info(
            "[ExternalAppManager] takeScreenshot: Skipping capture during shutdown",
          ),
          null
        );
      n.logger.info(
        "[ExternalAppManager] takeScreenshot: Getting desktopCapturer sources...",
      );
      const o = await d.desktopCapturer.getSources({
        types: ["window"],
        thumbnailSize: { width: i, height: r },
        fetchWindowIcons: !1,
      });
      n.logger.info(
        `[ExternalAppManager] takeScreenshot: Got ${o.length} sources`,
      );
      const a = o.find((g) => g.name === s.title || g.name.includes(s.title));
      if (!a)
        return (
          n.logger.warn(
            `[ExternalAppManager] takeScreenshot: No matching source for window ${s.id}`,
          ),
          null
        );
      const l = a.thumbnail.getSize();
      if (a.thumbnail.isEmpty() || l.width === 0 || l.height === 0)
        return (
          n.logger.warn(
            `[ExternalAppManager] takeScreenshot: Empty thumbnail for window ${e} (${l.width}x${l.height})`,
          ),
          null
        );
      n.logger.info(
        "[ExternalAppManager] takeScreenshot: Converting to dataUrl...",
      );
      const c = a.thumbnail.toDataURL(),
        h = Date.now();
      return c.length < 100
        ? (n.logger.warn(
            `[ExternalAppManager] takeScreenshot: Data URL too short for window ${e} (${c.length} chars)`,
          ),
          null)
        : (this.cachedWindows.set(e, {
            ...s,
            latestScreenshot: c,
            lastCapturedAt: h,
          }),
          n.logger.info(
            `[ExternalAppManager] takeScreenshot: Success for windowId=${e}`,
          ),
          {
            windowId: e,
            dataUrl: c,
            width: a.thumbnail.getSize().width,
            height: a.thumbnail.getSize().height,
            capturedAt: h,
          });
    } catch (s) {
      return (
        n.logger.error(
          `[ExternalAppManager] takeScreenshot: Failed for window ${e}:`,
          s,
        ),
        null
      );
    }
  }
  async takeScreenshotByAppName(e, t) {
    const i = await this.findWindowsByAppName(e);
    return i.length === 0
      ? (n.logger.warn(`No windows found for app: ${e}`), null)
      : this.takeScreenshot(i[0].id, t);
  }
  async getMenuBar(e) {
    return this.hasAccessibilityPermission()
      ? this.jxaRunner.getMenuBar(e)
      : (n.logger.warn("Accessibility permission required for menu bar access"),
        null);
  }
  getAppType(e, t) {
    return e === "com.apple.Safari" || t.toLowerCase() === "safari"
      ? "safari"
      : B.has(e) || e.includes("electron") || e.includes("Electron")
        ? "electron"
        : "native";
  }
  async extractSafariContent(e) {
    n.logger.info(
      "[ExternalAppManager] extractSafariContent: Using Safari doJavaScript strategy",
    );
    const t = await this.jxaRunner.getSafariPageContent();
    return t
      ? (n.logger.info("[ExternalAppManager] extractSafariContent: Success", {
          url: T.getSafeUrlLogMetadata(t.url),
          titleLength: t.title?.length || 0,
          textLength: t.text?.length || 0,
        }),
        {
          windowId: e.id,
          description: `Safari: ${t.title || e.title}`,
          textContent: t.text || void 0,
          extractedAt: Date.now(),
        })
      : (n.logger.info(
          "[ExternalAppManager] extractSafariContent: JXA returned null",
        ),
        null);
  }
  async extractNativeContent(e) {
    n.logger.info(
      `[ExternalAppManager] extractNativeContent: Using fast extraction for ${e.appName}`,
    );
    const t = await this.jxaRunner.getAllText(e.appName);
    return t
      ? (n.logger.info(
          `[ExternalAppManager] extractNativeContent: Success for ${e.appName}`,
          { textLength: t.length },
        ),
        {
          windowId: e.id,
          description: `Content from ${e.appName}: ${e.title}`,
          textContent: t,
          extractedAt: Date.now(),
        })
      : (n.logger.debug(
          `[ExternalAppManager] extractNativeContent: No text for ${e.appName}`,
        ),
        null);
  }
  async extractElectronContent(e) {
    n.logger.info(
      `[ExternalAppManager] extractElectronContent: Getting capabilities for ${e.appName}`,
    );
    const t = await this.jxaRunner.getMenuBar(e.appName),
      i = [
        `# ${e.appName}: ${e.title}`,
        "",
        "## Content Extraction",
        "This is an Electron-based app. The Accessibility API only sees window chrome (buttons, toolbars), not the actual web content inside.",
        "",
        "**To understand the window content, use the screenshot.**",
        "",
      ];
    if (t && t.menus.length > 0) {
      (i.push("## Available Menu Actions"),
        i.push(
          "You can interact with this app via its menu bar using the `clickMenuItem` tool:",
        ),
        i.push(""));
      for (const r of t.menus) {
        const s = r.children || [];
        if (s.length > 0) {
          i.push(`### ${r.title}`);
          const o = s
            .slice(0, 10)
            .map((a) => `- ${a.title}${a.enabled ? "" : " (disabled)"}`);
          (i.push(
            o.join(`
`),
          ),
            s.length > 10 && i.push(`- ... and ${s.length - 10} more items`),
            i.push(""));
        }
      }
      (i.push("### Example Usage"),
        i.push("To copy all visible content to clipboard:"),
        i.push(
          '1. `clickMenuItem("' + e.appName + '", ["Edit", "Select All"])`',
        ),
        i.push('2. `clickMenuItem("' + e.appName + '", ["Edit", "Copy"])`'),
        i.push("3. Read clipboard content"),
        i.push(""));
    }
    return (
      n.logger.info(
        `[ExternalAppManager] extractElectronContent: Success for ${e.appName}`,
        { menuCount: t?.menus.length || 0 },
      ),
      {
        windowId: e.id,
        description: `Electron app: ${e.appName} (menu capabilities available)`,
        textContent: i.join(`
`),
        extractedAt: Date.now(),
      }
    );
  }
  async extractContent(e) {
    n.logger.info(
      `[ExternalAppManager] extractContent: Starting for windowId=${e}`,
    );
    const t = this.cachedWindows.get(e),
      r = (await this.getWindowById(e)) || t;
    if (!r)
      return (
        n.logger.info(
          `[ExternalAppManager] extractContent: Window ${e} not found`,
        ),
        null
      );
    if (!this.hasAccessibilityPermission())
      return (
        n.logger.info(
          "[ExternalAppManager] extractContent: Accessibility permission not granted",
        ),
        null
      );
    const s = this.getAppType(r.appBundleId, r.appName);
    n.logger.info(
      `[ExternalAppManager] extractContent: App "${r.appName}" detected as "${s}"`,
    );
    let o = null;
    switch (s) {
      case "safari":
        o = await this.extractSafariContent(r);
        break;
      case "electron":
        o = await this.extractElectronContent(r);
        break;
      case "native":
      default:
        o = await this.extractNativeContent(r);
        break;
    }
    return o;
  }
  async extractContentByAppName(e) {
    const t = await this.findWindowsByAppName(e);
    return t.length === 0
      ? (n.logger.warn(
          `[ExternalAppManager] extractContentByAppName: No windows found for ${e}`,
        ),
        null)
      : this.extractContent(t[0].id);
  }
  flattenUITreeText(e, t = 0) {
    const i = e;
    if (t === 0 && i.allText && i.allText.length > 0) {
      const o = new Set(),
        a = [];
      for (const l of i.allText) {
        const c = l.trim();
        c && !o.has(c) && (o.add(c), a.push(c));
      }
      return a.join(`
`);
    }
    const r = [];
    (e.value &&
      typeof e.value == "string" &&
      e.value.trim() &&
      r.push(e.value.trim()),
      e.title &&
        typeof e.title == "string" &&
        e.title.trim() &&
        e.title !== e.value &&
        r.push(e.title.trim()));
    const s = e;
    if (
      (s.help &&
        typeof s.help == "string" &&
        s.help.trim() &&
        r.push(s.help.trim()),
      e.children)
    )
      for (const o of e.children) {
        const a = this.flattenUITreeText(o, t + 1);
        a && r.push(a);
      }
    return t === 0
      ? r.join(`
`)
      : r.join(" ");
  }
  extractUIElements(e) {
    const t = [];
    return (this.traverseForElements(e, t), t);
  }
  traverseForElements(e, t, i = []) {
    const r = e.role?.toLowerCase() || "",
      s = e.title || e.description || e.value || "",
      o = typeof s == "string" ? s.trim() : "";
    let a = null;
    if (
      (r.includes("button") || r.includes("menuitem")
        ? (a = "button")
        : r.includes("textfield") ||
            r.includes("textarea") ||
            r.includes("combobox")
          ? (a = "input")
          : r.includes("statictext") || r.includes("text")
            ? (a = "text")
            : r.includes("image")
              ? (a = "image")
              : r.includes("list") || r.includes("outline")
                ? (a = "list")
                : (r.includes("table") || r.includes("grid")) && (a = "table"),
      a &&
        o &&
        o.length < 200 &&
        t.push({
          type: a,
          description: o,
          location: i.length > 0 ? i.join(" > ") : void 0,
        }),
      e.children)
    ) {
      const l = o ? [...i, o] : i,
        c = Math.min(e.children.length, 50);
      for (let h = 0; h < c; h++) this.traverseForElements(e.children[h], t, l);
    }
  }
  async sendShortcut(e) {
    return this.sendKeysRunner.isAvailable()
      ? this.sendKeysRunner.sendShortcut(e)
      : (n.logger.warn(
          "sendkeys CLI not available. Install with: brew install socsieng/tap/sendkeys",
        ),
        !1);
  }
  async sendShortcutToApp(e, t, i) {
    const r = await this.findWindowsByAppName(e);
    return r.length === 0
      ? (n.logger.warn(`No windows found for app: ${e}`), !1)
      : this.sendShortcut({ processId: r[0].processId, key: t, modifiers: i });
  }
  clearCache() {
    this.cachedWindows.clear();
  }
  clearCacheForWindow(e) {
    this.cachedWindows.delete(e);
  }
  getCachedScreenshot(e) {
    const t = this.cachedWindows.get(e)?.latestScreenshot;
    if (t && t.startsWith("data:") && t.length > 100) return t;
  }
  getCachedWindow(e) {
    return this.cachedWindows.get(e);
  }
  async getAppIcon(e, t) {
    if (!e) return;
    const i = this.cachedAppIcons.get(e);
    if (i) return i;
    if (!n.fileServer.isRunning()) return;
    const s = `${e.replace(/[^a-zA-Z0-9.\-_]/g, "_")}.png`,
      o = n.fileServer.getAppIconsDir(),
      a = y.join(o, s);
    try {
      if ((await p.promises.stat(a)).size > 2e3) {
        const h = n.fileServer.getAppIconUrl(s);
        return (this.cachedAppIcons.set(e, h), h);
      }
      await p.promises.unlink(a);
    } catch {}
    const l = t || `/Applications/${e.split(".").pop()}.app`;
    try {
      if (
        (await p.promises.mkdir(o, { recursive: !0 }),
        l.endsWith(".app") && (await this.extractMacOSAppIcon(l, a)))
      ) {
        const m = n.fileServer.getAppIconUrl(s);
        return (
          this.cachedAppIcons.set(e, m),
          n.logger.info(`[ExternalAppManager] getAppIcon extracted for ${e}`),
          m
        );
      }
      const c = await d.app.getFileIcon(l, { size: "normal" });
      if (c.isEmpty()) return;
      const h = c.toPNG();
      if (h.length > 2e3) {
        await p.promises.writeFile(a, h);
        const g = n.fileServer.getAppIconUrl(s);
        return (this.cachedAppIcons.set(e, g), g);
      }
      return;
    } catch (c) {
      n.logger.debug(`[ExternalAppManager] getAppIcon failed for ${e}:`, c);
      return;
    }
  }
  async extractMacOSAppIcon(e, t) {
    const { exec: i } = await import("child_process"),
      { promisify: r } = await import("util"),
      s = r(i);
    try {
      const o = y.join(e, "Contents", "Info.plist");
      let a;
      try {
        a = await p.promises.readFile(o, "utf-8");
      } catch {
        return (
          n.logger.debug(
            `[ExternalAppManager] extractMacOSAppIcon: No Info.plist at ${o}`,
          ),
          !1
        );
      }
      let c = a.match(
        /<key>CFBundleIconFile<\/key>\s*<string>([^<]+)<\/string>/,
      )?.[1];
      (c ||
        (c =
          a.match(
            /<key>CFBundleIconName<\/key>\s*<string>([^<]+)<\/string>/,
          )?.[1] || "AppIcon"),
        c.endsWith(".icns") || (c += ".icns"));
      const h = y.join(e, "Contents", "Resources", c);
      try {
        await p.promises.access(h);
      } catch {
        const m = ["AppIcon.icns", "icon.icns", "app.icns", "Icon.icns"];
        let w = null;
        for (const x of m) {
          const S = y.join(e, "Contents", "Resources", x);
          try {
            (await p.promises.access(S), (w = S));
            break;
          } catch {
            continue;
          }
        }
        return w
          ? (await s(`sips -s format png -z 64 64 "${w}" --out "${t}"`, {
              timeout: 5e3,
            }),
            (await p.promises.stat(t)).size > 500)
          : (n.logger.debug(
              `[ExternalAppManager] extractMacOSAppIcon: No icon found for ${e}`,
            ),
            !1);
      }
      return (
        await s(`sips -s format png -z 64 64 "${h}" --out "${t}"`, {
          timeout: 5e3,
        }),
        (await p.promises.stat(t)).size > 500
      );
    } catch (o) {
      return (
        n.logger.debug(
          `[ExternalAppManager] extractMacOSAppIcon failed for ${e}:`,
          o,
        ),
        !1
      );
    }
  }
  async cleanupOldThumbnails() {
    if (!n.fileServer.isRunning()) return;
    const e = n.fileServer.getWindowThumbnailsDir();
    try {
      await p.promises.access(e);
    } catch {
      return;
    }
    try {
      const t = await p.promises.readdir(e),
        i = Date.now();
      let r = 0;
      for (const s of t) {
        if (!s.match(/^window-[0-9]+-[0-9]+\.(png|jpg|jpeg|webp)$/)) continue;
        const o = y.join(e, s);
        try {
          const a = await p.promises.stat(o);
          if (i - a.mtimeMs > U) {
            (await p.promises.unlink(o), r++);
            const c = s.match(/^window-([0-9]+)-/);
            if (c) {
              const h = parseInt(c[1], 10);
              this.cachedWindows.get(h)?.screenshotPath === o &&
                this.cachedWindows.delete(h);
            }
          }
        } catch (a) {
          n.logger.debug(
            `[ExternalAppManager] Could not process thumbnail file ${s}:`,
            a,
          );
        }
      }
      r > 0 &&
        n.logger.info(
          `[ExternalAppManager] Cleaned up ${r} old thumbnail files`,
        );
    } catch (t) {
      n.logger.error(
        "[ExternalAppManager] Failed to cleanup old thumbnails:",
        t,
      );
    }
  }
}
const I = f.getInstance(),
  j = Object.freeze(
    Object.defineProperty(
      { __proto__: null, ExternalAppManager: f, externalAppManager: I },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
exports.ExternalAppManager = f;
exports.ExternalAppManager$1 = j;
exports.JxaRunner = E;
exports.SendKeysRunner = C;
exports.externalAppManager = I;
