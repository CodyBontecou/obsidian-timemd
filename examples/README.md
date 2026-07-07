# time.md examples

This directory contains copy-paste notes, templates, and synthetic exports for trying the plugin without using personal screen-time data.

## Quick start with mocked data

1. Copy or keep this repository inside an Obsidian vault.
2. In **Settings → time.md → Export folder**, set the folder to:

   ```text
   examples/data
   ```

3. Run **time.md: Reload exports** from the command palette.
4. Open one of the notes or templates below and switch to Reading view.

The mock exports are intentionally small and synthetic:

- [`data/mock-screen-time.json`](data/mock-screen-time.json) — screen-time, sessions, trends, categories, reports, web history, and attention-flow data.
- [`data/mock-input-tracking.json`](data/mock-input-tracking.json) — cursor heatmap, typing intensity, keys, words, raw keystrokes, and mouse events.

## Guides

- [`visualization-guide.md`](visualization-guide.md) — which `view:` values to use, useful parameters, and required export sections.
- [`data/README.md`](data/README.md) — how to load, edit, and create mocked exports.
- [`formats/README.md`](formats/README.md) — equivalent mock exports in JSON, CSV, YAML, Markdown, and Obsidian frontmatter formats.
- [`input-tracking.md`](input-tracking.md) — a complete input-tracking dashboard note.

## Templates

Use the files in [`templates/`](templates/) as Obsidian note templates or copy sections into existing notes.

| Template | Use it for |
|---|---|
| [`daily-dashboard.md`](templates/daily-dashboard.md) | Daily note dashboard with total time, top apps, input stats, and web activity. |
| [`weekly-review.md`](templates/weekly-review.md) | Weekly review with trends, categories, projects, reports, and contribution heatmap. |
| [`attention-audit.md`](templates/attention-audit.md) | Focus review with Sankey transitions, fragmentation, app lanes, and session waterfall. |
| [`web-history-review.md`](templates/web-history-review.md) | Browser-history review with timeline, domains, and hourly activity. |
| [`theme-and-layout-gallery.md`](templates/theme-and-layout-gallery.md) | Palette, `bare: false`, and layout examples. |

## Basic embed shape

Every example uses a fenced `timemd` block:

````markdown
```timemd
view: overview
title: Screen time overview
limit: 5
```
````

Common options:

- `title:` adds a heading above the widget.
- `limit:` controls list/table size for most ranked visualizations.
- `days:` restricts trend-style views.
- `date:` supports `today`, `yesterday`, or `YYYY-MM-DD` for overview filters.
- `height:` controls SVG-heavy views such as cursor heatmaps and typing intensity.
- Visualizations are bare by default; add `bare: false` to keep the embed card border/background.
- `colorScheme:` overrides the plugin color preset for a single block.
