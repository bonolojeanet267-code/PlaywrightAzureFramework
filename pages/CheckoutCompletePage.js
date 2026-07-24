const BasePage = require('./BasePage');

class CheckoutCompletePage extends BasePage {

    constructor(page) {
        super(page);

        this.completeHeader = '.complete-header';
        this.completeText = '.complete-text';
        this.backHomeButton = '#back-to-products';
    }

    async getConfirmationMessage() {
        return await this.getText(this.completeHeader);
    }

    async getConfirmationText() {
        return await this.getText(this.completeText);
    }

    async backHome() {
        await this.click(this.backHomeButton);
    }

}

module.exports = CheckoutCompletePage;