const { test, expect } = require('@playwright/test');

test('open Google', async ({ page }) => {

    await page.goto('https://www.google.com');

    await expect(page).toHaveTitle(/Google/);

});