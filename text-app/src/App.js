import Input from "./Components/Input";
import Nav from "./Components/Nav";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [darkMode, setDarkMode] = useState("light");
  const darkModeHandler = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.title = "Text Editor | Dark Mode";
      document.body.style.backgroundColor = "rgb(5, 40, 71)";
      showAlert("Dark mode enabled", "success");
    } else {
      setDarkMode("light");
      document.title = "Text Editor | Light Mode";
      document.body.style.backgroundColor = "rgb(229, 230, 231)";
      showAlert("Light mode enabled", "success");
    }
  };

  const [text, setText] = useState("");
  return (
    <Router>
      <div className={`App  text-${darkMode === "dark" ? "light" : "dark"} `}>
        <Nav
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          darkModeHandler={darkModeHandler}
        />
        <Alert darkMode={darkMode} alert={alert} setAlert={setAlert} />

        <Switch>
          <Route exact path="/" component={Input}>
            <Input text={text} setText={setText} showAlert={showAlert} />
          </Route>

          <Route exact path="/about" component={About}>
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
