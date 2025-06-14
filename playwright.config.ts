// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://jsonplaceholder.typicode.com',
    ignoreHTTPSErrors: true,
    extraHTTPHeaders: {
      Accept: 'application/json',
    },
  },
});
