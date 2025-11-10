# Frostpane

A customizable frosted glass effect CSS library with extensive customization options through CSS custom properties.

## Installation

```bash
npm install @frostpane/core
```

## Usage

### Using the compiled CSS

```html
<link rel="stylesheet" href="node_modules/@frostpane/core/dist/frostpane.css">
```

Or import in your JavaScript/CSS:

```javascript
import '@frostpane/core/css';
```

### Using the SCSS source

```scss
@import '@frostpane/core/scss';
```

### Basic HTML Structure

```html
<div class="glass-container">
  <div class="glass-content">
    Your content here
  </div>
</div>
```

### With Modifiers

```html
<div class="glass-container glass-container--rounded">
  <div class="glass-content">
    Rounded glass effect
  </div>
</div>
```

## Optional SVG Filter

For the lens distortion effect, include this SVG filter in your HTML:

```html
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <filter id="lensFilter">
    <feComponentTransfer in="SourceAlpha" result="alpha">
      <feFuncA type="identity" />
    </feComponentTransfer>
    <feGaussianBlur in="alpha" stdDeviation="50" result="blur" />
    <feDisplacementMap in="SourceGraphic" in2="blur" scale="50"
                       xChannelSelector="A" yChannelSelector="A" />
  </filter>
</svg>
```

## Customization

All aspects of the glass effect can be customized using CSS custom properties:

```css
.my-custom-glass {
  --fp-backdrop-blur: 8px;
  --fp-bg-color: rgba(0, 0, 0, 0.3);
  --fp-border-radius: 1rem;
}
```

### Available CSS Custom Properties

#### Colors
- `--fp-bg-color`: Glass background tint (default: `rgba(255, 255, 255, 0.25)`)
- `--fp-highlight`: Glass highlight/specular color (default: `rgba(255, 255, 255, 0.75)`)
- `--fp-text`: Text color (default: `#ffffff`)
- `--fp-red`: Accent color (default: `#fb4268`)
- `--fp-grey`: Secondary text color (default: `#444739`)

#### Border Radius
- `--fp-border-radius`: Default border radius (default: `2rem`)
- `--fp-border-radius-rounded`: Rounded variant (default: `3rem`)
- `--fp-border-radius-small`: Small elements (default: `0.5rem`)

#### Shadows
- `--fp-shadow-color-primary`: Primary shadow color (default: `rgba(0, 0, 0, 0.2)`)
- `--fp-shadow-color-secondary`: Secondary shadow color (default: `rgba(0, 0, 0, 0.1)`)
- `--fp-shadow-blur-primary`: Primary shadow blur (default: `6px`)
- `--fp-shadow-blur-secondary`: Secondary shadow blur (default: `20px`)
- `--fp-shadow-offset-x`: Horizontal shadow offset (default: `0`)
- `--fp-shadow-offset-y`: Vertical shadow offset (default: `6px`)

#### Effects
- `--fp-backdrop-blur`: Backdrop blur amount (default: `4px`)
- `--fp-filter-saturate`: Color saturation (default: `120%`)
- `--fp-filter-brightness`: Brightness adjustment (default: `1.15`)

#### Transitions
- `--fp-transition-duration`: Main transition duration (default: `0.4s`)
- `--fp-transition-timing`: Timing function (default: `cubic-bezier(0.175, 0.885, 0.32, 2.2)`)
- `--fp-transition-fast`: Fast interactions (default: `0.2s`)
- `--fp-transition-medium`: Medium interactions (default: `0.25s`)
- `--fp-transition-slow`: Slow interactions (default: `0.3s`)

#### Interactive
- `--fp-hover-scale`: Scale on hover (default: `1.1`)
- `--fp-active-scale`: Scale on active/click (default: `0.95`)

## Available Classes

### Container Classes
- `.glass-container`: Base glass container
- `.glass-container--rounded`: Rounded corners variant
- `.glass-container--large`: Large size variant
- `.glass-container--medium`: Medium size variant
- `.glass-container--small`: Small size variant

### Content Classes
- `.glass-content`: Content wrapper (required inside glass-container)
- `.glass-content--alone`: Single item content
- `.glass-content__link`: Interactive link with hover effects

### Item Classes
- `.glass-item`: Individual item within glass content
- `.glass-item--active`: Active state for items

### Utility Classes
- `.interactive-scale`: Standard interactive scale animation
- `.interactive-scale--fast`: Fast scale animation
- `.interactive-scale--slow`: Slow scale animation

## License

MIT

