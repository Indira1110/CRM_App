import { test } from '@playwright/test'
import loginData from '../../testdata/login.json'
import contactData from '../../testdata/contact.json'
import { conatactClass } from '../../pages/contact'
import { login } from '../../pages/login'

test('contact with pom', async ({page}) => {
    let signin = new login(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username, loginData.password)
    let contactcreate = new conatactClass(page)
    await contactcreate.conatactMethod(contactData.firstname, contactData.lastname, contactData.department, contactData.email, contactData.mobile, contactData.mailingcity, contactData.mailingstate, contactData.mailingzip, contactData.mailingcountry, contactData.description)

})



test('contact with ddt', async ({ page }) => {

    await page.goto(loginData.url) 
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password) 
    await page.getByRole('button', { name: 'Login' }).click()

    await page.getByRole('link', { name: 'Contacts' }).click()
    await page.getByRole('link', { name: 'Create Contact...' }).click()

    await page.locator('//select[@name="salutationtype"]').selectOption({ value: 'Mr.' })
    await page.locator('//input[@name="firstname"]').fill(contactData.firstname)
    let firstname = await page.locator('//input[@name="firstname"]').inputValue()
    await page.locator('//input[@name="lastname"]').fill(contactData.lastname)
    await page.locator('//select[@name="leadsource"]').selectOption({ value: 'Employee' })
    await page.locator('//input[@id="department"]').fill(contactData.department)
    await page.locator('//input[@id="email"]').fill(contactData.email)
    await page.locator('//input[@id="mobile"]').fill(contactData.mobile)
    await page.locator('//input[@id="mailingcity"]').fill(contactData.mailingcity)
    await page.locator('//input[@id="mailingstate"]').fill(contactData.mailingstate)
    await page.locator('//input[@id="mailingzip"]').fill(contactData.mailingzip)
    await page.locator('//input[@id="mailingcountry"]').fill(contactData.mailingcountry)
    await page.locator('//textarea[@name="description"]').fill(contactData.description)

    await page.locator('//input[@title="Save [Alt+S]"]').first().click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', { name: 'Sign Out' }).click()
})


test('create contact', async ({ page }) => {

    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button', { name: 'Login' }).click()

    await page.getByRole('link', { name: 'Contacts' }).click()
    await page.getByRole('link', { name: 'Create Contact...' }).click()

    await page.locator('//select[@name="salutationtype"]').selectOption({ value: 'Mr.' })
    await page.locator('//input[@name="firstname"]').fill('Mahesh')
    let firstname = await page.locator('//input[@name="firstname"]').inputValue()
    await page.locator('//input[@name="lastname"]').fill('Malgi')
    await page.locator('//select[@name="leadsource"]').selectOption({ value: 'Employee' })
    await page.locator('//input[@id="department"]').fill('IT')
    await page.locator('//input[@id="email"]').fill('abc@gmail.com')
    await page.locator('//input[@id="mobile"]').fill('123456789')
    await page.locator('//input[@id="mailingcity"]').fill('Bangalore')
    await page.locator('//input[@id="mailingstate"]').fill('Karnataka')
    await page.locator('//input[@id="mailingzip"]').fill('222222')
    await page.locator('//input[@id="mailingcountry"]').fill('India')
    await page.locator('//textarea[@name="description"]').fill('g87wcsjcbiucg')

    await page.locator('//input[@title="Save [Alt+S]"]').first().click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', { name: 'Sign Out' }).click()
})