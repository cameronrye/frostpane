<div align="center">
  <img src="packages/example/public/logo.svg" alt="Frostpane Logo" width="400">
</div>

<br>

A customizable, modern CSS/SCSS library for creating beautiful frosted glass effects with backdrop blur, highlights, and smooth animations. Perfect for creating frosted glass UI components with macOS-style aesthetics.

## ✨ Features

- 🎨 **Highly Customizable** - 30+ CSS custom properties for complete control
- 🔧 **Framework Agnostic** - Works with any JavaScript framework or vanilla HTML
- 📦 **Multiple Import Options** - Use SCSS source or compiled CSS
- 🎭 **Built-in Variants** - Rounded corners, different sizes, and more
- ⚡ **Performance Optimized** - Efficient transitions and GPU-accelerated effects
- 🎯 **Zero Dependencies** - Pure CSS/SCSS implementation
- 📱 **Responsive** - Works seamlessly across all screen sizes

## 🚀 Quick Start

### For Users (Using the Library)

#### Installation

```bash
npm install @frostpane/core
```

#### Basic Usage

**Option 1: Import SCSS (Recommended for customization)**

```javascript
import '@frostpane/core/scss';
```

**Option 2: Import Compiled CSS**

```javascript
import '@frostpane/core/css';
```

**Option 3: Link in HTML**

```html
<link rel="stylesheet" href="node_modules/@frostpane/core/dist/frostpane.css">
```

#### HTML Structure

```html
<div class="glass-container">
  <div class="glass-content">
    Your content here
  </div>
</div>
```

#### With Modifiers

```html
<!-- Rounded corners -->
<div class="glass-container glass-container--rounded">
  <div class="glass-content">Rounded glass effect</div>
</div>

<!-- Small size -->
<div class="glass-container glass-container--small">
  <div class="glass-content">Small glass element</div>
</div>
```

## 🛠️ Development (For Contributors)

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (v7 or higher for workspace support)

### Setup

```bash
# Clone the repository
git clone https://github.com/cameronrye/frostpane.git
cd frostpane

# Install all dependencies
npm install
```

### Development Workflow

```bash
# Start the development server (runs example site)
npm run dev
```

Open http://localhost:5173 in your browser. Changes to the library or example site will hot-reload automatically.

### Making Changes

**To modify the library:**
- Edit `packages/frostpane/src/frostpane.scss`
- Changes automatically reload in the example site (no rebuild needed)

**To modify the example site:**
- Edit `packages/example/index.html` or other example files
- Changes automatically reload in the browser

### Building

```bash
# Build all packages
npm run build

# Build only the library
npm run build:lib

# Build only the example site
npm run build:example

# Preview the built example site
npm run preview
```

## 📁 Project Structure

This is a monorepo using npm workspaces with two packages:

```
frostpane/
├── packages/
│   ├── frostpane/             # @frostpane/core - The publishable library
│   │   ├── src/
│   │   │   └── frostpane.scss
│   │   ├── dist/
│   │   │   └── frostpane.css
│   │   ├── package.json
│   │   └── README.md
│   └── example/               # @frostpane/example - Example site
│       ├── index.html
│       ├── main.js
│       ├── vite.config.js
│       ├── package.json
│       └── README.md
├── package.json               # Root workspace configuration
└── README.md                  # This file
```

### Package Overview

- **@frostpane/core** - The standalone, publishable CSS/SCSS library
- **@frostpane/example** - Example site that showcases the library (private, not published)

The example package depends on the core library via workspace reference, demonstrating real-world usage.

## 📚 Usage Examples

### Custom Blur Effect

```html
<div class="glass-container" style="--fp-backdrop-blur: 12px;">
  <div class="glass-content">
    Stronger blur effect
  </div>
</div>
```

### Dark Glass Theme

```css
.dark-glass {
  --fp-bg-color: rgba(0, 0, 0, 0.4);
  --fp-highlight: rgba(255, 255, 255, 0.3);
  --fp-backdrop-blur: 8px;
}
```

### Elevated Card

```css
.elevated-glass {
  --fp-shadow-offset-y: 12px;
  --fp-shadow-blur-primary: 12px;
  --fp-shadow-blur-secondary: 30px;
}
```

---

## 🎨 Customization Guide

The glass effect is fully customizable using CSS custom properties (CSS variables). Override any of these properties to create your own unique glass effects.

### Available Custom Properties

### Color Variables
```css
--fp-bg-color: rgba(255, 255, 255, 0.25);      /* Glass background tint */
--fp-highlight: rgba(255, 255, 255, 0.75);     /* Glass highlight/specular color */
--fp-text: #ffffff;                             /* Text color */
--fp-red: #fb4268;                              /* Accent color (red) */
--fp-grey: #444739;                             /* Secondary text color */
```

### Border Radius
```css
--fp-border-radius: 2rem;                       /* Default border radius */
--fp-border-radius-rounded: 3rem;               /* Rounded variant */
--fp-border-radius-small: 0.5rem;               /* Small elements */
```

### Shadows
```css
--fp-shadow-color-primary: rgba(0, 0, 0, 0.2);  /* Primary shadow color */
--fp-shadow-color-secondary: rgba(0, 0, 0, 0.1);/* Secondary shadow color */
--fp-shadow-blur-primary: 6px;                  /* Primary shadow blur */
--fp-shadow-blur-secondary: 20px;               /* Secondary shadow blur */
--fp-shadow-offset-x: 0;                        /* Horizontal shadow offset */
--fp-shadow-offset-y: 6px;                      /* Vertical shadow offset */
```

