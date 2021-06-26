import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Paging from "./Paging";
import Item from "./Item";
const MainBD = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  height: 100%;
  /* justify-content: space-around; */
  .container-list{
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
  }
  .container-item {
    flex:0 1 30%;
    background-color: #7378c5;
    cursor: pointer;
    margin: 1rem;
    box-shadow: 0px -1px 2px rgb(58 58 58 / 10%),
      1px 1px 2px rgb(58 58 58 / 10%);
  }
  .item-overview {
    position: relative;
    overflow: hidden;
  }
  .img-size {
    width: 100%;
  }
  .overview {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    transform: translateY(100%);
    /* opacity: 0; */
    transition: all 0.4s linear;
    padding: 0 10px;
    .overview-title {
      margin: 12px 0px;
      font-weight: bolder;
      font-size: 1.8rem;
    }
    p {
      font-size: 1.5rem;
      margin-bottom: 12px;
    }
  }
  .item-overview:hover .overview {
    /* opacity: 1; */
    transform: translateY(0);
  }
  .title {
    padding: 1rem;
    color: white;
    text-transform: uppercase;
  }
  @media screen and (min-width: 599px) and (max-width: 767px) {
    .container-item {
      flex:1 0 45%;
      overflow: hidden;
    }
    .item-overview:hover .overview {
      overflow: scroll;
      top: 20%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .item-overview:hover .overview {
      overflow: scroll;
      top: 20%;
    }
  }
  @media screen and (max-width: 376px) {
    justify-content: center;
    .container-item {
      flex:0 0 80%;
      overflow: hidden;
      
    }
    .item-overview:hover .overview {
      overflow: scroll;
      top: 20%;
    }
  }
`;
function Main({ searchValue }) {
  let page = 1;
  const key_primary = "api_key=6cd041824d634208c1df1c48bcf9b6f1";
  const romain = "https://api.themoviedb.org/3";
  const API_popular = romain +`/discover/movie?sort_by=popularity.desc&page=${page}&` +key_primary;
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  const search_URL = romain + "/search/movie?" + key_primary;
  const [API_URL, setAPI] = useState(false);
  useEffect(() => {
    if(API_URL == false){
      console.log("false")
      const fetApi = async () => {
        const Api = await fetch(API_popular);
        setAPI(await Api.json());
      };
      fetApi();
    }
    else{
      let changeList = () => {
        console.log(searchValue);
        if (searchValue === "") return;
        const getAPi = async () => {
          const Api = await fetch(search_URL + `&query=${searchValue}`);
          let tamp = await Api.json();
          console.log(" 233");
          console.log("i++");
          if ((JSON.stringify(tamp) === JSON.stringify(API_URL)) === false) {
            console.log(JSON.stringify(tamp) === JSON.stringify(API_URL));
            setAPI(tamp);
          }
        };
        getAPi();
      };
      changeList();
    }
  }, [searchValue]);
  console.log(
    "============================================================================="
  );
  console.log(API_URL);
  return (
      <MainBD>
        <div className="container-list">
          {API_URL
            ? API_URL.results.map((item, index) => {
                if (item.poster_path != null) {
                  return (
                    <Item
                      key={index}
                      title={item.title}
                      overview={item.overview}
                      image={IMG_URL + item.poster_path}
                    />
                  );
                }
              })
            : null}
        </div>
        <Paging count={API_URL?API_URL.total_pages:0}/>
      </MainBD>
  );
}

export default Main;
