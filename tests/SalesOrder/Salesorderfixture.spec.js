import {test} from '../../fixtures/fixtures'
import salesData from '../../testdata/sales.json'

test('sales with fixtures', async ({sales}) => {
    test.slow()
    await sales.salesMethod(salesData.bill_street, salesData.ship_street, salesData.subject)
    
})
