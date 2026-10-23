export class signoutClass {
    #profileImage
    #signOutLink

    constructor(page) {
        this.page = page
        this.#profileImage = page.locator('//img[@src="themes/softed/images/user.PNG"]')
        this.#signOutLink = page.getByRole('link', { name: 'Sign Out' })
    }

    async signout() {
        await this.#profileImage.hover()
        await this.#signOutLink.click()
    }
}
