---
tags: [timemd, review, weekly]
---

# Weekly time.md review

Use this template with a week-sized export. The bundled mock export covers `2026-07-01` through `2026-07-07`.

## Summary

```timemd
view: overview
title: Week overview
sections: stats, trend, heatmap, apps
limit: 6
```

## Trend

```timemd
view: trend-chart
title: Daily active time
days: 7
```

```timemd
view: contribution-heatmap
title: Contribution heatmap
```

## Category and project mix

```timemd
view: category-balance
title: Category balance
limit: 8
```

```timemd
view: projects
title: Projects
limit: 8
```

```timemd
view: distribution
title: Category donut
legend: true
stats: true
label: true
```

## Rhythm

```timemd
view: app-rhythm
title: App rhythm by hour
limit: 8
```

```timemd
view: date-hour-heatmap
title: Date × hour heatmap
```

## Report

```timemd
view: reports
title: Report by app
groupBy: app
format: markdown
```

```timemd
view: reports
title: Report by category
groupBy: category
format: markdown
```

## Review prompts

- Which app or category deserves more intentional time next week?
- Which day had the strongest focus pattern?
- Which recurring low-value activity can be removed, blocked, or scheduled?
- What changed compared with the previous period?
