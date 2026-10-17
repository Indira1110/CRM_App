import {test} from '@playwright/test'

export class conatactClass {
    #Contacts
    #CreateContact
    #salutationtype
    #firstname
    #lastname
    #leadsource
    #department
    #email
    #mobile
    #mailingcity
    #mailingstate
    #mailingzip
    #mailingcountry
    #description
    #Save
    constructor(page){
        this.page=page
        this.#Contacts=page.getByRole('link', { name: 'Contacts' })
        this.#CreateContact=page.getByRole('link', { name: 'Create Contact...' })
        this.#salutationtype=page.locator('//select[@name="salutationtype"]')
        this.#firstname=page.locator('//input[@name="firstname"]')
        this.#lastname=page.locator('//input[@name="lastname"]')
        this.#leadsource=page.locator('//select[@name="leadsource"]')
        this.#department=page.locator('//input[@id="department"]')
        this.#email=page.locator('//input[@id="email"]')
        this.#mobile=page.locator('//input[@id="mobile"]')
        this.#mailingcity=page.locator('//input[@id="mailingcity"]')
        this.#mailingstate=page.locator('//input[@id="mailingstate"]')
        this.#mailingzip=page.locator('//input[@id="mailingzip"]')
        this.#mailingcountry=page.locator('//input[@id="mailingcountry"]')
        this.#description=page.locator('//textarea[@name="description"]')
        this.#Save=page.locator('//input[@title="Save [Alt+S]"]').first()
    }
    async conatactMethod(cfirstname, clastname, cdepartment, cemail, cmobile, cmailingcity, cmailingstate, cmailingzip, cmailingcountry, cdescription){
        await this.#Contacts.click()
        await this.#CreateContact.click()
        await this.#salutationtype.selectOption({ value: 'Mr.' })
        await this.#firstname.fill(cfirstname)
        await this.#lastname.fill(clastname)
        await this.#leadsource.selectOption({ value: 'Employee' })
        await this.#department.fill(cdepartment)
        await this.#email.fill(cemail)
        await this.#mobile.fill(cmobile)
        await this.#mailingcity.fill(cmailingcity)
        await this.#mailingstate.fill(cmailingstate)
        await this.#mailingzip.fill(cmailingzip)
        await this.#mailingcountry.fill(cmailingcountry)
        await this.#description.fill(cdescription)
        await this.#Save.click()

        
    }
}
