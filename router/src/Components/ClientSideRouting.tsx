import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link } from "react-router-dom";
type IProps = {};
type IState = {};

export class ClientSideRouting extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="about">About</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  render() {
    return <div>Client Side Routing</div>;
  }
}

export default ClientSideRouting;
