import {test} from '@playwright/test'

export class quoteClass {
    #a
    #Quotes
    #CreateQuote
    #subject
    #bill_street
    #ship_street
    #qty1
    #listPrice1
    #shipping_handling_charge
    #adjustment
    #Save
    constructor (page){
        this.page=page
        this.#a=page.locator('a').filter({ hasText: /^More$/ })
        this.#Quotes=page.locator('#allMenu').getByRole('link', { name: 'Quotes' })
        this.#CreateQuote=page.getByRole('link', { name: 'Create Quote...' })
        this.#subject=page.locator('//input[@name="subject"]')
        this.#bill_street=page.locator('//textarea[@name="bill_street"]')
        this.#ship_street=page.locator('//textarea[@name="ship_street"]')
        this.#qty1=page.locator('//input[@name="qty1"]')
        this.#listPrice1=page.locator('#listPrice1')
        this.#shipping_handling_charge=page.locator('#shipping_handling_charge')
        this.#adjustment=page.locator('#adjustment')
        this.#Save=page.getByRole('button', { name: 'Save' }).nth(1)
    }
    async quoteMethod (qsubject, qbill_street, qship_street, qqty1, qlistPrice1, qshipping_handling_charge, qadjustment){
        await this.#a.click()
        await this.#Quotes.click()
        await this.#CreateQuote.click()
        await this.#subject.fill(qsubject)
        await this.#bill_street.fill(qbill_street)
        await this.#ship_street.fill(qship_street)
        await this.#qty1.fill(qqty1)
        await this.#listPrice1.fill(qlistPrice1)
        await this.#shipping_handling_charge.fill(qshipping_handling_charge)
        await this.#adjustment.fill(qadjustment)
        await this.#Save.click()
    }

}
