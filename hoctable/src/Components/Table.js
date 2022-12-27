import React from "react";
import { useState } from "react";
import UpdatedComponent from "./withCounter";

const Users = [
  {
    id: 1,
    name: "Krunal",
  },
  {
    id: 2,
    name: "Ankit",
  },
  {
    id: 3,
    name: "Rushabh",
  },
  {
    id: 4,
    name: "Aman",
  },
  {
    id: 5,
    name: "Khan",
  },
  {
    id: 6,
    name: "Rahul",
  },
  {
    id: 7,
    name: "Harshit",
  },
];

const Table = (props) => {
  const [data, setData] = useState(Users);
  const { maindata } = props;
  return (
    <>
      <table style={{ border: "1px solid black" }}>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>Emp Id</th>
          <th style={{ border: "1px solid black" }}>Emp Name</th>
        </tr>
      </table>
      {maindata}
    </>
  );
};

export default UpdatedComponent(Table, Users);
