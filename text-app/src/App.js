import Input from "./Components/Input";
import Nav from "./Components/Nav";
import Alert from "./Components/Alert";
import { useState } from "react";
function App() {
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const [darkMode, setDarkMode] = useState("light");
  const darkModeHandler = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.title = "Text Editor | Dark Mode";
      document.body.style.backgroundColor = "rgb(5, 40, 71)";
      showAlert("Dark mode enabled","success");
    } else {
      setDarkMode("light");
      document.title = "Text Editor | Light Mode";
      document.body.style.backgroundColor = "rgb(229, 230, 231)";
      showAlert("Light mode enabled","success");
    }
  };

  const [text, setText] = useState("");
  return (
    <div className={`App  text-${darkMode === "dark" ? "light" : "dark"} `}>
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        darkModeHandler={darkModeHandler}
      />
      <Alert 
        darkMode={darkMode} 
        alert={alert}
        setAlert={setAlert}
        />
      <Input text={text} setText={setText} showAlert={showAlert}/>
    </div>
  );
}

export default App;
