const {test,expect} = require('@playwright/test');

test('iframes',async ({browser,page})=>
{

    await page.goto('https://demoqa.com/frames');
    const frame = page.frameLocator('#frame1');
    await expect (frame.locator('h1')).toHaveText('This is a sample page');

},

test('testing all frames',async ({page})=>
{
    
    await page.goto('https://demoqa.com/frames');
    const allFrames = page.frames();
    console.log('Total frames:', allFrames.length);

    allFrames.forEach((frame,i)=>
    {
        console.log(`Frame ${i}: name = "${frame.name()}" url = "${frame.url()}"`);
    }
)
})
);