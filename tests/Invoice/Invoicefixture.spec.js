import {test} from '../../fixtures/fixtures'
import invoiceData from '../../testdata/invoice.json'

test('invoice with fixture', async ({invoice}) => {
    test.slow()
    await invoice.invoiceMethod(invoiceData.bill_street, invoiceData.customerno, invoiceData.qty1, invoiceData.ship_city, invoiceData.ship_code, invoiceData.ship_country, invoiceData.ship_state, invoiceData.ship_street, invoiceData.subject, invoiceData.vtiger_purchaseorder)
    
})
