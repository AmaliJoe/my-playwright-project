const {test, expect} = require('@playwright/test');
const { title } = require('node:process');
const BASE = 'https://jsonplaceholder.typicode.com';

test('GET - read a post', async ({request}) =>
{
const response = await request.get(`${BASE}/posts/1`);

console.log('Status:', response.status());
console.log('Body:',await response.json());

expect(response.status()).toBe(200);

});

test('POST - create a post', async ({ request }) => {
  const response = await request.post(`${BASE}/posts`, {
    data: { title: 'My first post', body: 'Hello API', userId: 1 }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.title).toBe('My first post');
  expect(body.id).toBeDefined();
});

test('PUT - update a post', async ({ request }) => {
  const response = await request.put(`${BASE}/posts/1`, {
    data: { id: 1, title: 'Updated title', body: 'Updated body', userId: 1 }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.title).toBe('Updated title');
});

test('PATCH - update one field', async ({ request }) => {
  const response = await request.patch(`${BASE}/posts/1`, {
    data: { title: 'Only the title changed' }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.title).toBe('Only the title changed');
});

test('DELETE - delete a post', async ({ request }) => {
  const response = await request.delete(`${BASE}/posts/1`);
  expect(response.status()).toBe(200);
});

test('GET - non-existent post returns 404', async ({ request }) => {
  const response = await request.get(`${BASE}/posts/99999`);
  expect(response.status()).toBe(404);
});