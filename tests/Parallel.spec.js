const { test } = require('@playwright/test');

const sites = [
  'https://demoqa.com/frames',
  'https://demoqa.com/browser-windows',
  'https://demoqa.com/text-box',
  'https://demoqa.com/buttons',
];

for (const url of sites) {
  test(`open ${url}`, async ({ page }, testInfo) => {
    console.log(`Worker ${testInfo.workerIndex} started: ${url}`);
    await page.goto(url);
    await page.waitForTimeout(3000);   // only to make the timing visible in this demo
  });
}