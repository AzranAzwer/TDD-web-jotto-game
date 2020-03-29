import React,{Component} from 'react';
import './App.css';
import Congrats from './Congrats'
import GuessedWords from './GuessedWords';
class App extends Component{
  render(){
    return(
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[
          {guessedWords:"train", letterMachCount:4}
        ]}/>
    </div>
    )
  }
}

export default App;
