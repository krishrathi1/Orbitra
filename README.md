# Orbitra

This repository contains the readable application bundle extracted from Orbitra 1.0.3. The packaged renderer and Electron main-process files are in [`app-orbitra/`](app-orbitra/).

## Source and build status

This is packaged output, not the original authoring repository. The installer did not include the original TypeScript sources or source maps, and its package metadata references internal `workspace:*` packages that are not included here. There is no reproducible build or automated test suite in this extraction. Bundling removed original comments and source boundaries.

The local runnable app is `..\OrbitraRuntime\Orbitra.exe`; its Electron runtime and installed `node_modules` are intentionally excluded from Git. The packed runtime was updated alongside the decoded bundle when service URLs were corrected.

## Authentication and service API

The app uses the original service contract: `/api/auth/*` returns a WorkOS session, and the app sends that session to its chat, sync, and integration APIs. The API base was restored to `https://v1-0-3.api.strawberrybrowser.com` from the original installer. The Orbitra-renamed API hostname is not configured and must not be used. Unauthenticated requests to protected routes return `401`, which is expected; a successful user sign-in and authenticated feature calls still require a real account.

## Supabase project

The isolated Supabase project in Mumbai (`ap-south-1`) has a migration for a private `public.profiles` table. Row-level security restricts profiles to their owning Supabase Auth user, and a trigger creates a profile when that kind of user is created. The database migration is applied and the public schema passes Supabase lint.

The packaged app does **not** currently use Supabase Auth or `public.profiles`. Its server APIs require the original WorkOS-compatible session, so replacing sign-in with Supabase tokens alone would make chat and other authenticated API calls fail. Connecting Supabase safely requires the original service source or a trusted server-side adapter that bridges Supabase identity to those APIs. The values in `.env.example` are a configuration template, not active settings consumed by this extracted bundle.

Keep Supabase secret/service-role keys on a trusted server only. Never add them to this desktop bundle or commit them to Git.

## Verification performed

- Fresh-profile runtime launch reaches the Orbitra welcome/onboarding screen.
- The original auth endpoint is reachable; a synthetic invalid-credential check returns the API's expected `400 Invalid email or password` response. No account was created.
- Protected auth and chat routes return `401` without a session.
- `supabase migration list --linked` shows the local and remote migration aligned, and `supabase db lint --linked --schema public --fail-on error` reports no schema errors.
- A real authenticated sign-in and authenticated app feature flow have not been verified from the desktop UI.
