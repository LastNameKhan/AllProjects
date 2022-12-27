import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { Children, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OtpContext } from "../App";

const baseUrl = "https://radiant-anchorage-95660.herokuapp.com";
const Number = () => {
  const value: any = useContext(OtpContext);
  const navigate = useNavigate();
  console.log(value.number, "Number");

  const SendNumber = async () => {
    try {
      const httpBody = {
        mobile: value.number,
      };
      if (value.number.length === 10) {

      const options = {
        method: "POST",
        body: JSON.stringify(httpBody),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(`${baseUrl}/user/get-otp`, options)
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson, "Response");
            value.setOtp(resJson.otp);
            console.log(value.otp, "This is otp");
            navigate("/otp");
          });
        } else {
          alert("Please Enter correct Mobile Number");
        }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Grid container>
      <Grid item style={{ margin: "auto" }}>
        <Typography>Welcome back</Typography>
        <Typography style={{ marginTop: "20px" }}>Login Account</Typography>
        <TextField
          fullWidth
          type="number"
          style={{ marginTop: "20px" }}
          onChange={(e: any) => value.setNumber(e.target.value)}
        ></TextField>
        <Button
          onClick={() => SendNumber()}
          style={{ marginTop: "20px" }}
          variant="contained"
          fullWidth
        >
          Get Otp
        </Button>
      </Grid>
    </Grid>
  );
};

export default Number;
