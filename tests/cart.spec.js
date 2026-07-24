const { test, expect } = require('../fixtures/baseFixture');
const config = require('../utils/config');
const AzureTestCase = require('../azure/azureTestCase');

test.describe('Cart Tests', () => {

    test('@regression Remove Item From Cart', async ({ page, loginPage, inventoryPage, cartPage }) => {

        test.info().annotations.push({
            type: 'AzureTestCase',
            description: AzureTestCase.map.RemoveProduct.toString()
        });

        await loginPage.navigate();

        await loginPage.login(
            config.users.standard.username,
            config.users.standard.password
        );

        await inventoryPage.addBackpackToCart();

        await inventoryPage.openCart();

        await expect(page).toHaveURL(/cart/);

        await cartPage.removeBackpack();

        await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);

    });

    test('@smoke Proceed To Checkout', async ({ page, loginPage, inventoryPage, cartPage }) => {

        await loginPage.navigate();

        await loginPage.login(
            config.users.standard.username,
            config.users.standard.password
        );

        await inventoryPage.addBackpackToCart();

        await inventoryPage.openCart();

        await cartPage.checkout();

        await expect(page).toHaveURL(/checkout-step-one/);

    });

});