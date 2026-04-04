import { test as base } from '@playwright/test';
import { env } from '../../config/env.js';
import { MCPClient } from './mcp-client.js';
import { ApiClient } from '../api/api-client.js';

export const test = base.extend({
  mcp: async ({}, use) => {
    await use(new MCPClient({
      provider: env.mcpProvider,
      model: env.mcpModel,
      mode: env.mcpMode,
      serverCommand: env.mcpServerCommand,
      serverArgs: env.mcpServerArgs
    }));
  },
  apiClient: async ({ request }, use) => {
    await use(new ApiClient(request));
  }
});

export { expect } from '@playwright/test';
