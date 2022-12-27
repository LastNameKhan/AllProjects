import React, { createContext, useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import HourlyData from "./Components/HourlyData";
import SingleCity from "./Components/SingleCity";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import { createGlobalStyle } from "styled-components";

export const datacontext = createContext([]);

const GlobalStyle = createGlobalStyle`
  body {
    width:100%;
    background: #0F2027;
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
    color: whitesmoke
  }
`;

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

function App() {
  const [data, setData] = useState<any>([]);
  const [hourly, setHourly] = useState<any>([]);
  const [city, setCity] = useState<any>("");
  const [singlecity, setSingleCity] = useState<any>([]);
  const [lat, setLat] = useState<any>("");
  const [log, setLog] = useState<any>("");
  return (
    <div className="App">
      <datacontext.Provider
        value={
          {
            data,
            setData,
            city,
            setCity,
            hourly,
            setHourly,
            singlecity,
            setSingleCity,
            lat,
            setLat,
            log,
            setLog,
          } as any
        }
      >
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchBar />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/hourlydata" element={<HourlyData />}></Route>
          <Route path="/singlecity" element={<SingleCity />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </datacontext.Provider>
    </div>
  );
}

export default App;
