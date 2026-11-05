// tests/SortCheck.spec.js
const { test, expect } = require('@playwright/test');
const { closeLoginPopupIfPresent, priceToNumber, isSortedAscending } = require('../utils/helper');

test('results are sorted low to high', async ({ page }) => {
  await page.goto('https://www.flipkart.in/');
  await closeLoginPopupIfPresent(page);

  // search
  const searchBox = page.locator('input.nw1UBF.v1zwn26:not([readonly]):visible');
  await searchBox.fill('iPhone 18');
  await searchBox.press('Enter');
  await expect(page).toHaveURL(/search/);

  // apply the sort (this option appears on the results page)
  await page.getByText('Price -- Low to High').click();
  await page.waitForURL(/sort=price_asc/);

  // read the prices and check the order
  const priceTexts = await page.locator('YOUR_PRICE_SELECTOR').allTextContents();
  const prices = priceTexts.map(priceToNumber);

  console.log('Prices found:', prices);
  expect(isSortedAscending(prices)).toBe(true);
});