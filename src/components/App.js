import React from "react";
import { BrowserRouter, Switch , Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About";
import Login from "./Login";
import Contact from "./Contact";
import Signup from "./Signup";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://markmomotbackend.herokuapp.com")
    .then(resp => resp.json())
    .then(console.log())
    .catch(console.log())
  }, [])

  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/"><h1>404 NOT FOUND</h1></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
