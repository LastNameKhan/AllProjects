import React, { Component } from "react";
import AllPost from "./Components/AllPost";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { Log } from "./Components/Log";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Post from "./Components/Post";
import Dashboard from "./Components/Dashboard";
export class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <Routes>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/log" element={<Log />}></Route>
          <Route path="/allpost" element={<AllPost />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/post" element={<Post />}></Route>
        </Routes> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <AllPost /> */}
        {/* <Signin /> */}
        {/* <Log /> */}
        <Dashboard />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
