import "./App.css";
import React, { Component } from "react";
import FormData from "./Components/FormData";
import Details from "./Components/Details";
import Random from "./Components/Random";
import { Routes, Route } from "react-router-dom";

type IState = {
  data: any[];
};
type IProps = {};

export class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<FormData />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/random" element={<Random />}></Route>
        </Routes>
        {/* <FormData /> */}
        {/* <Details /> */}
      </div>
    );
  }
}

export default App;
