const {test, expect} = require('@playwright/test');

test('Tabs',async ({page,context})=>
{
    await page.goto("https://demoqa.com/browser-windows");

    const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'New Tab' }).click()
]);

await newTab.waitForLoadState();
console.log(await newTab.title());
});



//await newPage.bringToFront(); // bring new tab to front
//await page.bringToFront();    // switch back to original tab