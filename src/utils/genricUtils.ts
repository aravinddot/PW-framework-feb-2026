import { Locator, Page } from "playwright"
import { expect } from "playwright/test"


export class GenricUtils {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async elementVisible(locator: Locator, timeout: number) {
        await locator.waitFor({ state: 'visible', timeout: timeout })
    }

    async clickAction(locator: Locator) {
        await locator.click()
    }

    async waitForApiResponse(url: string, time: number) {
        await this.page.waitForResponse(response => response.url().includes(url) && response.status() === 200, { timeout: time })
    }

    async elementIsVisible(locator: Locator) {
        await expect(locator).toBeVisible()
    }





}