const { test, expect } = require('@playwright/test');

const BASE = 'https://jsonplaceholder.typicode.com';

// ---------- API tests ----------
test('API - read a post', { tag: ['@smoke', '@api'] }, async ({ request }) => {
  const response = await request.get(`${BASE}/posts/1`);
  expect(response.status()).toBe(200);
});

test('API - create a post', { tag: ['@smoke', '@api'] }, async ({ request }) => {
  const response = await request.post(`${BASE}/posts`, {
    data: { title: 'tag demo', body: 'hello', userId: 1 }
  });
  expect(response.status()).toBe(201);
});

test('API - non-existent post returns 404', { tag: ['@regression', '@api', '@negative'] }, async ({ request }) => {
  const response = await request.get(`${BASE}/posts/99999`);
  expect(response.status()).toBe(404);
});

// ---------- UI tests ----------
test('UI - page has the right title', { tag: ['@smoke', '@ui'] }, async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('UI - heading is visible', { tag: ['@regression', '@ui'] }, async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
});

test('UI - slow demo', { tag: ['@slow', '@ui'] }, async ({ page }) => {
  await page.goto('https://example.com');
  await page.waitForTimeout(3000);   // only here to make this test "slow" for the demo
});