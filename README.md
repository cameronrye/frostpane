# Glass Effect Customization Guide

This document explains how to customize the parameterized glass effect system using CSS custom properties.

## Overview

All hard-coded values have been replaced with CSS custom properties (CSS variables), making the glass effect highly configurable and reusable.

## Available Custom Properties

### Color Variables
```css
--lg-bg-color: rgba(255, 255, 255, 0.25);      /* Glass background tint */
--lg-highlight: rgba(255, 255, 255, 0.75);     /* Glass highlight/specular color */
--lg-text: #ffffff;                             /* Text color */
--lg-red: #fb4268;                              /* Accent color (red) */
--lg-grey: #444739;                             /* Secondary text color */
```

### Border Radius
```css
--lg-border-radius: 2rem;                       /* Default border radius */
--lg-border-radius-rounded: 3rem;               /* Rounded variant */
--lg-border-radius-small: 0.5rem;               /* Small elements */
```

### Shadows
```css
--lg-shadow-color-primary: rgba(0, 0, 0, 0.2);  /* Primary shadow color */
--lg-shadow-color-secondary: rgba(0, 0, 0, 0.1);/* Secondary shadow color */
--lg-shadow-blur-primary: 6px;                  /* Primary shadow blur */
--lg-shadow-blur-secondary: 20px;               /* Secondary shadow blur */
--lg-shadow-offset-x: 0;                        /* Horizontal shadow offset */
--lg-shadow-offset-y: 6px;                      /* Vertical shadow offset */
```

### Backdrop Filter
```css
--lg-backdrop-blur: 4px;                        /* Backdrop blur amount */
```

### Filter Effects
```css
--lg-filter-saturate: 120%;                     /* Color saturation */
--lg-filter-brightness: 1.15;                   /* Brightness adjustment */
```

### Inset Highlights
```css
--lg-inset-highlight-offset: 1px;               /* Highlight position offset */
--lg-inset-highlight-blur: 0;                   /* Highlight blur amount */
--lg-inset-glow-blur: 5px;                      /* Inner glow blur */
```

### Transitions
```css
--lg-transition-duration: 0.4s;                 /* Main transition duration */
--lg-transition-timing: cubic-bezier(0.175, 0.885, 0.32, 2.2); /* Timing function */
--lg-transition-fast: 0.2s;                     /* Fast interactions */
--lg-transition-medium: 0.25s;                  /* Medium interactions */
--lg-transition-slow: 0.3s;                     /* Slow interactions */
```

### Content Spacing
```css
--lg-content-padding-x: 28px;                   /* Horizontal padding */
--lg-content-padding-y: 12px;                   /* Vertical padding */
--lg-content-gap: 1rem;                         /* Gap between elements */
```

### Interactive Elements
```css
--lg-hover-scale: 1.1;                          /* Scale on hover */
--lg-active-scale: 0.95;                        /* Scale on active/click */
```

## Usage Examples

### Example 1: Create a Darker Glass Effect
```css
.dark-glass {
  --lg-bg-color: rgba(0, 0, 0, 0.4);
  --lg-highlight: rgba(255, 255, 255, 0.3);
  --lg-backdrop-blur: 8px;
}
```

### Example 2: Increase Blur for Stronger Effect
```css
.strong-blur {
  --lg-backdrop-blur: 12px;
  --lg-filter-saturate: 150%;
}
```

### Example 3: Customize Shadows
```css
.elevated-glass {
  --lg-shadow-offset-y: 12px;
  --lg-shadow-blur-primary: 12px;
  --lg-shadow-blur-secondary: 30px;
}
```

### Example 4: Faster Animations
```css
.snappy-glass {
  --lg-transition-duration: 0.2s;
  --lg-transition-timing: ease-out;
}
```

### Example 5: Larger Border Radius
```css
.pill-glass {
  --lg-border-radius: 50px;
}
```

## How to Apply Custom Values

### Method 1: Override in HTML
```html
<div class="glass-container" style="--lg-backdrop-blur: 8px; --lg-bg-color: rgba(0, 0, 0, 0.3);">
  <!-- content -->
</div>
```

### Method 2: Create Custom Classes
```css
.glass-container.custom-variant {
  --lg-backdrop-blur: 8px;
  --lg-bg-color: rgba(0, 0, 0, 0.3);
}
```

### Method 3: Override at Root Level
```css
:root {
  --lg-backdrop-blur: 8px;
  --lg-bg-color: rgba(0, 0, 0, 0.3);
}
```

## Benefits

1. **Easy Customization**: Change values without modifying the core CSS
2. **Consistency**: Use the same variables across multiple components
3. **Theming**: Create multiple themes by overriding variables
4. **Maintainability**: Update values in one place
5. **Performance**: Specific transition properties prevent unnecessary recalculations
6. **Flexibility**: Mix and match properties for different effects

