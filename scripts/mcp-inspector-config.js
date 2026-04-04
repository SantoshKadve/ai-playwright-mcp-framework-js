import { env } from '../src/config/env.js';

const config = {
  name: 'playwright-framework-mcp',
  transport: 'stdio',
  command: env.mcpServerCommand,
  args: env.mcpServerArgs.split(' ')
};

console.log(JSON.stringify(config, null, 2));
