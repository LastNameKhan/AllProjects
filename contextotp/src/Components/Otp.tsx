import React, { useContext, useEffect, useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Button, Grid, Typography } from "@mui/material";
import { OtpContext } from "../App";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://radiant-anchorage-95660.herokuapp.com";

export const Otp = () => {
  const [getotp, setGetOtp] = useState<any>("");
  const [sec, setSec] = useState<any>(10);
  const [display, SetDisplay] = useState<any>(true);
  const navigate = useNavigate();
  const value: any = useContext(OtpContext);

  const handleChange = (newValue: any) => {
    setGetOtp(newValue);
    console.log(newValue, "this is newvalue");
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (sec === 0) {
        SetDisplay(!display);
        clearInterval(id);
        ResendOtp();
      } else {
        setSec(sec - 1);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [sec]);

  const OtpSubmit = () => {
    try {
      const httpBody = {
        mobile: value.number,
        otp: value.otp,
      };

      const options = {
        method: "POST",
        body: JSON.stringify(httpBody),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(`${baseUrl}/user/verify-otp`, options)
        .then((res) => res.json())
        .then((resJson) => {
          if (resJson.profileUpdated === true) {
            navigate("/dashboard");
            alert("Mobile Number registered successfully");
            console.log(resJson, "This is a the response");
          } else {
            alert("Please Enter correct Mobile Number");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
  const ResendOtp = async () => {
    try {
      const httpBody = {
        mobile: value.number,
      };

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
          if (value.number.length === 10) {
            console.log(resJson, "Response");
            value.setOtp(resJson.otp);
            console.log(value.otp, "This is otp");
          } else {
            alert("Please Enter correct Mobile Number");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container>
      <>
        <Grid item style={{ margin: "auto" }}>
          <Typography>This is an OTP page</Typography>
          <Typography>Verification</Typography>
          <Typography>Enter Otp send to {value.number}</Typography>
          <Typography>Sec {sec}</Typography>
          <MuiOtpInput value={value.otp} onChange={() => handleChange} />
          <Button
            disabled={display}
            onClick={() => ResendOtp()}
            style={{ marginTop: "20px" }}
            fullWidth
          >
            Resend otp
          </Button>
          <Button
            style={{ marginTop: "20px" }}
            fullWidth
            variant="contained"
            onClick={() => OtpSubmit()}
          >
            Verification
          </Button>
        </Grid>
      </>
    </Grid>
  );
};

export default Otp;
