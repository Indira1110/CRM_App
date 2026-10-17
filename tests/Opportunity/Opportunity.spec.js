import { test } from '@playwright/test'
import loginData from '../../testdata/login.json'
import opportunityData from '../../testdata/opportunity.json'
import { opportunityClass } from '../../pages/opportunity'
import { login } from '../../pages/login'


test('opportunity with pom', async ({page}) => {
    let signin = new login(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username, loginData.password)
    let opportunitycreate = new opportunityClass(page)
    await opportunitycreate.opportunityMethod(opportunityData.potentialname, opportunityData.description, opportunityData.amount)
})



test('opportunity with ddt', async ({ page }) => {

    await page.goto(loginData.url)
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password)
    await page.getByRole('button', { name: 'Login' }).click()

    await page.getByRole('link', { name: 'Opportunities' }).click()
    await page.getByRole('link', {name: 'Create Opportunity...'}).click()

    await page.locator('//input[@name="potentialname"]').fill(opportunityData.potentialname)

    let opportunityName = await page.locator('//input[@name="potentialname"]').inputValue()
    console.log('Opportunity Name:', opportunityName)

    let [organizationPage] = await Promise.all([page.waitForEvent('popup'),
        page.getByRole('img', { name: 'Select' }).first().click()
    ])

    await organizationPage.getByRole('link', { name: 'The walt disney company' }).click()

    await page.locator('//select[@name="sales_stage"]').selectOption({ value: 'Proposal/Price Quote' })

    await page.locator('//textarea[@name="description"]').fill(opportunityData.description)

    await page.locator('//input[@name="amount"]').fill(opportunityData.amount)

    await page.getByRole('button', { name: 'Save' }).nth(1).click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', { name: 'Sign Out' }).click()
})





test('create opportunity', async ({ page }) => {

    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button', { name: 'Login' }).click()

    await page.getByRole('Opportunity', { name: 'Opportunities' }).first().click()
    await page.getByRole('Create Button', { name: 'Create Opportunity...' }).click()

    await page.locator('//input[@name="potentialname"]').fill('Streaming')
    let opportunityName = await page.locator('//input[@name="potentialname"]').inputValue()

    let [organizationPage] = await Promise.all([ page.waitForEvent('popup'), page.getByRole('img', { name: 'Select' }).first().click() ]) 
    await organizationPage .getByRole('link', { name: 'The walt disney company' }) .click()

    await page.locator('//select[@name="sales_stage"]').selectOption({ value: 'Proposal/Price Quote' })

    await page.locator('//textarea[@name="description"]').fill('kjkh8sdsciucsub')

    await page.locator('//input[@name="amount"]').fill('500000')

    await page.getByRole('button', { name: 'Save' }).nth(1).click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', { name: 'Sign Out' }).click()
})
