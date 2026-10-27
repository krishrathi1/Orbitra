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
      a = new e.Error().stack;
    a &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[a] = "7a37b523-d157-485a-b15b-4bee190a26c6"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-7a37b523-d157-485a-b15b-4bee190a26c6"));
  })();
} catch {}
const d = require("node:crypto"),
  l = require("electron"),
  r = require("../main-app.js"),
  t = 3,
  m = [
    "formualizer @ https://strawberrybucket.dev/python-wheels/formualizer/0.7.1%2Bdendrite.3/formualizer-0.7.1%2Bdendrite.3-cp310-abi3-macosx_11_0_arm64.whl#sha256=b9860ae5d8d157298357167b572951a4b82f3101acaef88ccdc5a0e32766018c ; sys_platform == 'darwin' and platform_machine == 'arm64'",
    "formualizer @ https://strawberrybucket.dev/python-wheels/formualizer/0.7.1%2Bdendrite.3/formualizer-0.7.1%2Bdendrite.3-cp310-abi3-macosx_10_12_x86_64.whl#sha256=e6b75d37fe5b77419ad16aa0ad3f0c906057fc95d42a0e056ba15faecefc492b ; sys_platform == 'darwin' and platform_machine == 'x86_64'",
    "formualizer @ https://strawberrybucket.dev/python-wheels/formualizer/0.7.1%2Bdendrite.3/formualizer-0.7.1%2Bdendrite.3-cp310-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl#sha256=c5ba2379a66faabb4e2991018f990017d8502feb6ae8ce37eb0c1c5a08b7b692 ; sys_platform == 'linux' and platform_machine == 'x86_64'",
    "formualizer @ https://strawberrybucket.dev/python-wheels/formualizer/0.7.1%2Bdendrite.3/formualizer-0.7.1%2Bdendrite.3-cp310-abi3-win_amd64.whl#sha256=49348c85f9ea52005eb05eac4809cdfda49f471ce3cb2b42bc219e04215f67ba ; sys_platform == 'win32'",
  ],
  n = l.app?.isPackaged
    ? void 0
    : process.env.ORBITRA_FORMUALIZER_WHEEL?.trim() || void 0,
  o = [
    { name: "numpy", requirements: ["numpy==2.5.1"], importName: "numpy" },
    { name: "pandas", requirements: ["pandas==3.0.5"], importName: "pandas" },
    {
      name: "openpyxl",
      requirements: ["openpyxl==3.1.5"],
      importName: "openpyxl",
    },
    {
      name: "formualizer",
      requirements: n ? [n] : m,
      importName: "formualizer",
    },
    {
      name: "python-docx",
      requirements: ["python-docx==1.2.0"],
      importName: "docx",
    },
    { name: "pillow", requirements: ["pillow==12.3.0"], importName: "PIL" },
    { name: "pyyaml", requirements: ["pyyaml==6.0.3"], importName: "yaml" },
  ],
  i = o.flatMap((e) => e.requirements);
function p() {
  try {
    const e = r.resolvePlatformKey(process.platform, process.arch);
    return (
      r.TOOL_MANIFEST.find((s) => s.name === "python3")?.platforms[e]?.sha256 ??
      null
    );
  } catch {
    return null;
  }
}
const c = `${t}-${d
  .createHash("sha256")
  .update(JSON.stringify({ python: p(), requirements: i }))
  .digest("hex")
  .slice(0, 12)}`;
exports.PYTHON_RUNTIME_PACKAGES = o;
exports.PYTHON_RUNTIME_REQUIREMENTS = i;
exports.PYTHON_RUNTIME_TAG = c;
exports.PYTHON_RUNTIME_VERSION = t;
