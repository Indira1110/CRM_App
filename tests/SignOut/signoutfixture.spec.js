import { expect } from '@playwright/test'
import { test } from '../../fixtures/signout.js'
import signoutData from '../../testdata/signout.json'
import { login } from '../../pages/login.js'
import { signoutClass } from '../../pages/signout.js'

test.describe('Sign Out', () => {
    test.describe.configure({ mode: 'serial' })

    test('Sign out using test data (DDT)', async ({ page }) => {
        // 1. Open the CRM login page and enter the sign-out test data credentials.
        await page.goto(signoutData.url)
        await page.locator('input[name="user_name"]').fill(signoutData.username)
        await page.locator('input[name="user_password"]').fill(signoutData.password)
        await page.getByRole('button', { name: 'Login' }).click()
        await expect(page).toHaveTitle(/Administrator - Home/)

        // 2. Hover over the profile icon and select Sign Out.
        await page.locator('img[src="themes/softed/images/user.PNG"]').hover()
        await page.getByRole('link', { name: 'Sign Out' }).click()
        await expect(page).toHaveURL(/action=Login/)
        await expect(page.locator('input[name="user_name"]')).toBeVisible()
    })

    test('Sign out using page objects (POM)', async ({ page }) => {
        // 1. Authenticate using the login page object and sign-out test data.
        const signIn = new login(page)
        await signIn.launch(signoutData.url)
        await signIn.action(signoutData.username, signoutData.password)
        await expect(page).toHaveTitle(/Administrator - Home/)

        // 2. Use the sign-out page object to open the profile menu and select Sign Out.
        const signOut = new signoutClass(page)
        await signOut.signout()
        await expect(page).toHaveURL(/action=Login/)
        await expect(page.locator('input[name="user_name"]')).toBeVisible()
    })

    test('Sign out using an authenticated fixture', async ({ signout }) => {
        // 1. Use the sign-out fixture to start with an authenticated CRM page.
        await expect(signout.page).toHaveTitle(/Administrator - Home/)

        // 2. Select Sign Out from the user profile menu.
        await signout.signout()
        await expect(signout.page).toHaveURL(/action=Login/)
        await expect(signout.page.locator('input[name="user_name"]')).toBeVisible()
    })

    test('Sign out and prevent access to the authenticated session', async ({ page }) => {
        // 1. Sign in using test data and select Sign Out.
        await page.goto(signoutData.url)
        await page.locator('input[name="user_name"]').fill(signoutData.username)
        await page.locator('input[name="user_password"]').fill(signoutData.password)
        await page.getByRole('button', { name: 'Login' }).click()
        await expect(page).toHaveTitle(/Administrator - Home/)
        await page.locator('img[src="themes/softed/images/user.PNG"]').hover()
        await page.getByRole('link', { name: 'Sign Out' }).click()
        await expect(page).toHaveURL(/action=Login/)

        // 2. Reload after sign-out and verify the login form remains visible.
        await page.reload()
        await expect(page.locator('input[name="user_name"]')).toBeVisible()
        await expect(page).not.toHaveTitle(/Administrator - Home/)
    })
})