# Format showcase

This directory contains equivalent synthetic time.md exports rendered in every import format the plugin supports. Use these files when you want to verify parser behavior without changing the default mock-data folder.

| Folder | Files | Format shape |
|---|---|---|
| [`json/`](json/) | `extensive-combined.json`, `screen-time.json`, `input-tracking.json` | Current combined-export JSON shape plus split destination fixtures |
| [`csv/`](csv/) | `extensive-combined.csv`, `screen-time.csv`, `input-tracking.csv` | Current combined CSV comments plus split fixtures with `[Section]` markers |
| [`yaml/`](yaml/) | `extensive-combined.yaml`, `screen-time.yaml`, `input-tracking.yml` | Current combined YAML shape plus split fixtures |
| [`markdown/`](markdown/) | `extensive-combined.md`, `screen-time.md`, `input-tracking.md` | Markdown metadata header and GitHub-flavored tables |
| [`obsidian/`](obsidian/) | `extensive-combined.obsidian.md`, `screen-time.obsidian.md`, `input-tracking.obsidian.md` | YAML-frontmatter payload for Obsidian/Bases-style workflows |

Each format folder contains:

- **`extensive-combined.*`** — one synthetic all-sections export matching the current time.md app's combined export shape: `schema_version`, `section_count`, `sections`, the 18 extensive sections, full 7×24 heatmap rows, raw sessions, web history, analytics, and input-tracking sections.
- **Screen time split fixture** (`screen-time.*`) — Summary, Top Apps, Categories, Trends, Heatmap, Raw Sessions, Context Switches, App Transitions, Daily/Hourly Matrix, Period Comparison, Browsing History, and Top Domains.
- **Input tracking split fixture** (`input-tracking.*`) — Top Typed Words, Top Typed Keys, Cursor Heatmap Bins, Typing Intensity, Raw Keystrokes, and Raw Mouse Events.

## Preview one format

1. Set **Settings → time.md → Export folder** to one format folder, for example:

   ```text
   examples/formats/yaml
   ```

2. Run **time.md: Reload exports**.
3. Open the usual example dashboards in `examples/templates/` or `examples/input-tracking.md`.

Avoid setting the export folder to `examples/formats` itself unless you intentionally want every duplicate format loaded at once.

## Note about Obsidian/frontmatter files

The files in `obsidian/` intentionally match time.md's Obsidian/Bases export: a Markdown file whose data lives in YAML frontmatter. When opened directly in Obsidian reading view, Obsidian renders that frontmatter as large **Properties** values (`metadata` and `sections`). That is expected for this data-only format. Use the `markdown/` files for human-readable notes, or load the `obsidian/` folder through the plugin to verify the frontmatter parser.
