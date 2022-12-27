import React from "react";
import { useContext } from "react";
import { datacontext } from "../App";

export const SingleCity = () => {
  const value: any = useContext(datacontext);

  return (
    <div style={{ border: "1px solid black" }}>
      <table style={{ border: "2 px solid black", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid black" }}>queryCost</th>
          <th style={{ border: "1px solid black" }}>latitude</th>
          <th style={{ border: "1px solid black" }}>longitude</th>
          <th style={{ border: "1px solid black" }}>resolvedAddress</th>
          <th style={{ border: "1px solid black" }}>address</th>
          <th style={{ border: "1px solid black" }}>timezone</th>
          <th style={{ border: "1px solid black" }}>tzoffset</th>
          <th style={{ border: "1px solid black" }}>description</th>
        </tr>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>
            {value.singlecity.queryCost}
          </td>
          <td style={{ border: "1px solid black" }}>
            {value.singlecity.latitude}
          </td>
          <td style={{ border: "1px solid black" }}>
            {value.singlecity.longitude}
          </td>
          <td style={{ border: "1px solid black" }}>
            {value.singlecity.resolvedAddress}
          </td>
          <td style={{ border: "1px solid black" }}>
            {value.singlecity.address}
          </td>
          <td style={{ border: "1px solid black" }}>
            {value.singlecity.timezone}
          </td>
          <td style={{ border: "1px solid black" }}>
            {value.singlecity.tzoffset}
          </td>
          <td style={{ border: "1px solid black" }}>
            {value.singlecity.description}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default SingleCity;
