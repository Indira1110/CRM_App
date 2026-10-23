import { test as base } from '@playwright/test'
import { login } from '../pages/login.js'
import { signoutClass } from '../pages/signout.js'
import signoutData from '../testdata/signout.json'

export const test = base.extend({
    signout: async ({ page }, use) => {
        const signIn = new login(page)
        await signIn.launch(signoutData.url)
        await signIn.action(signoutData.username, signoutData.password)
        await use(new signoutClass(page))
    }
})
