import React from "react";
import "./App.css";
import NestedRoutes from "./Components/NestedRoutes";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import ClientSideRouting from "./Components/ClientSideRouting";
import DynamicSegments from "./Components/DynamicSegments";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route
          path="/clientsiderouting"
          element={<ClientSideRouting />}
        ></Route>
        <Route path="/nestedroutes" element={<NestedRoutes />}>
          <Route path="/nestedroutes/insidenestedroute"></Route>
        </Route>
        <Route path="/dynamicsegments" element={<DynamicSegments />}></Route>
      </Routes>
    </div>
  );
}

export default App;
