import { CommonPage } from "./common";
import {Page, expect} from '@playwright/test'
import testData from '../testData/JsonFiles/testData.json'

const {password, confirmPassword} = testData


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

        async createNewUser() {
            await this.elementVisible(this.page.getByRole('button', { name: 'add_circle_outline Add' }), 60000)
            await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click()
            await this.page.getByText('Add Application User', {exact: true}).waitFor({state: 'visible', timeout: 60000})
            await this.page.locator('[name="Email"]').fill('Test123321@gmail.com')
            await this.page.locator('[class="rz-dropdown valid rz-state-empty"]').click()
            await this.page.locator('[class="rz-dropdown-items rz-dropdown-list"]').last().waitFor({state: 'visible', timeout: 60000})
            await this.page.locator('[aria-label="Test_63233549"]').click()
            await this.page.locator('input[name="Password"]').fill(password)
            await this.page.locator('input[name="ConfirmPassword"]').fill(confirmPassword)
            await this.page.getByRole('button', { name: 'save Save' }).click()

        }

}