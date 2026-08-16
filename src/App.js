import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import DebugArticle from "./Components/DebugArticle";

function App() {
  return (
    <div className="App">
      {process.env.NODE_ENV === "development" && <DebugArticle />}
      <NavBar></NavBar>
      <Login></Login>
    </div>
  );
}

export default App;
