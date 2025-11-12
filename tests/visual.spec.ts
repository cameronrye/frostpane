import { test, expect } from '@playwright/test';

test.describe('Glass Container Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Frostpane/);
  });

  test('default glass container renders correctly', async ({ page }) => {
    const container = page.locator('.glass-container').first();
    await expect(container).toBeVisible();
    await expect(container).toHaveScreenshot('glass-container-default.png');
  });

  test('rounded glass container variant renders correctly', async ({ page }) => {
    const container = page.locator('.glass-container--rounded').first();
    await expect(container).toBeVisible();
    await expect(container).toHaveScreenshot('glass-container-rounded.png');
  });

  test('bordered glass container variant renders correctly', async ({ page }) => {
    const container = page.locator('.glass-container--bordered').first();
    await expect(container).toBeVisible();
    await expect(container).toHaveScreenshot('glass-container-bordered.png');
  });

  test('glass button renders correctly', async ({ page }) => {
    const button = page.locator('.glass-button').first();
    await expect(button).toBeVisible();
    await expect(button).toHaveScreenshot('glass-button.png');
  });

  test('glass button hover state', async ({ page }) => {
    const button = page.locator('.glass-button').first();
    await button.hover();
    await expect(button).toHaveScreenshot('glass-button-hover.png');
  });

  test('glass input renders correctly', async ({ page }) => {
    const input = page.locator('.glass-input').first();
    await expect(input).toBeVisible();
    await expect(input).toHaveScreenshot('glass-input.png');
  });

  test('glass input focus state', async ({ page }) => {
    const input = page.locator('.glass-input').first();
    await input.focus();
    await expect(input).toHaveScreenshot('glass-input-focus.png');
  });
});

test.describe('Responsive Design Tests', () => {
  test('mobile viewport renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    const container = page.locator('.glass-container').first();
    await expect(container).toBeVisible();
    await expect(container).toHaveScreenshot('glass-container-mobile.png');
  });

  test('tablet viewport renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    const container = page.locator('.glass-container').first();
    await expect(container).toBeVisible();
    await expect(container).toHaveScreenshot('glass-container-tablet.png');
  });

  test('desktop viewport renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    const container = page.locator('.glass-container').first();
    await expect(container).toBeVisible();
    await expect(container).toHaveScreenshot('glass-container-desktop.png');
  });
});

test.describe('Interactive Elements Tests', () => {
  test('navigation menu is functional', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('buttons are clickable', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('.glass-button').first();
    await expect(button).toBeEnabled();
    await button.click();
  });

  test('inputs accept text', async ({ page }) => {
    await page.goto('/');
    const input = page.locator('.glass-input').first();
    await input.fill('Test input');
    await expect(input).toHaveValue('Test input');
  });
});
