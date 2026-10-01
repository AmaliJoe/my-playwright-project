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
reporter: 'html',
  
  use: {

      browserName: 'chromium',
      headless : false,
      trace: 'on-first-retry',
        launchOptions: {
          slowMo: 2000, // slows down every action by 1000ms (1 second)
  },
    
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  },

  
});
module.exports = config

