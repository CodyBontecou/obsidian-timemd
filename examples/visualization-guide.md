# Visualization guide

Use a `timemd` fenced code block anywhere in an Obsidian note. The plugin reads the files in **Settings → time.md → Export folder** and renders the block in place.

````markdown
```timemd
view: overview
title: My dashboard
limit: 5
```
````

## Pick a visualization by question

| Question | Start with | Helpful options | Export sections used |
|---|---|---|---|
| How much time did I spend? | `stat`, `overview` | `metric: total_time`, `date: today`, `sections:` | Summary, Trends, Top Apps, Raw Sessions for date filters |
| What changed over time? | `trend-chart`, `contribution-heatmap`, `reports` | `days: 7`, `groupBy: day` | Trends |
| Which apps/categories dominated? | `top-apps`, `categories`, `projects`, `distribution` | `limit: 5`, `legend: false` | Top Apps, Categories |
| What did my latest day look like? | `app-lanes`, `session-waterfall`, `date-hour-heatmap` | `limit: 8` | Raw Sessions |
| Where did attention jump? | `transition-sankey`, `fragmentation-scatter`, `day-archetypes` | `limit: 10` | App Transitions, Context Switches, Trends, Raw Sessions |
| What was my browsing pattern? | `web-history` | `tab: domains`, `browser: Safari` | Browsing History, Top Domains |
| How did input activity look? | `input-stats`, `cursor-heatmap`, `typing-intensity`, `top-keys`, `top-words`, `input-activity` | `height: 360`, `limit: 20` | Input Tracking sections |

## Core screen-time widgets

### Overview dashboard

Use `overview` for a compact dashboard. It can include stats, a trend chart, weekly heatmap, and app list.

````markdown
```timemd
view: overview
title: This week
sections: stats, trend, heatmap, apps
limit: 5
```
````

For a daily note, filter the overview to one day. `today` and `yesterday` use your current system date; use an explicit date when previewing fixed mock data.

````markdown
```timemd
view: overview
date: 2026-07-07
title: Mock day
sections: stats, apps
limit: 4
```
````

### Stat cards

`stat` focuses attention on one number.

````markdown
```timemd
view: stat
metric: peak_day
title: Peak day
```
````

Supported metrics: `total_time`, `top_app`, `apps_count`, `days`, `peak_day`.

### Top apps and categories

Use ranked lists when you want a lightweight sidebar widget.

````markdown
```timemd
view: top-apps
limit: 5
title: Top apps
```
````

````markdown
```timemd
view: categories
limit: 6
title: Category mix
```
````

## Attention and session analysis

These visualizations need Raw Sessions and, where noted, Context Switches or App Transitions in the export.

### Attention flow Sankey

Shows where focus tends to move between apps.

````markdown
```timemd
view: transition-sankey
title: Focus handoffs
limit: 10
```
````

Requires **App Transitions**.

### Latest-day lanes

Shows each top app as a horizontal lane across the latest day found in Raw Sessions.

````markdown
```timemd
view: app-lanes
title: Latest-day timeline
limit: 6
```
````

Requires **Raw Sessions**.

### Session waterfall

Shows chronological sessions for the latest day, with duration bars.

````markdown
```timemd
view: session-waterfall
title: Session waterfall
limit: 40
```
````

Requires **Raw Sessions**.

### Fragmentation scatter

Plots active time against switches per hour. It is useful for spotting high-time/high-switch days.

````markdown
```timemd
view: fragmentation-scatter
title: Focus vs. fragmentation
```
````

Requires **Trends**, **Raw Sessions**, and **Context Switches**.

### Day archetypes

Classifies days as deep work, fragmented, browsing-heavy, comms-heavy, or low activity.

````markdown
```timemd
view: day-archetypes
title: Day archetypes
limit: 14
```
````

Requires **Trends**. Raw Sessions and Context Switches improve the labels.

## Calendar and rhythm views

### Contribution heatmap

Good for weekly/monthly reviews.

````markdown
```timemd
view: contribution-heatmap
title: Daily activity
```
````

Requires **Trends**.

### Date × hour heatmap

Builds a calendar-like hour grid from Raw Sessions.

````markdown
```timemd
view: date-hour-heatmap
title: Hours by day
```
````

Requires **Raw Sessions**.

### App rhythm

Shows top apps by hour of day.

````markdown
```timemd
view: app-rhythm
title: App rhythm
limit: 8
```
````

Requires **Raw Sessions**.

## Projects, reports, and distribution

### Projects

Use this when categories represent projects or work areas.

````markdown
```timemd
view: projects
title: Project mix
limit: 8
```
````

Requires **Categories**; app totals enrich the view.

### Distribution donut

Use `distribution` for a compact category donut.

````markdown
```timemd
view: distribution
title: Donut only
legend: false
stats: false
```
````

Options: `legend: true|false`, `stats: true|false`, `label: true|false`.

### Reports

Use `reports` for tables, weekday averages, period comparison, and export-ready summaries.

````markdown
```timemd
view: reports
title: Weekly report
groupBy: category
format: markdown
```
````

Options: `groupBy: app|category|day`, `format: csv|json|markdown`.

## Web history

Switch between timeline, domains, and activity tabs.

````markdown
```timemd
view: web-history
title: Safari research trail
tab: timeline
browser: Safari
limit: 25
```
````

````markdown
```timemd
view: web-history
tab: domains
limit: 10
```
````

Requires **Browsing History** and/or **Top Domains**.

## Input tracking

Input visualizations need exports from time.md's Input destination. The mock input export in [`data/mock-input-tracking.json`](data/mock-input-tracking.json) includes every section.

````markdown
```timemd
view: input-stats
title: Input today
```

```timemd
view: cursor-heatmap
height: 360
title: Cursor heatmap
```

```timemd
view: typing-intensity
height: 220
title: Typing intensity
```

```timemd
view: top-words
limit: 20
title: Top words
```
````

Privacy notes:

- `top-words` is redacted by default and includes a reveal button.
- Raw keystroke characters are redacted in the full Input Tracking view.
- Secure Input rows are represented as locked/empty characters by the exporter.

## Per-block color schemes

Code blocks can override the global color preset.

````markdown
```timemd
view: trend-chart
title: Midnight trend
colorScheme: midnight
```
````

Preset IDs: `theme`, `time-md`, `monochrome`, `warm-console`, `graphite-violet`, `system`, `editor-dark`, `midnight`, `daybreak`.
