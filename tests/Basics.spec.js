const {test, expect} = require('@playwright/test');

test('First playwright Test',async ({browser,page})=>
{
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://www.flipkart.in/");
    
    console.log(await page.title());
    await expect(page).toHaveTitle(/Online Shopping/);
    
}
)