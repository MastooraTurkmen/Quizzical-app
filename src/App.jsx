import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"
import YelloBlob from "./assets/blob-yellow.png"

export default function App() {
    const [quiz, setQuiz] = React.useState(false)

    function startQuiz() { 
        setQuiz(prev => !prev)
    }
    
    return (
        <div>
            <img src={YelloBlob} className="blob-yellow" />
            <img src="./assets/blob-blue.png" className="blob-blue" />
            {quiz ? <Quiz playAgain={startQuiz} /> : <Start handleStart={startQuiz} />}
        </div>
    )
}