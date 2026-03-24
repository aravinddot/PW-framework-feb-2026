import {test as baseTest, Page} from '@playwright/test'
import { LoginPage } from '../pages/login'
import { LoginFixtures } from '../types/types'



export const test = baseTest.extend<LoginFixtures>({
    pageWithLogin: async({page}, use)=> {
        const loginPage = new LoginPage(page)
        await loginPage.userLogin()
        await use(page)
    }
})