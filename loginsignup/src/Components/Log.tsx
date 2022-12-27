import { Button, TextField } from "@mui/material";
import React, { Component } from "react";

type MyState = {
  empid: string;
  password: string;
};
type MyProps = {};

const baseUrl = "https://81e3-49-205-115-133.in.ngrok.io";

export class Log extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      empid: "",
      password: "",
    };
  }

  getlogin = () => {
    const httpBody = {
      emp_id: this.state.empid,
      password: this.state.password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(httpBody),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`${baseUrl}/login`, options)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson) {
          alert("Login Successful");
        } else {
          alert("Please Check credentials");
        }
      });
  };

  render() {
    return (
      <div style={{ height: "200px", width: "200px", margin: "auto" }}>
        <TextField
          value={this.state.empid}
          onChange={(e) => this.setState({ empid: e.target.value })}
          variant="outlined"
          style={{ marginTop: 20 }}
          label="email"
        />
        <TextField
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
          variant="outlined"
          style={{ marginTop: 20 }}
          label="Employe Id"
        />
        <Button onClick={() => this.getlogin()}>Login</Button>
      </div>
    );
  }
}

export default Log;
