import React from "react";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import GetAllpost from "./Components/GetAllpost";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Factors from "./Components/Factors";
import SinglePageData from "./Components/SinglePageData";
import Array from "./Components/Array";
import Logic from "./Components/Logic";

const GlobalStyle = createGlobalStyle`
  body {
    width:100%;
    background: #1D4350;
    background: -webkit-linear-gradient(to right, #267f9c);
    background: linear-gradient(to right, #978c8b, #1D4350); 
    color: whitesmoke
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        <Route path="/getallpost" element={<GetAllpost />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/factors" element={<Factors />}></Route>
        <Route path="/singlepagedata" element={<SinglePageData />}></Route>
        <Route path="/array" element={<Array />}></Route>
        <Route path="/logic" element={<Logic />}></Route>
      </Routes>
    </div>
  );
}

export default App;
