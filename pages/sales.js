import {test} from '@playwright/test'

export class salesClass {
    #SalesOrder
    #CreateSalesOrder
    #subject
    #bill_street
    #ship_street
    #Save
    constructor (page) {
        this.page=page
        this.#SalesOrder=page.locator('a[title="Sales Order"]').first()
        this.#CreateSalesOrder=page.getByRole('link', {name: 'Create Sales Order...'})
        this.#subject=page.locator('input[name="subject"]')
        this.#bill_street=page.locator('textarea[name="bill_street"]')
        this.#ship_street=page.locator('textarea[name="ship_street"]')
        this.#Save=page.getByRole('button', { name: 'Save' }).nth(1)
    }
    async salesMethod(ssubject, sbill_street, sship_street){
        await this.#SalesOrder.click()
        await this.#CreateSalesOrder.click()
        await this.#subject.fill(ssubject)
        await this.#bill_street.fill(sbill_street)
        await this.#ship_street.fill(sship_street)
        await this.#Save.click()
    }
}
