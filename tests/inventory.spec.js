const { test, expect } = require('../fixtures/baseFixture');
const config = require('../utils/config');
const AzureTestCase = require('../azure/azureTestCase');

test.describe('Inventory Tests', () => {

    test('@smoke Add Backpack To Cart', async ({ page, loginPage, inventoryPage }) => {

        test.info().annotations.push({
            type: 'AzureTestCase',
            description: AzureTestCase.map.AddBackpackToCart.toString()
        });

        await loginPage.navigate();

        await loginPage.login(
            config.users.standard.username,
            config.users.standard.password
        );

        await expect(page).toHaveURL(/inventory/);

        await inventoryPage.addBackpackToCart();

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    });

    test('@regression Add Multiple Products', async ({ page, loginPage, inventoryPage }) => {

        test.info().annotations.push({
            type: 'AzureTestCase',
            description: AzureTestCase.map.AddMultipleProducts.toString()
        });

        await loginPage.navigate();

        await loginPage.login(
            config.users.standard.username,
            config.users.standard.password
        );

        await inventoryPage.addBackpackToCart();
        await inventoryPage.addBikeLightToCart();
        await inventoryPage.addBoltShirtToCart();

        await expect(page.locator('.shopping_cart_badge')).toHaveText('3');

    });

});