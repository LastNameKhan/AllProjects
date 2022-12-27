import React from "react";
import { useContext } from "react";
import { datacontext } from "../App";

export const HourlyData = () => {
  const value: any = useContext(datacontext);

  return (
    <div>
      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
        }}
      >
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "2px solid black" }}>datetime</th>
          <th style={{ border: "2px solid black" }}>temp</th>
          <th style={{ border: "2px solid black" }}>feelslike</th>
          <th style={{ border: "2px solid black" }}>dew</th>
          <th style={{ border: "2px solid black" }}>humidity</th>
          <th style={{ border: "2px solid black" }}>precip</th>
          <th style={{ border: "2px solid black" }}>snow</th>
          <th style={{ border: "2px solid black" }}>snowdepth</th>
          <th style={{ border: "2px solid black" }}>windgust</th>
          <th style={{ border: "2px solid black" }}>windspeed</th>
          <th style={{ border: "2px solid black" }}>winddir</th>
          <th style={{ border: "2px solid black" }}>pressure</th>
          <th style={{ border: "2px solid black" }}>visibility</th>
          <th style={{ border: "2px solid black" }}>solarradiation</th>
          <th style={{ border: "2px solid black" }}>uvindex</th>
          <th style={{ border: "2px solid black" }}>severerisk</th>
          <th style={{ border: "2px solid black" }}>conditions</th>
          <th style={{ border: "2px solid black" }}>icon</th>
          <th style={{ border: "2px solid black" }}>stations</th>
          <th style={{ border: "2px solid black" }}>source</th>
          <th style={{ border: "2px solid black" }}>name</th>
        </tr>
        {Object.values(value.hourly).map((item: any) => {
          return (
            <tr style={{ border: "1px solid black" }} key={item.index}>
              {/* <tr> */}
              <td style={{ border: "1px solid black" }}>{item.datetime}</td>
              <td style={{ border: "1px solid black" }}>{item.temp}</td>
              <td style={{ border: "1px solid black" }}>{item.feelslike}</td>
              <td style={{ border: "1px solid black" }}>{item.dew}</td>
              <td style={{ border: "1px solid black" }}>{item.humidity}</td>
              <td style={{ border: "1px solid black" }}>{item.precip}</td>
              <td style={{ border: "1px solid black" }}>{item.snow}</td>
              <td style={{ border: "1px solid black" }}>{item.snowdepth}</td>
              <td style={{ border: "1px solid black" }}>{item.windgust}</td>
              <td style={{ border: "1px solid black" }}>{item.windspeed}</td>
              <td style={{ border: "1px solid black" }}>{item.winddir}</td>
              <td style={{ border: "1px solid black" }}>{item.pressure}</td>
              <td style={{ border: "1px solid black" }}>{item.visibility}</td>
              <td style={{ border: "1px solid black" }}>
                {item.solarradiation}
              </td>
              <td style={{ border: "1px solid black" }}>{item.uvindex}</td>
              <td style={{ border: "1px solid black" }}>{item.severerisk}</td>
              <td style={{ border: "1px solid black" }}>{item.conditions}</td>
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

export default HourlyData;
