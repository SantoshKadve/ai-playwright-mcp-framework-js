import { test, expect } from '../../src/core/mcp/mcp-fixture.js';
import { LoginPage } from '../../src/fixtures/pages/login-page.js';
import { uiUsers } from '../../src/test-data/users.js';

test.describe('UI login flow', () => {
  test('standard user should login successfully @smoke', async ({ page, mcp }) => {
    const loginPage = new LoginPage(page);
    const guidance = await mcp.recommendLocators('SauceDemo login page');
    expect(guidance.strategy).toBe('role-first');

    await loginPage.goto();
    await loginPage.login(uiUsers.standard.username, uiUsers.standard.password);

    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('locked user should see an error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(uiUsers.locked.username, uiUsers.locked.password);
    await expect(loginPage.errorMessage).toContainText('locked out');
  });

  test('invalid user should see credential error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(uiUsers.invalid.username, uiUsers.invalid.password);
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });
});
