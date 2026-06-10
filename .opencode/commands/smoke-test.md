---
description: Smoke-test the viewer locally (build + preview + open browser)
agent: build
---

Smoke-test the viewer locally to verify the production build works end to end.

1. Run `npm run build --workspace jvf-viewer` and confirm it succeeds.
2. Print the bundle size summary so the user can spot regressions.
3. Suggest running `npm run preview --workspace jvf-viewer` (do not start
   it automatically — it would block the agent).
4. Remind the user to test:
   - Loading a sample JVF file from the dropdown
   - Switching 2D ↔ 3D
   - Opening the legend modal
   - Opening the *About* modal — verify the changelog renders correctly
   - Triggering a topology error to confirm the error panel + click-to-zoom
