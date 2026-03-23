import { Page } from "playwright";
import { CommonPage } from "./common";
import {expect, Locator} from '@playwright/test'


export class RolesPage extends CommonPage {

    page: Page;
    inputBox: Locator;
    saveBtn: Locator;
    cancelBtn: Locator;

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.inputBox = this.page.locator('input[name="Name"]');
        this.saveBtn = this.page.getByRole('button', {name: 'Save'});
        this.cancelBtn = this.page.getByRole('button', {name: 'Cancel'})
    }



    async verifyAddApplication() {
        await this.elementVisible(this.page.getByRole('heading', { name: 'Roles' }), 60000)
        await expect(this.page.getByRole('heading', { name: 'Roles' })).toBeVisible()
        await this.page.locator('[title="Name"]').waitFor({state: 'visible', timeout: 60000})
        await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click()
        await this.page.getByText('Add Application Role').waitFor({state: 'visible', timeout: 60000})
        await expect(this.page.getByText('Add Application Role')).toBeVisible()

        await expect(this.inputBox).toBeVisible()
        await expect(this.saveBtn).toBeVisible()
        await expect(this.cancelBtn).toBeVisible()
    }

    async createNewRole() {
        const num = await this.randomNumGenerator()
        await this.inputBox.fill(`Test_${num}`)
        await this.saveBtn.click()
    }



}