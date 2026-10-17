import { test } from '@playwright/test'
import loginData from '../../testdata/login.json'
import quoteData from '../../testdata/quote.json'
import { quoteClass } from '../../pages/quote'
import { login } from '../../pages/login'

test ('quotation with pom', async ({ page }) => {
    test.slow()
    let signin = new login(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username, loginData.password)
    let quoteCreate = new quoteClass(page)
    await quoteCreate.quoteMethod(quoteData.subject, quoteData.bill_street, quoteData.ship_street, quoteData.qty1, quoteData.listPrice1, quoteData.shipping_handling_charge, quoteData.adjustment)
})


test('quotation with ddt', async ({ page }) => {
    test.slow()
    await page.goto(loginData.url)
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password)
    await page.getByRole('button', { name: 'Login' }).click()

    await page.locator('a').filter({ hasText: /^More$/ }).click()
    await page.locator('#allMenu').getByRole('link', { name: 'Quotes' }).click()
    await page.getByRole('link', { name: 'Create Quote...' }).click()

    await page.locator('//input[@name="subject"]').fill(quoteData.subject)
    let quoteSubject = await page.locator('//input[@name="subject"]').inputValue()

    let [opportunityPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).first().click()
    ])
    await opportunityPage.locator('[id="1"]').click()

    let [organizationPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(1).click()
    ])
    await organizationPage.locator('[id="1"]').click()

    await page.locator('//textarea[@name="bill_street"]').fill(quoteData.bill_street)
    await page.locator('//textarea[@name="ship_street"]').fill(quoteData.ship_street)


    let [productPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Products' }).click()
    ])
    await productPage.locator('#popup_product_17').click()
    await page.locator('//input[@name="qty1"]').fill(quoteData.qty1)
    await page.locator('#listPrice1').fill(quoteData.listPrice1)
    await page.locator('#shipping_handling_charge').fill(quoteData.shipping_handling_charge)
    await page.locator('#adjustment').fill(quoteData.adjustment)
    await page.getByRole('button', { name: 'Save' }).nth(1).click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', { name: 'Sign Out' }).click()
})




test('create OTT quotation', async ({ page }) => {

    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button', { name: 'Login' }).click()

    await page.locator('a').filter({ hasText: /^More$/ }).click()
    await page.locator('#allMenu').getByRole('link', { name: 'Quotes' }).click()
    await page.getByRole('link', { name: 'Create Quote...' }).click()

    await page.locator('//input[@name="subject"]').fill('Ott Quotation')
    let quoteSubject = await page.locator('//input[@name="subject"]').inputValue()

    let [opportunityPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).first().click()
    ])
    await opportunityPage.locator('[id="1"]').click()

    let [organizationPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).nth(1).click()
    ])
    await organizationPage.locator('[id="1"]').click()

    await page.locator('//textarea[@name="bill_street"]').fill('zxcvbnm')
    await page.locator('//textarea[@name="ship_street"]').fill('mnbvcx')


    let [productPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Products' }).click()
    ])
    await productPage.locator('#popup_product_17').click()
    await page.locator('//input[@name="qty1"]').fill('2')
    await page.locator('#listPrice1').fill('500000.00')
    await page.locator('#shipping_handling_charge').fill('2000')
    await page.locator('#adjustment').fill('500')
    await page.getByRole('button', { name: 'Save' }).nth(1).click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', { name: 'Sign Out' }).click()
})
