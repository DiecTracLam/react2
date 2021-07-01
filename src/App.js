import styled from "styled-components";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useState } from "react";
// import { NewComponent } from "./Components/NewComponents";

const AppStyled = styled.div`
  background-image: linear-gradient(rgb(255, 151, 76), rgb(255, 190, 143));
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .container-App {
    width: 100%;
    max-width: 100%;
    height: 100vh;
    background-color: rgb(255, 235, 193);
    position: relative;
    padding: 0 50px;
    overflow: scroll;
  }
`;

// const NewComponent=()=>{
//   console.log(this)
//   return (
//     <div>
//       <h1>New NewComponent</h1>
//     </div>
//   )
// }

function App() {
  return (
    <AppStyled>
      <div className="container-App">
        <Header />
        <Main />
      </div>
    </AppStyled>
  );
}

export default App;
