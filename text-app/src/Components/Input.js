import React from "react";
import Buttons from "./Buttons";
export default function Input({ text, setText,showAlert}) {
  return (
    <div className="container">
      <h2>Input your text below</h2>
      <textarea className="my-1"
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
        <b>Words</b> :   {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}        
      </p>
      <Buttons text={text} setText={setText} showAlert={showAlert} />
     
        <h2>Preview</h2>
        <p>{text}</p>
      
    </div>
  );
}
