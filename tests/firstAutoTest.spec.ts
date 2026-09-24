import { test, expect } from '@playwright/test';

//test('Login to SFDC', async({ page, browser, context, request }) = > {  });
// page : a Page Object Common
//browser: for brwoser instance
//context: the browserContext
//request: for making API calls

// async in JS/TS is a asynchronous function that always returns a promise
// await is pauses the execution of code until the previous promise returned, 
// and only works in async function


test('My first test', async ({ page }) => {
    await page.goto("https://practice-automation.com");

    //expecting a title
    // await expect(page).toHaveTitle('Google');
    // await page.getByRole('combobox', { name: 'Search' }).fill('Paychex');
    
    // const searchBox = page.getByLabel('Google Search').first();

    // await searchBox.click();
    // await expect(page.locator('.LC20lb MBeuO DKV0Md')).toBeVisible();
    await page.waitForTimeout(5000);
    await page.close();
});

