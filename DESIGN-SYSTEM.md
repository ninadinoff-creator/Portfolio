# Portfolio Design System

Design system rules for the HTML case study pages in this portfolio. All pages link to the shared `styles.css` file.

---

## Shared Stylesheet

All pages must include:
```html
<link rel="stylesheet" href="styles.css">
```
Do not use inline `<style>` blocks. All shared styles live in `styles.css`.

---

## Typography

### Fonts
- **Headlines:** `'Sorts Mill Goudy', Georgia, serif` — weight `400` (Regular). Never use bold/700/900.
- **Body:** `'Inter', sans-serif` — weights 300, 400, 500, 600
- Sorts Mill Goudy is a variable font with an `opsz` axis. The full axis range is imported in `styles.css`.

### Type Scale
| Element            | Font     | Size                        | Weight | Line Height |
|--------------------|----------|-----------------------------|--------|-------------|
| Hero h1            | Sorts Mill Goudy | `clamp(40px, 5vw, 64px)`   | 400    | 1.1         |
| Section h2         | Sorts Mill Goudy | `clamp(28px, 3.5vw, 44px)` | 400    | 1.15        |
| Stat number        | Sorts Mill Goudy | 42px                        | 400    | 1           |
| Body / subtitle    | Inter    | 16–18px                     | 400    | 1.7–1.75    |
| Section labels     | Inter    | 12px                        | 600    | —           |
| Meta bar labels    | Inter    | 11px                        | 600    | —           |
| Meta bar values    | Inter    | 14px                        | 400    | 1.5         |

### Labels / Eyebrows
- All caps, letter-spacing `2px`, font-weight `600`, color teal
- `::after` pseudo-element draws a 1px teal line to fill remaining width

---

## Colors

### Brand Palette
| Token       | Hex       | Usage                                  |
|-------------|-----------|----------------------------------------|
| Teal        | `#1a9e8f` | Labels, accents, stat numbers, eyebrow lines |
| Purple      | `#7c4dff` | Pillar accent (Clarify Customization)  |
| Amber       | `#f59e0b` | Pillar accent (Simplify Pricing)       |

### Dark Surfaces
| Token       | Hex       | Usage                                  |
|-------------|-----------|----------------------------------------|
| Near-black  | `#0a0a0a` | Hero background, before/after card bg  |
| Dark gray   | `#1a1a1a` | Phone showcase panel bg                |
| Border      | `#333333` | Hero meta divider, iPhone frame border |

### Light Surfaces
| Token       | Hex       | Usage                                  |
|-------------|-----------|----------------------------------------|
| White       | `#ffffff` | Page background                        |
| Off-white   | `#f8f8f8` | Tradeoff callout background            |
| Body text   | `#555555` | Paragraphs                             |
| Muted       | `#888888` | Stat descriptions, BA labels           |
| Light muted | `#999999` | Captions, notes, results-note          |
| Dividers    | `#e0e0e0` | Vertical column dividers, results grid border |
| Light divider| `#e8e8e8`| Section divider `<hr>`                 |

---

## Layout

### Content Container
- Max-width: `1200px`, centered with `margin: 0 auto`
- Desktop padding: `60px`
- Mobile (≤768px) padding: `28px` horizontal, `40px` vertical

### Section Structure
Every section follows: **eyebrow → headline → content**
- Eyebrow: `.section-label` (teal uppercase with line)
- Headline: `<h2>` spans full width above any columns
- Content: body text, columns, images, etc.

---

## Page Patterns

### Hero
Two-column grid inside a full-width black bar:
- Left: `.label` eyebrow, `<h1>`, `.subtitle`, `.meta-bar` (2×2 grid)
- Right: `.iphone-frame` with `<video>` (or `<img>`)
- Collapses to single column on mobile

```html
<div class="hero">
  <div class="hero-inner">
    <div class="hero-text">...</div>
    <div class="hero-phone">
      <div class="iphone-frame">
        <video src="..." autoplay loop muted playsinline></video>
      </div>
    </div>
  </div>
</div>
```

### Challenge Section
Eyebrow + headline, then `.two-col` (2fr / 1fr with vertical divider):
- Left: body paragraphs
- Right: `.stats` (vertically stacked stat numbers)

```html
<section>
  <div class="section-label">The Challenge</div>
  <h2>...</h2>
  <div class="two-col">
    <div><p>...</p></div>
    <div><div class="stats">...</div></div>
  </div>
</section>
```

### Phone Showcase
Dark rounded panel with 3 phone screenshots side by side:

```html
<div class="phone-showcase">
  <div class="phone-showcase-inner">
    <div class="phone-showcase-grid">
      <div class="phone-showcase-item">
        <img src="..." alt="...">
        <div class="phone-label">Label</div>
      </div>
      <!-- repeat -->
    </div>
  </div>
</div>
```

### Before/After Section (Cart, Order Summary, Checkout)
Eyebrow "What Changed" + headline, then `.two-col.equal`:
- Left: `.ba-card` (black background, 2-column grid with Before/After images)
- Right: body text + `.tradeoff` callout (64px gap between them)

```html
<section>
  <div class="section-label">What Changed</div>
  <h2>Cart</h2>
  <div class="two-col equal">
    <div>
      <div class="ba-card">
        <div class="ba-col">
          <div class="ba-label">Before</div>
          <img src="..." alt="...">
        </div>
        <div class="ba-col">
          <div class="ba-label">After</div>
          <img src="..." alt="...">
        </div>
      </div>
    </div>
    <div>
      <p>...</p>
      <div class="tradeoff">
        <div class="tradeoff-label">...</div>
        <p>...</p>
      </div>
    </div>
  </div>
</section>
```

### Pillars (3-column)
Three equal columns with colored bottom borders:

```html
<div class="pillars">
  <div class="pillar pillar-ux"><h3>...</h3><p>...</p></div>
  <div class="pillar pillar-pricing"><h3>...</h3><p>...</p></div>
  <div class="pillar pillar-custom"><h3>...</h3><p>...</p></div>
</div>
```

### Results Grid
3-column grid with vertical dividers, stats stacked within columns:

```html
<div class="results-grid">
  <div class="results-col">
    <div class="stat">...</div>
    <div class="results-note">...</div>
  </div>
  <div class="results-col">
    <div class="stat">...</div>
    <div class="stat">...</div>
  </div>
  <div class="results-col">
    <div class="stat">...</div>
    <div class="stat">...</div>
  </div>
</div>
```

### Section Divider
Light horizontal line between sections:

```html
<div class="section-divider"><hr></div>
```

### Reflection
Uses `<section class="reflection">` — inherits section styles, `p` max-width capped at 640px.

---

## Image Assets

Images are organized by case study in `images/` subfolders:
- `images/Cart/` — cart1.png, cart2.png, checkout1.png, checkout2.png, order_summary1.png, order_summary2.png, challenge1-3.png, approach_timeline.png
- Videos in `videos/`

---

## Pages

| File                                   | Content                  |
|----------------------------------------|--------------------------|
| `01-upper-funnel-marketing-pages.html` | Upper funnel case study  |
| `02-mid-funnel-consultation.html`      | Mid funnel case study    |
| `03-lower-funnel-cart-checkout.html`   | Lower funnel case study  |
| `04-future-vision-routine-cart.html`   | Future vision case study |
