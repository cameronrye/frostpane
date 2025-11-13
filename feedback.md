# Frostpane Library Feedback

Based on using frostpane in a project, here are some suggestions to make it better and easier to use.

## 1. Don't Override Color by Default

**Issue**: The `.glass-container` class sets `color: var(--fp-text)` (white by default), which forces users to use `!important` to override it.

**Suggestion**: Let the color inherit from the parent element by default:

```css
.glass-container {
  color: inherit; /* or don't set color at all */
}
```

Users can still set `--fp-text` if they want, but it won't force everyone to fight against it.

## 2. Separate Core Glass Effect from Styling

**Issue**: The library bundles:
- Glass effect (backdrop-filter, blur)
- Layout (flexbox, padding, gap)
- Colors (text, backgrounds)
- Typography (font sizes, weights)
- Spacing utilities

**Suggestion**: Offer a minimal version with just the glass effect:

```css
.glass-container-minimal {
  /* Only the glass effect, no colors/padding/layout */
}
```

This allows users to apply the glass effect without inheriting unwanted styles.

## 3. Better Installation for Web Projects

**Issue**: We had to create a copy script to get the CSS from `node_modules` to `public/`.

**Suggestion**: 
- Provide a CDN link (unpkg, jsdelivr)
- Document how to use with different bundlers (Webpack, Vite, Parcel, etc.)
- Consider publishing to a CSS CDN
- Example:
  ```html
  <link rel="stylesheet" href="https://unpkg.com/frostpane@1.0.0/dist/frostpane.css">
  ```

## 4. Clearer Variable Naming

**Issue**: Variables like `--fp-text`, `--fp-text-primary`, `--fp-text-secondary`, `--fp-text-on-glass`, `--fp-text-muted` are confusing. It's unclear which ones affect the glass effect vs general styling.

**Suggestion**: Make it clearer which variables affect the glass effect vs general styling:

```css
/* Glass-specific */
--fp-glass-bg-color
--fp-glass-blur
--fp-glass-highlight

/* General (optional) */
--fp-content-text-color
--fp-content-padding
```

## 5. Documentation

**Issue**: The minified CSS makes it hard to see what's available and how to use it.

**Suggestion**:
- Provide an unminified version for reference
- Document all CSS variables with examples and default values
- Show common use cases (buttons, cards, modals, navigation)
- Explain the `::before` and `::after` pseudo-element structure
- Include a "Quick Start" guide
- Add a live demo/playground

## 6. Dark Mode Support

**Issue**: The library doesn't have built-in dark mode support.

**Suggestion**: Add dark mode variables:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --fp-bg-color: rgba(0, 0, 0, 0.25); /* darker glass */
    --fp-highlight: rgba(255, 255, 255, 0.1);
  }
}

[data-theme="dark"] {
  --fp-bg-color: rgba(0, 0, 0, 0.25);
  --fp-highlight: rgba(255, 255, 255, 0.1);
}
```

## 7. Simpler Class Names

**Issue**: Having to use both `.glass-container` and `.glass-content` is verbose.

**Suggestion**: Make `.glass-content` optional or provide a single-class option:

```html
<!-- Current (2 classes required) -->
<div class="glass-container">
  <span class="glass-content">Content</span>
</div>

<!-- Simpler (1 class) -->
<div class="glass">Content</div>
```

## 8. Provide Variants

**Suggestion**: Offer pre-configured variants for common use cases:

```css
.glass-button { /* Glass effect optimized for buttons */ }
.glass-card { /* Glass effect optimized for cards */ }
.glass-modal { /* Glass effect optimized for modals */ }
.glass-nav { /* Glass effect optimized for navigation */ }
```

## What's Working Well ✅

- The default glass effect looks great out of the box
- The `rgba(255, 255, 255, 0.25)` default is a good balance
- The backdrop-filter fallback for unsupported browsers
- The utility classes for spacing/typography (if you want them)
- The overall aesthetic is modern and polished

## Summary

**TL;DR**: The core glass effect is excellent, but the library tries to do too much. Consider offering a minimal version that just does the glass effect and lets users handle colors, layout, and typography themselves. This would make it more flexible and easier to integrate into existing design systems.

## Recommended Approach

1. **Core package** (`frostpane-core`): Just the glass effect, minimal opinions
2. **Full package** (`frostpane`): Current version with all utilities
3. **Variants** (`frostpane-components`): Pre-built components (buttons, cards, etc.)

This way, users can choose the level of abstraction they need.