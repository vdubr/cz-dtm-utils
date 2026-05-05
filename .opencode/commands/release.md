---
description: Cut a new release (CalVer YYYY.M.D) — bump versions, merge to main, tag, GitHub release
agent: build
---

Execute the release workflow defined in `CLAUDE.md` (section "Workflow nasazení nové verze"):

## Pre-flight (must pass before continuing)

1. Verify current branch is `develop` and clean (`git status --short`).
2. Run `/check` (typecheck + build + tests across all workspaces).
3. Show `git log --oneline main..develop` so the user confirms what is being released.

## Confirm version

Today's date in `YYYY.M.D` format (no leading zeros — npm semver requirement).
If a release already exists for today, append `.N` suffix (`2026.4.30.2`).
**Ask the user** for confirmation before bumping.

## Bump + commit on develop

1. Update `CHANGELOG.md`: rename `[Unreleased]` to `[YYYY.M.D] - YYYY-MM-DD`,
   create a new empty `[Unreleased]` section above it.
2. `npm version YYYY.M.D --workspaces --no-git-tag-version --allow-same-version`
3. `git add CHANGELOG.md jvf_*/package.json jvf_*/package-lock.json`
4. `git commit -m "chore(release): vYYYY.M.D"` (body explains what changed).
5. `git push origin develop`.

## Merge → main + tag + push

1. `git checkout main && git merge --no-ff develop -m "Merge release vYYYY.M.D into main"`
2. `git tag vYYYY.M.D`
3. `git push origin main --tags`

## GitHub release

1. Extract the new version section from `CHANGELOG.md` to a temp file.
2. `gh release create vYYYY.M.D --title "vYYYY.M.D — <short summary>" --notes-file <tmp>`
3. Verify the URL is accessible.

## Verify deploy

1. Check Vercel deployment status for the production target via the Vercel MCP
   tools (`vercel_list_deployments`).
2. Wait for `READY` state.

## Cleanup

1. `git checkout develop` to leave the user back on the dev branch.

**Stop and ask the user** before any irreversible step (push to main, tag,
GitHub release).
