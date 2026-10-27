# Orbitra

This repository contains the readable, formatted application bundle extracted from Orbitra 1.0.3. The main app files are in [`app-orbitra/`](app-orbitra/).

## Source and build status

This is packaged application output, not the original authoring repository. The installer payload did not contain the original TypeScript sources or source maps. Its package metadata refers to internal `workspace:*` packages that are not included here, and no reproducible build scripts were present in the extracted package. The JavaScript was formatted for readability; comments and original source boundaries removed during bundling cannot be recovered.

The Electron/Chromium runtime and installed `node_modules` are intentionally excluded from this Git repository. A local test runtime, if present as `runtime-orbitra/`, is an extracted binary build and is not part of this source bundle.

## Orbitra account database

Orbitra's isolated hosted Supabase project is in Mumbai (`ap-south-1`). The migration in `supabase/migrations/` creates only a private profile table linked to Supabase Auth users. Row-level security allows each signed-in user to read and update only their own profile; a database trigger creates a profile on account creation. Passwords are managed by Supabase Auth and are never copied into `public.profiles`.

The extracted desktop bundle is not the original source project. It still targets `https://v1-0-3.api.orbitrabrowser.com` and contains many server-backed routes, including `/api/auth`, `/api/chat`, `/api/fs`, and integrations. That host currently does not resolve. Setting up Supabase Auth and this profile database does not recreate those proprietary API services, so the extracted app cannot yet be made fully functional just by adding a database. The original authoring source or an implementation of the required API is needed to connect the desktop sign-in and the rest of the app safely.

Copy `.env.example` only as a template. Use the publishable key for client-side Auth; keep any Supabase secret key exclusively in a trusted server environment.
