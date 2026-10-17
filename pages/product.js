import {test} from '@playwright/test'

export class productClass {
    #Products
    #CreateProduct
    #productname
    #productcategory
    #description
    #Save
    constructor (page){
        this.page=page
        this.#Products=page.getByRole('link', { name: 'Products' })
        this.#CreateProduct=page.getByRole('link', { name: 'Create Product...'})
        this.#productname=page.locator('//input[@name="productname"]')
        this.#productcategory=page.locator('//select[@name="productcategory"]')
        this.#description=page.locator('//textarea[@name="description"]')
        this.#Save=page.getByRole('button', { name: 'Save' }).nth(1)
    }
    async productMethod (pproductname, pdescription){
        await this.#Products.click()
        await this.#CreateProduct.click()
        await this.#productname.fill(pproductname)
        await this.#productcategory.selectOption({ value: 'Software' })
        await this.#description.fill(pdescription)
        await this.#Save.click()
        
    }
}
