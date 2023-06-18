import React from "react"
import { decode } from "html-entities"


//welcome to question component mrs mastoor thank you ustad jii
export default function Question(props) {

    ///all the stuff will come here througth propr 
    //let me show you it what it console! hey jii can you 
    //show me how can we console log on vs 
    
    /*
    console we get in browser i am just on another tab same program consoel it 
    to show you 

    so it will bring porps like this 

    ›{
        question: "Montreal is in which Canadian province?", 
    answers: ["Quebec", "Nova Scotia", "Ontario", "Alberta"],
     selectedAnswer: "",
      correctAnswer: "Quebec",
       updateAnswer: updateAnswer(currentQuestion, answer), 
       showResult: false}

       then we need to show question from here and option from  here 

       other data we added here like correct ans and selcted ans to check.. 
    
    */
    function clickAnswer(answer, currentQuestion) {
        props.updateAnswer(currentQuestion, answer)
    }
    
    /*
    okay so fist as ususal it will getting answer and looping to all the ans
    okay so i understand the this return section and now the answer btn comes to check which questions is correct and 
    which one is uncorrect so continue


    ooo jiii
    okay jii go and do  your mom's work
    aplogize but i got some cleaning and all work from mom !😩😩😩
    and 
lso i have    
  and other
  tution till 1:1:30 so if you free we can continue then 
i gueat 4 pm if you get free we will continue but today is holiday there isn't it. so why tuition todayould be  
okay after 4 pm
*/
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
           {/* so we will show qeustion and anser here  okay?????????? awesome okayyyyyy*/}
            <h1 className="question">{decode(props.question)}</h1>
        {/* now when we click the option something happes in here in {answerElements} so
        let see up what happen */}
            <div className="answers-container">{answerElements}</div>
        </div>
    )
}  