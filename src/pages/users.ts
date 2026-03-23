import { CommonPage } from "./common";
import {Page, expect} from '@playwright/test'


export class UsersPage extends CommonPage {

    page: Page
        constructor(page: Page) {
            super(page)
            this.page = page
        }


        async validateErrMessage() {
            await this.elementVisible(this.page.getByRole('button', { name: 'add_circle_outline Add' }), 60000)
            await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click()
            await this.page.getByText('Add Application User', {exact: true}).waitFor({state: 'visible', timeout: 60000})
            await this.page.getByRole('button', {name: 'Save'}).click()
            await expect(this.page.getByText('Confirm Password is require')).toBeVisible()
        }

}