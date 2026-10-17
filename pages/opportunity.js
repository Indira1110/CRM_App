import {test} from '@playwright/test'

export class opportunityClass {
    #Opportunities
    #CreateOpportunity
    #potentialname
   // #TWDC
    #sales_stage
    #description
    #amount
    #Save
    constructor (page){
        this.page=page
        this.#Opportunities=page.getByRole('link', { name: 'Opportunities' })
        this.#CreateOpportunity=page.getByRole('link', {name: 'Create Opportunity...'})
        this.#potentialname=page.locator('//input[@name="potentialname"]')
        //this.#TWDC=organizationPage.getByRole('link', { name: 'The walt disney company' })
        this.#sales_stage=page.locator('//select[@name="sales_stage"]')
        this.#description=page.locator('//textarea[@name="description"]')
        this.#amount=page.locator('//input[@name="amount"]')
        this.#Save=page.getByRole('button', { name: 'Save' }).first()

    }
    async opportunityMethod (opotentialname, odescription, oamount){
        await this.#Opportunities.click()
        await this.#CreateOpportunity.click()
        await this.#potentialname.fill(opotentialname)
        await this.#sales_stage.selectOption({ value: 'Proposal/Price Quote' })
        await this.#description.fill(odescription)
        await this.#amount.fill(oamount)
        await this.#Save.click()
    }

}
