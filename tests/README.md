# Frostpane Tests

This directory contains automated tests for the Frostpane library.

## Test Suites

### Visual Regression Tests (`visual.spec.ts`)

Tests the visual appearance of glass components across different:

- Component variants (default, rounded, bordered)
- Interactive states (hover, focus)
- Responsive breakpoints (mobile, tablet, desktop)

### Accessibility Tests (`accessibility.spec.ts`)

Ensures the library meets accessibility standards:

- WCAG AA compliance
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- Reduced motion preferences
- Focus management

### Browser Compatibility Tests (`browser-compatibility.spec.ts`)

Verifies cross-browser compatibility:

- Backdrop-filter support and fallbacks
- CSS custom properties
- Transform and transition support
- SVG filter compatibility
- Responsive design across browsers

## Running Tests

### Prerequisites

Install Playwright browsers:

```bash
npx playwright install
```

### Run All Tests

```bash
npm test
```

### Run Tests in UI Mode

```bash
npm run test:ui
```

### Run Tests in Headed Mode (see browser)

```bash
npm run test:headed
```

### Update Visual Snapshots

When you intentionally change the visual appearance:

```bash
npm run test:update-snapshots
```

### Run Specific Test File

```bash
npx playwright test tests/visual.spec.ts
```

### Run Tests for Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Configuration

Tests are configured in `playwright.config.ts` at the project root.

### Browsers Tested

- Chromium (Chrome, Edge)
- Firefox
- WebKit (Safari)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

### Test Environment

Tests run against the local development server (`http://localhost:5173`).
The dev server is automatically started before tests run.

## Writing New Tests

### Visual Regression Test Example

```typescript
test('my component renders correctly', async ({ page }) => {
  await page.goto('/');
  const element = page.locator('.my-component');
  await expect(element).toHaveScreenshot('my-component.png');
});
```

### Accessibility Test Example

```typescript
test('my component is accessible', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).include('.my-component').analyze();
  expect(results.violations).toEqual([]);
});
```

## CI/CD Integration

Tests run automatically in CI on:

- Pull requests
- Pushes to main branch

See `.github/workflows/ci.yml` for CI configuration.

## Troubleshooting

### Tests Failing Locally

1. Ensure dev server is running: `npm run dev`
2. Clear Playwright cache: `npx playwright install --force`
3. Update snapshots if visual changes are intentional: `npm run test:update-snapshots`

### Snapshot Differences

Visual snapshots may differ slightly between operating systems.
CI uses Linux, so snapshots are generated for Linux.

### Browser Installation Issues

If you encounter issues installing browsers:

```bash
npx playwright install --with-deps
```

Or install specific browsers:

```bash
npx playwright install chromium
```
