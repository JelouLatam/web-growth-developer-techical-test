# Campaign Brief: Flowbase HR Product Launch

## Campaign Overview

**Product:** Flowbase for HR — an automated onboarding and employee lifecycle platform
**Goal:** Generate demo requests from HR leaders at mid-market companies (200–2,000 employees)
**Campaign name:** `hr-launch-q2-2026`
**Target launch:** Q2 2026

---

## Target Audience

- **Primary:** HR Directors / VP of People at mid-market companies
- **Secondary:** HR Operations Managers, People Ops leads
- **Pain points:**
  - Manual onboarding processes that don't scale
  - Poor visibility into employee lifecycle milestones
  - Disconnected tools (HRIS, payroll, IT provisioning)
  - Compliance risks from inconsistent processes

---

## Messaging Hierarchy

### Primary Message
> Onboard every employee in half the time — with zero dropped steps.

### Supporting Messages
1. **Automation:** Automate onboarding workflows across HR, IT, and payroll in one place
2. **Visibility:** Real-time dashboards showing every employee's journey stage
3. **Compliance:** Built-in compliance checks that adapt to your region and role type
4. **Integration:** Connects with your existing HRIS, Slack, Google Workspace, and 50+ tools

### Social Proof
- "We reduced onboarding time from 3 weeks to 4 days" — VP People, TechScale (400 employees)
- "Finally, one place to see where every new hire is in their journey" — HR Director, GrowthOps
- "The compliance automation alone saved us 20 hours per month" — People Ops Manager, ScaleUp Inc
- Trusted by 200+ mid-market companies

---

## Page Structure (Suggested)

This is a guide, not a wireframe. Use your judgment.

1. **Hero** — Headline, subheadline, primary CTA (Request a Demo), optional hero image/illustration
2. **Pain / Problem** — Speak to the audience's current frustration
3. **Solution Overview** — How Flowbase solves it (visual or feature grid)
4. **Social Proof** — Testimonials and/or logos
5. **How It Works** — 3-step process or visual flow
6. **CTA Section** — Repeat the demo request form or CTA
7. **Footer** — Legal, company links

---

## Conversion Goal

**Primary CTA:** "Request a Demo" form
**Form fields:**
- Full name (required)
- Work email (required, must be company email — reject `gmail.com`, `hotmail.com`, etc.)
- Company size (required, dropdown: 1–50, 51–200, 201–500, 501–2000, 2000+)

**On success:** Show a confirmation message (no redirect needed). Fire conversion tracking event.

---

## Traffic Sources & Attribution

This page will receive traffic from multiple paid and organic channels. We've noticed that **users often discover us on one channel and convert on another** — for example, they see a LinkedIn ad, leave, then come back via a Google search days later. Understanding both the first and last touchpoint is critical for budget allocation.

### Channels

| Channel | UTM Parameters | Visitor Intent |
|---|---|---|
| Google Ads (search + display) | `utm_source=google&utm_medium=cpc` | High intent — actively searching for onboarding solutions. Respond well to feature-specific copy and direct problem/solution framing. |
| LinkedIn Ads | `utm_source=linkedin&utm_medium=paid_social` | Mid-funnel — aware of the problem but not actively shopping. Respond well to peer proof (testimonials from similar roles) and business outcome messaging. |
| Email nurture (HubSpot) | `utm_source=hubspot&utm_medium=email` | Already in our funnel — they know who we are. They don't need the full pitch. Shorter page, warmer tone, go straight to the demo ask. |
| Organic / Direct | No UTMs | Mixed intent — could be referrals, repeat visitors, or brand searches. Show the default full experience. |

All UTM parameters must be captured, persisted, and submitted with the form. We need **both** first-touch and last-touch attribution data in every form submission so the analytics team can model attribution properly.

### Personalization Notes from Demand Gen

> "We've been sending the same page to everyone and our LinkedIn CPL is 3× higher than Google. I think it's because the page doesn't speak to LinkedIn visitors the way it should. They need social proof from peers — not a feature list. Meanwhile, Google visitors are further down the funnel; they want specifics. And our email nurture contacts already know the product — showing them the entire pitch from scratch feels tone-deaf. Can we tailor the experience?"
>
> — Jamie, Demand Gen Manager

**What this means for the page:**
- **LinkedIn visitors** should see testimonials prominently and outcome-driven headlines
- **Google visitors** should see feature-focused content and search-intent copy (e.g., "Looking for onboarding automation?")
- **Email nurture visitors** should see a streamlined page — skip the education, go straight to the ask
- **Organic/direct** visitors get the full default experience

How you implement this is up to you, but the rules should be easy to understand and modify without deep code changes.

---

## Brand Guidelines (Simplified)

- **Primary color:** `#2563EB` (blue)
- **Secondary color:** `#0F172A` (dark navy)
- **Accent color:** `#10B981` (green, for CTAs and success states)
- **Background:** `#FFFFFF` (white) with `#F8FAFC` (light gray) alternating sections
- **Font:** Use any clean sans-serif (Inter, DM Sans, or system fonts)
- **Tone:** Professional but approachable. Not corporate jargon. Clear and direct.

---

## Technical Requirements (from Demand Gen)

- Page must load fast — many users are on LinkedIn mobile
- Must handle UTM parameters from all sources above (capture, persist, attribute)
- Form must validate company email (no personal emails)
- All CTAs and form submissions must fire tracking events
- We need to test **multiple elements simultaneously** — the hero headline and the CTA button copy at minimum. Prepare for a multi-variate test, not just A/B.
- Events should be structured so they can land in our data warehouse without transformation
- The page will be reviewed by the Lifecycle team for HubSpot compatibility
- We need to understand which traffic source combinations drive the most conversions — attribution matters

---

## Assets

You may use placeholder images. Suggested resources:
- Illustrations: use any free illustration library or simple SVGs
- Logos (social proof): use placeholder gray boxes
- Icons: use any icon library (Lucide, Heroicons, etc.)
