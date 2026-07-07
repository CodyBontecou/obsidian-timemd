---
title: Input Tracking — 2026-05-04
tags: [timemd, input-tracking, daily]
---

# Input Tracking

A live dashboard built from the time.md `.input` export. Every code block
below is rendered in place by the plugin and updates whenever you reload
exports.

> Drop this file into your vault next to a time.md export folder, and make
> sure **Settings → time.md → Export folder** points at the folder
> containing your input-tracking export. For a synthetic preview, point the
> export folder at `examples/data` to load `mock-input-tracking.json`.

## Today at a glance

```timemd
view: input-stats
title: Input today
```

## Where the cursor lives

Aspect-preserving heatmap in absolute screen coordinates. Click overlays
appear when **Raw Mouse Events** are included in the export. If you have
multiple displays, a tab strip lets you switch between screens.

```timemd
view: cursor-heatmap
title: Cursor heatmap
height: 360
```

## Typing intensity over the day

Hourly keystroke counts. Single-day exports use `HH:MM` labels; longer ranges
fall back to `MM-DD`.

```timemd
view: typing-intensity
title: Keystrokes / hour
height: 200
```

## Most-pressed keys

Bar list of the top 10 macOS virtual keys (`kVK_*`). Modifiers and
navigation keys usually dominate — `Space`, `Return`, `Delete`, arrow keys.

```timemd
view: top-keys
limit: 10
title: Top keys
```

## Most-typed words (redacted)

The bar list defaults to redacted (`•••`); the **Reveal words** button
unmasks in place. This panel is empty unless you opted into "Full content"
capture in time.md (Settings → Input Tracking → Keystrokes → Full content).

```timemd
view: top-words
limit: 20
title: Top words
```

## Per-app click activity

Click counts grouped by app — works even when content capture is off, as
long as **Raw Mouse Events** are exported.

```timemd
view: input-activity
title: Clicks per app
```

---

## Framed card variants (`bare: false`)

Visualizations are bare by default so widgets sit flush in daily-note tables or
sidebars. Add `bare: false` when you want Obsidian-style card chrome.

| Input stats card | Top keys card |
|------------------|---------------|
| ```timemd<br/>view: input-stats<br/>bare: false<br/>``` | ```timemd<br/>view: top-keys<br/>limit: 5<br/>bare: false<br/>``` |

```timemd
view: input-stats
bare: false
```

```timemd
view: top-keys
limit: 5
bare: false
```

---

## See also

- Run **time.md: Open Input Tracking** from the command palette for the
  full, multi-card dashboard.
- The same data feeds the desktop app — see time.md → Insights → Input
  Tracking.
- Need fresh data? Re-export from time.md with **Destination = Input** (or
  **Combined** with the input toggles enabled), drop the file into your
  export folder, and the embeds above re-render automatically.
- Want a complete synthetic fixture? Use
  [`examples/data/mock-input-tracking.json`](data/mock-input-tracking.json).
