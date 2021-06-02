import styled from "styled-components";
import "./App.css";
import { useState } from "react";
import statical from "./Components/statical";
// import { NewComponent } from "./Components/NewComponents";

const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  .Img-title {
    margin-top: 50px;
  }
`;


function App() {
  
  return (
    <AppStyled>
        <div className="Img-title">
          <img className='img' src="https://covid19statswebsite.netlify.app/static/media/image.d7265326.png" alt="img"/>
        </div>
        <statical />
    </AppStyled>
  );
}

export default App;
