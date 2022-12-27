import { Grid } from "@mui/material";
import React from "react";
import "../Components/Navbar.css";

export const Navbar = () => {
  return (
    <Grid
      container
      style={{
        position: "fixed",
      }}
    >
      <Grid item lg={3} md={3} sm={3} xs={3}>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <a href="#home" className="btn btn-sm animated-button victoria-one">
            Home
          </a>
        </div>
      </Grid>
      <Grid item lg={3} md={3} sm={3} xs={3}>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <a href="#wishes" className="btn btn-sm animated-button victoria-two">
            Wishes
          </a>
        </div>
      </Grid>
      <Grid item lg={3} md={3} sm={3} xs={3}>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <a
            href="#gifts"
            className="btn btn-sm animated-button victoria-three"
          >
            Gifts
          </a>
        </div>
      </Grid>
      <Grid item lg={3} md={3} sm={3} xs={3}>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <a
            href="#aboutus"
            className="btn btn-sm animated-button victoria-four"
          >
            About Us
          </a>
        </div>
      </Grid>
    </Grid>
  );
};

export default Navbar;
