import styled from "styled-components";
import "./App.css";
import Cart from "./Components/Cart";
import Timeline from "./Components/Timeline";
import data from "./Components/data";
import { useState } from "react";
// import { NewComponent } from "./Components/NewComponents";

const AppStyled = styled.div`
  background-color: #d8d8d8;
  max-width: 1200px;
  margin: auto;
  .title {
    text-align: center;
    margin: 0;
  }

  .list-card {
    display: flex;
    flex-wrap: wrap;
    .card {
      cursor: pointer;
      width: 12rem;
      height: 12rem;
      margin: 1rem;
      /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); */
    }
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
  const [currentChoose, setCurrentCHoose] = useState([]);
  const [listDOne, setListDone] = useState([]);
  const [countFlip,setCountFlip]=useState(0)

  const handOnclick = (current) => {
    const checkDone = listDOne.findIndex((doneItem) => doneItem === current.id);
    if (checkDone !== -1) {
      return;
    }
    const checkCurrent = currentChoose.findIndex(
      (item) => item.id === current.id
    );
    if (checkCurrent !== -1) {
      return;
    }
    let count=countFlip;
    setCountFlip(++count);
    setCurrentCHoose((prev) => [...prev, current]);
    if (currentChoose.length === 1) {
      if (currentChoose[0].code === current.code) {
        setTimeout(() => {
          setListDone((prev) => [...prev, current.id, currentChoose[0].id]);
        }, 1000);
      }

      setTimeout(() => {
        setCurrentCHoose([]);
      }, 1000);
    }
  };
  return (
    <AppStyled>
      <h1 className="title">Game Lat Mat</h1>
      <Timeline count={countFlip}/>
      <div class="list-card">
        {data.map((element, index) => {
          return (
            <div key={element.id} className="card">
              <Cart
                image={element.image}
                handOnclickCard={() => handOnclick(element)}
                currentChoose={
                  currentChoose[0]?.id === element.id ||
                  currentChoose[1]?.id === element.id
                    ? true
                    : false
                }
                isDone={listDOne.findIndex((doneItem) => doneItem=== element.id)===-1?false:true}
              />
            </div>
          );
        })}
      </div>
      {/* <NewComponent/> */}
    </AppStyled>
  );
}

export default App;
