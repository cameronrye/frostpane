# Release Notes Template

This template is used for creating GitHub releases. The actual release notes are automatically extracted from docs/CHANGELOG.md during the release process.

## Format

Each release should follow this structure in docs/CHANGELOG.md:

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added

- New features and capabilities

### Changed

- Changes to existing functionality

### Deprecated

- Features that will be removed in future versions

### Removed

- Features that have been removed

### Fixed

- Bug fixes

### Security

- Security improvements and vulnerability fixes
```

## Installation Instructions

The release workflow automatically includes installation instructions:

### npm

```bash
npm install frostpane@X.Y.Z
```

### CDN

```html
<!-- Full version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/frostpane@X.Y.Z/dist/frostpane.css" />

<!-- Core version (minimal) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/frostpane@X.Y.Z/dist/frostpane-core.css"
/>

<!-- Unminified (for reference) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/frostpane@X.Y.Z/dist/frostpane.unminified.css"
/>
```

## Pre-release Notes

For beta and alpha releases, include:

````markdown
**Pre-release Warning**

This is a pre-release version and may contain bugs or incomplete features.
Use in production at your own risk.

To install:

```bash
npm install frostpane@X.Y.Z-beta.N
```
````

## Links

- [Full Changelog](https://github.com/cameronrye/frostpane/blob/main/docs/CHANGELOG.md)
- [Documentation](https://cameronrye.github.io/frostpane)
- [npm Package](https://www.npmjs.com/package/frostpane)
