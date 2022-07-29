import Input from "./Components/Input";
import Nav from "./Components/Nav";
import { useState } from "react";
function App() {
   const [darkMode,setDarkMode]=useState("light");

  const darkModeHandler=()=>{
    if(darkMode==='light')
    {
      setDarkMode("dark")
       
    }
    else{
      setDarkMode("light")
      console.log(darkMode);
    }
  }
 
  const [text,setText]=useState('');
  return (
    <div className={`App  text-${darkMode==='dark'?'light':'dark'} bg-${darkMode} `}>
      <Nav 
      darkMode={darkMode}
      setDarkMode={setDarkMode}
        darkModeHandler={darkModeHandler}
        />
      <Input 
        text={text}
        setText={setText}
      />
    </div>
  );
}

export default App;
