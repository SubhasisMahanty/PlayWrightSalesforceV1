import { test, type Page } from '@playwright/test'

test.describe('Test Suite', () => {
    test.beforeAll(async () => {
    console.log('Login Database');
});

test.beforeEach(async () => {
    console.log('Clear Cookies');
});

test.afterEach(async () => {
    console.log('remove Cache');
});

test.afterAll(async () => {
    console.log('Disconnect Database');
});
    
test('test1', async () => {
console.log('Test 1 Run Success'); 
});

test('test2', async () => {
    console.log('Test 2 Run Success'); 
});

test('test3', async () => {
    console.log('Test 3 Run Success'); 
});

test('test4', async () => {
    console.log('Test 4 Run Success'); 
});

test('test5', async () => {
    console.log('Test 5 Run Success'); 
});
});


    

