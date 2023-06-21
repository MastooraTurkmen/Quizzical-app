import React from "react"
import { nanoid } from "nanoid"
import Question from "./Question"

export default function Quiz(props) {

    const [quizData, setQuizData] = React.useState([])
    const [showWarning, setShowWarning] = React.useState(false)
    const [numCorrectAnswers, setNumCorrectAnswers] = React.useState(0)
    const [showResult, setShowResult] = React.useState(false)
    

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
            .then(res => res.json())
            .then(data => {
                let resultArray = []
                data.results.map((result) => {
                    return resultArray.push({
                        id: nanoid(),
                        question: result.question,
                        correctAnswer: result.correct_answer,
                        answers: result.incorrect_answers
                            .concat(result.correct_answer)
                            .sort(
                                () => Math.random() - 0.5
                            ),
                        selectedAnswer: ""
                    })
                })
                setQuizData(resultArray)
            })
    }, [])
    
    function updateAnswer(currentQuestion, answer) {
        setQuizData(
            quizData.map((result) => {
                return result.question === currentQuestion 
                ? {...result, selectedAnswer: answer}
                : result
            })
        )
    }
    
    function checkAnswers() {
        const notAllAnswered = quizData.some(
            (result) => result.selectedAnswer === ""
        )
        
        setShowWarning(notAllAnswered)
        
        if (!notAllAnswered) {
            quizData.forEach((result) => {
                if(result.selectedAnswer === result.correctAnswer) {
                    setNumCorrectAnswers(prevNum => prevNum + 1)
                }
            })
            setShowResult(true)
        } 
    }
    
    const quizElements = quizData.map((result, index) => {
        return (
            <Question 
                key={index}
                question={result.question}
                answers={result.answers}
                selectedAnswer={result.selectedAnswer}
                correctAnswer={result.correctAnswer}
                updateAnswer={updateAnswer}
                showResult={showResult}
            /> 
        )
    })
    
    return (
        <div>
            <div className="quiz-page">{quizElements}</div>
            <div className="check-answers">
                {showWarning && (
                    <p className="warning-message">
                        Please answer all questions
                    </p>
                )}
                {quizData.length > 0 && !showResult ? (
                    <button className="check-btn" onClick={checkAnswers}>
                        Check Answers
                    </button> 
                ) : null }
                {showResult && (
                    <div className="results-container">
                        <p className="results-text">
                            You scored {numCorrectAnswers}/5 correct answers
                        </p>
                        <button className="play-again-btn" onClick={props.playAgain}>
                            Play again
                        </button>
                    </div>
                )}
            </div>
        </div>
    ) 
}