import { Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { OtpContext } from "../Context/AuthContext";

const baseUrl = "https://radiant-anchorage-95660.herokuapp.com";

export const Dashboard = () => {
  const { state, dispatch } = useContext(OtpContext);

  const handleSubmit = async () => {
    try {
      const httpBody = {
        mobile: state.mobile,
      };
      if (state.number.length === 10) {
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
    <div>
      <div
        style={{
          height: "100px",
          width: "500px",
          margin: "auto",
          padding: "20px",
          border: "1px solid black",
        }}
      >
        <TextField fullWidth></TextField>
        <Button
          onClick={() => handleSubmit}
          style={{ marginTop: "15px" }}
          variant="contained"
        >
          Get Otp
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
