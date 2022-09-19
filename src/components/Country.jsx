import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import "./page2.css";
import { contCode } from "./fetchByCode.js";
const Country = () => {
  const countryName = window.location.pathname;
  const name = countryName.slice(9);
  console.log(name);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const [newData, setNewData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setNewData(result);
          setLoading(false);
          // console.log(result)
          // newData = result;
          console.log(newData);
        },
        (error) => {
          setError(error);
          setLoading(false);
          console.log(error.message);
        }
      );
  }, []);
  console.log(newData);
  // useEffect(() => {
  //   const result = contCode("NG");

  //   const borderCountries =
  //     newData.length > 0 &&
  //     newData[0].borders?.map(async (border) => await contCode(border));
  //   Promise.all(borderCountries).then((values) => {
  //     console.log(values);
  //   });
  //   //  console.log(borderCountries)
  // }, [newData]);
  return (
    <div>
      <h1>COUNTRY PAGE</h1>
      <button onClick={handleClick}>go back</button>
      <>
        {loading ? (
          <Spinner size="lg" color="red.500" />
        ) : error ? (
          <div>{error.message}</div>
        ) : (
          <>
            {newData
              ? newData.map((e, index) => (
                  <div className="cont-card" key={index} name={e.name.official}>
                    <img className="image" src={e.flags.svg} />
                    <div className="text">
                      <h2 className="bold-text"> {e.name.official}</h2>
                      <p>
                        <b>Native name: </b>
                        {
                          e?.name?.nativeName[Object.keys(e?.name?.nativeName)]
                            ?.official
                        }
                        {/* {object[Object.keys(object)].official} */}
                      </p>{" "}
                      <p>
                        <b>Population : </b>
                        {e.population.toLocaleString()}
                      </p>
                      <p>
                        <b>Region :</b>
                        {e.region}
                      </p>
                      <p>
                        <b>Sub Region :</b>
                        {e.subregion}
                      </p>
                      <p>
                        <b>Capital :</b>
                        {e.capital}
                      </p>
                      <div className="sec-2">
                        <p>
                          <b>
                            Top Level Domain: <b>{e.tld}</b>
                          </b>
                        </p>
                        <p>
                          <b>Languages :</b>
                          {e.languages[Object.keys(e.languages)]}
                        </p>
                        <p>
                          <b>Currency:</b>
                          {e.currencies[Object.keys(e.currencies)].name}
                        </p>
                        <div>{e.borders}</div>
                      </div>
                      {/* 
          <div class="sec-2">
          <p class="text"><b>Top Level Domain :</b> ${tld}</p>
          <p class="text"> <b>Currencies :</b> ${currency}</p>
          <p class="text"> <b>Languages :</b> ${languages}</p> */}
                    </div>
                  </div>
                ))
              : "IT DIDNT WORK"}
          </>
        )}
      </>
    </div>
  );
};
export default Country;
