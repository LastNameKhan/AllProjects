import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllProducts />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
