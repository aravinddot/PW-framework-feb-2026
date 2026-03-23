import { Page } from "playwright"
import { expect, Locator } from '@playwright/test'
import { CommonPage } from "./common";



export class LoginPage extends CommonPage {

    page: Page;
    userNameLocator: Locator;
    baseUrl: string;
    userName: string;
    password: string;


    constructor(page: Page) {
        super(page)
        this.page = page
        this.userNameLocator = this.page.getByRole('textbox', { name: 'Username' })
        this.baseUrl = process.env.BASE_URL || ''
        this.userName = process.env.USER_NAME || ''
        this.password = process.env.PASS_WORD || ''
    }


    async userLogin() {
        await this.page.goto(`${this.baseUrl}/Login`)
        await this.userNameLocator.fill(this.userName)
        await this.page.getByRole('textbox', { name: 'Password' }).fill(this.password)
        await this.page.getByRole('button', { name: 'Login' }).click()
        await this.page.locator('[class="rz-menu rz-profile-menu"]').waitFor({ state: 'visible', timeout: 60000 })
        await this.elementVisible(this.page.locator('[class="rz-menu rz-profile-menu"]'), 60000)
    }





}