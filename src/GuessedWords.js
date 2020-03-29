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
}else{
    const guessedWordsRow = props.guessedWords.map((word,index)=>(
        <tr testID="guessed-word" key={index}>
            <td>{word.guessedWords}</td><td>{word.letterMachCount}</td>
        </tr>
    ))
    contents=(
        <div testID="guessed-words">
            <table className="table table-sm">
                <thead className="thead-light">
                    <tr><th>Guess</th><th>Matching Letters</th></tr>
                </thead>
                <tbody>
                    {guessedWordsRow}
                </tbody>
            </table>
        </div>
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