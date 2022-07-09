import React, { useState } from "react";

export default function Slides(props) {
  const [slideNo, setSlideNo] = useState(0);
  return (
    <div className="container">
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={slideNo === 0}
          onClick={() => setSlideNo(0)}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small solid"
          disabled={slideNo === 0}
          onClick={() => setSlideNo(slideNo - 1)}
        >
          Prev
        </button>{" "}
        <button
          data-testid="button-next"
          className="small solid"
          disabled={slideNo >= props.slides.length - 1}
          onClick={() => setSlideNo(slideNo + 1)}
        >
          Next
        </button>{" "}
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{props?.slides[slideNo].title}</h1>
        <p data-testid="text">{props?.slides[slideNo].text}</p>
      </div>
    </div>
  );
}
