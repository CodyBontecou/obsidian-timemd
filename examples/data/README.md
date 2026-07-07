# Mock data

These files are synthetic time.md exports. Use them to preview embeds, test templates, or build screenshots without loading personal data. For equivalent mock exports in every supported import format, see [`../formats`](../formats).

| File | Contains | Best for |
|---|---|---|
| [`mock-screen-time.json`](mock-screen-time.json) | Summary, Top Apps, Categories, Trends, Heatmap, Raw Sessions, Context Switches, App Transitions, Daily/Hourly Matrix, Period Comparison, Browsing History, Top Domains | Core dashboards, reports, projects, web history, attention analysis |
| [`mock-input-tracking.json`](mock-input-tracking.json) | Top Typed Words, Top Typed Keys, Cursor Heatmap Bins, Typing Intensity, Raw Keystrokes, Raw Mouse Events | Input Tracking dashboards |

## Load the mock exports

1. Make sure this directory is inside your Obsidian vault.
2. Set **Settings → time.md → Export folder** to:

   ```text
   examples/data
   ```

3. Run **time.md: Reload exports**.
4. Open [`../templates/weekly-review.md`](../templates/weekly-review.md), [`../templates/attention-audit.md`](../templates/attention-audit.md), or [`../input-tracking.md`](../input-tracking.md) in Reading view.

## Use mock data with date filters

The screen-time mock covers `2026-07-01` through `2026-07-07`. For deterministic previews, prefer explicit dates:

````markdown
```timemd
view: overview
date: 2026-07-07
title: Mock latest day
```
````

Use `date: today` or `date: yesterday` in real daily-note templates.

## Build your own mock export

The plugin accepts the same nested JSON shape that time.md exports:

```json
{
  "title": "My Mock Export",
  "destination": "time",
  "generated_at": "2026-07-07T23:00:00Z",
  "sections": [
    {
      "name": "apps",
      "display_name": "Top Apps",
      "headers": ["app_name", "total_seconds", "session_count"],
      "data": [
        { "app_name": "Obsidian", "total_seconds": 3600, "session_count": 4 }
      ]
    }
  ]
}
```

Section names can use the display names exported by time.md, such as `Top Apps`, `Raw Sessions`, `App Transitions`, and `Cursor Heatmap Bins`.

## Minimal sections by visualization

| View family | Minimum sections |
|---|---|
| `overview`, `stat`, `trend-chart`, `contribution-heatmap`, `reports` | Summary and/or Trends |
| `top-apps` | Top Apps |
| `categories`, `projects`, `distribution`, `category-balance` | Categories; Daily/Hourly Matrix improves date-aware category balance |
| `details`, `app-lanes`, `session-waterfall`, `app-rhythm`, `date-hour-heatmap` | Raw Sessions |
| `transition-sankey` | App Transitions |
| `fragmentation-scatter`, `day-archetypes` | Trends plus Context Switches and Raw Sessions |
| `web-history` | Browsing History and/or Top Domains |
| `input-*`, `cursor-heatmap`, `typing-intensity`, `top-keys`, `top-words` | Input Tracking sections |

## Editing tips

- Durations are in seconds.
- `weekday` in Heatmap is `1`–`7`.
- Raw Sessions should include `start_time`, `end_time`, and `duration_seconds`.
- Browser history rows should include `visit_time`, `url`, `title`, `domain`, and `browser`.
- Input Raw Mouse Events use `kind: 1` for clicks; those clicks feed `input-activity` and cursor overlays.
- Keep mock files small if you plan to commit them.
