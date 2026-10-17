import {test} from '../../fixtures/fixtures'
import contactData from '../../testdata/contact.json'

test ('contact with fixture', async ({contact}) => {
    test.slow()
    await contact.conatactMethod(contactData.department, contactData.description, contactData.email, contactData.firstname, contactData.lastname, contactData.mailingcity, contactData.mailingcountry, contactData.mailingstate, contactData.mailingzip, contactData.mobile)
    
})
