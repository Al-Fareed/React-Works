import React from 'react';

export default function Buttons({text,setText}) {

    const upper = ()=>{
        const upText=text.toUpperCase();
        setText(upText);
    }

    const lower = ()=>{
        const lowText=text.toLowerCase();
        setText(lowText);
    }

    const initCap=()=>{
        const initCapText=text.charAt(0).toUpperCase()+text.slice(1);
        setText(initCapText);
        }
    const remSpace=()=>{
        const spaceRmTxt=text.replace(/\s+/g,' ').trim();
        setText(spaceRmTxt)
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
        onClick={initCap}
        >

        Initial Caps</button>   
        <button type="button" className="btn btn-outline-primary btn-large mx-1"
        onClick={remSpace}
        >
        Remove Space</button>  

    </div>
    );
  }
