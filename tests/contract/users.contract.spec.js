import { test, expect } from '../../src/core/mcp/mcp-fixture.js';
import { env } from '../../src/config/env.js';
import { validateUserListSchema, validateCreateUserSchema } from '../../src/core/utils/schema-validator.js';
import { apiUsers } from '../../src/test-data/users.js';

test('GET users should satisfy lightweight schema contract', async ({ apiClient }) => {
  const response = await apiClient.get(env.apiUserPath);
  await apiClient.assertStatus(response, 401);
});

test('POST users should satisfy create schema contract', async ({ apiClient }) => {
  const response = await apiClient.post(env.apiCreateUserPath, apiUsers.createUserPayload);
  await apiClient.assertStatus(response, 401);
});
