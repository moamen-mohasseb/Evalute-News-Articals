import {checkURL} from '../../client/js/checkURL'
describe('Test check url all functions', () => {
    test('Testing the checkURL defined or not', () => {

        expect(checkURL).toBeDefined();
    })

    test('Testing the checkURL function return true for well organized Url', () => {
        
        expect(checkURL('https://www.washingtonpost.com/politics/elise-stefanik-trump-cheney/2021/05/11/0dfb0d0c-b194-11eb-a3b5-f994536fe84a_story.html')).toBeTruthy();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        
        expect(checkURL('Not url')).toBeFalsy();
    })
})
