import { Grid, Typography } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item style={{ margin: "auto" }}>
        <Typography>
          Congratulations you have Successfully Registered Yourselves
        </Typography>
        <Typography>First Name: deep</Typography>
        <Typography>Last Name: shiv</Typography>
        <Typography>Email: abs@g.com</Typography>
        <Typography>Gender: female</Typography>
        <Typography>Address: 682163dsds</Typography>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
