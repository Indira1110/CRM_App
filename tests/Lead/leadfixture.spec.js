import {test} from '../../fixtures/fixtures.js'
import Leaddata from '../../testdata/lead.json'

test('lead with fixture', async ({lead}) => {
    test.slow()
    await lead.leadmethods(Leaddata.firstname, Leaddata.lastname, Leaddata.company)
    
})
