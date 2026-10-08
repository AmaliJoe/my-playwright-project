const {test, expect} = require('@playwright/test');

test('First playwright Test',async ({browser,page})=>
{
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://www.flipkart.in/");
    
    await page.locator('input.jwCbxy').fill('9176151068');
    await page.getByRole('button',{name:'Continue'}).click();

    await page.pause();
    await page.getByRole('button',{name:'Verify'}).click();

    await page.locator('input.nw1UBF.v1zwn26:not([readonly]):visible').fill('iPhone 18');
    await expect (page.locator('input.nw1UBF.v1zwn26:not([readonly]):visible')).toHaveValue('iPhone 18');
    //await page.getByPlaceholder('Search for Products, Brands and More').fill('iPhone 18');
    await page.keyboard.press('Enter');
    await page.waitForSelector('div.jIjQ8S');
    //await page.pause();

    //text checks
    await expect(page.locator('span._Omnvo')).toHaveText(/iPhone 18/);
    await expect(page.locator('span._Omnvo')).toContainText('Phone');
    
    

    
}
)