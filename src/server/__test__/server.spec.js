import 'babel-polyfill'
const request = require('supertest');
const app = require('../../server/index');

 describe('Server Test ', () => {
    test('GET method on root', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Server Test path "/test"', () => {
    test('GET method on test path', async () => {
        const response = await request(app).get('/test');
        expect(response.statusCode).toBe(200);
    });
}); 