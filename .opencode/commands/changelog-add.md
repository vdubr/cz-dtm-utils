---
description: Add an entry to [Unreleased] section in CHANGELOG.md
agent: build
---

Add a new bullet to the appropriate subsection (`Přidáno` / `Změněno` /
`Opraveno` / `Odstraněno`) in the `[Unreleased]` section at the top of
`CHANGELOG.md`.

Rules:

- The bullet must be in **Czech** (the changelog is in Czech).
- Use Keep a Changelog convention. Subsections in this order:
  `Přidáno` → `Změněno` → `Opraveno` → `Odstraněno`.
- If the matching subsection does not yet exist under `[Unreleased]`,
  create it.
- Wrap text at ~78 columns to keep the file readable.
- Use code spans (` `` `) for filenames, identifiers, attribute names.
- Focus on **what user-visible behavior or developer-visible API changed**,
  not on the implementation detail. The changelog ships into the *About*
  dialog of the viewer (`ui/changelog.ts`), so it is read by end users.

Argument: $ARGUMENTS — describe the change. Decide which subsection it
belongs to.
