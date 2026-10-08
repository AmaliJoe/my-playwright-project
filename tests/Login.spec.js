const {test, expect} = require('@playwright/test');
const {FlipkartHomePage} = require('../pages/FlipkartHomePage');

test('Login and search using Page Object', async ({page})=>
{
const homePage = new FlipkartHomePage(page);
await homePage.goto();
await homePage.login('9176151068');
await page.pause();

await homePage.search('iPhone 18');
await expect(page).toHaveURL(/search/);

}
);