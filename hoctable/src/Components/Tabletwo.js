import React from "react";
import { useState } from "react";
import UpdatedComponent from "./withCounter";

const Employee = [
  {
    id: 1,
    name: "Shruti",
  },
  {
    id: 2,
    name: "Saba",
  },
  {
    id: 3,
    name: "Afiya",
  },
  {
    id: 4,
    name: "Saloni",
  },
  {
    id: 5,
    name: "Insiya",
  },
  {
    id: 6,
    name: "Alfiya",
  },
  {
    id: 7,
    name: "Shubhi",
  },
];

const Tabletwo = (props) => {
  const [data, setData] = useState(Employee);
  const { empdata } = props;
  return (
    <div>
      <table style={{ border: "1px solid black" }}>
        <tr style={{ border: "1px soli black" }}>
          <th style={{ border: "1px solid black" }}>Emp Id</th>
          <th style={{ border: "1px solid black" }}>Emp Name</th>
        </tr>
      </table>
      {empdata}
    </div>
  );
};

export default UpdatedComponent(Tabletwo, Employee);
