import { Page } from "playwright";
import { CommonPage } from "./common";
import {expect} from '@playwright/test'


export class RolesPage extends CommonPage {


    constructor(page: Page) {
        super(page)
    }



    async verifyAddApplication() {
        await this.elementVisible(this.page.getByRole('heading', { name: 'Roles' }), 60000)

        
        await expect(this.page.getByRole('heading', { name: 'Roles' })).toBeVisible()
        await this.page.locator('[title="Name"]').waitFor({state: 'visible', timeout: 60000})
        await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click()
    //     await this.page.getByRole('heading', {name: 'Add Application Role'}).waitFor({state: 'visible', timeout: 60000})
    //     await expect(this.page.getByRole('heading', {name: 'Add Application Role'})).toBeVisible()
    //     await expect(this.page.getByRole('textbox')).toBeVisible()
    //     await expect(this.page.getByRole('button', {name: 'Save'})).toBeVisible()
    //     await expect(this.page.getByRole('button', {name: 'Cancel'})).toBeVisible()
    }



}