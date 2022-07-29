import React from "react";
import Buttons from "./Buttons";
export default function Input({ text, setText }) {
  return (
    <div className="container">
      <h2>Input your text below</h2>
      <textarea
        cols="80"
        rows="10"
        value={text}
        placeholder="Enter your text here"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <p id="length">
        <b>Total Characters</b>(including spaces) : {text.length}
      </p>
      <p id="length">
        <b>Words</b> :{text.length > 0 ? text.split(" ").length : "0"}{" "}
      </p>
      <Buttons text={text} setText={setText} />
     
        <h2>Preview</h2>
        <p>{text}</p>
      
    </div>
  );
}
