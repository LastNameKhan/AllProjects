import userEvent from "@testing-library/user-event";
import React, { Component } from "react";

type IState = {
  obj: any[];
  name: string;
  job: string;
  age: string;
  color: string;
};
type IProps = {};

const colors = ["teal", "red", "green", "violet", "blue", "cyan"];

export class Filter extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      color: "",
      name: "",
      job: "",
      age: "",
      obj: [
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
      ],
    };
  }

  randomColor = (e: any) => {
    if (e.which === 13 || e.keyCode === 13 || e.key == "Enter") {
      const random = Math.floor(Math.random() * 16777215).toString(16);
      this.setState({ color: random });
      console.log(this.state.color, "State");
    } else {
      console.log("Wrong Number");
    }
  };

  render() {
    return (
      <>
        <input
          onKeyDown={this.randomColor}
          onChange={(e) => this.setState({ name: e.target.value })}
          placeholder="Please Enter the name"
        />
        {/* <div>
          {this.state.obj.map((i) => (
            <ul style={{ backgroundColor: `#${this.state.color}` }}>
              <li>{i.id}</li>
              <li>{i.name}</li>
              <li>{i.username}</li>
              <li>{i.job}</li>
              <li>{i.place}</li>
            </ul>
          ))}
        </div> */}
        <div
          style={{
            textAlign: "center",
            margin: "auto",
            height: "fit-content",
            width: "200px",
          }}
        >
          <h2>Filter with Age</h2>
          {this.state.obj
            .filter((person) => person.name === this.state.name)
            .map((filteredPerson) => (
              <ul
                //   onChange={() => this.randomColor()}
                style={{ backgroundColor: `#${this.state.color}` }}
                key={filteredPerson.id}
              >
                <li>{filteredPerson.name}</li>
                <li>{filteredPerson.username}</li>
                <li>{filteredPerson.age}</li>
                <li>{filteredPerson.place}</li>
              </ul>
            ))}
        </div>
      </>
    );
  }
}

export default Filter;
