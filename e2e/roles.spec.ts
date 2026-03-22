import {test, expect} from '@playwright/test'
import { LoginPage } from '../src/pages/login'
import { RolesPage } from '../src/pages/roles'

test.describe('Roles Page Tests', ()=> {

    

    test('Verify Add application popup in roles page', async({page})=> {
        test.setTimeout(180000)
        const loginPage = new LoginPage(page)
        await loginPage.userLogin()
        const rolesPage = new RolesPage(page)
        await rolesPage.navigateViaDashboard()
        await rolesPage.verifyAddApplication()
        
    })



})