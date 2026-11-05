// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 30 *1000,
  expect:
  {
    timeout: 5000,
  },
reporter: [

  ['html', { open: 'never' }],
  ['allure-playwright'],
],
  
  use: {
  browserName: 'chromium',
  headless: !!process.env.CI,
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',     // added
  video: 'retain-on-failure',        // added
     launchOptions: { slowMo: process.env.CI ? 0 : 2000 },
},
  
});
module.exports = config

