const { test, expect } = require('../fixtures/baseTest');   // not from '@playwright/test'

test('search using the homePage fixture', async ({ homePage, page }) => {
  await homePage.search('iPhone 18');
  await expect(page).toHaveURL(/search/);
});