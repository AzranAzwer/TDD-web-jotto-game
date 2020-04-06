import React from 'react'
import { correctGuess, actionTypes } from './index'

describe('correctGuess', () => {
    test('returns an action with type `CORRECT_GUESS`', () => {
        const action = correctGuess()
        expect(action).toEqual({ types: actionTypes.CORRECT_GUESS })
    })

})
