import React from 'react';

export default function Buttons({text,setText,showAlert}) {

    const upper = ()=>{
        const upText=text.toUpperCase();
        setText(upText);
        showAlert('Converted to Upper case ','success')
    }

    const lower = ()=>{
        const lowText=text.toLowerCase();
        setText(lowText);
        showAlert('Converted to Lower case ','success')
    }

   

    const remSpace=()=>{
        const spaceRmTxt=text.replace(/\s+/g,' ').trim();
        setText(spaceRmTxt)
        showAlert('All extra space has been removed','success')
    }
  return (
    <div className='container'>
    <button type="button" className="btn btn-outline-primary btn-large mx-1"
        onClick={upper}
        >Uppercase</button>  

    <button type="button" className="btn btn-outline-primary btn-large mx-1"
        onClick={lower}
        >Lowercase</button>    
      
        <button type="button" className="btn btn-outline-primary btn-large mx-1"
        onClick={remSpace}
        style={{width:"200px"}}
        >
        Remove Space</button>  

    </div>
    );
  }
