import { Grid } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

type IProps = {};
type IState = {};

export class Navbar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Grid container>
        <Grid
          item
          lg={12}
          md={12}
          sm={6}
          xs={6}
          style={{ justifyContent: "space-around", display: "flex" }}
        >
          <Grid
            item
            lg={6}
            style={{
              border: "1px solid balck",
              height: "50px",
              margin: "auto",
              backgroundColor: "grey",
              color: "black",
            }}
          >
            Home
          </Grid>
          <Grid
            item
            lg={6}
            style={{
              border: "1px solid balck",
              height: "50px",
              margin: "auto",
              backgroundColor: "grey",
              color: "black",
            }}
          >
            <Link to="/cart">Cart</Link>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Navbar;
