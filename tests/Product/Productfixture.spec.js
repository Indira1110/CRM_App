import {test} from '../../fixtures/fixtures'
import productData from '../../testdata/product.json'

test('product with fixture', async ({product}) => {
    test.slow()
    await product.productMethod(productData.description, productData.productname)
    
})