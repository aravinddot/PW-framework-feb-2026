import { test } from '../src/config/fixtures'
import { UsersPage } from '../src/pages/users'

test.describe('Users Page Tests', ()=> {

    let usersPage: UsersPage

    test.beforeEach(async({pageWithLogin})=> {
        usersPage = new UsersPage(pageWithLogin)
    })

    test('Verify validation when required fields are empty', async()=> {
        await usersPage.navigateViaDashboard('Administrator', 'Users')
        await usersPage.validateErrMessage()
    })

})

  