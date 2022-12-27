import { baseURL, endPoint } from "../Config";
import React, { Component } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

type IProps = {};
type IState = {
  empId: string;
  password: string;
  errormsg: string;
};

export class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      empId: "",
      password: "",
      errormsg: "",
    };
  }

  Login = async () => {
    try {
      const body = {
        emp_id: parseInt(this.state.empId),
        password: this.state.password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      const res = await fetch(`${baseURL}${endPoint.login}`, options);
      const resJson = await res.json();
      if (res.status === 200) {
        if (resJson?.token) {
          console.log(resJson);
          sessionStorage.setItem("token", resJson.token);
        }
      } else {
        this.setState({ errormsg: resJson.message });
      }
    } catch (e) {
      console.log(e);
      this.setState({ errormsg: "Please check if the details are entered correctly" });
    }
  };
  render() {
    return (
      <div>
        <Box
          style={{
            margin: "auto",
            border: "1px solid black",
            height: "500px",
            width: "500px",
            backgroundColor: "white",
            borderRadius: "50%",
            backgroundImage:
              "url('https://ak.picdn.net/shutterstock/videos/1021282189/thumb/1.jpg')",
          }}
        >
            <Typography
              style={{
                fontSize: "30px",
                fontWeight: "600",
                color: "#ccc",
                marginTop: "40px",
              }}
            >
              Login
            </Typography>
            <div
              style={{
                height: "300px",
                width: "250px",
                margin: "auto",
                // border: "1px solid black",
                marginTop: "20px",
                background: "white",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
            >
              <TextField
                style={{ marginTop: "30px" }}
                value={this.state.empId}
                onChange={(e) => this.setState({ empId: e.target.value })}
                label={"Please Enter Your Name"}
              ></TextField>
              <TextField
                style={{ marginTop: "20px" }}
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                label={"Please Enter your password"}
              ></TextField>
              <Button
                style={{ marginTop: "20px" }}
                onClick={() => this.Login()}
                variant="contained"
              >
                Login
              </Button>
            </div>
        </Box>
      </div>
    );
  }
}

export default Login;
