import React, { useEffect, useState } from "react";
import Product from "./Product";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  height: 80%;
  padding: 0 40px;
  .backgroundFrame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    z-index: 0;
    /* background-position: center; */
    background-size: 100%;
    background-repeat: no-repeat;
    background-origin: content-box;
    border-radius: 50px;
  }
  .container-main {
    z-index: 1;
    position: relative;
  }
  .container-info {
    position: absolute;
    width: 100%;
  }
  .header-main {
    margin-top: 36px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1.4rem;
    font-weight: 700;
    padding: 0 16px;
  }
  .middle-header {
    font-size: 2.8rem;
    font-weight: 700;
    margin-left: 137px;
  }
  .select-header {
    margin-left: 23px;
  }
  .select-option {
    width: 140px;
    text-align: center;
  }
  .anima-color:hover {
    cursor: pointer;
    color: rgb(255, 109, 4);
  }
  main {
    margin-top: 30px;
    width: 100%;
  }
  .icon-product {
    display: flex;
    justify-content: space-between;
  }
  .wrap-product {
    background-color: white;
    width: 30%;
    padding: 26px;
    border-radius: 40px;
    margin: 10px 0;
  }
  .img-product {
    text-align: center;
  }
  .price-name {
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    .name-product {
      margin-bottom: 8px;
      color: purple;
      text-transform: uppercase;
    }
    .price-product {
      color: rgb(169 147 147);
    }
  }
  .container-products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .paging-container {
    background-color: #e0f5f5;
  }
  .paging-list {
    display: flex;
    padding: 10px 0 10px 16px;
  }
  .paging-item {
    padding: 8px;
    margin: 0 4px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
  }
  .anima {
    background-color: black;
    color: white;
  }
`;
function Main() {
    function NextPrev(e){
        console.log(e.target.value)
        if(e.target.value==='prev'){
            if(currenPage==1){
                return ;
            }
            setCurrentpage(olddata=>olddata-1)
        }
    }
  function ChangePage(e){
      setCurrentpage(e.target.value);
  }
  let countItem = 1;
  const [currenPage,setCurrentpage] = useState(1);
  const [APi, setApi] = useState(false);
  let start =(currenPage-1)*countItem;
  let end = currenPage*countItem;
  useEffect(() => {
    fetch("https://5f9420069ecf720016bfc321.mockapi.io/api/Shops")
      .then((data) => data.json())
      .then((data) => setApi(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <MainContainer>
      <div
        className="backgroundFrame"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/background.jpg"
          })`,
        }}
      ></div>
      <div className="container-main">
        <div className="container-info">
          <header className="header-main">
            <div className="left-header">
              <span className="anima-color">Home</span>
              <span>/</span>
              <span className="anima-color">Product</span>
            </div>
            <div className="middle-header">Shop</div>
            <div className="right-header">
              <span>Show 1-12 of 36 results</span>
              <span className="select-header">
                <select className="select-option" name="" id="">
                  <option value="">--Chose option--</option>
                  <option value=""></option>
                </select>
              </span>
            </div>
          </header>
          <main>
            <div className="container-products">
              {APi
                ? APi.map((product, index) => {
                    if(product.id>start && product.id<=end)
                    {
                        return (
                            <Product
                              key={index}
                              name={product.name}
                              image={product.avatar}
                              prices={product.prices}
                            />
                          );   
                    }
                  })
                : null}
            </div>
            <div className="paging-container">
              <ul className="paging-list">
                <li value="8" onClick={NextPrev} className="paging-item">-</li>
                <li value="1" onClick={ChangePage} className="paging-item anima">1</li>
                <li value="2" onClick={ChangePage} className="paging-item">2</li>
                <li value="3" onClick={ChangePage} className="paging-item">3</li>
                <li value="4" onClick={ChangePage} className="paging-item">4</li>
                <li value="next" onClick={NextPrev} className="paging-item">+</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </MainContainer>
  );
}

export default Main;
