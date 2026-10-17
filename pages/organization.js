import {test} from '@playwright/test'

export class organizationClass {
    #Organizations
    #CreateOrganization
    #accountname
    #website
    #industry
    #accounttype
    #rating
    #bill_city
    #bill_state
    #bill_code
    #bill_country
    #description
    #Save
    constructor(page){
       this.page=page
       this.#Organizations=page.getByRole('link', { name: 'Organizations' })
       this.#CreateOrganization=page.getByRole('link', { name: 'Create Organization...'})
       this.#accountname=page.locator('//input[@name="accountname"]')
       this.#website=page.locator('//input[@name="website"]')
       this.#industry=page.locator('//select[@name="industry"]')
       this.#accounttype=page.locator('//select[@name="accounttype"]')
       this.#rating=page.locator('//select[@name="rating"]')
       this.#bill_city=page.locator('//input[@id="bill_city"]')
       this.#bill_state=page.locator('//input[@id="bill_state"]')
       this.#bill_code=page.locator('//input[@id="bill_code"]')
       this.#bill_country=page.locator('//input[@id="bill_country"]')
       this.#description=page.locator('//textarea[@name="description"]')
       this.#Save=page.getByRole('button', { name: 'Save' }).nth(1)
    }
    async organizationMethod(paccountname,pwebsite,pbillcity,pbillstate,pbillcode,pbillcountry,pdescription){
        await this.#Organizations.click()
        await this.#CreateOrganization.click()
        await this.#accountname.fill(paccountname)
        await this.#website.fill(pwebsite)
        await this.#industry.selectOption({ value: 'Technology' })
        await this.#accounttype.selectOption({ value: 'Other' })
        await this.#rating.selectOption({ value: 'Active' })
        await this.#bill_city.fill(pbillcity)
        await this.#bill_state.fill(pbillstate)
        await this.#bill_code.fill(pbillcode)
        await this.#bill_country.fill(pbillcountry)
        await this.#description.fill(pdescription)
        await this.#Save.click()
    }

}
