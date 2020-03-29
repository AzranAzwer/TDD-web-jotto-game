import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from './GuessedWords'


const defaultProps={
    guessedWords:[{guessedWords:"train",letterMachCount:3}],
};

const setup = (props={})=>{
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}/>)
}

test('does not throw warnings with expected props ', () => {
    checkProps(GuessedWords,defaultProps)
})

describe('if there are no words guessed',() => {
    let wrapper;
    beforeEach(()=>{
        wrapper=setup({guessedWords:[]})
    })
test("renders without errors",() => {
    const component = findByTestAttr(wrapper,'component-guessed-words');
    expect(component.length).toBe(1)
})
test("renders intructions to guess a word",()=>{
    const instructions =findByTestAttr(wrapper,"guess-instructions");
    expect(instructions.text().length).not.toBe(0)
})
})

describe("if there are words guessed",()=>{
    let wrapper;
    const guessedWords =[
        {guessedWords:"train", letterMachCount:3},
        {guessedWords:"agile", letterMachCount:1},
        {guessedWords:"party", letterMachCount:5},
    ]
    beforeEach(()=>{
        wrapper=setup({guessedWords})
    })

test("renders without errors",()=>{
    const component = findByTestAttr(wrapper,"component-guessed-words")
    expect(component.length).toBe(1)
})  
test("renders 'guessed word' sections",()=>{
    const guessedWordsNode =findByTestAttr(wrapper,'guessed-words')
    expect(guessedWordsNode.length).toBe(1)
})  
test("correct numbers of guessed words",()=>{
const guessedWordsNodes =findByTestAttr(wrapper,'guessed-word')
expect(guessedWordsNodes.length).toBe(guessedWords.length)
})
})