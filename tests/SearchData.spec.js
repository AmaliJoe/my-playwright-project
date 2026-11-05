const { test, expect } = require('@playwright/test');
const { closeLoginPopupIfPresent } = require('../utils/helper');   // utility layer
const searchData = require('../data/searchData.json');              // data layer

for (const item of searchData.searches) {
  test(`${item.id}: ${item.description} (${item.term})`, async ({ page }) => {
    await page.goto(searchData.baseUrl);
    await closeLoginPopupIfPresent(page);

    const searchBox = page.locator('input.nw1UBF.v1zwn26:not([readonly]):visible');
    await searchBox.fill(item.term);
    await searchBox.press('Enter');

    await expect(page).toHaveURL(/search/);
    await expect(page.locator('span._Omnvo')).toContainText(item.term);
  });
}