// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'
//import { checkURL } from '../../client';

/*describe('Server Test', () => {
    // TODO: add your test cases to test server
    // HINT: Review
    //  1. https://www.npmjs.com/package/supertest
    //  2. https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
})*/
const request = require('supertest');
const app = require('../../server/index');

 describe('Test root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test path "/test"', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/test');
        expect(response.statusCode).toBe(200);
    });
}); 