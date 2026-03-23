import { test } from '../src/config/fixtures'
import { RolesPage } from '../src/pages/roles'

test.describe('Roles Page Tests', ()=> {

    let rolesPage: RolesPage

    test.beforeEach(async({pageWithLogin})=> {
        rolesPage = new RolesPage(pageWithLogin)
    })

    test('Verify Add application popup in roles page', async()=> {
        await rolesPage.navigateViaDashboard('Administrator', 'Roles')
        await rolesPage.verifyAddApplication()
    })

    test('Verify user can create a new role', async({})=> {
        await rolesPage.navigateViaDashboard('Administrator', 'Roles')
        await rolesPage.verifyAddApplication()
        await rolesPage.createNewRole()
    })



})