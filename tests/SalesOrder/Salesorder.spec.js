import { test } from '@playwright/test'
import loginData from '../../testdata/login.json'
import salesData from '../../testdata/sales.json'
import { salesClass } from '../../pages/sales'
import { login } from '../../pages/login'

test('SalesOrder with pom', async ({ page }) => {
    test.slow()
    let signin = new login(page)
    await signin.launch (loginData.url)
    await signin.action(loginData.username, loginData.password)
    let salesCreate = new salesClass (page)
    await salesCreate.salesMethod(salesData.subject, salesData.bill_street, salesData.ship_street)
})


test('SalesOrder with ddt', async ({ page }) => {
    test.slow()
    await page.goto(loginData.url)
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password)
    await page.getByRole('button', { name: 'Login' }).click()

    await page.locator('a[title="Sales Order"]').first().click()

    await page.getByRole('link', {name: 'Create Sales Order...'}).click()

    await page.locator('input[name="subject"]').fill(salesData.subject)

    const [organizationPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(1).click()
    ])
    await organizationPage.locator('[id="2"]').click()

    const [relatedRecordPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(1).click()
    ])
    await relatedRecordPage.locator('[id="3"]').click()

    const [contactPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(2).click()
    ])
    await contactPage.locator('[id="1"]').click()

    const [opportunityPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).first().click()
    ])
    await opportunityPage.locator('[id="1"]').click()

    await page.locator('textarea[name="bill_street"]').fill(salesData.bill_street)
    await page.locator('textarea[name="ship_street"]').fill(salesData.ship_street)

    await page.getByRole('button', { name: 'Save' }).nth(1).click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()

    await page.getByRole('link', { name: 'Sign Out' }).click()
})



test('SalesOrder', async ({ page }) => {

    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button', { name: 'Login' }).click()

    await page.locator('a[title="Sales Order"]').first().click()
    await page.getByRole('link', { name: 'Create Sales Order...' }).click()
    await page.locator('input[name="subject"]').fill('Sales Order')

    let [organizationPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(1).click()
    ])
    await organizationPage.locator('[id="2"]').click()

    let [relatedRecordPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(1).click()
    ])
    await relatedRecordPage.locator('[id="3"]').click()

    let [contactPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(2).click()
    ])
    await contactPage.getByRole('field', { name: 'Mahesh Malgi' }).nth(2).click()
    await contactPage.locator('[id="1"]').click()

    let [opportunityPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).first().click()
    ])
    await opportunityPage.locator('[id="1"]').click()

    await page.locator('textarea[name="bill_street"]').fill('zxcvbnm')
    await page.locator('textarea[name="ship_street"]').fill('mnbvcxz')
    await page.getByRole('button', { name: 'Save' }).nth(1).click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', {name: 'Sign Out'}).click()
})
