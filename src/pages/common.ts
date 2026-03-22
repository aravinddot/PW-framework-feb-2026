import { Page } from "playwright";
import {expect} from '@playwright/test'
import { GenricUtils } from "../utils/genricUtils";

export class CommonPage extends GenricUtils {

    page: Page

    constructor(page: Page) {
        super(page)
        this.page = page
    }


    async navigateViaDashboard() {
        await this.page.getByText('Administrator', {exact: true}).waitFor({state: 'visible', timeout: 60000})
        await this.page.getByText('Administrator', {exact: true}).click()
        await this.page.getByRole('link', { name: 'Roles' }).waitFor({state: 'visible', timeout: 60000})
        await this.page.getByRole('link', { name: 'Roles' }).click()
    }


}

