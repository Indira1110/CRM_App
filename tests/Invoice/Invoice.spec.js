import { test } from '@playwright/test'
import loginData from '../../testdata/login.json'
import invoiceData from '../../testdata/invoice.json'
import { invoiceClass } from '../../pages/invoice'
import { login } from '../../pages/login'


test('Invoice with pom', async ({ page }) => {
    test.slow()
    let signin = new login(page)
    await signin.launch (loginData.url)
    await signin.action(loginData.username, loginData.password)
    let invoiceCreate = new invoiceClass (page)
    await invoiceCreate.invoiceMethod(
        invoiceData.subject,
        invoiceData.customerno,
        invoiceData.vtiger_purchaseorder,
        invoiceData.bill_street,
        invoiceData.ship_street,
        invoiceData.ship_city,
        invoiceData.ship_state,
        invoiceData.ship_code,
        invoiceData.ship_country,
        invoiceData.qty1)
})


test('Invoice with ddt', async ({ page }) => {

    await page.goto(loginData.url)
    await page.locator('input[name="user_name"]').fill(loginData.username)
    await page.locator('input[name="user_password"]').fill(loginData.password)
    await page.getByRole('button', { name: 'Login' }).click()

    await page.locator('a').filter({ hasText: /^More$/ }).click()
    await page.locator('#allMenu').getByRole('link', { name: 'Invoice' }).click()
    await page.getByRole('link', { name: 'Create Invoice...' }).click()

    await page.locator('input[name="subject"]').fill(invoiceData.subject)
    await page.locator('#customerno').fill(invoiceData.customerno)

    let [organizationPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(1).click()
    ])
    await organizationPage.locator('[id="1"]').click()

    let [contactPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(2).click()
    ])
    await contactPage.getByRole('link', {name: 'The walt disney company'}).click()

    let [quotationPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).first().click()
    ])
    await quotationPage.getByRole('link', {name: 'Accept Quotation'}).click()

    await page.locator('#vtiger_purchaseorder').fill(invoiceData.vtiger_purchaseorder)

    await page.locator('select[name="invoicestatus"]').selectOption('Created')

    await page.locator('textarea[name="bill_street"]').fill(invoiceData.bill_street)

    await page.locator('textarea[name="ship_street"]').fill(invoiceData.ship_street)

    await page.locator('#ship_city').fill(invoiceData.ship_city)
    await page.locator('#ship_state').fill(invoiceData.ship_state)
    await page.locator('#ship_code').fill(invoiceData.ship_code)
    await page.locator('#ship_country').fill(invoiceData.ship_country)

    await page.locator('input[name="qty1"]').fill(invoiceData.qty1)

    await page.getByRole('button', { name: 'Save' }).nth(1).click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', {name: 'Sign Out'}).click()
})




test('Invoice', async ({ page }) => {

    await page.goto('http://localhost:8888/')
    await page.locator('input[name="user_name"]').fill('admin')
    await page.locator('input[name="user_password"]').fill('admin')
    await page.getByRole('button', { name: 'Login' }).click()

    await page.locator('a').filter({ hasText: /^More$/ }).click()
    await page.locator('#allMenu').getByRole('link', { name: 'Invoice' }).click()
    await page.getByRole('link', { name: 'Create Invoice...' }).click()

    await page.locator('input[name="subject"]').fill('Invoice Details')
    await page.locator('#customerno').fill('1234')

    let [organizationPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(1).click()
    ])
    await organizationPage.locator('[id="1"]').click()

    let [contactPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(2).click()
    ])
    await contactPage.getByRole('link', {name: 'The walt disney company'}).click()

    let [quotationPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).first().click()
    ])
    await quotationPage.getByRole('link', {name: 'Accept Quotation'}).click()

    await page.locator('#vtiger_purchaseorder').fill('222')

    await page.locator('select[name="invoicestatus"]').selectOption('Created')

    await page.locator('textarea[name="bill_street"]').fill('xxxxxxx')

    await page.locator('textarea[name="ship_street"]').fill('yyyyyyy')

    await page.locator('#ship_city').fill('bangalore')
    await page.locator('#ship_state').fill('karnataka')
    await page.locator('#ship_code').fill('22222')
    await page.locator('#ship_country').fill('India')

    await page.locator('input[name="qty1"]').fill('20.00')

    await page.getByRole('button', { name: 'Save' }).nth(1).click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', {name: 'Sign Out'}).click()
})