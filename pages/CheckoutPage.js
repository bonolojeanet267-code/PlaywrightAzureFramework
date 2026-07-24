const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {

    constructor(page) {
        super(page);

        this.pageTitle = '.title';

        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.postalCode = '#postal-code';

        this.continueButton = '#continue';
        this.cancelButton = '#cancel';
        this.finishButton = '#finish';
    }

    async getPageTitle() {
        return await this.getText(this.pageTitle);
    }

    async enterCheckoutInformation(firstName, lastName, postalCode) {
        await this.fill(this.firstName, firstName);
        await this.fill(this.lastName, lastName);
        await this.fill(this.postalCode, postalCode);
    }

    async continueCheckout() {
        await this.click(this.continueButton);
    }

    async finishCheckout() {
        await this.click(this.finishButton);
    }

    async cancelCheckout() {
        await this.click(this.cancelButton);
    }

}

module.exports = CheckoutPage;