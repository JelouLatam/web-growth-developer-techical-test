# Web Growth Developer — Technical Test

## Overview

This technical test evaluates your ability to **audit, improve, and extend conversion-oriented web experiences** — not just build from scratch. You will inherit an existing codebase, identify its flaws, and elevate it to production-grade quality while adding new capabilities.

This test is designed for experienced growth engineers who understand the full lifecycle of a conversion page: from attribution to experimentation to measurement.

**Estimated time:** 6–8 hours
**Deadline:** 2 calendar days from receiving this test

---

## Context

You are the **Web Growth Developer** joining **Flowbase** (fictional B2B SaaS company). A previous developer built a landing page for the HR product launch, but they've since left the company. The Demand Gen Manager needs you to:

1. **Audit** the existing page and fix critical issues
2. **Extend** it with multi-variate testing, attribution tracking, and traffic-source personalization
3. **Document** your decisions and architecture

The existing code is in the [`starter/`](starter/) directory. The campaign brief is in [`briefs/campaign-brief.md`](briefs/campaign-brief.md).

> **Important:** The starter code works, but it has bugs, architectural issues, and missing features. Part of this test is identifying what's wrong. Do not start from scratch — work with what's there.

---

## What You Need to Deliver

### 1. Code Audit & Remediation

Review the starter codebase and identify issues across:

- **Bugs** — anything broken or producing incorrect behavior
- **Tracking integrity** — events that fire incorrectly, have inconsistent schemas, or miss data
- **Code quality** — architecture, semantics, accessibility, maintainability
- **Performance** — render-blocking resources, layout shifts, unnecessary overhead

**Requirements:**
- [ ] Document all issues found in your `SOLUTION.md` (with severity: critical / major / minor)
- [ ] Fix all critical and major issues
- [ ] Refactor the JavaScript into a modular architecture (separation of concerns)
- [ ] Ensure all HTML is semantic and accessible
- [ ] Resolve any race conditions or timing issues in the tracking implementation

### 2. Multi-Variate Testing (MVT)

The current page has a simple A/B test on the hero headline. Extend it to a **multi-variate test** that tests combinations of:

- **Hero headline** (2 variants)
- **Primary CTA copy** (2 variants: "Request a Demo" vs. "See It in Action")

This produces 4 combinations (2×2).

**Requirements:**
- [ ] Implement a client-side MVT mechanism with equal traffic distribution across all 4 combinations
- [ ] Each combination must be persistent for the user (same visit = same experience)
- [ ] The full combination ID (e.g., `headline_B-cta_A`) must flow through all tracking events
- [ ] Support query param overrides for QA: `?headline=B&cta=A`
- [ ] Solve the **flicker problem** — users must not see content swap after page load
- [ ] Document: how you'd determine a winner, required sample size assumptions, and what metric you'd optimize for

### 3. Attribution Architecture

The current implementation only captures UTMs at session level. Real attribution is more complex.

**Requirements:**
- [ ] Implement **first-touch attribution**: store the first set of UTMs a user ever brings (persisted in `localStorage`)
- [ ] Implement **last-touch attribution**: store the most recent UTMs (persisted in `sessionStorage`)
- [ ] Both first-touch and last-touch data must be included in the form submission payload
- [ ] Design the **event schema** for all tracking events as if they'll land in a data warehouse (BigQuery / Snowflake). Document the schema in `SOLUTION.md` with:
  - Table / event name
  - Column names and types
  - Example row
- [ ] Handle edge cases: what happens when a user visits with UTMs, leaves, returns via organic?

### 4. Traffic Source Personalization

Different traffic sources bring users with different intent. The page should adapt.

**Requirements:**
- [ ] When `utm_source=linkedin`: show LinkedIn-specific social proof and a headline variant emphasizing the business outcome
- [ ] When `utm_source=google`: show search-intent copy addressing the specific problem, with feature-focused proof points
- [ ] When `utm_source=hubspot` (email nurture): show warmer returning-visitor copy, with a shorter page (hide problem/solution sections, jump to form)
- [ ] For organic/direct traffic: show the default page
- [ ] Personalization must **not conflict** with the MVT — document how they coexist
- [ ] Personalization rules must be **configurable** (not hardcoded if/else chains) — a non-developer should be able to understand the mapping

