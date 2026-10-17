import {test} from '../../fixtures/login.js'
import { leadClass } from '../../pages/lead.js'
import leadData from '../../testdata/lead.json'

test('login', async ({loginfixture}) => {
    test.slow()
    let leadcreate = new leadClass(loginfixture)
    await leadcreate.leadmethods(leadData.firstname, leadData.lastname,leadData.company)

})
