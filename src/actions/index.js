export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS'
};

export const correctGuess = () => {
    return { types: actionTypes.CORRECT_GUESS }
}