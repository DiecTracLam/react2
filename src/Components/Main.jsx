import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Item from "./Item";
const MainBD = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .container-item {
    width: 30%;
    background-color: #7378c5;
    cursor: pointer;
    margin: 1rem;
    box-shadow: 0px -1px 2px rgb(58 58 58 / 10%),
      1px 1px 2px rgb(58 58 58 / 10%);
  }
  .item-overview {
    position: relative;
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
    opacity: 0;
    transition: all 0.4s linear;
    padding: 0 10px;
    .overview-title {
      margin: 12px 0px;
      font-weight: bolder;
      font-size: 1.8rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  .item-overview:hover .overview {
    opacity: 1;
    transform: translateY(0);
  }
  .title {
    padding: 1rem;
    color: white;
    text-transform: uppercase;
  }
  @media screen and (min-width: 599px) and (max-width: 767px) {
    .container-item {
      width: 45%;
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
    .container-item {
      width: 80%;
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
  const [API_URL, setAPI] = useState("");
  useEffect(() => {
    let changeList = () => {
      console.log(searchValue);
      if (searchValue === "") return;
      const getAPi = async () => {
        const Api = await fetch(search_URL + `&query=${searchValue}`);
        let tamp = await Api.json();
        console.log(" 233");
        console.log("i++");
        // console.log(tamp)
        // console.log(tamp)
        // console.log(API_URL)
        if ((JSON.stringify(tamp) === JSON.stringify(API_URL)) === false) {
          console.log(JSON.stringify(tamp) === JSON.stringify(API_URL));
          setAPI(tamp);
        }
      };
      getAPi();
    };
    changeList();
  }, [searchValue]);
  useEffect(() => {
    const fetApi = async () => {
      const Api = await fetch(API_popular);
      setAPI(await Api.json());
    };
    fetApi();
  }, []);
  console.log(
    "============================================================================="
  );
  console.log(API_URL);
  return (
    <MainBD>
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
    </MainBD>
  );
}

export default Main;