### 5. Tracking & Measurement

Fix the existing tracking and extend it.

**Requirements:**
- [ ] All events must use a **consistent schema** (same key names, same structure)
- [ ] Every event must include: `timestamp`, `session_id`, `variant_combination`, `first_touch_utm`, `last_touch_utm`, `personalization_segment`
- [ ] Simulate a `page_view` event on load (respecting consent state)
- [ ] Simulate a `form_submit` event with full attribution data
- [ ] Fire `cta_click` events with identifying labels
- [ ] Add `data-track` attributes to all interactive elements
- [ ] Implement **scroll depth tracking** (25%, 50%, 75%, 100%)
- [ ] Use `Intersection Observer` for section visibility tracking

### 6. Documentation (SOLUTION.md)

In `SOLUTION.md`, include:

- **Audit findings** — table of all issues found in the starter code (severity, description, fix applied)
- **Tech decisions** — what you changed architecturally and why
- **Event schema** — warehouse-ready schema with table definitions and example rows
- **MVT architecture** — how the multi-variate test works, how you'd measure results, sample size reasoning
- **Personalization approach** — how personalization and MVT coexist, how rules are configured
- **Attribution model** — how first-touch and last-touch work, edge case handling
- **Performance notes** — what you optimized
- **QA checklist** — verification steps performed
- **Trade-offs** — what you simplified, what you'd do differently in production

---

## Evaluation Criteria

| Criteria | Weight | What We're Looking For |
|---|---|---|
| **Code audit & remediation** | 20% | Did you find the real issues? Are fixes correct? Is the refactored architecture clean? |
| **Experimentation architecture** | 20% | Is the MVT mechanism sound? Anti-flicker solved? Could we add more experiments easily? |
| **Attribution & tracking** | 20% | First-touch / last-touch correct? Event schema warehouse-ready? Consistent and complete? |
| **Personalization** | 15% | Does it work per traffic source? Is the rule system configurable? Does it coexist with MVT? |
| **Code quality & performance** | 15% | Semantic HTML, modular JS, clean CSS, fast load, no CLS, mobile-ready |
| **Documentation & reasoning** | 10% | Clear thinking, honest trade-offs, complete audit, well-structured SOLUTION.md |

### What We're NOT Evaluating

- **Visual design** — we have designers. Structure and UX logic matter, not pixel perfection. **You are free to change the website design if you believe it improves the user experience or conversion goals.** If you do, you must explain your reasoning in the video walkthrough.
- **Backend development** — this is a front-end / growth role.
- **Use of a specific framework** — use whatever makes you productive.

---

## Getting Started

```bash
cd starter/
npm install    # optional — only needed for the dev server
npm run dev    # serves on http://localhost:3000
```

The starter page is static HTML — no build step required. You can also just open `index.html` in a browser.

---

## Submission

1. Push your solution to a **public or private GitHub repository**
2. Include a completed `SOLUTION.md` at the root
3. The project must run locally with a simple command (document it)
4. Record a **short video walkthrough** (5–10 minutes) explaining your solution:
   - Walk through the audit findings and how you prioritized fixes
   - Demo the MVT, personalization, and attribution in action (show the browser + console)
   - Explain your key architectural decisions and trade-offs
   - **If you changed the website design**, explain why — what problem it solves and how it improves the experience or conversion goals
   - You can use Loom, QuickTime, or any screen recording tool — no need to edit
5. Reply to the email with your repo link and video link

---

## Bonus (Optional)

These are not required but will positively differentiate your submission:

- [ ] Deploy to Vercel / Netlify / Cloudflare Pages and share the live URL
- [ ] Simulate a HubSpot form submission payload
- [ ] Generate a `session_id` and persist it for cross-page attribution
- [ ] Implement "returning visitor" detection that adjusts page copy
- [ ] Add a cookie consent banner that properly gates all tracking

---

## Questions?

If anything is unclear, **make a decision and document it** in your `SOLUTION.md`. This is part of the evaluation — we want to see how you handle ambiguity and make trade-offs, just like in the real role.

Good luck.
