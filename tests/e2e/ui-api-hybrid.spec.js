import { test, expect } from '../../src/core/mcp/mcp-fixture.js';
import { LoginPage } from '../../src/fixtures/pages/login-page.js';
import { uiUsers } from '../../src/test-data/users.js';
import { env } from '../../src/config/env.js';

test('hybrid check: login UI and validate users API in same flow', async ({ page, apiClient }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(uiUsers.standard.username, uiUsers.standard.password);
  await expect(page).toHaveURL(/inventory/);

  const response = await apiClient.get(env.apiUserPath);
  await apiClient.assertStatus(response, 404);
});
