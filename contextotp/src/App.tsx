import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Number from "./Components/Number";
import Otp from "./Components/Otp";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

export const OtpContext = createContext([]) as any;

function App() {
  const [otp, setOtp] = useState<any>("");
  const [number, setNumber] = useState<any>("");
  const [dashboard, setDashboard] = useState<any>("");
  return (
    <div className="App">
      <OtpContext.Provider
        value={{ otp, setOtp, number, setNumber, dashboard, setDashboard }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Number />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </OtpContext.Provider>
    </div>
  );
}

export default App;
