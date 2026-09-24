import { test, expect } from '@playwright/test'

test.beforeAll(async () => {
    console.log('before all Hook.')
})

test.beforeEach(async () => {
    console.log('before Each Hook.')
})


test('test1', async () => { 
    console.log(
        'test1Block'
    );   
})

test('test2', async () => { 
    console.log(
        'test2Block'
    );   
})

test('test3', async () => { 
    console.log(
        'test3Block'
    );   
})

test.afterAll(async () => {
    console.log('after all Hook.')
})

test.afterEach(async () => {
    console.log('after Each Hook.')
})