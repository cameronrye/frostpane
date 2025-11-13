# Frostpane

A customizable frosted glass effect CSS library with extensive customization options through CSS custom properties. Create stunning glassmorphic UI components with backdrop blur, transparency, and smooth animations.

**[View Demo](https://cameronrye.github.io/frostpane)** | **[Full Documentation](https://github.com/cameronrye/frostpane)**

## Features

- **Highly Customizable** - 30+ CSS custom properties for complete control
- **Dark Mode Built-in** - Automatic dark mode support via `prefers-color-scheme`
- **Multiple APIs** - Choose between verbose or concise class syntax
- **Core & Full Versions** - Use minimal core or full version with utilities
- **Component Variants** - Pre-built variants for cards, modals, navigation, and more
- **Zero Dependencies** - Pure CSS/SCSS implementation
- **Framework Agnostic** - Works with any JavaScript framework or vanilla HTML
- **Accessible** - Respects `prefers-reduced-motion`

## Installation

### Option 1: CDN (Quickest)

```html
<!-- Full version (minified) -->
<link rel="stylesheet" href="https://unpkg.com/frostpane@1.1.0/dist/frostpane.css">

<!-- Core version (minimal, just glass effect) -->
<link rel="stylesheet" href="https://unpkg.com/frostpane@1.1.0/dist/frostpane-core.css">

<!-- Unminified (for reference) -->
<link rel="stylesheet" href="https://unpkg.com/frostpane@1.1.0/dist/frostpane.unminified.css">

<!-- Or use jsdelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/frostpane@1.1.0/dist/frostpane.css">
```

### Option 2: npm

```bash
npm install frostpane
```

### Option 3: Bundler Integration

**Vite / Webpack / Parcel:**
```javascript
// Full version
import 'frostpane/css';

// Core version (minimal)
import 'frostpane/css/core';

// SCSS source (for customization)
import 'frostpane/scss';
import 'frostpane/scss/core';
```

**Next.js:**
```javascript
// pages/_app.js
import 'frostpane/css';
```

## Quick Start

### Simple API (Single Class)

The easiest way to use Frostpane:

```html
<div class="glass">
  Your content here
</div>

<!-- With modifiers -->
<div class="glass glass--rounded glass--large">
  Rounded, large glass effect
</div>
```

### Verbose API (Two Classes)

For more control over content layout:

```html
<div class="glass-container">
  <div class="glass-content">
    Your content here
  </div>
</div>

<!-- With modifiers -->
<div class="glass-container glass-container--rounded">
  <div class="glass-content">
    Rounded glass effect
  </div>
</div>
```

### Component Variants

Pre-configured variants for common use cases:

```html
<!-- Card -->
<div class="glass-card">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>

<!-- Modal -->
<div class="glass-modal">
  <h2>Modal Title</h2>
  <p>Modal content</p>
</div>

<!-- Navigation -->
<nav class="glass-nav">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>

<!-- Panel -->
<div class="glass-panel">
  <p>Panel content</p>
</div>
```

## Choosing the Right Version

### Full Version (Recommended for most users)

Includes glass effect + utility classes for spacing, typography, colors, and form components.

```javascript
import 'frostpane/css';
```

**Size:** ~15KB minified

### Core Version (Minimal)

Only the glass effect and component variants. Perfect if you have your own design system and just want the glass effect.

```javascript
import 'frostpane/css/core';
```

**Size:** ~8KB minified

**What's included in Core:**

- Glass effect (`.glass-container`, `.glass-content`, `.glass`)
- Component variants (`.glass-card`, `.glass-modal`, `.glass-nav`, `.glass-panel`)
- Dark mode support
- Accessibility features

**Not included in Core:**

- Utility classes (spacing, typography, colors)
- Form components (`.glass-input`, `.glass-button`)

## Customization

### CSS Custom Properties

Frostpane is fully customizable using CSS custom properties. Override any of these to create your own unique glass effects.

#### Glass Effect Variables

```css
/* Glass background and effects */
--fp-glass-bg: rgba(255, 255, 255, 0.25);
--fp-glass-highlight: rgba(255, 255, 255, 0.75);
--fp-glass-blur: 4px;

/* Glass border radius */
--fp-glass-border-radius: 2rem;
--fp-glass-border-radius-rounded: 3rem;
--fp-glass-border-radius-small: 0.5rem;

/* Glass shadows */
--fp-glass-shadow-color-primary: rgba(0, 0, 0, 0.2);
--fp-glass-shadow-color-secondary: rgba(0, 0, 0, 0.1);
--fp-glass-shadow-blur-primary: 6px;
--fp-glass-shadow-blur-secondary: 20px;
--fp-glass-shadow-offset-x: 0;
--fp-glass-shadow-offset-y: 6px;

/* Glass filter effects */
--fp-glass-saturate: 120%;
--fp-glass-brightness: 1.15;

/* Glass inset highlights */
--fp-glass-inset-highlight-offset: 1px;
--fp-glass-inset-highlight-blur: 0;
--fp-glass-inset-glow-blur: 5px;
```

#### Content & Utility Variables (Full version only)

```css
/* Content colors */
--fp-content-text: #ffffff;
--fp-content-text-secondary: rgba(255, 255, 255, 0.85);
--fp-content-text-muted: rgba(0, 0, 0, 0.6);

/* Accent colors */
--fp-accent-primary: #fb4268;
--fp-accent-secondary: #444739;

/* Content spacing */
--fp-content-padding-x: 1.5rem;
--fp-content-padding-y: 0.5rem;
--fp-content-gap: 1rem;

/* Transitions */
--fp-transition-duration: 0.4s;
--fp-transition-timing: cubic-bezier(0.4, 0.0, 0.2, 1);
```

### Customization Examples

#### Example 1: Dark Glass Effect

```css
.dark-glass {
  --fp-glass-bg: rgba(0, 0, 0, 0.4);
  --fp-glass-highlight: rgba(255, 255, 255, 0.3);
  --fp-glass-blur: 8px;
}
```

```html
<div class="glass dark-glass">
  Dark glass effect
</div>
```

#### Example 2: Stronger Blur

```css
.strong-blur {
  --fp-glass-blur: 12px;
  --fp-glass-saturate: 150%;
}
```

#### Example 3: Elevated Card

```css
.elevated {
  --fp-glass-shadow-offset-y: 12px;
  --fp-glass-shadow-blur-primary: 12px;
  --fp-glass-shadow-blur-secondary: 30px;
}
```

#### Example 4: Inline Styles

```html
<div class="glass" style="--fp-glass-blur: 8px; --fp-glass-bg: rgba(0, 0, 0, 0.3);">
  Custom glass effect
</div>
```

## Dark Mode

Frostpane includes built-in dark mode support that automatically adapts to the user's system preference.

### Automatic Dark Mode

Dark mode is automatically applied based on the user's system preference:

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode variables are automatically applied */
}
```

### Manual Dark Mode

You can also manually control dark mode using the `data-theme` attribute:

```html
<!-- Force dark theme -->
<html data-theme="dark">
  <!-- Your content -->
