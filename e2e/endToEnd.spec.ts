import { test, expect } from '@playwright/test';
import { pool } from '../src/utils/dbUtils'

test.describe('End to End Tests', () => {


    test('validate the carts in automationpractice', async ({ page, request }) => {

        //https://automationexercise.com/api/productsList

        await page.goto('https://automationexercise.com/')

        const response = await request.get('https://automationexercise.com/api/productsList')

        expect(response.status()).toBe(200)

        const body = await response.json()

        console.log(body);

        for (const product of body.products) {

            await expect(page.locator('//div[@class="single-products"]').getByText(product.name).first()).toBeVisible();

        }


    })




    test('validate the carts data from DB in automationpractice', async ({ page, request }) => {

        //https://automationexercise.com/api/productsList

        await page.goto('https://automationexercise.com/')

        const result = await pool.query('select * from products')

        const row = result.rows

        for (const product of row) {
            await expect(page.locator('//div[@class="single-products"]').getByText(product.product_name).first()).toBeVisible();
        }



    })




});