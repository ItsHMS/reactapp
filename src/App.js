import logo from "./logo.svg";
import MyFirstComponent from "./components/myFirstComponent";
import MySecondComponent from "./components/mySecondComponent";
import "./App.css";
import { useState } from "react";
function App() {
  let [name, upadatingName] = useState("");
  let updatename = (e) => {
    upadatingName(e.target.value);
  };
  return (
    <div className="App">
      <p>kia ye work kry ga{name}</p>
      {name && <MySecondComponent />}
      <header className="App-header">
        <input value={name} onChange={updatename} />
        <img src={logo} className="App-logo" alt="logo" />
        <MyFirstComponent name={name} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
