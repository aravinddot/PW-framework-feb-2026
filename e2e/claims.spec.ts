import { test } from '../src/config/fixtures'
import { ClaimsPage } from '../src/pages/claims'
import { claimsPageHeader } from '../src/constants/constants'

test.describe('Claims Page Tests', ()=> {

    let claimspage: ClaimsPage

    test.beforeEach(async({pageWithLogin})=> {
        claimspage = new ClaimsPage(pageWithLogin)
    })

    test('Verify validation when required fields are empty', async()=> {
        await claimspage.verifyHeaders(claimsPageHeader)
    })



})