const { test, expect } = require('@playwright/test');

test('secret is available in the pipeline', { tag: '@smoke' }, async ({ request }) => {
  const token = process.env.API_TOKEN;                       // reads the value
  expect(token, 'API_TOKEN is not set').toBeTruthy();        // fails with a clear message if missing

  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1', {
    headers: { Authorization: `Bearer ${token}` }            // backticks, because of ${token}
  });
  expect(response.status()).toBe(200);
});