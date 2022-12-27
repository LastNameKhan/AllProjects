import React, { Component } from "react";
import { Link } from "react-router-dom";

type MyState = {};
type MyProps = {};

export class Navbar extends Component {
  constructor(props: MyProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          height: "50px",
          width: "100%",
          backgroundColor: "#e74343",
          display: "flex",
        }}
      >
        <div style={{ color: "#fff", height: "40px", width: "100px" }}>
          <Link to="/">Home</Link>
        </div>
        <div style={{ color: "#fff", height: "40px", width: "100px" }}>
          <Link to="/signin">SignIn</Link>
        </div>
        <div style={{ color: "#fff", height: "40px", width: "100px" }}>
          <Link to="/log">LogIn</Link>
        </div>
        <div style={{ color: "#fff", height: "40px", width: "100px" }}>
          <Link to="/signup">Register</Link>
        </div>
        <div style={{ color: "#fff", height: "40px", width: "100px" }}>
          <Link to="/login">LogIn Not</Link>
        </div>
        <div style={{ color: "#fff", height: "40px", width: "100px" }}>
          <Link to="/allpost">All Post</Link>
        </div>
        <div style={{ color: "#fff", height: "40px", width: "100px" }}>
          <Link to="/post">Post Data</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
