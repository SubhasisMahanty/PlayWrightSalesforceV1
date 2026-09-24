import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('link', { name: 'AI tutorials' }).click();
  await page.getByRole('link', { name: 'Machine Learning (ML) vs Deep' }).click();
  await page.getByRole('link', { name: 'automateNow Logo Home' }).click();
});