</html>

<!-- Force light theme -->
<html data-theme="light">
  <!-- Your content -->
</html>
```

### JavaScript Toggle

```javascript
// Toggle dark mode
const toggleDarkMode = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
};
```

## Optional SVG Filter

For the lens distortion effect (used in the icon dock example), add this SVG to your HTML:

```html
<svg style="position: absolute; width: 0; height: 0;">
  <defs>
    <filter id="lensFilter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
    </filter>
  </defs>
</svg>
```

This filter is optional and only needed if you want the lens distortion effect on hover.

## Available Classes

### Simple API

- `.glass`: Single-class glass effect
- `.glass--rounded`: Rounded corners
- `.glass--small`: Small padding
- `.glass--large`: Large padding

### Verbose API

- `.glass-container`: Base glass container
- `.glass-container--rounded`: Rounded corners variant
- `.glass-container--large`: Large size variant
- `.glass-container--medium`: Medium size variant
- `.glass-container--small`: Small size variant
- `.glass-content`: Content wrapper (required inside glass-container)

### Component Variants

- `.glass-card`: Card variant (vertical layout, optimized for content cards)
- `.glass-modal`: Modal variant (stronger effect, centered content)
- `.glass-nav`: Navigation variant (subtle effect, horizontal layout)
- `.glass-panel`: Panel variant (very subtle background)

### Form Components (Full version only)

- `.glass-input`: Styled input field with glass effect
- `.glass-button`: Primary button with glass styling
- `.glass-button--secondary`: Secondary button variant
- `.glass-button--outline`: Outline button variant

### Utility Classes (Full version only)

- `.interactive-scale`: Standard interactive scale animation
- `.interactive-scale--fast`: Fast scale animation
- `.interactive-scale--slow`: Slow scale animation
- Plus many spacing, typography, and color utilities

## Form Components Usage

### Glass Input

```html
<input type="text" class="glass-input" placeholder="Enter text...">
```

### Glass Buttons

```html
<!-- Primary button -->
<button class="glass-button">Click Me</button>

<!-- Secondary button -->
<button class="glass-button glass-button--secondary">Secondary</button>

<!-- Outline button -->
<button class="glass-button glass-button--outline">Outline</button>

<!-- Disabled button -->
<button class="glass-button" disabled>Disabled</button>
```

## License

MIT

---

Made with ❤️ by Cameron Rye

