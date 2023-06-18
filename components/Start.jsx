import React from "react"

export default function Start(props) {
    //now lets see what props gets here 
    console.log(props)
    return (
            <div className="start-page">
                <h1 className="title">Quizzical</h1>
                <h3 className="subtitle">Test Your Knowledge!</h3>
                <button onClick={props.handleStart} className="start-btn">Start quiz</button>
            </div>
    )
}

// I know from there, I did it by myself there,
// like this handleStart, when we click on this the quiz start will open

//yes aboslutely
//so then it will go to quiz section so shall we go to that main quiz section 
//where all the magic happen? okay let's start it