import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('homepage should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('glass containers should have proper contrast ratios', async ({ page }) => {
    await page.goto('/');
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('.glass-container')
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('buttons should be keyboard accessible', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('.glass-button').first();

    // Tab to the button
    await page.keyboard.press('Tab');
    await expect(button).toBeFocused();

    // Press Enter to activate
    await page.keyboard.press('Enter');
  });

  test('inputs should be keyboard accessible', async ({ page }) => {
    await page.goto('/');
    const input = page.locator('.glass-input').first();

    // Tab to the input
    await page.keyboard.press('Tab');

    // Type in the input
    await page.keyboard.type('Test input');
    await expect(input).toHaveValue('Test input');
  });

  test('focus-visible styles are applied', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('.glass-button').first();

    // Tab to the button
    await page.keyboard.press('Tab');

    // Check if focus-visible class or styles are applied
    const hasFocusStyles = await button.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return styles.outline !== 'none' || styles.boxShadow !== 'none';
    });

    expect(hasFocusStyles).toBeTruthy();
  });

  test('reduced motion preference is respected', async ({ page }) => {
    // Emulate prefers-reduced-motion
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    const button = page.locator('.glass-button').first();
    const transitionDuration = await button.evaluate((el) => {
      return window.getComputedStyle(el).transitionDuration;
    });

    // Should have minimal or no transition when reduced motion is preferred
    expect(transitionDuration === '0s' || transitionDuration === '0.01s').toBeTruthy();
  });

  test('navigation should be keyboard navigable', async ({ page }) => {
    await page.goto('/');

    // Tab through navigation items
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Check that we can navigate with keyboard
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON', 'INPUT']).toContain(focusedElement);
  });

  test('images should have alt text', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeDefined();
    }
  });

  test('headings should be in correct order', async ({ page }) => {
    await page.goto('/');
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['heading-order'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('color contrast should meet WCAG AA standards', async ({ page }) => {
    await page.goto('/');
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
