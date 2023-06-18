import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"
import './App.css';

export default function App() {
  // first we created this state to show the welcome of quiz
  
    const [quiz, setQuiz] = React.useState(false)
    
  //this will switch the state on click jii

    function startQuiz() { 
        setQuiz(prev => !prev)
    }
    
    return (
        <div>
            <img src="./assets/blob-yellow.png" className="blob-yellow" />
            <img src="./assets/blob-blue.png" className="blob-blue" />
      {
      
      /*
      so now at fist jii the quiz is false so it will show 
      <Start handleStart={startQuiz} /> 

      so now lets go in the <Start >
      
      */
      
      }
            {quiz ? <Quiz playAgain={startQuiz} /> : <Start handleStart={startQuiz} />}
        </div>
    )
}