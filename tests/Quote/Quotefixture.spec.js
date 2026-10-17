import {test} from '../../fixtures/fixtures'
import { quoteClass } from '../../pages/quote'
import quoteData from '../../testdata/quote.json'

test ('quote with fixture', async ({quote}) => {
    test.slow()
    await quote.quoteMethod(quoteData.adjustment, quoteData.bill_street, quoteData.listPrice1, quoteData.qty1, quoteData.ship_street, quoteData.shipping_handling_charge, quoteData.subject)
    
})
