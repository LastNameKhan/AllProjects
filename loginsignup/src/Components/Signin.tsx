import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

type MyState = {
  email: string;
  name: string;
  number: string;
  password: string;
  emp_id: string;
};

type MyProps = {};

const baseUrl = "https://81e3-49-205-115-133.in.ngrok.io";

export class Signin extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      email: "",
      name: "",
      number: "",
      password: "",
      emp_id: "",
    };
  }
  addUserHandler = () => {
    const httpBody = {
      email: this.state.email,
      emp_id: this.state.emp_id,
      name: this.state.name,
      number: this.state.number,
      password: this.state.password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(httpBody),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`${baseUrl}/signUp`, options)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson) {
          alert("Register Successful");
        } else {
          alert("Failed");
        }
      });
  };

  //   addUserHandler = () => {
  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");

  //     var raw = JSON.stringify({
  //       emp_id: 1007,
  //       name: "Rushabh",
  //       password: "Rushabh@123",
  //     });

  //     fetch("https://6f78-49-205-115-133.in.ngrok.io/signUp", {
  //       method: "POST",
  //       headers: myHeaders,
  //       body: raw,
  //       redirect: "follow",
  //     })
  //       .then((response) => response.text())
  //       .then((result) => console.log(result))
  //       .catch((error) => console.log("error", error));
  //   };

  render() {
    return (
      <div
        style={{
          height: "400px",
          border: "1px solid black",
          width: "300px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <TextField
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
          variant="outlined"
          style={{ marginTop: 20 }}
          label="email"
        />
        <TextField
          value={this.state.emp_id}
          onChange={(e) => this.setState({ emp_id: e.target.value })}
          variant="outlined"
          style={{ marginTop: 20 }}
          label="Employe Id"
        />
        <TextField
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          variant="outlined"
          style={{ marginTop: 20 }}
          label="username"
        />
        <TextField
          value={this.state.number}
          onChange={(e) => this.setState({ number: e.target.value })}
          variant="outlined"
          style={{ marginTop: 20 }}
          label="number"
        />
        <TextField
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
          variant="outlined"
          style={{ marginTop: 20 }}
          label="password"
        />
        <Button
          style={{ marginTop: "50px" }}
          onClick={() => this.addUserHandler()}
          variant="contained"
        >
          Register
        </Button>
      </div>
    );
  }
}
export default Signin;
