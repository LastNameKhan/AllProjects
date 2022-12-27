import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import AuthContext from "./Context/AuthContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <AuthContext>
        <Routes>
          <Route></Route>
        </Routes>
      </AuthContext>
    </div>
  );
}

export default App;
