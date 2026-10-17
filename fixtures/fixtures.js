import {test as base} from './login.js';
import { leadClass } from '../pages/lead.js';
import { organizationClass } from '../pages/organization.js'
import { conatactClass } from '../pages/contact.js';
import {opportunityClass} from '../pages/opportunity.js'
import {productClass} from '../pages/product.js'
import { quoteClass} from '../pages/quote.js'
import {salesClass} from '../pages/sales.js'
import { invoiceClass } from '../pages/invoice.js';

export let test = base.extend({
    lead : async ({loginfixture},use) => {
        let leadcreate = new leadClass(loginfixture)
        use(leadcreate)
    },
    organization : async ({loginfixture},use) => {
        let organizationcreate = new organizationClass(loginfixture)
        use(organizationcreate) 
    },
    contact : async ({loginfixture},use) => {
        let contactcreate = new conatactClass(loginfixture)
        use(contactcreate)
    },
    opportunity : async ({loginfixture},use) => {
        let  opportunitycreate = new opportunityClass(loginfixture)
        use(opportunitycreate)   
    },
    product : async ({loginfixture},use) => {
        let productcreate = new productClass(loginfixture)
        use(productcreate)   
    },
    quote : async ({loginfixture},use) => {
        let quoteCreate = new quoteClass(loginfixture)
        use(quoteCreate)  
    }, 
    sales : async ({loginfixture},use) => {
        let SalesCreate = new salesClass(loginfixture)
        use(SalesCreate)  
    },
    invoice : async ({loginfixture},use) => {
        let invoiceCreate = new invoiceClass(loginfixture)
        use(invoiceCreate)   
    }
})
