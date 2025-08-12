# ToolBoard – MVP
**Goal**: Let anonymous users run public tools; signed-in users get history & batch runs. Success: 20% repeat use within 7 days.

## P0 User Stories
1) As a guest, I can convert an image (PNG↔JPG) and download the result.
2) As a user, I can sign in via email and see my last 5 runs.

## Scope
Must: image convert (single file), email login, tool gallery.  
Should: dark mode.  
Won’t: team sharing, payments.

## System Overview
Next.js app (App Router) + Fastify API + Postgres. Auth via passwordless email. Object storage for uploads.

## Acceptance
See `/docs/acceptance.md`.
