import {test as base} from '@playwright/test'
import {login} from '../pages/login'
import logindata from '../testdata/login.json'

export let test = base.extend({
    loginfixture : async ({page},use) => {
        let signin = new login(page)
        await signin.launch(logindata.url)
        await signin.action(logindata.username, logindata.password)
        use(page)
    }
})
