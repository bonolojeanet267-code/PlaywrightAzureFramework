const BasePage = require('./BasePage');

class CheckoutCompletePage extends BasePage {

    constructor(page) {

        super(page);

        this.completeHeader = '.complete-header';
    }

    async getConfirmationMessage() {
        return await this.getText(this.completeHeader);
    }

}

module.exports = CheckoutCompletePage;