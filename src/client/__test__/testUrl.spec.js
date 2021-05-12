// TODO: import the url check function
import {checkURL} from '../../client/js/checkURL'
describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        // TODO: write your logic here
        expect(checkURL).toBeDefined();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        // TODO: write your logic here
        expect(checkURL('https://www.legionisci.com/')).toBeTruthy();
    })

    test('Testing the checkUrl function return true for valid url', () => {
        // TODO: write your logic here
        expect(checkURL('invalid_url')).toBeFalsy();
    })
})
