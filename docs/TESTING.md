# Testing Guide

This document describes the testing procedures for Frostpane, including automated tests and manual testing procedures.

## Table of Contents

- [Automated Tests](#automated-tests)
- [Manual Testing](#manual-testing)
- [Pre-Release Testing Checklist](#pre-release-testing-checklist)
- [Continuous Integration](#continuous-integration)

## Automated Tests

Frostpane includes a comprehensive automated test suite that verifies build outputs, source files, and package configuration.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on file changes)
npm run test:watch

# Run tests from the frostpane package directory
cd packages/frostpane
npm test
```

### Test Coverage

The test suite includes **64 tests** organized into the following categories:

#### Build Artifacts Tests (`test/build.test.js`)

- Verifies all build artifacts are generated correctly
- Checks for minified and unminified versions
- Validates source maps
- Ensures copyright headers are present
- Verifies CSS content (classes, properties, variables)
- Compares file sizes (full vs core, minified vs unminified)
- Validates feature separation (utilities and forms in full version only)

#### Source Files Tests (`test/source.test.js`)

- Verifies source file structure
- Checks for required SCSS files in each directory
- Validates SCSS syntax (use of `@use` and `@forward`)
- Ensures version numbers are present
- Validates CSS custom properties
- Checks for accessibility features
- Verifies dark mode support

#### Package Configuration Tests (`test/package.test.js`)

- Validates package.json structure
- Checks package metadata (name, version, license, author)
- Verifies export paths and configurations
- Ensures proper script definitions
- Validates dependencies (zero runtime dependencies)

### Test Requirements

Tests run automatically:

- Before publishing (`prepublishOnly` hook)
- In CI/CD pipeline on every push/PR
- After every build (`pretest` hook runs build first)

## Manual Testing

While automated tests verify build outputs and configuration, manual testing is essential for verifying visual appearance and functionality.

### Local Development Testing

1. **Start the example site:**

   ```bash
   npm run dev
   ```

   This starts the Astro development server at `http://localhost:4321`

2. **Test all component variants:**
   - Navigate through all example pages
   - Verify glass effects render correctly
   - Check all component variants (primary, secondary, success, etc.)
   - Test form components (buttons, inputs, textareas, selects)
   - Verify utility classes work as expected

3. **Test responsiveness:**
   - Resize browser window to test different viewport sizes
   - Test on mobile, tablet, and desktop breakpoints
   - Verify glass effects scale appropriately

4. **Test dark mode:**
   - Toggle system dark mode preference
   - Verify dark mode styles apply correctly
   - Check contrast and readability

5. **Test accessibility:**
   - Use keyboard navigation (Tab, Enter, Space)
   - Test with screen reader (if available)
   - Verify reduced motion preference is respected
   - Check color contrast ratios

### Cross-Browser Testing

Test in the following browsers (minimum):

- **Chrome/Edge** (latest)
- **Firefox** (latest)
- **Safari** (latest, macOS/iOS)

#### Browser-Specific Checks:

- Backdrop filter support and fallbacks
- CSS custom properties
- Flexbox and Grid layouts
- Smooth scrolling behavior
- Focus states and outlines

### Build Verification

Before release, verify the production build:

```bash
# Build the library
npm run build:lib

# Build and preview the example site
npm run build:example
npm run preview
```

Check:

- All CSS files are generated in `packages/frostpane/dist/`
- Minified files are smaller than unminified
- Source maps are present
- Example site builds without errors
- Example site works correctly in preview mode

## Pre-Release Testing Checklist

Use this checklist before every release:

### Automated Checks

- [ ] All automated tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Build completes successfully (`npm run build`)
- [ ] Version validation passes (`npm run validate-versions`)
- [ ] CI/CD pipeline is green

### Manual Checks

- [ ] Example site runs in development mode
- [ ] All component examples render correctly
- [ ] Glass effects work in all major browsers
- [ ] Dark mode works correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Keyboard navigation works
- [ ] Reduced motion preference is respected
- [ ] Production build works (`npm run build:example && npm run preview`)

### Documentation Checks

- [ ] README.md is up-to-date
- [ ] CHANGELOG.md includes all changes
- [ ] Version numbers are consistent
- [ ] API documentation matches implementation
- [ ] Examples in documentation work correctly

### Package Checks

- [ ] package.json version is correct
- [ ] All dependencies are up-to-date
- [ ] No security vulnerabilities (`npm audit`)
- [ ] Package exports are correct
- [ ] Files array includes all necessary files

## Continuous Integration

### GitHub Actions Workflows

#### CI Workflow (`.github/workflows/ci.yml`)

Runs on every push and pull request to `main`:

1. Validates version consistency
2. Runs linting
3. Builds the library
4. Runs automated tests
5. Builds example site
6. Verifies build artifacts

#### Release Workflow (`.github/workflows/release.yml`)

Runs manually for releases:

1. Bumps version
2. Updates changelog
3. Builds library
4. Runs tests
5. Publishes to npm
6. Creates GitHub release
7. Includes automatic rollback on failure

### Pre-Commit Hooks

Husky and lint-staged run automatically before each commit:

- **Linting:** Runs stylelint on SCSS files
- **Formatting:** Runs prettier on JS, JSON, and MD files
- **Commit Message:** Validates conventional commit format

### Commit Message Format

Commits must follow conventional commit format:

```
type(scope): subject

body

footer
```

**Allowed types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `build`: Build system changes

**Examples:**

```
feat: add new glass variant
fix: correct backdrop-filter fallback
docs: update installation instructions
test: add tests for form components
```

## Troubleshooting

### Tests Failing

If tests fail:

1. Run `npm run build` to ensure build artifacts are up-to-date
2. Check for syntax errors in SCSS files
3. Verify version numbers are consistent
4. Check that all required files exist

### Build Failing

If build fails:

1. Clear dist directory: `rm -rf packages/frostpane/dist`
2. Reinstall dependencies: `npm ci`
3. Run build again: `npm run build:lib`
4. Check for SCSS syntax errors

### Linting Errors

If linting fails:

1. Run `npm run lint:fix` to auto-fix issues
2. Manually fix remaining issues
3. Check `.stylelintrc.json` for rule configuration

## Adding New Tests

When adding new features, add corresponding tests:

1. **For new components:** Add tests to `test/build.test.js` to verify the component appears in build output
2. **For new source files:** Add tests to `test/source.test.js` to verify file structure
3. **For new package features:** Add tests to `test/package.test.js` to verify configuration

Test files use Node.js built-in test runner (no external dependencies required).
