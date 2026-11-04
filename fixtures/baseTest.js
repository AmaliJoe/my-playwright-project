const base = require('@playwright/test');
const { FlipkartHomePage } = require('../pages/FlipkartHomePage');
const { closeLoginPopupIfPresent } = require('../utils/helper');

exports.test = base.test.extend({
  homePage: async ({ page }, use) => {
    const homePage = new FlipkartHomePage(page);
    await homePage.goto();                      // setup
    await closeLoginPopupIfPresent(page);       // setup
    await use(homePage);                        // the test runs here
    // anything after use() is teardown
  },
});

exports.expect = base.expect;