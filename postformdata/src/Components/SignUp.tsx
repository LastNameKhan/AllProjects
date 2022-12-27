import { Box, Button, TextField, Typography } from "@mui/material";
import { baseURL, endPoint } from "../Config";
import React, { Component } from "react";

type IProps = {};
type IState = {
  employeeId: string;
  name: string;
  password: string;
  errormessage: string;
};

export class SignUp extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      employeeId: "",
      name: "",
      password: "",
      errormessage: "",
    };
  }

  register = async () => {
    try {
      const body = {
        emp_id: this.state.employeeId,
        name: this.state.name,
        password: this.state.password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      const res = await fetch(baseURL + endPoint.signup, options);
      const resJson = await res.json();
      if (res.status == 200) {
        if (resJson?.token) {
          console.log(resJson);
          sessionStorage.setItem("token", resJson.token);
        }
      } else {
        this.setState({ errormessage: resJson.message });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div>
        <Box style={{ margin: "auto", height: "500px", width: "300px" }}>
          <Typography
            style={{
              fontSize: "30px",
              fontWeight: "600",
              backgroundColor: "grey",
              borderRadius: "10px",
            }}
          >
            Please SignUp Here
          </Typography>
          <TextField
            style={{ marginTop: "20px" }}
            value={this.state.employeeId}
            onChange={(e) => this.setState({ employeeId: e.target.value })}
            label={"Please Enter your Employee ID"}
          ></TextField>
          <TextField
            style={{ marginTop: "20px" }}
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            label={"Please Enter your Name"}
          ></TextField>
          <TextField
            style={{ marginTop: "20px" }}
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            label={"Please Enter your Password"}
            type="password"
          ></TextField>
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={() => this.register()}
          >
            SignUp
          </Button>
        </Box>
      </div>
    );
  }
}

export default SignUp;
