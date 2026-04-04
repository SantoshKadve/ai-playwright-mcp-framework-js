# Architecture

```mermaid
flowchart TD
    A[Playwright Tests] --> B[Custom Fixture Layer]
    B --> C[Page Objects]
    B --> D[API Client]
    B --> E[MCP Client Adapter]
    E --> F[Mock Adapter]
    E --> G[stdio MCP Option]
    E --> H[HTTP Gateway Option]
    C --> I[UI Assertions]
    D --> J[API Assertions]
    A --> K[HTML Report]
    A --> L[CI Pipeline]
```

## Notes
- Tests are split into UI, API, contract, and hybrid end-to-end coverage.
- MCP is isolated behind a client adapter so vendor changes do not affect test files.
- API and UI share the same framework and reporting model.
