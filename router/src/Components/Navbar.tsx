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
      <div>
        <Grid container style={{ height: "50px", border: "1px solid black" }}>
          <Grid
            item
            lg={1}
            md={1}
            sm={6}
            xs={4}
            style={{ textAlign: "center", border: "1px solid black" }}
          >
            <Link to="/">Home</Link>
          </Grid>
          <Grid item style={{ textAlign: "center", border: "1px solid black" }}>
            <Link to="/clientsiderouting">Client Side Routing</Link>
          </Grid>
          <Grid item style={{ textAlign: "center", border: "1px solid black" }}>
            <Link to="/nestedroutes">Nested Routes</Link>
          </Grid>
          <Grid item style={{ textAlign: "center", border: "1px solid black" }}>
            <Link to="/dynamicsegments">Dynamic Segments</Link>
          </Grid>
          <Grid item style={{ textAlign: "center", border: "1px solid black" }}>
            <Link to="/">Home</Link>
          </Grid>
          <Grid item style={{ textAlign: "center", border: "1px solid black" }}>
            <Link to="/">Home</Link>
          </Grid>
          <Grid item style={{ textAlign: "center", border: "1px solid black" }}>
            <Link to="/">Home</Link>
          </Grid>
          <Grid item style={{ textAlign: "center", border: "1px solid black" }}>
            <Link to="/">Home</Link>
          </Grid>
          <Grid item style={{ textAlign: "center", border: "1px solid black" }}>
            <Link to="/">Home</Link>
          </Grid>
          <Grid item style={{ textAlign: "center", border: "1px solid black" }}>
            <Link to="/">Home</Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Navbar;
