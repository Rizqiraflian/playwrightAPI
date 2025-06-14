import { test, expect, request } from '@playwright/test';
import { validatePostResponse } from '../../utils/validator'

test('GET - should return post data with 200 response', async ({}) => {
  const apiContext = await request.newContext()
  const response = await apiContext.get('/posts/1')

  expect(response.status()).toBe(200)
  const body = await response.json()
  expect(body.id).toBe(1)
  validatePostResponse(response);
  
})
