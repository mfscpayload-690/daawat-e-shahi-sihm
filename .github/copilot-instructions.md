# Copilot Instructions for Daawat-e-Shahi

## Project Overview

A static single-page menu website showcasing Mughal cuisine for SIHM Kozhikode. Pure HTML/CSS/JS with no build tools or frameworks.

**Project status:** Archived (no active live deployment)

## Architecture

```
index.html      → Single-page structure with semantic sections
styles.css      → All styling with CSS custom properties
script.js       → Scroll animations, parallax, hover effects
assets/         → Favicons and PWA manifest
```

## Design System (Critical)

### Color Palette - Use CSS Variables Only
```css
--color-primary: #8B0000;    /* Deep burgundy - headers, accents */
--color-secondary: #DAA520;  /* Royal gold - highlights, links */
--color-accent: #2C1810;     /* Deep brown - text emphasis */
--color-bg-main: #FFF8F0;    /* Warm ivory - page background */
```

### Typography Hierarchy
- **Display** (`--font-display`): Playfair Display - main titles, section headers
- **Elegant** (`--font-elegant`): Cormorant Garamond - dish names, subtitles
- **Body** (`--font-body`): Inter - descriptions, footer text

### Spacing Scale
Use `--spacing-{xs|sm|md|lg|xl|xxl}` (0.5rem to 4rem). Never use arbitrary pixel values.

## HTML Patterns

### Menu Section Structure
```html
<section class="menu-section" data-section="category-name">
    <div class="section-header">
        <div class="divider-line"></div>
        <h2 class="section-title">Section Name</h2>
        <div class="divider-line"></div>
    </div>
    <div class="menu-items">
        <div class="menu-item">
            <h3 class="dish-name">Dish Name</h3>
            <p class="dish-description">Description text.</p>
        </div>
    </div>
</section>
```

### Subsections (for Starters)
Wrap grouped items in `<div class="subsection">` with `<h3 class="subsection-title">`.

## CSS Conventions

- Sections use staggered `animation-delay` (0.1s increments) for `fadeInUp`
- Hover states include `translateX(8px)` shift and golden box-shadow
- Decorative elements use `::before`/`::after` pseudo-elements with `◆` or `❖` symbols
- Mobile breakpoints: 768px (tablet), 480px (mobile), 360px (small mobile)

## JavaScript Features

- **Intersection Observer**: Triggers fade-in when sections enter viewport
- **Parallax**: Header moves at 0.5x scroll speed with opacity fade
- **Keyboard shortcut**: Press `H` to scroll to top
- **Font preloading**: Adds `.fonts-loaded` class when ready

## Deployment

No active deployment. This repository is maintained as an archived static reference project.

## When Adding New Menu Items

1. Add `<div class="menu-item">` inside appropriate `.menu-items` container
2. Follow existing dish name/description pattern
3. If creating new section, increment `animation-delay` from previous section
