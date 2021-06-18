import styled from "styled-components";
import "./App.css";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";

const AppStyled = styled.div`
  background-color: #d8d8d8;
  max-width: 1200px;
  margin: auto;
`;


function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
