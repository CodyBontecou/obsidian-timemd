# Templates

These are plain Markdown files with `timemd` code blocks. Copy them into your Obsidian templates folder, or paste individual sections into existing notes.

## Recommended setup

1. Load real exports or the synthetic exports in [`../data`](../data).
2. In a new note, insert one of these templates.
3. Switch to Reading view so Obsidian renders the `timemd` blocks.

## Template variables

The plugin reads parameters inside each `timemd` block; it does not expand template variables itself.

- Obsidian's core Templates plugin can replace `{{date}}`, `{{time}}`, etc. in the note text.
- For `date:` inside a `timemd` block, use `today`, `yesterday`, or an explicit `YYYY-MM-DD`.
- When previewing mock data, use `date: 2026-07-07` because the mock export has fixed timestamps.

## Files

- [`daily-dashboard.md`](daily-dashboard.md) — daily note dashboard.
- [`weekly-review.md`](weekly-review.md) — weekly trend and report template.
- [`attention-audit.md`](attention-audit.md) — focus, switches, and sessions.
- [`web-history-review.md`](web-history-review.md) — browser history review.
- [`theme-and-layout-gallery.md`](theme-and-layout-gallery.md) — layout and palette examples.
