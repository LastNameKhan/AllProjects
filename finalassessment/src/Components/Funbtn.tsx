import { Autocomplete, Checkbox, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "./style.css";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const Funbtn = () => {
  const [caught, setCaught] = useState<boolean>(false);
  // const [data, setData] = useState<any>([]);
  const [movies, setMovies] = useState<any>("");
  const [peopleInfo, setPeopleInfo] = useState<any>([]);
  const [mapping, setMapping] = useState<any>([]);

  const data = [
    {
      id: "1",
      name: "Silver",
    },
    {
      id: "2",
      name: "Gold",
    },
    {
      id: "3",
      name: "Platinum",
    },
    {
      id: "4",
      name: "Diamond",
    },
  ];

  // const btn = document.querySelector(".btn") as any;

  // const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  // const checkedIcon = <CheckBoxIcon fontSize="small" />;

  // const number = (Math.floor(Math.random() * 450) + 1).toFixed(1);

  // var position: any;

  // const justforfun = () => {
  //   if (!caught) {
  //     position ? (position = 0) : (position = 100);
  //     //adding the css animation property
  //     btn.style.transform = `translate(${position}px, 0px)`;
  //     btn.style.transition = "all 0.1s ease";
  //   } else {
  //     return;
  //   }
  // };

  // const buttonclick = (e: any) => {
  //   e.preventDefault();
  //   alert("New Record 20sec");
  // };

  const handlechange = (e: any) => {
    setMovies(e.target.value);
    data.push(movies);
    console.log(movies, "Movies");
    console.log(data, "Data");
  };

  const toggleHandler = (item: any) => () => {
    setPeopleInfo((state: any) => ({
      ...state,
      [item.id]: state[item.id]
        ? null
        : {
            id: item.id,
            plan: item.name,
          },
    }));
    mapping.push(peopleInfo);
  };

  useEffect(() => {
    console.log(mapping);

    console.log(peopleInfo);
  }, [peopleInfo]);

  //on click function

  return (
    // <main className="main">
    //   <div className="child">
    <div>
      <Autocomplete
        multiple
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <div>
            {data.map((item: any) => {
              return (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    width: "150px",
                  }}
                >
                  <input
                    onChange={toggleHandler(item)}
                    checked={peopleInfo[item.id]}
                    style={{ margin: "20px" }}
                    type="checkbox"
                  />
                  <div style={{ margin: "20px" }}>{item.name}</div>
                </div>
              );
            })}
            {/* <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            /> */}
            {option.name}
          </div>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Checkboxes" placeholder="Favorites" />
          // <input
          //   {...params}
          //   label="Checkboxes"
          //   placeholder="Favorites"
          //   onChange={toggleHandler(item)}
          //   checked={peopleInfo[item.id]}
          //   style={{ margin: "20px" }}
          // />
        )}
        options={data}
      />
      {/* <form action="" id="form-el" className="form col">
        <button className="btn" onClick={buttonclick} onMouseOver={justforfun}>
          Submit
        </button>
      </form> */}
      {Object.values(mapping).map((item: any) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
    // </main>
  );
};

export default Funbtn;
