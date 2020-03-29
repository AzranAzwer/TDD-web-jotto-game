import { getLetterMachCount } from './index'

describe("getLetterMatchCount",()=>{
    const secretWord = "party";
    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMachCount('bones',secretWord)
        expect(letterMatchCount).toBe(0);
    })
    test('returns correct count when there are 3 matching letters', () => {
        const letterMatchCount = getLetterMachCount('train',secretWord)
        expect(letterMatchCount).toBe(3);
    })
    test('returns correct count when there are duplicate letters in the guess', () => {
        const letterMatchCount = getLetterMachCount("parka",secretWord)
        expect(letterMatchCount).toBe(3)
    })
})

