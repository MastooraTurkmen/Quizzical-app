import React from "react"
import { decode } from "html-entities"


export default function Question(props) {
    function clickAnswer(answer, currentQuestion) {
        props.updateAnswer(currentQuestion, answer)
    }
   const  answerElements = props.answers.map((answer, index) => {
        return (
            <button 
                className={`answer-btn 
                    ${answer === props.selectedAnswer ? "selected" : ""}
                    ${props.showResult && answer === props.correctAnswer ? "correct" : ""}
                    ${props.showResult && answer === props.selectedAnswer && answer !== props.correctAnswer ? "incorrect" : ""}
                    ${props.showResult && answer !== props.correctAnswer ? "dimmed" : ""}
                `} 
                key={index}
                onClick={() => clickAnswer(answer, props.question)}
                disabled={props.showResult}
            >
                {decode(answer)}
            </button>
        ) 
    })
    
    return (
        <div className="question-container">
            <h1 className="question">{decode(props.question)}</h1>
            <div className="answers-container">{answerElements}</div>
        </div>
    )
}  