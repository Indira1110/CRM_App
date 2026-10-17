import { test } from '@playwright/test'
import loginData from '../../testdata/login.json'
import leadData from '../../testdata/lead.json'
import { login } from '../../pages/login'
import { leadClass } from '../../pages/lead'

test('lead', async ({page}) => {
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button', {name: 'Login'}).click()
    await page.getByRole('cell', {name: 'Leads', exact: true}).click()
    await page.getByRole('img', {name: 'Create Lead...'}).click()
    await page.locator('//select[@name="salutationtype"]').selectOption({value: 'Ms.'})
    await page.locator('//input[@name="firstname"]').fill('Akhila')
    let firstname = await page.locator('//input[@name="firstname"]').inputValue()
    await page.locator('//input[@name="lastname"]').fill('Gandla')
    await page.locator('//input[@name="company"]').fill('testyantra')
    await page.locator('//input[@title="Save [Alt+S]"]').first().click()
    let fn = await page.locator('//span[@id="dtview_First Name"]').textContent()
    console.log(fn);

    if(firstname === fn.trim()){
        console.log('the lead is created');
    } else {
        console.log('lead is not created');
    }

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', {name: 'Sign Out'}).click()
})


test('lead with ddt', async ({page}) => {
    test.slow()
    await page.goto(loginData.url)
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password)
    await page.getByRole('button', {name: 'Login'}).click()
    await page.getByRole('cell', {name: 'Leads', exact: true}).click()
    await page.getByRole('img', {name: 'Create Lead...'}).click()
    await page.locator('//select[@name="salutationtype"]').selectOption({value: 'Ms.'})
    await page.locator('//input[@name="firstname"]').fill(leadData.firstname)
    let firstname = await page.locator('//input[@name="firstname"]').inputValue()
    await page.locator('//input[@name="lastname"]').fill(leadData.lastname)
    await page.locator('//input[@name="company"]').fill(leadData.company)
    await page.locator('//input[@title="Save [Alt+S]"]').first().click()
    // let fn = await page.locator('//span[@id="dtview_First Name"]').textContent()
    // console.log(fn);

    // if(firstname === fn.trim()){
    //     console.log('the lead is created');
    // } else {
    //     console.log('lead is not created');
    // }

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', {name: 'Sign Out'}).click()
})

test('Lead with pom and ddt', async ({page}) => {
    let signin = new login(page)
    await signin.launch(loginData.url)
    await signin.action(loginData.username, loginData.password)
    let leadcreate = new leadClass(page)
    await leadcreate.leadmethods(leadData.firstname, leadData.lastname, leadData.company)
})