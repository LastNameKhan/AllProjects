import React, { useContext, useState } from "react";
import { datacontext } from "../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Chart } from "chart.js";

export const SearchBar = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const value: any = useContext(datacontext);

  const handleclick = () => {
    try {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value.city}?unitGroup=metric&key=GNXUQ4C6XPMVZYL8MXXVQLM9H&contentType=json`
      )
        .then((res) => res.json())
        .then((resJson) => {
          // console.log(resJson.days);
          value.setData(resJson.days);
          // console.log(value.data, "Days Data");
          navigate("/dashboard");
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <input
        placeholder="Enter a city name"
        onChange={(e: any) => value.setCity(e.target.value)}
      />
      <button onClick={() => handleclick()}>Search</button>
    </div>
  );
};

export default SearchBar;
