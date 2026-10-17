import {test} from '@playwright/test'
export class leadClass{
    #leads
    #createlead
    #salutationtype
    #firstname
    #lastname
    #company
    #save
   // #validation
    constructor(page){
        this.page=page
        this.#leads = page.getByRole('cell', {name: 'Leads', exact: true})
        this.#createlead =  page.getByRole('img', {name: 'Create Lead...'})
        this.#salutationtype = page.locator('//select[@name="salutationtype"]')
        this.#firstname = page.locator('//input[@name="firstname"]')
        this.#lastname = page.locator('//input[@name="lastname"]')
        this.#company = page.locator('//input[@name="company"]')
        this.#save = page.locator('//input[@title="Save [Alt+S]"]').first()
        //this.#validation = page.locator('//span[@id="dtview_First Name"]')
    }
    async leadmethods(first_name, last_name, company_name){
        await this.#leads.click()
        await this.#createlead.click()
        await this.#salutationtype.selectOption({value: 'Ms.'})
        await this.#firstname.fill(first_name)
        await this.#lastname.fill(last_name)
        await this.#company.fill(company_name)
        await this.#save.click()

    }

}
