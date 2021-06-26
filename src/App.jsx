import styled from "styled-components";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useState } from "react";

const AppStyled = styled.div`
  background-color: #d8d8d8;
  min-height: 100vh;
  margin: auto;
`;

function App() {
  const [searchValue,changeSearch]=useState('');
  function searchChange(e){
    // if(e.keyCode === 13){
      changeSearch(e.target.value);
    // }
  }
  return (
    <AppStyled>
      <Header onchange={searchChange}/>
      <Main searchValue={searchValue}/>
    </AppStyled>
  );
}

export default App;
