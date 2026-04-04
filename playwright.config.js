import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: process.env.HEADLESS !== 'false'
  },
  projects: [
    {
      name: 'chromium-ui',
      testMatch: /.*(ui|e2e)\/.*\.spec\.js/,
      use: { ...devices['Desktop Chrome'], baseURL: process.env.UI_BASE_URL || 'https://www.saucedemo.com' }
    },
    {
      name: 'api-tests',
      testMatch: /.*(api|contract)\/.*\.spec\.js/,
      use: { baseURL: process.env.API_BASE_URL || 'https://reqres.in' }
    }
  ]
});
