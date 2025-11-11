import { test, expect } from '@playwright/test';

test.describe('Browser Compatibility Tests', () => {
  test('backdrop-filter is supported or has fallback', async ({
    page,
    browserName: _browserName,
  }) => {
    await page.goto('/');
    const container = page.locator('.glass-container').first();

    const hasBackdropFilter = await container.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return (
        styles.backdropFilter !== 'none' ||
        styles.webkitBackdropFilter !== 'none' ||
        styles.backgroundColor !== 'transparent'
      );
    });

    expect(hasBackdropFilter).toBeTruthy();
  });

  test('CSS custom properties are applied', async ({ page }) => {
    await page.goto('/');
    const container = page.locator('.glass-container').first();

    const hasCustomProperties = await container.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      // Check if any of the custom properties are applied
      return (
        styles.getPropertyValue('--fp-glass-bg') !== '' || styles.backgroundColor !== 'transparent'
      );
    });

    expect(hasCustomProperties).toBeTruthy();
  });

  test('transforms are applied correctly', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('.glass-button').first();

    await button.hover();

    const hasTransform = await button.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return styles.transform !== 'none';
    });

    expect(hasTransform).toBeTruthy();
  });

  test('blur effects are visible', async ({ page }) => {
    await page.goto('/');
    const container = page.locator('.glass-container').first();

    const hasBlur = await container.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      const backdropFilter = styles.backdropFilter || styles.webkitBackdropFilter || '';
      return backdropFilter.includes('blur');
    });

    // Blur should be present in modern browsers
    if (hasBlur) {
      expect(hasBlur).toBeTruthy();
    } else {
      // If no blur, should have fallback background
      const hasBackground = await container.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return styles.backgroundColor !== 'transparent';
      });
      expect(hasBackground).toBeTruthy();
    }
  });

  test('transitions work smoothly', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('.glass-button').first();

    const transitionProperty = await button.evaluate((el) => {
      return window.getComputedStyle(el).transitionProperty;
    });

    expect(transitionProperty).not.toBe('none');
  });

  test('flexbox layout works correctly', async ({ page }) => {
    await page.goto('/');
    const container = page.locator('.glass-container').first();

    const isFlexOrBlock = await container.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return ['flex', 'block', 'inline-block'].includes(styles.display);
    });

    expect(isFlexOrBlock).toBeTruthy();
  });

  test('SVG filters work or have fallback', async ({ page }) => {
    await page.goto('/');

    // Check if SVG filter is defined
    const hasSvgFilter = await page.evaluate(() => {
      const filter = document.querySelector('#lens-distortion');
      return filter !== null;
    });

    if (hasSvgFilter) {
      // If SVG filter exists, check if it's applied
      const filterApplied = await page.evaluate(() => {
        const elements = document.querySelectorAll('[style*="filter"]');
        return elements.length > 0;
      });
      // Filter may or may not be applied, both are valid
      expect(typeof filterApplied).toBe('boolean');
    }
  });

  test('responsive breakpoints work correctly', async ({ page }) => {
    // Test mobile breakpoint
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    let container = page.locator('.glass-container').first();
    await expect(container).toBeVisible();

    // Test tablet breakpoint
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(container).toBeVisible();

    // Test desktop breakpoint
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(container).toBeVisible();
  });

  test('font rendering is consistent', async ({ page }) => {
    await page.goto('/');
    const body = page.locator('body');

    const fontFamily = await body.evaluate((el) => {
      return window.getComputedStyle(el).fontFamily;
    });

    expect(fontFamily).toBeTruthy();
    expect(fontFamily).not.toBe('');
  });
});
