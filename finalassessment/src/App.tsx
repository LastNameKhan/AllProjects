import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import User from "./Components/User";
import Admin from "./Components/Admin";
import Cart from "./Components/Cart";
import Help from "./Components/Help";
import Funbtn from "./Components/Funbtn";
import Demo from "./Components/Demo";
import Plan from "./Components/Plan";

export const ProfileContext = createContext([]) as any;

function App() {
  const [profilename, setProfileName] = useState<string>("");
  return (
    <div className="App">
      <ProfileContext.Provider value={{ profilename, setProfileName }}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/plan" element={<Plan />}></Route>
        </Routes>
      </ProfileContext.Provider>
      {/* <Funbtn /> */}
      {/* <Demo /> */}
      {/* <Plan /> */}
    </div>
  );
}

export default App;
