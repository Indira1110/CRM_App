import { test } from '@playwright/test';
import loginData from '../../testdata/login.json'
import organizationData from '../../testdata/organization.json'
import { organizationClass } from '../../pages/organization';
import { login } from '../../pages/login';

test('organization with pom and ddt', async ({page}) => {
    let signin = new login(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username, loginData.password)
    let organizationcreate = new organizationClass(page)
    await organizationcreate.organizationMethod(organizationData.accountname,organizationData.website,organizationData.bill_city,organizationData.bill_state,organizationData.bill_code,organizationData.bill_country,organizationData.description)
})


test('organization with ddt', async ({ page }) => {

    await page.goto(loginData.url);
    await page.locator('//input[@name="user_name"]').fill(loginData.username);
    await page.locator('//input[@name="user_password"]').fill(loginData.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: 'Organizations' }).first().click();
    await page.getByRole('link', { name: 'Create Organization...'}).click();
    
    await page.locator('//input[@name="accountname"]').fill(organizationData.accountname);
    await page.locator('//input[@name="website"]').fill(organizationData.website);
    await page.locator('//select[@name="industry"]').selectOption({ value: 'Technology' });
    await page.locator('//select[@name="accounttype"]').selectOption({ value: 'Other' });
    await page.locator('//select[@name="rating"]').selectOption({ value: 'Active' });

    await page.locator('//input[@id="bill_city"]').fill(organizationData.bill_city);
    await page.locator('//input[@id="bill_state"]').fill(organizationData.bill_state);
    await page.locator('//input[@id="bill_code"]').fill(organizationData.bill_code);
    await page.locator('//input[@id="bill_country"]').fill(organizationData.bill_country);

    await page.locator('//textarea[@name="description"]').fill(organizationData.description);

    await page.getByRole('button', { name: 'Save' }).nth(1).click();

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
    await page.getByRole('link', { name: 'Sign Out' }).click();

});




test('organization', async ({ page }) => {

    await page.goto('http://localhost:8888/');
    await page.locator('//input[@name="user_name"]').fill('admin');
    await page.locator('//input[@name="user_password"]').fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: 'Organizations' }).first().click();
    await page.getByRole('link', { name: 'Create Organization...'}).click();
    
    await page.locator('//input[@name="accountname"]').fill('The Walt Disney Company');
    await page.locator('//input[@name="website"]').fill('www.disney01.com');
    await page.locator('//select[@name="industry"]').selectOption({ value: 'Technology' });
    await page.locator('//select[@name="accounttype"]').selectOption({ value: 'Other' });
    await page.locator('//select[@name="rating"]').selectOption({ value: 'Active' });

    await page.locator('//input[@id="bill_city"]').fill('Bangalore');
    await page.locator('//input[@id="bill_state"]').fill('Karnataka');
    await page.locator('//input[@id="bill_code"]').fill('5666661');
    await page.locator('//input[@id="bill_country"]').fill('India');

    await page.locator('//textarea[@name="description"]').fill('nsd9cnfbiugfafakfgvmojwg');

    await page.getByRole('button', { name: 'Save' }).nth(1).click();

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
    await page.getByRole('link', { name: 'Sign Out' }).click();

});