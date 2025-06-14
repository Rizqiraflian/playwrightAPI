import { test,expect,request } from "@playwright/test";

test('GET - should return post data with 404 response', async () => {
    const apiContext = await request.newContext()
    const response = await apiContext.get('/posts/404')

    expect(response.status()).toBe(404)

})