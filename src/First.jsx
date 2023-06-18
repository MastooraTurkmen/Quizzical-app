import React from "react";

export default function First(props) {
  return (
    <section className="first-page">
      <img className="yellow-blob" src="src/assets/blob-yellow.png" />
      <h1 className="first-page-title">Quizzical</h1>
      <p className="first-page-para">Some description if needed</p>
      <button className="first-page-btn" onClick={() => props.toggleOpen()}>
        Start quiz
      </button>
      <img className="blue-blob" src="src/assets/blob-blue.png" />
    </section>
  );
}
