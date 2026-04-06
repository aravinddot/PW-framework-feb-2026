import { test } from '../src/config/fixtures'
import { ClaimsPage } from '../src/pages/claims'
import { claimsPageHeader } from '../src/constants/constants'
import * as allure from 'allure-js-commons'

test.describe('Claims Page Tests', ()=> {

    let claimspage: ClaimsPage

    test.beforeEach(async({pageWithLogin})=> {
        claimspage = new ClaimsPage(pageWithLogin)
    })

    test('Verify validation when required fields are empty', async()=> {
        await allure.owner('Playwright Team')
        await allure.severity('critical')
        await allure.feature('Claims Page')
        await allure.step('verify the headers in claims page', async()=> {

        await claimspage.verifyHeaders(claimsPageHeader)
        })

    })



})