import React from "react"

export default function Start(props) {
    console.log(props)
    return (
            <div className="start-page">
                <h1 className="title">Quizzical</h1>
                <h3 className="subtitle">Test Your Knowledge!</h3>
                <button onClick={props.handleStart} className="start-btn">Start quiz</button>
            </div>
    )
}
