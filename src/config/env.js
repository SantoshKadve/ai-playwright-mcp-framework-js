import dotenv from 'dotenv';

dotenv.config();

export const env = {
  uiBaseUrl: process.env.UI_BASE_URL || 'https://www.saucedemo.com',
  apiBaseUrl: process.env.API_BASE_URL || 'https://reqres.in',
  apiUserPath: process.env.API_USER_PATH || '/api/users?page=2',
  apiSingleUserPath: process.env.API_SINGLE_USER_PATH || '/api/users/2',
  apiCreateUserPath: process.env.API_CREATE_USER_PATH || '/api/users',
  apiRegisterPath: process.env.API_REGISTER_PATH || '/api/register',
  reqresApiKey: process.env.REQRES_API_KEY || 'reqres-free-v1',
  mcpProvider: process.env.MCP_PROVIDER || 'mock',
  mcpModel: process.env.MCP_MODEL || 'gpt-4.1',
  mcpMode: process.env.MCP_MODE || 'adapter',
  mcpServerCommand: process.env.MCP_SERVER_COMMAND || 'node',
  mcpServerArgs: process.env.MCP_SERVER_ARGS || './scripts/fake-mcp-server.js',
  headless: process.env.HEADLESS !== 'false'
};