### Backdrop Filter
```css
--fp-backdrop-blur: 4px;                        /* Backdrop blur amount */
```

### Filter Effects
```css
--fp-filter-saturate: 120%;                     /* Color saturation */
--fp-filter-brightness: 1.15;                   /* Brightness adjustment */
```

### Inset Highlights
```css
--fp-inset-highlight-offset: 1px;               /* Highlight position offset */
--fp-inset-highlight-blur: 0;                   /* Highlight blur amount */
--fp-inset-glow-blur: 5px;                      /* Inner glow blur */
```

### Transitions
```css
--fp-transition-duration: 0.4s;                 /* Main transition duration */
--fp-transition-timing: cubic-bezier(0.175, 0.885, 0.32, 2.2); /* Timing function */
--fp-transition-fast: 0.2s;                     /* Fast interactions */
--fp-transition-medium: 0.25s;                  /* Medium interactions */
--fp-transition-slow: 0.3s;                     /* Slow interactions */
```

### Content Spacing
```css
--fp-content-padding-x: 28px;                   /* Horizontal padding */
--fp-content-padding-y: 12px;                   /* Vertical padding */
--fp-content-gap: 1rem;                         /* Gap between elements */
```

### Interactive Elements
```css
--fp-hover-scale: 1.1;                          /* Scale on hover */
--fp-active-scale: 0.95;                        /* Scale on active/click */
```

## Usage Examples

### Example 1: Create a Darker Glass Effect
```css
.dark-glass {
  --fp-bg-color: rgba(0, 0, 0, 0.4);
  --fp-highlight: rgba(255, 255, 255, 0.3);
  --fp-backdrop-blur: 8px;
}
```

### Example 2: Increase Blur for Stronger Effect
```css
.strong-blur {
  --fp-backdrop-blur: 12px;
  --fp-filter-saturate: 150%;
}
```

### Example 3: Customize Shadows
```css
.elevated-glass {
  --fp-shadow-offset-y: 12px;
  --fp-shadow-blur-primary: 12px;
  --fp-shadow-blur-secondary: 30px;
}
```

### Example 4: Faster Animations
```css
.snappy-glass {
  --fp-transition-duration: 0.2s;
  --fp-transition-timing: ease-out;
}
```

### Example 5: Larger Border Radius
```css
.pill-glass {
  --fp-border-radius: 50px;
}
```

## How to Apply Custom Values

### Method 1: Override in HTML
```html
<div class="glass-container" style="--fp-backdrop-blur: 8px; --fp-bg-color: rgba(0, 0, 0, 0.3);">
  <!-- content -->
</div>
```

### Method 2: Create Custom Classes
```css
.glass-container.custom-variant {
  --fp-backdrop-blur: 8px;
  --fp-bg-color: rgba(0, 0, 0, 0.3);
}
```

### Method 3: Override at Root Level
```css
:root {
  --fp-backdrop-blur: 8px;
  --fp-bg-color: rgba(0, 0, 0, 0.3);
}
```

### Benefits of CSS Custom Properties

- **Easy Customization** - Change values without modifying the core CSS
- **Consistency** - Use the same variables across multiple components
- **Theming** - Create multiple themes by overriding variables
- **Maintainability** - Update values in one place
- **Performance** - Specific transition properties prevent unnecessary recalculations
- **Flexibility** - Mix and match properties for different effects

## 📜 Available Scripts

### Root Level

```bash
npm run dev              # Run example site in development mode
npm run build            # Build all packages
npm run build:lib        # Build library only
npm run build:example    # Build example site only
npm run preview          # Preview built example site
```

### Library Package (`packages/frostpane/`)

```bash
npm run build            # Compile SCSS to CSS
npm run watch            # Watch and rebuild on changes
```

### Example Package (`packages/example/`)

```bash
npm run dev              # Start Vite dev server
npm run build            # Build example site
npm run preview          # Preview built site
```

## 📦 Publishing

The `@frostpane/core` library can be published to npm:

```bash
cd packages/frostpane
npm run build
npm publish --access public
```

The `prepublishOnly` script ensures the library is built before publishing.

## 🏗️ Monorepo Architecture

This project uses **npm workspaces** for monorepo management, providing:

- **Separation of Concerns** - Core library is independent from example site
- **Reusability** - Library can be published and used in other projects
- **Simplified Development** - Both packages can be developed and tested together
- **Dependency Management** - Shared dependencies are hoisted to the root

### Dependency Flow

```
Root (frostpane-monorepo)
├── @frostpane/core
│   └── devDependencies: sass
└── @frostpane/example
    ├── dependencies: @frostpane/core (workspace:*)
    └── devDependencies: vite
```

The example package depends on the core library through a workspace reference, which npm automatically resolves to the local package during development.

## 📖 Documentation

- **Library Documentation**: [packages/frostpane/README.md](packages/frostpane/README.md)
- **Example Site**: [packages/example/README.md](packages/example/README.md)

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Test your changes: `npm run dev` and `npm run build`
5. Commit your changes: `git commit -am 'Add new feature'`
6. Push to the branch: `git push origin feature/my-feature`
7. Submit a pull request

## 📄 License

MIT

## 🙏 Acknowledgments

Inspired by modern glassmorphic design trends and macOS UI aesthetics.
