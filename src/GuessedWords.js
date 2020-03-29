import React from 'react'
import PropTypes from 'prop-types'


const GuessedWords = (props) =>{
let contents;
if(props.guessedWords.length === 0 ){
    contents=(
        <span testID="guess-instructions">
            Try tro guess the secret word!
        </span>
    )
}
    return(
        <div testID="component-guessed-words">
            {contents}
        </div>
    )
}

GuessedWords.propTypes={
    guessedWords:PropTypes.arrayOf(
    PropTypes.shape({
        guessedWords:PropTypes.string.isRequired,
        letterMachCount:PropTypes.number.isRequired,
    })
).isRequired,
};

export default GuessedWords;