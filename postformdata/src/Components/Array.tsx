import React, { useState } from "react";

export const Array = () => {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Aman",
      username: "Amankhan",
      age: 20,
      job: "React Developer",
      place: "Indore",
    },
    {
      id: "2",
      name: "Rakesh",
      username: "Rakesh",
      age: 25,
      job: "React Native",
      place: "Hyderabad",
    },
    {
      id: "3",
      name: "Akash",
      username: "AakashKhana",
      age: 23,
      job: "Java Backend",
      place: "Bangluru",
    },
    {
      id: "4",
      name: "George",
      username: "Georgey",
      age: 24,
      job: "FrontEnd",
      place: "Mumbai",
    },
    {
      id: "5",
      name: "Han",
      username: "HanSolo",
      age: 26,
      job: "Backend",
      place: "Bangluru",
    },
    {
      id: "6",
      name: "Jhonny",
      username: "Yespapa",
      age: 24,
      job: "Quality",
      place: "Mumbai",
    },
    {
      id: "7",
      name: "Rahul",
      username: "verma",
      age: 25,
      job: "Vella",
      place: "Indore",
    },
    {
      id: "8",
      name: "Parth",
      username: "Guruji",
      age: 24,
      job: "FrontEnd",
      place: "Hyderabad",
    },
    {
      id: "9",
      name: "Jagat",
      username: "palsingh",
      age: 25,
      job: "sales",
      place: "Mumbai",
    },
    {
      id: "10",
      name: "Abhishekh",
      username: "Nema",
      age: 20,
      job: "sales",
      place: "Mumbai",
    },
  ]);

  const arraymethod = () => {
    data.map((item: any) => {
      return <h1>item</h1>;
    });
  };
  return (
    <div>
      {data
        .filter((person) => person.age > 20)
        .map((filteredPerson) => (
          <ul key={filteredPerson.id}>
            <li>{filteredPerson.name}</li>
            <li>{filteredPerson.username}</li>
            <li>{filteredPerson.age}</li>
            <li>{filteredPerson.place}</li>
          </ul>
        ))}
    </div>
  );
};

export default Array;
