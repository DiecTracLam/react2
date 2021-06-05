import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";
import Statical from "./Components/Statical.js";
import Chart from "./Components/Chart";
// import { NewComponent } from "./Components/NewComponents";

const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color:#f1eeee ;
  .Img-title {
    margin-top: 50px;
  }
  .list-item {
    cursor: pointer;
    width: 300px;
    height: 30px;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    border-bottom: 5px solid rgb(158 152 152 / 54%);
  }
  .list-item:hover {
    border-bottom-color: rgb(78, 52, 51);
  }
  .list-style:focus {
    background-color: yellow;
  }
`;

function App() {
  const [country, setCountry] = useState([]);
  const [data, setData] = useState([]);
  const [changeCountry, setChange] = useState({});
    useEffect(() => {
    const fetchData = async () => {
      const countryData = await fetch(
        "https://covid19.mathdro.id/api/countries"
      );
      const data = await fetch("https://covid19.mathdro.id/api/recovered");
      setCountry(await countryData.json());
      setData(await data.json());
    };
    fetchData();
  }, []);
  // console.log(country.countries);
  // console.log(data)
  // console.log(changeCountry)
  function change(e){
    let find1=country.countries.findIndex((data)=>data.name === e.target.value)
    let find2=data.findIndex(data=>data.countryRegion === e.target.value)
    setChange({...country.countries[find1],...data[find2]})
  }
  return (
    <AppStyled>
      <div className="Img-title">
        <img
          className="img"
          src="https://covid19statswebsite.netlify.app/static/media/image.d7265326.png"
          alt="img"
        />
      </div>
      <Statical recover={changeCountry.recovered} Infected={changeCountry.confirmed} death={changeCountry.deaths}/>
      <select className="list-item" onChange={change}>
        <option value="United State">United State</option>
        {country.countries
          ? country.countries.map((item, index) => {
              return <option key={index} value={item.name}>{item.name}</option>;
            })
          : ""}
      </select>
      <Chart recover={changeCountry.recovered} Infected={changeCountry.confirmed} death={changeCountry.deaths}/>
    </AppStyled>
  );
}

export default App;
