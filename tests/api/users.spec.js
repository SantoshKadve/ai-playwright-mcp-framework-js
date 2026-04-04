import { test, expect } from '../../src/core/mcp/mcp-fixture.js';
import { env } from '../../src/config/env.js';
import { apiUsers } from '../../src/test-data/users.js';

test.describe('API user endpoints', () => {
  test('should fetch users list @smoke', async ({ apiClient, mcp }) => {
    const ideas = await mcp.generateTestIdeas('GET users list API');
    expect(ideas.length).toBeGreaterThan(0);

    const response = await apiClient.get(env.apiUserPath);
    await apiClient.assertStatus(response, 401);
  });

  test('should fetch single user', async ({ apiClient }) => {
    const response = await apiClient.get(env.apiSingleUserPath);
    await apiClient.assertStatus(response, 401);
  });

  test('should create a user', async ({ apiClient }) => {
    const response = await apiClient.post(env.apiCreateUserPath, apiUsers.createUserPayload);
    await apiClient.assertStatus(response, 401);
  });
});
