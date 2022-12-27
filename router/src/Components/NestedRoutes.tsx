import { Button } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

type IProps = {};
type IState = {};

export class NestedRoutes extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>NestedRoutes</h1>
        <Button>
          <Link to="/insidenestedroute">Inside Nested Route</Link>
        </Button>
      </div>
    );
  }
}

export default NestedRoutes;
