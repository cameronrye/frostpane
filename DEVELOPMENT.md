# Frostpane Development Guide

This guide provides detailed information for developers working on the Frostpane library.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Building](#building)
- [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Software

- **Node.js**: v18.0.0 or higher (v20.x recommended)
- **npm**: v9.0.0 or higher
- **Git**: For version control

### Recommended Tools

- **VS Code**: Recommended IDE with the following extensions:
  - Prettier - Code formatter
  - Stylelint - SCSS linting
  - ESLint - JavaScript/TypeScript linting
  - Astro - Astro language support
  - EditorConfig - Consistent editor settings

## Getting Started

### Initial Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/cameronrye/frostpane.git
   cd frostpane
   ```

2. **Use the correct Node version**

   If you use nvm (Node Version Manager):

   ```bash
   nvm use
   ```

   This will automatically use Node 18 as specified in `.nvmrc`.

3. **Install dependencies**

   ```bash
   npm install
   ```

   This installs dependencies for all workspace packages.

4. **Install Playwright browsers** (for testing)

   ```bash
   npx playwright install --with-deps
   ```

### Verify Setup

Run the validation script to ensure everything is set up correctly:

```bash
npm run validate
```

This runs formatting checks, linting, builds, and tests.

## Development Workflow

### Starting Development

Start the development server with hot module replacement:

```bash
npm run dev
```

This starts the example site at `http://localhost:5173` with live reloading.

### Making Changes

#### Modifying the Library

1. Edit `packages/frostpane/src/frostpane.scss`
2. Changes automatically reload in the example site
3. No manual rebuild needed during development

#### Modifying the Example Site

1. Edit files in `packages/example/src/`
2. Changes automatically reload in the browser
3. The example site uses Astro framework

### Code Style

The project uses automated code formatting and linting:

- **Prettier**: Code formatting
- **ESLint**: JavaScript/TypeScript linting
- **Stylelint**: SCSS linting
- **EditorConfig**: Editor settings

#### Format Code

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

#### Lint Code

```bash
# Lint all files
npm run lint

# Lint and auto-fix issues
npm run lint:fix
```

### Git Workflow

The project uses Husky for Git hooks:

- **pre-commit**: Runs lint-staged to format and lint changed files
- Files are automatically formatted and linted before commit

#### Commit Messages

Use clear, descriptive commit messages:

```bash
git commit -m "feat: add new glass variant"
git commit -m "fix: correct border radius calculation"
git commit -m "docs: update installation instructions"
```

## Project Structure

```
frostpane/
├── .github/                    # GitHub configuration
│   ├── workflows/              # CI/CD workflows
│   └── ISSUE_TEMPLATE/         # Issue templates
├── .vscode/                    # VS Code settings
├── packages/
│   ├── frostpane/              # @frostpane/core - Main library
│   │   ├── src/
│   │   │   └── frostpane.scss  # Source SCSS
│   │   ├── dist/
│   │   │   └── frostpane.css   # Compiled CSS
│   │   └── package.json
│   └── example/                # @frostpane/example - Demo site
│       ├── src/
│       │   ├── pages/          # Astro pages
│       │   └── styles/         # Site styles
│       ├── public/             # Static assets
│       └── package.json
├── tests/                      # Playwright tests
│   ├── accessibility.spec.ts   # Accessibility tests
│   ├── browser-compatibility.spec.ts
│   └── visual.spec.ts          # Visual regression tests
├── .nvmrc                      # Node version specification
├── package.json                # Root workspace config
└── playwright.config.ts        # Test configuration
```

### Monorepo Architecture

This project uses **npm workspaces** for monorepo management:

- **Root**: Contains shared dev dependencies and scripts
- **@frostpane/core**: Publishable library package
- **@frostpane/example**: Example site (not published)

Dependencies are hoisted to the root `node_modules` when possible.

## Testing

### Test Suites

The project uses **Playwright** for end-to-end testing:

- **Visual Regression Tests**: Verify visual appearance across browsers
- **Accessibility Tests**: Ensure WCAG AA compliance
- **Browser Compatibility Tests**: Test cross-browser support

### Running Tests

```bash
# Run all tests
npm test

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Run specific test file
npx playwright test tests/accessibility.spec.ts

# Run tests for specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Updating Visual Snapshots

When you intentionally change the visual appearance:

```bash
npm run test:update-snapshots
```

### Writing Tests

See `tests/README.md` for detailed testing documentation and examples.

### Test Configuration

- **Config file**: `playwright.config.ts`
- **Browsers tested**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari
- **Test environment**: Local dev server at `http://localhost:5173`

## Code Quality

### Automated Checks

The project enforces code quality through:

1. **Pre-commit hooks**: Automatically format and lint changed files
2. **CI pipeline**: Run all checks on pull requests
3. **Validation script**: Run all checks locally

### Running All Checks

```bash
npm run validate
```

This runs:

- Code formatting check
- Linting (ESLint + Stylelint)
- Build verification
- All tests

### Configuration Files

- **Prettier**: `.prettierrc.json`, `.prettierignore`
- **ESLint**: `eslint.config.mjs`
- **Stylelint**: `.stylelintrc.json`, `.stylelintignore`
- **EditorConfig**: `.editorconfig`

### Code Style Guidelines

#### SCSS

- Use BEM naming convention for classes
- Use `--fp-*` prefix for CSS custom properties
- Use kebab-case for SCSS variables
- Follow the existing structure and patterns

#### JavaScript/TypeScript

- Use ES modules (`import`/`export`)
- Use modern JavaScript features (ES2020+)
- Avoid `console.log` in production code
- Use meaningful variable names

## Building

### Build Commands

```bash
# Build all packages
npm run build

# Build library only
npm run build:lib

# Build example site only
npm run build:example

# Preview built example site
npm run preview
```

### Build Output

- **Library**: `packages/frostpane/dist/frostpane.css`
- **Example site**: `packages/example/dist/`

### Build Process

1. **Library build**: Compiles SCSS to CSS using Sass
2. **Example build**: Builds Astro site with optimized assets
3. **Verification**: CI checks for build artifacts

## Troubleshooting

### Common Issues

#### Development Server Won't Start

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Tests Failing Locally

```bash
# Reinstall Playwright browsers
npx playwright install --force

# Update snapshots if visual changes are intentional
npm run test:update-snapshots
```

#### Linting Errors

```bash
# Auto-fix linting issues
npm run lint:fix

# Format all files
npm run format
```

#### Build Errors

```bash
# Clean build artifacts
rm -rf packages/*/dist

# Rebuild
npm run build
```

### Getting Help

- **Issues**: Check [GitHub Issues](https://github.com/cameronrye/frostpane/issues)
- **Discussions**: Use [GitHub Discussions](https://github.com/cameronrye/frostpane/discussions)
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)

## Additional Resources

- **Main README**: [README.md](README.md) - User documentation
- **Contributing Guide**: [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- **Publishing Guide**: [PUBLISHING.md](PUBLISHING.md) - Release process
- **Test Documentation**: [tests/README.md](tests/README.md) - Testing guide
- **Changelog**: [CHANGELOG.md](CHANGELOG.md) - Version history

## Quick Reference

### Essential Commands

| Command            | Description              |
| ------------------ | ------------------------ |
| `npm run dev`      | Start development server |
| `npm run build`    | Build all packages       |
| `npm test`         | Run all tests            |
| `npm run lint`     | Lint all files           |
| `npm run format`   | Format all files         |
| `npm run validate` | Run all checks           |

### File Locations

| File/Directory                          | Purpose             |
| --------------------------------------- | ------------------- |
| `packages/frostpane/src/frostpane.scss` | Library source      |
| `packages/example/src/`                 | Example site source |
| `tests/`                                | Test files          |
| `.github/workflows/ci.yml`              | CI configuration    |

---

**Happy coding! 🎨✨**
