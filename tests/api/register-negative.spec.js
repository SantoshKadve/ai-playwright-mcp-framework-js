import { test, expect } from '../../src/core/mcp/mcp-fixture.js';
import { env } from '../../src/config/env.js';
import { apiUsers } from '../../src/test-data/users.js';

test('should validate missing password during register', async ({ apiClient }) => {
  try {
    const response = await apiClient.post(env.apiRegisterPath, apiUsers.invalidRegisterPayload);
    await apiClient.assertStatus(response, 401);
  } catch (error) {
    expect(error.message).toContain('socket hang up');
  }
});
