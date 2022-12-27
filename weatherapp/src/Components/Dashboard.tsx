import React, { useContext } from "react";
import { datacontext } from "../App";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const value: any = useContext(datacontext);
  const navigate = useNavigate();

  const handlehourly = () => {
    try {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value.city}?unitGroup=metric&key=GNXUQ4C6XPMVZYL8MXXVQLM9H&contentType=json`
      )
        .then((res) => res.json())
        .then((resJson) => {
          value.setHourly(resJson.days[0].hours);
          navigate("/hourlydata");
        });
    } catch (e) {
      console.log(e);
    }
  };
  const handlesingle = () => {
    try {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value.city}?unitGroup=metric&key=GNXUQ4C6XPMVZYL8MXXVQLM9H&contentType=json`
      )
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson, "Single Data");
          value.setSingleCity(resJson);
          value.setLat(resJson.latitude);
          value.setLog(resJson.longitude);
          console.log(value.lat, value.log, "log and lat");
          console.log(value.singlecity, "State Data");
          navigate("/singlecity");
        });
    } catch (e) {
      console.log(e);
    }
  };
  const handlemap = () => {
    navigate("/map");
  };
  return (
    <div style={{ flexWrap: "wrap" }}>
      <div>
        <button onClick={() => handlehourly()}>Hourly</button>
        <button onClick={() => handlesingle()}>Single day</button>
        <button onClick={() => handlemap()}>Go to map </button>
      </div>
      <table
        style={{
          width: "100%",
          fontSize: "10px",
          border: "1px solid black",
          borderCollapse: "collapse",
        }}
      >
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "2px solid black" }}>datetime</th>
          <th style={{ border: "2px solid black" }}>tempmax</th>
          <th style={{ border: "2px solid black" }}>tempmin</th>
          <th style={{ border: "2px solid black" }}>temp</th>
          <th style={{ border: "2px solid black" }}>feelslikemax</th>
          <th style={{ border: "2px solid black" }}>feelslikemin</th>
          <th style={{ border: "2px solid black" }}>feelslike</th>
          <th style={{ border: "2px solid black" }}>dew</th>
          <th style={{ border: "2px solid black" }}>humidity</th>
          <th style={{ border: "2px solid black" }}>precip</th>
          <th style={{ border: "2px solid black" }}>precipcover</th>
          <th style={{ border: "2px solid black" }}>snow</th>
          <th style={{ border: "2px solid black" }}>snowdepth</th>
          <th style={{ border: "2px solid black" }}>windgust</th>
          <th style={{ border: "2px solid black" }}>windspeed</th>
          <th style={{ border: "2px solid black" }}>winddir</th>
          <th style={{ border: "2px solid black" }}>pressure</th>
          <th style={{ border: "2px solid black" }}>visibility</th>
          <th style={{ border: "2px solid black" }}>solarradiation</th>
          <th style={{ border: "2px solid black" }}>solarenergy</th>
          <th style={{ border: "2px solid black" }}>uvindex</th>
          <th style={{ border: "2px solid black" }}>severerisk</th>
          <th style={{ border: "2px solid black" }}>sunrise</th>
          <th style={{ border: "2px solid black" }}>sunset</th>
          <th style={{ border: "2px solid black" }}>moonphase</th>
          <th style={{ border: "2px solid black" }}>conditions</th>
          <th style={{ border: "2px solid black" }}>description</th>
          <th style={{ border: "2px solid black" }}>icon</th>
          <th style={{ border: "2px solid black" }}>stations</th>
          <th style={{ border: "2px solid black" }}>source</th>
          <th style={{ border: "2px solid black" }}>name</th>
        </tr>
        {Object.values(value.data).map((item: any) => {
          return (
            <tr style={{ border: "1px solid black" }} key={item.index}>
              <td style={{ border: "1px solid black" }}>{item.datetime}</td>
              <td style={{ border: "1px solid black" }}>{item.tempmax}</td>
              <td style={{ border: "1px solid black" }}>{item.tempmin}</td>
              <td style={{ border: "1px solid black" }}>{item.temp}</td>
              <td style={{ border: "1px solid black" }}>{item.feelslikemax}</td>
              <td style={{ border: "1px solid black" }}>{item.feelslikemin}</td>
              <td style={{ border: "1px solid black" }}>{item.feelslike}</td>
              <td style={{ border: "1px solid black" }}>{item.dew}</td>
              <td style={{ border: "1px solid black" }}>{item.humidity}</td>
              <td style={{ border: "1px solid black" }}>{item.precip}</td>
              <td style={{ border: "1px solid black" }}>{item.precipcover}</td>
              <td style={{ border: "1px solid black" }}>{item.snow}</td>
              <td style={{ border: "1px solid black" }}>{item.snowdepth}</td>
              <td style={{ border: "1px solid black" }}>{item.windgust}</td>
              <td style={{ border: "1px solid black" }}>{item.windspeed}</td>
              <td style={{ border: "1px solid black" }}>{item.winddir}</td>
              <td style={{ border: "1px solid black" }}>{item.pressure}</td>
              <td style={{ border: "1px solid black" }}>{item.visibility}</td>
              <td style={{ border: "1px solid black" }}>{item.solarradiation}</td>
              <td style={{ border: "1px solid black" }}>{item.solarenergy}</td>
              <td style={{ border: "1px solid black" }}>{item.uvindex}</td>
              <td style={{ border: "1px solid black" }}>{item.severerisk}</td>
              <td style={{ border: "1px solid black" }}>{item.sunrise}</td>
              <td style={{ border: "1px solid black" }}>{item.sunset}</td>
              <td style={{ border: "1px solid black" }}>{item.moonphase}</td>
              <td style={{ border: "1px solid black" }}>{item.conditions}</td>
              <td style={{ border: "1px solid black" }}>{item.description}</td>
              <td style={{ border: "1px solid black" }}>{item.icon}</td>
              <td style={{ border: "1px solid black" }}>{item.stations}</td>
              <td style={{ border: "1px solid black" }}>{item.source}</td>
              <td style={{ border: "1px solid black" }}>{value.city}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Dashboard;
