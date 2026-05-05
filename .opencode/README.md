# `.opencode/` — repository OpenCode configuration

This directory contains shared [OpenCode](https://opencode.ai/) configuration
that is committed to the repository and used by every contributor running
OpenCode against this codebase.

It complements the project-wide `opencode.json` at the repository root.

## Layout

```
.opencode/
├── README.md          — this file
├── agents/            — repository-scoped specialist agents
│   ├── parser-specialist.md
│   ├── topology-specialist.md
│   └── viewer-ui.md
└── commands/          — repository-scoped slash commands
    ├── changelog-add.md
    ├── check.md
    ├── release.md
    └── smoke-test.md
```

## Agents

| Agent | When to use |
|---|---|
| `parser-specialist` | Changes inside `jvf_parser/` — XML parsing, GML geometry, XSD-driven codegen, fixture tests. |
| `topology-specialist` | New or modified topology checks in `jvf_topology/`. Knows the rule layers and tolerance constants. |
| `viewer-ui` | UI work in `jvf_viewer/src/ui/` — modals, panels, styling. Will keep `INFO_CONTENT_HTML` in `ui/infoModal.ts` and the changelog in sync. |

All three are configured as **subagents** so the orchestrator can delegate
to them via the `task` tool.

## Commands

| Command | Purpose |
|---|---|
| `/check` | Pre-flight: typecheck + build + tests across all four workspaces. |
| `/smoke-test` | Build the viewer and remind the user of the manual UI checks. |
| `/changelog-add <summary>` | Add a Czech entry to the `[Unreleased]` section of `CHANGELOG.md`, choosing the right Keep a Changelog subsection. |
| `/release` | Run the full CalVer release workflow defined in `CLAUDE.md` — version bump, merge to `main`, tag, GitHub Release, Vercel verification. |

## Adding more

- New agents: drop a markdown file in `agents/` with the YAML frontmatter
  format used by the existing ones (see [Agent docs](https://opencode.ai/docs/agents)).
- New commands: drop a markdown file in `commands/` with frontmatter
  describing the command (see [Command docs](https://opencode.ai/docs/commands)).

## Not included

- API keys, tokens and per-user preferences — those belong in the user's
  global config (`~/.config/opencode/opencode.json`), not in this
  repository.
- TUI preferences (themes, keybinds) — those also live in the user's
  global config.
