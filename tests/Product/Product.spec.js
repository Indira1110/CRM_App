import { test } from '@playwright/test'
import loginData from '../../testdata/login.json'
import productData from '../../testdata/product.json'
import { productClass } from '../../pages/product'
import { login } from '../../pages/login'

test('product with pom', async ({ page }) => {
    test.slow()
    let signin = new login(page)
    await signin.launch (loginData.url)
    await signin.action (loginData.username, loginData.password)
    let productCreate = new productClass(page)
    await productCreate.productMethod(productData.productname, productData.description)
})

test('product with ddt', async ({ page }) => {
    test.slow()
    await page.goto(loginData.url)
    await page.locator('//input[@name="user_name"]').fill(loginData.username)
    await page.locator('//input[@name="user_password"]').fill(loginData.password)
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByRole('link', { name: 'Products' }).click()
    await page.getByRole('link', { name: 'Create Product...'}).click()

    await page.locator('//input[@name="productname"]').fill(productData.productname)

    let productName = await page.locator('//input[@name="productname"]').inputValue()
    console.log('Product Name:', productName)

    await page.locator('//select[@name="productcategory"]').selectOption({ value: 'Software' })
    await page.locator('//textarea[@name="description"]').fill(productData.description)

    await page.getByRole('button', { name: 'Save' }).nth(1).click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', { name: 'Sign Out' }).click()
})




test('Create product', async ({ page }) => {

    await page.goto('http://localhost:8888/')

    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button', { name: 'Login' }).click()

    await page.getByRole('product', { name: 'Products' }).click()
    await page.getByRole('create button', { name: 'Create Product...' }).click()

    await page.locator('//input[@name="productname"]').fill('OTT')
    let productName = await page.locator('//input[@name="productname"]').inputValue()

    await page.locator('//select[@name="productcategory"]').selectOption({ value: 'Software' })

    await page.locator('//textarea[@name="description"]').fill('OTT Streaming Product')

    await page.getByRole('button', { name: 'Save' }).nth(1).click()

    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.getByRole('link', { name: 'Sign Out' }).click()
})
