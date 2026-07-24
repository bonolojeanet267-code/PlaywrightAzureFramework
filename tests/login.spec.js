const { test, expect } = require('../fixtures/baseFixture');
const config = require('../utils/config');
const AzureTestCase = require('../azure/azureTestCase');

test.describe('SauceDemo Login Tests', () => {

    test('@smoke @regression Successful Login', async ({ page, loginPage, inventoryPage }) => {

        // Azure Test Case Mapping
        test.info().annotations.push({
            type: 'AzureTestCase',
            description: AzureTestCase.map.SuccessfulLogin.toString()
        });

        console.log(`Executing Azure Test Case: ${AzureTestCase.map.SuccessfulLogin}`);

        await test.step('Navigate to SauceDemo', async () => {
            await loginPage.navigate();
        });

        await test.step('Verify Login Page Title', async () => {
            await expect(page).toHaveTitle('Swag Labs');
        });

        await test.step('Login with valid credentials', async () => {
            await loginPage.login(
                config.users.standard.username,
                config.users.standard.password
            );
        });

        await test.step('Verify Inventory Page URL', async () => {
            await expect(page).toHaveURL(/inventory/);
        });

        await test.step('Verify Inventory Page Title', async () => {
            await expect(await inventoryPage.getPageTitle()).toBe('Products');
        });

        await test.step('Verify Shopping Cart is Visible', async () => {
            await expect(page.locator('.shopping_cart_link')).toBeVisible();
        });

        console.log('Login test completed successfully.');

    });

});