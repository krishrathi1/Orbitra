# Orbitra 1.0.3 — readable extracted build

This is the formatted app payload extracted from the Orbitra installer.

JavaScript under `out/` and `_app/` was formatted for readability. The original TypeScript sources and source maps were not present in the installer. The metadata also refers to internal workspace packages that are not included in this extracted app. This directory is therefore a readable packaged build, not a reproducible developer source tree.

Installed dependencies and the Electron/Chromium runtime are not committed to the Git repository.
