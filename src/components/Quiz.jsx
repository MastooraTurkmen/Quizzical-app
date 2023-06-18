import React from "react"
import { nanoid } from "nanoid"
import Question from "./Question"

export default function Quiz(props) {
    //dont worry fist about state 

    //array store that we get from data
    const [quizData, setQuizData] = React.useState([])
    const [showWarning, setShowWarning] = React.useState(false)
    const [numCorrectAnswers, setNumCorrectAnswers] = React.useState(0)
    const [showResult, setShowResult] = React.useState(false)
    

    //lets fist understand this!
    React.useEffect(() => {
        //this you know
        fetch('https://opentdb.com/api.php?amount=5')
            //this too you know
            .then(res => res.json())
            //this too
            .then(data => {
                //this is the array that we create. why? let see (see down)
                let resultArray = []
                //so now we will loop over data
                data.results.map((result) => {
                    //whatever we will get we will push to the resultArray = []
                    return resultArray.push({
                        //gave id in here
                        id: nanoid(),
                        //quesiton
                        question: result.question,
                      //stored correc ans
                        correctAnswer: result.correct_answer,
                          //got answer and added here and randomize
                        answers: result.incorrect_answers
                            .concat(result.correct_answer)
                            .sort(
                                () => Math.random() - 0.5
                            ),
                        //here we will store the correct ans
                        selectedAnswer: ""
                    })
                })
                //and lastly we will add this array to the state, 
                //yup jii i also saw this, that questions come from there and also the answers
                setQuizData(resultArray)
            })
    }, [])
    
    //this will as name suggest we will look more on this 
    function updateAnswer(currentQuestion, answer) {
        setQuizData(
            quizData.map((result) => {
                return result.question === currentQuestion 
                ? {...result, selectedAnswer: answer}
                : result
            })
        )
    }
    
    //this will check answe..we will aslo look in more later 
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
    
    //now let focus on this
    /*
    fist we took a constant and simpply we loop over the 
    stuff in our array 

    so and then we are passing all the data to the Question 
    component and there it wil handel it all!

    so all the check and questions correct answers and all stuffs go there inside the <Question>

    so quizdata will have like this data

    [{id: "6Ymjq1iMRa1Rv6cN0BFFH", question: "In a standard set of playing cards, which is the only king without a moustache?", correctAnswer: "Hearts", answers: ["Hearts", "Diamonds", "Clubs", "Spades"], selectedAnswer: ""}, 
    {id: "DcSLkAXmcdgvxpUiQZtJz", question: "Who recorded the 1975 album &#039;Captain Fantastic and the Brown Dirt Cowboy&#039;?", correctAnswer: "Elton John", answers: ["Elton John", "Joe Cocker", "Billy Joel", "John Denver"], selectedAnswer: ""},
     {id: "PpmA7BrGKi9jeF0mjoDaG", question: "A slug&rsquo;s blood is green.", correctAnswer: "True", answers: ["False", "True"], selectedAnswer: ""}, {id: "tUR4qxewpXwOOBiB_e_X6", question: "One of the early prototypes of the Sega Dreamcast controller resembled which of the following?", correctAnswer: "Television Remote", answers: ["Tablet", "Hairdryer", "Flip Phone", "Television Remote"], selectedAnswer: ""}, {id: "zptf0Dnym_mwL5Vi08TOo", question: "&quot;Metal Gear Solid 3: Snake Eater&quot; was released in 2004.", correctAnswer: "True", answers: ["True", "False"], selectedAnswer: ""}]

okay then we will throught map ...
map oveer all the stuff and give name as result 

so result.question  will be go throught prop in quesiton 
any doubt? no jjj go ahead

how can i go ahed i am jsut sitting in my home.if i wil go ahed
then i will hit by wall hhhhhhhhh :) I mean continue

hhhhhhh ;} i know hhhh
okay let eat more cake!

so now insted of taking anoter pice of cake and tasting it 
why not just see what this piece made up of 
so now let see more on question and how it work! okayyyyyyyyyy

    */
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