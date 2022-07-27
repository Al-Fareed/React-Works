import Header from "./Components/Header";
import Input from "./Components/Input";
import { useState } from "react";
function App() {
  const [text,setText]=useState('');
  return (
    <div className="App">
      <Header/>
      <Input 
        text={text}
        setText={setText}
      />
    </div>
  );
}

export default App;
