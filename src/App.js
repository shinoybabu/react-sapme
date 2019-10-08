import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Login></Login>
    </div>
  );
}

export default App;
