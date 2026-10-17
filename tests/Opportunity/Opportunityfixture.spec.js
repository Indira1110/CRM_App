import {test} from '../../fixtures/fixtures'
import  opportunitydata from '../../testdata/opportunity.json'

test ('opportunity with fixtures', async ({opportunity}) => {
    test.slow()
    await opportunity.opportunityMethod(opportunitydata.amount, opportunitydata.description, opportunitydata.potentialname)
    
})