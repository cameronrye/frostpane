# Migration Guide

This guide helps you migrate between major versions of Frostpane.

## Table of Contents

- [Migrating to v2.0.0](#migrating-to-v200)
- [Migrating to v1.0.0](#migrating-to-v100)

---

## Migrating to v2.0.0

> **Note:** Version 2.0.0 is not yet released. This section will be updated when v2.0.0 is available.

### Breaking Changes

TBD

### New Features

TBD

### Deprecations

TBD

### Migration Steps

TBD

---

## Migrating to v1.0.0

Version 1.0.0 is the initial stable release of Frostpane.

### What's New

- ✨ Complete frosted glass effect system
- 🎨 30+ customizable CSS custom properties
- 🎭 Built-in component variants (rounded, small, bordered)
- 📦 Multiple import options (SCSS source or compiled CSS)
- ⚡ Performance-optimized transitions
- 📱 Fully responsive design
- ♿ Accessibility-focused implementation

### Installation

```bash
npm install @frostpane/core
```

### Basic Usage

**Import CSS:**

```javascript
import '@frostpane/core/css';
```

**Or import SCSS:**

```javascript
import '@frostpane/core/scss';
```

**HTML Structure:**

```html
<div class="glass-container">
  <div class="glass-content">Your content here</div>
</div>
```

### Available Components

- **Containers:** `.glass-container`
- **Buttons:** `.glass-button`
- **Inputs:** `.glass-input`
- **Cards:** `.glass-card`

### Modifiers

- `--rounded`: Rounded corners
- `--small`: Smaller size
- `--bordered`: With border

### Customization

All components can be customized using CSS custom properties:

```css
.glass-container {
  --fp-backdrop-blur: 8px;
  --fp-bg-color: rgba(0, 0, 0, 0.3);
  --fp-border-radius: 1rem;
}
```

See the [README](README.md) for a complete list of available custom properties.

---

## General Migration Tips

### Check for Breaking Changes

Always review the changelog and breaking changes section for the version you're migrating to.

### Update Dependencies

```bash
npm update @frostpane/core
```

### Test Thoroughly

After migrating, test your application thoroughly:

1. Visual regression testing
2. Accessibility testing
3. Cross-browser testing
4. Responsive design testing

### Gradual Migration

For large applications, consider migrating gradually:

1. Update one component at a time
2. Test each component before moving to the next
3. Use feature flags if needed

### Get Help

If you encounter issues during migration:

- Check the [GitHub Issues](https://github.com/cameronrye/frostpane/issues)
- Review the [Documentation](https://cameronrye.github.io/frostpane)
- Ask in [GitHub Discussions](https://github.com/cameronrye/frostpane/discussions)

---

## Version History

- **v1.0.0** - Initial stable release (Current)

---

**Last Updated:** 2025-11-11
