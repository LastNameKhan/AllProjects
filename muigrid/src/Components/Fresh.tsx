import React, { Component } from "react";
import { Grid } from "@mui/material";

class Fresh extends Component {
  render() {
    return (
      <>
        <Grid
          container
          style={{ marginTop: "100px", border: "1px solid black" }}
        >
          <Grid style={{ border: "1px solid black" }} item lg={1.5}>
            1
          </Grid>
          <Grid
            style={{ display: "flex", border: "1px solid black" }}
            item
            lg={9}
          >
            <Grid item md={6} style={{ border: "1px solid red" }}>
              child1
            </Grid>
            <Grid item md={6} style={{ border: "1px solid red" }}>
              child2
            </Grid>
          </Grid>
          <Grid style={{ border: "1px solid black" }} item lg={1.5}>
            3
          </Grid>
        </Grid>
      </>
    );
  }}

export default Fresh;
