export const mcpIntegrationOptions = [
  {
    name: 'Mock adapter',
    purpose: 'Safe offline placeholder used in this repository',
    implementation: 'Return deterministic recommendations and test ideas'
  },
  {
    name: 'stdio MCP client',
    purpose: 'Call a local MCP server process from tools like Cursor or Claude Desktop',
    implementation: 'Spawn command from env and exchange JSON messages'
  },
  {
    name: 'HTTP gateway',
    purpose: 'Proxy MCP-style prompts through an internal service',
    implementation: 'Send request context, DOM snippets, traces, or API specs over HTTP'
  }
];
