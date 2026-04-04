import { test, expect } from '../../src/core/mcp/mcp-fixture.js';
import { LoginPage } from '../../src/fixtures/pages/login-page.js';
import { InventoryPage } from '../../src/fixtures/pages/inventory-page.js';
import { uiUsers } from '../../src/test-data/users.js';

test('user should add product to cart @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(uiUsers.standard.username, uiUsers.standard.password);
  await expect(inventoryPage.title).toBeVisible();
  await inventoryPage.addFirstItemToCart();
  await expect(inventoryPage.cartBadge).toHaveText('1');
});
