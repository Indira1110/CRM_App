import {test} from '../../fixtures/fixtures'
import organizationdata from '../../testdata/organization.json'

test('organization with fixture', async ({organization}) => {
    test.slow()
    await organization.organizationMethod(organizationdata.accountname, organizationdata.bill_city, organizationdata.bill_code, organizationdata.bill_country, organizationdata.bill_state, organizationdata.description, organizationdata.industry, organizationdata.website)
    
})
