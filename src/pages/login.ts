import { Page } from "playwright"
import {expect, Locator} from '@playwright/test'



export class LoginPage {

    page: Page
    userName: Locator

    constructor(page: Page) {
        this.page = page
        this.userName = this.page.getByRole('textbox', { name: 'Username' })
    }


    async userLogin() {
        await this.page.goto('https://testcms.reco-claims.ca/Login')
        await this.userName.fill('info+programmanager@xlgclaims.com')
        await this.page.getByRole('textbox', { name: 'Password' }).fill('Test1234!')
        await this.page.getByRole('button', { name: 'Login' }).click()
        await this.page.locator('[class="rz-menu rz-profile-menu"]').waitFor({ state: 'visible', timeout: 60000 })
        await expect(this.page.locator('[class="rz-menu rz-profile-menu"]')).toBeVisible()
    }





}