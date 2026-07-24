const { test, expect } = require('../fixtures/baseFixture');
const config = require('../utils/config');
const AzureTestCase = require('../azure/azureTestCase');

test.describe('Checkout Tests', () => {

    test('@smoke Complete Checkout', async ({
        page,
        loginPage,
        inventoryPage,
        cartPage,
        checkoutPage,
        checkoutCompletePage
    }) => {

        // Azure Test Case Mapping
        test.info().annotations.push({
            type: 'AzureTestCase',
            description: AzureTestCase.map.CompleteCheckout.toString()
        });

        console.log(`Executing Azure Test Case: ${AzureTestCase.map.CompleteCheckout}`);

        await test.step('Navigate to SauceDemo', async () => {
            await loginPage.navigate();
        });

        await test.step('Login with valid credentials', async () => {
            await loginPage.login(
                config.users.standard.username,
                config.users.standard.password
            );
        });

        await test.step('Add Backpack to Cart', async () => {
            await inventoryPage.addBackpackToCart();
        });

        await test.step('Open Shopping Cart', async () => {
            await inventoryPage.openCart();
            await expect(page).toHaveURL(/cart/);
        });

        await test.step('Proceed to Checkout', async () => {
            await cartPage.checkout();
            await expect(page).toHaveURL(/checkout-step-one/);
        });

        await test.step('Enter Checkout Information', async () => {
            await checkoutPage.enterCheckoutInformation(
                'Thabo',
                'Mokoena',
                '2001'
            );
        });

        await test.step('Continue Checkout', async () => {
            await checkoutPage.continueCheckout();
            await expect(page).toHaveURL(/checkout-step-two/);
        });

        await test.step('Finish Checkout', async () => {
            await checkoutPage.finishCheckout();
        });

        await test.step('Verify Order Confirmation', async () => {
            await expect(
                await checkoutCompletePage.getConfirmationMessage()
            ).toBe('Thank you for your order!');
        });

        console.log('Checkout completed successfully.');

    });

});