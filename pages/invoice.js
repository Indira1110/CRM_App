import {test} from '@playwright/test'

export class invoiceClass {
    #a
    #Invoice
    #CreateInvoice
    #subject
    #customerno
   // #AcceptQuotation
    #vtiger_purchaseorder
    #invoicestatus
    #bill_street
    #ship_street
    #ship_city
    #ship_state
    #ship_code
    #ship_country
    #qty1
    #Save
    constructor (page) {
        this. page=page
        this.#a=page.locator('a').filter({ hasText: /^More$/ })
        this.#Invoice=page.locator('#allMenu').getByRole('link', { name: 'Invoice' })
        this.#CreateInvoice=page.getByRole('link', { name: 'Create Invoice...' })
        this.#subject=page.locator('input[name="subject"]')
        this.#customerno=page.locator('#customerno')
        //this.#AcceptQuotation=
        this.#vtiger_purchaseorder=page.locator('#vtiger_purchaseorder')
        this.#invoicestatus=page.locator('select[name="invoicestatus"]')
        this.#bill_street=page.locator('textarea[name="bill_street"]')
        this.#ship_street=page.locator('textarea[name="ship_street"]')
        this.#ship_city=page.locator('#ship_city')
        this.#ship_state=page.locator('#ship_state')
        this.#ship_code=page.locator('#ship_code')
        this.#ship_country=page.locator('#ship_country')
        this.#qty1=page.locator('input[name="qty1"]')
        this.#Save=page.getByRole('button', { name: 'Save' }).nth(1)
    }
    async invoiceMethod (isubject, icustomerno, ivtiger_purchaseorder, ibill_street, iship_street, iship_city, iship_state, iship_code, iship_country, iqty1){
        await this.#a.click()
        await this.#Invoice.click()
        await this.#CreateInvoice.click()
        await this.#subject.fill(isubject)
        await this.#customerno.fill(icustomerno)
        //this.#AcceptQuotation
        await this.#vtiger_purchaseorder.fill(ivtiger_purchaseorder)
        await this.#invoicestatus.selectOption('Created')
        await this.#bill_street.fill(ibill_street)
        await this.#ship_street.fill(iship_street)
        await this.#ship_city.fill(iship_city)
        await this.#ship_state.fill(iship_state)
        await this.#ship_code.fill(iship_code)
        await this.#ship_country.fill(iship_country)
        await this.#qty1.fill(iqty1)
        await this.#Save.click()
    }    
}
