import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin";
import Cart from "./Components/Cart";
import User from "./Components/User";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      {/* <Dashboard /> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
