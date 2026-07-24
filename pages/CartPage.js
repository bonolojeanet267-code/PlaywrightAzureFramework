const BasePage = require('./BasePage');

class CartPage extends BasePage {

    constructor(page) {
        super(page);

        this.pageTitle = '.title';
        this.checkoutButton = '#checkout';
        this.continueShoppingButton = '#continue-shopping';

        this.removeBackpackButton = '#remove-sauce-labs-backpack';
        this.removeBikeLightButton = '#remove-sauce-labs-bike-light';
        this.removeBoltShirtButton = '#remove-sauce-labs-bolt-t-shirt';
    }

    async getPageTitle() {
        return await this.getText(this.pageTitle);
    }

    async checkout() {
        await this.click(this.checkoutButton);
    }

    async continueShopping() {
        await this.click(this.continueShoppingButton);
    }

    // This matches your test
    async removeBackpack() {
        await this.click(this.removeBackpackButton);
    }

    async removeBikeLight() {
        await this.click(this.removeBikeLightButton);
    }

    async removeBoltShirt() {
        await this.click(this.removeBoltShirtButton);
    }

}

module.exports = CartPage;