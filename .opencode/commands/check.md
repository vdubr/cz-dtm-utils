---
description: Run full pre-flight check (build + typecheck + tests)
agent: build
---

Run the full sanity check across the monorepo:

1. `npm run typecheck` — must be clean across all 4 workspaces
2. `npm run build` — must build all 4 workspaces in dependency order
3. `npm test` — `jvf-parser` + `jvf-topology` Vitest suites must be green

Report any failures with exact file paths and line numbers. Do not attempt
fixes unless asked. Run all three commands and only stop early if a fatal
error makes the next step impossible.
