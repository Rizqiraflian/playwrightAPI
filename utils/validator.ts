import { expect, APIResponse  } from '@playwright/test';

export async function validatePostResponse(response: APIResponse) {
    //Parse the body content
    const body = await response.json();

    //Validate body content - Check Data Consistency
    console.log('🔍 Validating body content...')
    expect(body).toHaveProperty('userId')
    expect(body).toHaveProperty('id')
    expect(body).toHaveProperty('title')
    expect(body).toHaveProperty('body')
    expect(body.title).not.toBe('');
    expect(body.body).not.toBeNull();
    expect(body).toMatchObject({
        id: expect.any(Number),
        title: expect.any(String),
        userId: expect.any(Number),
        body: expect.any(String),
    })

    //Validate header content
    console.log('🔍 Validating header content...')
    const contentType = response.headers()['content-type']
    expect(contentType).toContain('application/json')
}


