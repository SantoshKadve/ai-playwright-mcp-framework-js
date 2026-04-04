import { BasePage } from './base-page.js';

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.title = page.getByText('Products');
    this.cartLink = page.locator('.shopping_cart_link');
    this.backpackAddButton = page.getByRole('button', { name: /add to cart/i }).first();
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addFirstItemToCart() {
    await this.backpackAddButton.click();
  }
}
