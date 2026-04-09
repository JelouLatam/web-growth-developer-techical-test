# Solution

> Fill out each section below. This document is a major part of the evaluation — treat it like a technical design doc, not a homework writeup.

## Audit Findings

Document every issue you found in the starter code.

| # | Severity | Area | Description | Fix Applied |
|---|---|---|---|---|
| 1 | _critical / major / minor_ | _tracking / code / perf / a11y_ | _What's wrong_ | _What you did_ |
| 2 | | | | |
| _..._ | | | | |

## Tech Stack & Architecture Decisions

| Technology | Purpose | Why |
|---|---|---|
| _e.g., Vanilla JS (ES modules)_ | _Client-side logic_ | _No framework overhead for a landing page_ |

_Describe the architectural changes you made to the starter code and why._

## Event Schema (Warehouse-Ready)

Design the schema as if these events will land in BigQuery / Snowflake.

### `page_view`

| Column | Type | Description |
|---|---|---|
| `event_name` | STRING | Always `page_view` |
| `timestamp` | TIMESTAMP | ISO 8601 |
| _...add columns_ | | |

**Example row:**
```json
{}
```

### `form_submit`

| Column | Type | Description |
|---|---|---|
| _..._ | | |

**Example row:**
```json
{}
```

### `cta_click`

| Column | Type | Description |
|---|---|---|
| _..._ | | |

### `scroll_depth`

| Column | Type | Description |
|---|---|---|
| _..._ | | |

### `section_view`

| Column | Type | Description |
|---|---|---|
| _..._ | | |

## Multi-Variate Test Architecture

_Describe:_
- How the 4 combinations are assigned and distributed
- How you prevent flicker
- How the combination ID flows through tracking
- How you'd determine a winner (primary metric, sample size, statistical approach)
- How easy it would be to add a third test variable

## Attribution Model

_Describe:_
- How first-touch attribution works (storage, persistence, when it's set)
- How last-touch attribution works (storage, when it updates)
- Edge case: user arrives via LinkedIn, leaves, returns organically — what's in each attribution bucket?
- How both are included in the form payload

## Personalization Approach

_Describe:_
- How personalization rules are structured (show the config if applicable)
- What changes per segment (LinkedIn, Google, HubSpot, organic)
- How personalization and MVT coexist (which takes priority? do they compose?)
- How a non-developer would modify the rules

## Performance Optimizations

_What did you fix from the starter? What would you optimize further with more time?_

## QA Checklist

- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on mobile viewport (375px) and tablet (768px)
- [ ] Form validation works for all fields
- [ ] Company email validation rejects personal emails (gmail, yahoo, outlook, hotmail, icloud, aol)
- [ ] UTM parameters: first-touch captured and persisted in localStorage
- [ ] UTM parameters: last-touch captured and persisted in sessionStorage
- [ ] Both attribution models included in form submission payload
- [ ] MVT: all 4 combinations render correctly
- [ ] MVT: combination persists across page reloads
- [ ] MVT: `?headline=B&cta=A` override works
- [ ] MVT: no visible flicker on variant assignment
- [ ] MVT: combination ID included in all tracking events
- [ ] Personalization: `?utm_source=linkedin` shows LinkedIn experience
- [ ] Personalization: `?utm_source=google` shows Google experience
- [ ] Personalization: `?utm_source=hubspot` shows shortened page
- [ ] Personalization: organic/direct shows default experience
- [ ] All tracking events fire with consistent schema (check console)
- [ ] Tracking respects consent state
- [ ] Scroll depth events fire at 25%, 50%, 75%, 100%
- [ ] Section visibility events fire via Intersection Observer
- [ ] No console errors
- [ ] Lighthouse Performance score (mobile): ___

## Trade-offs & Decisions

_Document any ambiguity you encountered and how you resolved it. What would you do differently in production with more time and resources?_
