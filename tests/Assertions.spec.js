const {test, expect} = require('@playwright/test');

test('Assertions',async ({browser,page})=>
{
    await page.goto("https://www.flipkart.in/");
    
    //fast, basic structure ready
    page.waitForURL(/flipkart/);
    await page.waitForLoadState('domcontentloaded');

    //slower,  waits for background calls to quiet down
    await page.waitForLoadState('networkidle');
    
//Text/Title checks

    console.log(await page.title());
    await expect(page).toHaveTitle(/Online Shopping/);
    await expect(page).toHaveURL(/Flipkart/i);

    //Visibility/State
    // await expect(locator).toBeVisible();
    // await expect(locator).toBeHidden();
    // await expect(locator).toBeEnabled();
    // await expect(locator).toBeDisabled();
    // await expect(locator).toBeEditable();
    // await expect(locator).toBeEmpty();
    // await expect(locator).toBeFocused();
    // await expect(locator).toBeInViewport();
    
    //Checkbox/Radio
    // await expect(locator).toBeChecked();
    // await expect(locator).not.toBeChecked();

    //Count
    // await expect(locator).toHaveCount(5);

    //CSS/Class
    // await expect(locator).toHaveClass('class-name');
    // await expect(locator).toHaveCSS('color',gb(255, 0, 0)');
    // await expect(locator).toHaveId('element-id');   
    
    //Screenshots (visual comparison)
    // await expect(page).toHaveScreenshot();
    // await expect(locator).toHaveScreenshot();


    //waits
    // const [response] = await Promise.all([
    // page.waitForResponse(res => res.url().includes('/search')),
    // page.keyboard.press('Enter') // this triggers the API call
    // ]);

    //await page.waitForTimeout(3000); // waits exactly 3 seconds

    //const results = page.locator('.tthhl');
    // await results.waitFor({ state: 'visible' });

    // const spinner = page.locator('.Uhnkg');
    // await spinner.waitFor({ state: 'hidden' });
    
}
)