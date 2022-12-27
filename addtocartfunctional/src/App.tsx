import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";


const App = () => {
  const [count,setCount] = useState<any>(0)
  return (
    <div>
      <Navbar count={count} />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default App;
