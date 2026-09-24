import { test, expect } from '@playwright/test';

test('#testFailure', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator('h1')).toContainText('Playwright enables reliable web automation for testing, scripting, and AI agents');
});
