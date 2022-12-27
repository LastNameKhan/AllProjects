import React from "react";
import { Box } from "@mui/system";
import { Button, Grid } from "@mui/material";

const Navbar = () => {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#cf2121",
        height: "60px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <Grid item lg={12} style={{ display: "flex", margin: "auto" }}>
        <Grid item style={{ marginLeft: "20px" }}>
          <Button variant="contained" color="success">
            Home
          </Button>
        </Grid>
        <Grid item style={{ marginLeft: "20px" }}>
          <Button variant="contained" color="success">
            Address
          </Button>
        </Grid>
        <Grid item style={{ marginLeft: "20px" }}>
          <Button variant="contained" color="success">
            User
          </Button>
        </Grid>
        <Grid item style={{ marginLeft: "20px" }}>
          <Button variant="contained" color="success">
            Contact Us
          </Button>
        </Grid>
        <Grid item style={{ marginLeft: "20px" }}>
          <Button variant="contained" color="success">
            Dashboard
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
