import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
type IProps = {};
type IState = {
  data: any;
};

export class DynamicSegments extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: [],
    };
  }

  getAllData = () => {
    axios.get("http://localhost:8080/data").then((res) => {
      this.setState({ data: res.data });
      console.log(this.state.data, "Data");
    });
  };
  render() {
    return (
      <div>
        <h1>DynamicSegments</h1>
        <Button onClick={() => this.getAllData()}>JSON data</Button>
        {this.state.data.map((item: any) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <h6>{item.username}</h6>
              <h6>{item.age}</h6>
              <h6>{item.job}</h6>
              <button>Delete Data</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DynamicSegments;
