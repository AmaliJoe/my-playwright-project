const { test, expect } = require('@playwright/test');

const BASE = 'https://jsonplaceholder.typicode.com';

test.describe('Report demo', () => {

  test('API - read a post', { tag: '@smoke' }, async ({ request }) => {
    await test.step('Send GET /posts/1', async () => {
      const response = await request.get(`${BASE}/posts/1`);
      expect(response.status()).toBe(200);

      await test.info().attach('response-body', {
        body: JSON.stringify(await response.json(), null, 2),
        contentType: 'application/json',
      });
    });
  });

  test('UI - title check', { tag: '@smoke' }, async ({ page }) => {
    await test.step('Open the site', async () => {
      await page.goto('https://example.com');
    });
    await test.step('Verify the title', async () => {
      await expect(page).toHaveTitle(/Example Domain/);
    });
  });

  test('UI - INTENTIONAL FAILURE', { tag: '@regression' }, async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/This Title Does Not Exist/);   // fails on purpose
  });

  test.skip('UI - skipped test', async ({ page }) => {
    await page.goto('https://example.com');
  });

});