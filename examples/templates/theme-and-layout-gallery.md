---
tags: [timemd, gallery, themes]
---

# Theme and layout gallery

Each `timemd` block can override the global color preset with `colorScheme:`. Use `bare: true` for small widgets that should sit flush with surrounding note content.

> [!tip]
> Keep `timemd` fences as standalone blocks. Markdown tables do not render fenced code blocks inside cells; they show the code as text.

## Compact stats

These three widgets are intentionally standalone so Obsidian can render each `timemd` fence.

```timemd
view: stat
metric: total_time
title: Total
bare: true
```

```timemd
view: stat
metric: top_app
title: Top app
bare: true
```

```timemd
view: stat
metric: days
title: Days
bare: true
```

## Palette examples

```timemd
view: trend-chart
title: Obsidian theme
colorScheme: theme
days: 7
```

```timemd
view: trend-chart
title: time.md blue
colorScheme: time-md
days: 7
```

```timemd
view: distribution
title: Warm console category donut
colorScheme: warm-console
legend: true
stats: true
```

```timemd
view: transition-sankey
title: Midnight attention flow
colorScheme: midnight
limit: 10
```

```timemd
view: app-rhythm
title: Editor dark app rhythm
colorScheme: editor-dark
limit: 8
```

## Inline list widgets

```timemd
view: top-apps
title: Top apps compact
limit: 5
bare: true
```

```timemd
view: categories
title: Categories compact
limit: 5
bare: true
```

## Available color schemes

- `theme`
- `time-md`
- `monochrome`
- `warm-console`
- `graphite-violet`
- `system`
- `editor-dark`
- `midnight`
- `daybreak`
