---
tags: [timemd, dashboard, daily]
---

# Daily time.md dashboard

> For the bundled mock data, change `date: today` to `date: 2026-07-07` if you are previewing after that date.

## Today at a glance

```timemd
view: overview
date: today
sections: stats, apps
title: Today
limit: 5
```

## Total time

```timemd
view: stat
metric: total_time
title: Total screen time
```

```timemd
view: stat
metric: top_app
title: Top app
```

## App mix

```timemd
view: top-apps
title: Top apps
limit: 8
```

```timemd
view: distribution
title: Category distribution
legend: true
stats: true
```

## Latest-day timeline

```timemd
view: app-lanes
title: App lanes
limit: 6
```

```timemd
view: session-waterfall
title: Sessions
limit: 30
```

## Input pulse

```timemd
view: input-stats
title: Input stats
```

```timemd
view: typing-intensity
title: Typing intensity
height: 200
```

```timemd
view: top-keys
title: Top keys
limit: 8
```

## Web activity

```timemd
view: web-history
title: Recent browsing
tab: timeline
limit: 10
```

## Notes

- What felt focused?
- What created context switches?
- What should be blocked, batched, or moved tomorrow?
