import { MCPClient } from '../src/core/mcp/mcp-client.js';
import { AIPromptBuilder } from '../src/core/ai/ai-prompt-builder.js';
import { env } from '../src/config/env.js';

const client = new MCPClient({
  provider: env.mcpProvider,
  model: env.mcpModel,
  mode: env.mcpMode,
  serverCommand: env.mcpServerCommand,
  serverArgs: env.mcpServerArgs
});

const prompt = AIPromptBuilder.buildTestIdeaPrompt('As a shopper, I should log in, add a product to cart, and complete API validation');
const result = await client.generateTestIdeas(prompt);
console.log(JSON.stringify({ prompt, result }, null, 2));
