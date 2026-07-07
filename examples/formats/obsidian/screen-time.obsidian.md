---
# Mock Screen Time — Week of 2026-07-01
metadata:
  schema_version: "2.0"
  title: "Mock Screen Time — Week of 2026-07-01"
  destination: "time"
  generated_at: "2026-07-07T23:30:00Z"
  date_range:
    start: "2026-07-01"
    end: "2026-07-07"
  granularity: "day"
  timezone: "America/Los_Angeles"
  filters: "date_range=2026-07-01..2026-07-07; granularity=day; app=all; synthetic=true"
sections:
  - name: "Summary"
    id: "summary"
    headers:
      - "metric"
      - "value"
    data:
      -
        metric: "total_seconds"
        value: 92400
      -
        metric: "days_tracked"
        value: 7
      -
        metric: "apps_tracked"
        value: 8
      -
        metric: "top_app"
        value: "Obsidian"
  - name: "Top Apps"
    id: "apps"
    headers:
      - "app_name"
      - "total_seconds"
      - "session_count"
    data:
      -
        app_name: "Obsidian"
        total_seconds: 25200
        session_count: 34
      -
        app_name: "VS Code"
        total_seconds: 19800
        session_count: 29
      -
        app_name: "Safari"
        total_seconds: 14400
        session_count: 27
      -
        app_name: "Slack"
        total_seconds: 10800
        session_count: 41
      -
        app_name: "Terminal"
        total_seconds: 7200
        session_count: 18
      -
        app_name: "Figma"
        total_seconds: 5400
        session_count: 10
      -
        app_name: "Spotify"
        total_seconds: 5400
        session_count: 7
      -
        app_name: "Linear"
        total_seconds: 4200
        session_count: 12
  - name: "Categories"
    id: "categories"
    headers:
      - "category"
      - "total_seconds"
    data:
      -
        category: "Writing"
        total_seconds: 25200
      -
        category: "Developer Tools"
        total_seconds: 27000
      -
        category: "Browsing"
        total_seconds: 14400
      -
        category: "Communication"
        total_seconds: 10800
      -
        category: "Design"
        total_seconds: 5400
      -
        category: "Entertainment"
        total_seconds: 5400
      -
        category: "Planning"
        total_seconds: 4200
  - name: "Trends"
    id: "trend"
    headers:
      - "date"
      - "total_seconds"
    data:
      -
        date: "2026-07-01"
        total_seconds: 9000
      -
        date: "2026-07-02"
        total_seconds: 12600
      -
        date: "2026-07-03"
        total_seconds: 16200
      -
        date: "2026-07-04"
        total_seconds: 10800
      -
        date: "2026-07-05"
        total_seconds: 18000
      -
        date: "2026-07-06"
        total_seconds: 14400
      -
        date: "2026-07-07"
        total_seconds: 11400
  - name: "Heatmap"
    id: "heatmap"
    headers:
      - "weekday"
      - "hour"
      - "total_seconds"
    data:
      -
        weekday: 1
        hour: 9
        total_seconds: 1200
      -
        weekday: 1
        hour: 10
        total_seconds: 1800
      -
        weekday: 1
        hour: 11
        total_seconds: 900
      -
        weekday: 1
        hour: 14
        total_seconds: 2100
      -
        weekday: 2
        hour: 9
        total_seconds: 1500
      -
        weekday: 2
        hour: 10
        total_seconds: 2400
      -
        weekday: 2
        hour: 15
        total_seconds: 2100
      -
        weekday: 2
        hour: 16
        total_seconds: 1200
      -
        weekday: 3
        hour: 8
        total_seconds: 900
      -
        weekday: 3
        hour: 9
        total_seconds: 3000
      -
        weekday: 3
        hour: 10
        total_seconds: 3300
      -
        weekday: 3
        hour: 13
        total_seconds: 1800
      -
        weekday: 3
        hour: 15
        total_seconds: 2700
      -
        weekday: 4
        hour: 11
        total_seconds: 1500
      -
        weekday: 4
        hour: 12
        total_seconds: 1800
      -
        weekday: 4
        hour: 19
        total_seconds: 1200
      -
        weekday: 5
        hour: 9
        total_seconds: 2400
      -
        weekday: 5
        hour: 10
        total_seconds: 3600
      -
        weekday: 5
        hour: 11
        total_seconds: 2700
      -
        weekday: 5
        hour: 14
        total_seconds: 3000
      -
        weekday: 5
        hour: 15
        total_seconds: 2100
      -
        weekday: 6
        hour: 10
        total_seconds: 1200
      -
        weekday: 6
        hour: 12
        total_seconds: 900
      -
        weekday: 6
        hour: 20
        total_seconds: 1800
      -
        weekday: 7
        hour: 15
        total_seconds: 2100
      -
        weekday: 7
        hour: 16
        total_seconds: 1500
      -
        weekday: 7
        hour: 21
        total_seconds: 1200
  - name: "Raw Sessions"
    id: "raw_sessions"
    headers:
      - "app_name"
      - "start_time"
      - "end_time"
      - "duration_seconds"
    data:
      -
        app_name: "Obsidian"
        start_time: "2026-07-01T09:00:00Z"
        end_time: "2026-07-01T10:10:00Z"
        duration_seconds: 4200
      -
        app_name: "Safari"
        start_time: "2026-07-01T10:20:00Z"
        end_time: "2026-07-01T11:00:00Z"
        duration_seconds: 2400
      -
        app_name: "Slack"
        start_time: "2026-07-02T14:00:00Z"
        end_time: "2026-07-02T14:35:00Z"
        duration_seconds: 2100
      -
        app_name: "VS Code"
        start_time: "2026-07-02T15:00:00Z"
        end_time: "2026-07-02T16:30:00Z"
        duration_seconds: 5400
      -
        app_name: "Figma"
        start_time: "2026-07-03T09:10:00Z"
        end_time: "2026-07-03T10:20:00Z"
        duration_seconds: 4200
      -
        app_name: "Linear"
        start_time: "2026-07-03T10:30:00Z"
        end_time: "2026-07-03T11:00:00Z"
        duration_seconds: 1800
      -
        app_name: "Safari"
        start_time: "2026-07-04T19:00:00Z"
        end_time: "2026-07-04T20:15:00Z"
        duration_seconds: 4500
      -
        app_name: "Obsidian"
        start_time: "2026-07-05T09:00:00Z"
        end_time: "2026-07-05T10:30:00Z"
        duration_seconds: 5400
      -
        app_name: "VS Code"
        start_time: "2026-07-05T10:45:00Z"
        end_time: "2026-07-05T12:00:00Z"
        duration_seconds: 4500
      -
        app_name: "Slack"
        start_time: "2026-07-06T09:30:00Z"
        end_time: "2026-07-06T10:00:00Z"
        duration_seconds: 1800
      -
        app_name: "Terminal"
        start_time: "2026-07-06T10:00:00Z"
        end_time: "2026-07-06T10:50:00Z"
        duration_seconds: 3000
      -
        app_name: "Obsidian"
        start_time: "2026-07-07T09:00:00Z"
        end_time: "2026-07-07T09:45:00Z"
        duration_seconds: 2700
      -
        app_name: "Slack"
        start_time: "2026-07-07T09:45:00Z"
        end_time: "2026-07-07T10:00:00Z"
        duration_seconds: 900
      -
        app_name: "VS Code"
        start_time: "2026-07-07T10:00:00Z"
        end_time: "2026-07-07T11:00:00Z"
        duration_seconds: 3600
      -
        app_name: "Terminal"
        start_time: "2026-07-07T11:00:00Z"
        end_time: "2026-07-07T11:20:00Z"
        duration_seconds: 1200
      -
        app_name: "Safari"
        start_time: "2026-07-07T11:20:00Z"
        end_time: "2026-07-07T11:50:00Z"
        duration_seconds: 1800
      -
        app_name: "Spotify"
        start_time: "2026-07-07T12:30:00Z"
        end_time: "2026-07-07T13:00:00Z"
        duration_seconds: 1800
      -
        app_name: "Figma"
        start_time: "2026-07-07T13:00:00Z"
        end_time: "2026-07-07T13:40:00Z"
        duration_seconds: 2400
      -
        app_name: "Linear"
        start_time: "2026-07-07T13:40:00Z"
        end_time: "2026-07-07T14:00:00Z"
        duration_seconds: 1200
      -
        app_name: "Obsidian"
        start_time: "2026-07-07T14:00:00Z"
        end_time: "2026-07-07T15:00:00Z"
        duration_seconds: 3600
      -
        app_name: "VS Code"
        start_time: "2026-07-07T15:00:00Z"
        end_time: "2026-07-07T15:50:00Z"
        duration_seconds: 3000
      -
        app_name: "Slack"
        start_time: "2026-07-07T15:50:00Z"
        end_time: "2026-07-07T16:00:00Z"
        duration_seconds: 600
      -
        app_name: "Obsidian"
        start_time: "2026-07-07T16:00:00Z"
        end_time: "2026-07-07T16:40:00Z"
        duration_seconds: 2400
  - name: "Context Switches"
    id: "context_switches"
    headers:
      - "date"
      - "hour"
      - "switch_count"
    data:
      -
        date: "2026-07-01"
        hour: 9
        switch_count: 8
      -
        date: "2026-07-01"
        hour: 10
        switch_count: 14
      -
        date: "2026-07-02"
        hour: 14
        switch_count: 18
      -
        date: "2026-07-02"
        hour: 15
        switch_count: 9
      -
        date: "2026-07-03"
        hour: 9
        switch_count: 7
      -
        date: "2026-07-03"
        hour: 10
        switch_count: 12
      -
        date: "2026-07-04"
        hour: 19
        switch_count: 21
      -
        date: "2026-07-05"
        hour: 9
        switch_count: 6
      -
        date: "2026-07-05"
        hour: 10
        switch_count: 8
      -
        date: "2026-07-06"
        hour: 9
        switch_count: 16
      -
        date: "2026-07-06"
        hour: 10
        switch_count: 10
      -
        date: "2026-07-07"
        hour: 9
        switch_count: 14
      -
        date: "2026-07-07"
        hour: 10
        switch_count: 7
      -
        date: "2026-07-07"
        hour: 13
        switch_count: 19
      -
        date: "2026-07-07"
        hour: 15
        switch_count: 12
  - name: "App Transitions"
    id: "app_transitions"
    headers:
      - "from_app"
      - "to_app"
      - "count"
    data:
      -
        from_app: "Obsidian"
        to_app: "VS Code"
        count: 18
      -
        from_app: "VS Code"
        to_app: "Terminal"
        count: 15
      -
        from_app: "Terminal"
        to_app: "VS Code"
        count: 13
      -
        from_app: "VS Code"
        to_app: "Obsidian"
        count: 12
      -
        from_app: "Obsidian"
        to_app: "Safari"
        count: 10
      -
        from_app: "Safari"
        to_app: "Obsidian"
        count: 9
      -
        from_app: "Slack"
        to_app: "Obsidian"
        count: 8
      -
        from_app: "Obsidian"
        to_app: "Slack"
        count: 7
      -
        from_app: "Linear"
        to_app: "Figma"
        count: 6
      -
        from_app: "Figma"
        to_app: "Linear"
        count: 5
  - name: "Daily Matrix"
    id: "daily_matrix"
    headers:
      - "date"
      - "hour"
      - "category"
      - "total_seconds"
    data:
      -
        date: "2026-07-01"
        hour: 0
        category: "Writing"
        total_seconds: 3600
      -
        date: "2026-07-01"
        hour: 0
        category: "Browsing"
        total_seconds: 2400
      -
        date: "2026-07-02"
        hour: 0
        category: "Developer Tools"
        total_seconds: 5400
      -
        date: "2026-07-02"
        hour: 0
        category: "Communication"
        total_seconds: 2100
      -
        date: "2026-07-03"
        hour: 0
        category: "Design"
        total_seconds: 4200
      -
        date: "2026-07-03"
        hour: 0
        category: "Planning"
        total_seconds: 1800
      -
        date: "2026-07-04"
        hour: 0
        category: "Browsing"
        total_seconds: 4500
      -
        date: "2026-07-05"
        hour: 0
        category: "Writing"
        total_seconds: 5400
      -
        date: "2026-07-05"
        hour: 0
        category: "Developer Tools"
        total_seconds: 4500
      -
        date: "2026-07-06"
        hour: 0
        category: "Developer Tools"
        total_seconds: 3000
      -
        date: "2026-07-06"
        hour: 0
        category: "Communication"
        total_seconds: 1800
  - name: "Hourly Matrix"
    id: "hourly_matrix"
    headers:
      - "date"
      - "hour"
      - "app_name"
      - "category"
      - "total_seconds"
    data:
      -
        date: "2026-07-07"
        hour: 9
        app_name: "Obsidian"
        category: "Writing"
        total_seconds: 2700
      -
        date: "2026-07-07"
        hour: 9
        app_name: "Slack"
        category: "Communication"
        total_seconds: 900
      -
        date: "2026-07-07"
        hour: 10
        app_name: "VS Code"
        category: "Developer Tools"
        total_seconds: 3600
      -
        date: "2026-07-07"
        hour: 11
        app_name: "Terminal"
        category: "Developer Tools"
        total_seconds: 1200
      -
        date: "2026-07-07"
        hour: 11
        app_name: "Safari"
        category: "Browsing"
        total_seconds: 1800
      -
        date: "2026-07-07"
        hour: 13
        app_name: "Figma"
        category: "Design"
        total_seconds: 2400
      -
        date: "2026-07-07"
        hour: 13
        app_name: "Linear"
        category: "Planning"
        total_seconds: 1200
      -
        date: "2026-07-07"
        hour: 14
        app_name: "Obsidian"
        category: "Writing"
        total_seconds: 3600
      -
        date: "2026-07-07"
        hour: 15
        app_name: "VS Code"
        category: "Developer Tools"
        total_seconds: 3000
      -
        date: "2026-07-07"
        hour: 16
        app_name: "Obsidian"
        category: "Writing"
        total_seconds: 2400
  - name: "Period Comparison"
    id: "period_comparison"
    headers:
      - "metric"
      - "value"
    data:
      -
        metric: "current_total_seconds"
        value: 92400
      -
        metric: "previous_total_seconds"
        value: 78600
      -
        metric: "percent_change"
        value: 17.6
      -
        metric: "app_delta:Obsidian"
        value: 5400
      -
        metric: "app_delta:VS Code"
        value: 3600
      -
        metric: "app_delta:Safari"
        value: -1800
      -
        metric: "app_delta:Slack"
        value: 900
  - name: "Browsing History"
    id: "browsing_history"
    headers:
      - "visit_time"
      - "url"
      - "title"
      - "domain"
      - "browser"
    data:
      -
        visit_time: "2026-07-07T11:21:00Z"
        url: "https://docs.obsidian.md/"
        title: "Obsidian developer docs"
        domain: "docs.obsidian.md"
        browser: "Safari"
      -
        visit_time: "2026-07-07T11:25:00Z"
        url: "https://github.com/obsidianmd/obsidian-sample-plugin"
        title: "obsidian-sample-plugin"
        domain: "github.com"
        browser: "Safari"
      -
        visit_time: "2026-07-07T11:33:00Z"
        url: "https://timemd.app/"
        title: "time.md"
        domain: "timemd.app"
        browser: "Safari"
      -
        visit_time: "2026-07-06T10:45:00Z"
        url: "https://developer.mozilla.org/en-US/docs/Web/SVG"
        title: "SVG docs"
        domain: "developer.mozilla.org"
        browser: "Chrome"
      -
        visit_time: "2026-07-05T09:45:00Z"
        url: "https://linear.app/"
        title: "Linear"
        domain: "linear.app"
        browser: "Arc"
      -
        visit_time: "2026-07-04T19:30:00Z"
        url: "https://news.ycombinator.com/"
        title: "Hacker News"
        domain: "news.ycombinator.com"
        browser: "Safari"
      -
        visit_time: "2026-07-03T10:50:00Z"
        url: "https://figma.com/"
        title: "Figma"
        domain: "figma.com"
        browser: "Chrome"
  - name: "Top Domains"
    id: "top_domains"
    headers:
      - "domain"
      - "visit_count"
      - "total_duration_seconds"
      - "last_visit_time"
    data:
      -
        domain: "docs.obsidian.md"
        visit_count: 12
        total_duration_seconds: 2100
        last_visit_time: "2026-07-07T11:21:00Z"
      -
        domain: "github.com"
        visit_count: 18
        total_duration_seconds: 3600
        last_visit_time: "2026-07-07T11:25:00Z"
      -
        domain: "timemd.app"
        visit_count: 6
        total_duration_seconds: 900
        last_visit_time: "2026-07-07T11:33:00Z"
      -
        domain: "developer.mozilla.org"
        visit_count: 5
        total_duration_seconds: 1500
        last_visit_time: "2026-07-06T10:45:00Z"
      -
        domain: "linear.app"
        visit_count: 7
        total_duration_seconds: 1200
        last_visit_time: "2026-07-05T09:45:00Z"
---

# Mock Screen Time — Week of 2026-07-01

This note stores the synthetic time.md export in YAML frontmatter for Obsidian/Bases-style workflows.
