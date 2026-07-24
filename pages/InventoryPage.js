const BasePage = require('./BasePage');

class InventoryPage extends BasePage {

    constructor(page) {
        super(page);

        this.pageTitle = '.title';
        this.shoppingCart = '.shopping_cart_link';
        this.sortDropdown = '[data-test="product-sort-container"]';

        this.backpackAddButton = '#add-to-cart-sauce-labs-backpack';
        this.bikeLightAddButton = '#add-to-cart-sauce-labs-bike-light';
        this.boltShirtAddButton = '#add-to-cart-sauce-labs-bolt-t-shirt';
        this.fleeceJacketAddButton = '#add-to-cart-sauce-labs-fleece-jacket';
        this.onesieAddButton = '#add-to-cart-sauce-labs-onesie';
        this.redShirtAddButton = '#add-to-cart-test.allthethings()-t-shirt-(red)';
    }

    async getPageTitle() {
        return await this.getText(this.pageTitle);
    }

    async openCart() {
        await this.click(this.shoppingCart);
    }

    async addBackpackToCart() {
        await this.click(this.backpackAddButton);
    }

    async addBikeLightToCart() {
        await this.click(this.bikeLightAddButton);
    }

    async addBoltShirtToCart() {
        await this.click(this.boltShirtAddButton);
    }

    async addFleeceJacketToCart() {
        await this.click(this.fleeceJacketAddButton);
    }

    async addOnesieToCart() {
        await this.click(this.onesieAddButton);
    }

    async addRedShirtToCart() {
        await this.click(this.redShirtAddButton);
    }

    async sortProducts(option) {
        await this.page.locator(this.sortDropdown).selectOption(option);
    }

}

module.exports = InventoryPage;