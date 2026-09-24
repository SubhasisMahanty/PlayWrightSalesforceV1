import { test, type Page } from '@playwright/test'
import { meta } from 'reporting-labs'

let page: Page;
//make sure to set configure full parallel to false

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click();
});


test.afterEach(async() => {
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await page.close();
});

test('Add item and checkout', async ({}, testInfo) => {
    meta({ priority: 'P1', severity: 'major', owner: 'subhasis', feature: 'checkout' });

    await page.locator('[id=add-to-cart-sauce-labs-backpack]').click();
    await page.locator('.shopping_cart_link').click();

    await testInfo.attach('cart-page', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });

    await page.locator('#checkout').click();

    await testInfo.attach('checkout-page', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });

});

test('Add item & remove', async ({ }) => {
    
    await page.locator('[id=add-to-cart-sauce-labs-backpack]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('#remove-sauce-labs-backpack').click();

});