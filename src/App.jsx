import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"
import './App.css';

export default function App() {
    const [quiz, setQuiz] = React.useState(false)

    function startQuiz() { 
        setQuiz(prev => !prev)
    }
    
    return (
        <div>
            <img src="./assets/blob-yellow.png" className="blob-yellow" />
            <img src="./assets/blob-blue.png" className="blob-blue" />
            {quiz ? <Quiz playAgain={startQuiz} /> : <Start handleStart={startQuiz} />}
        </div>
    )
}