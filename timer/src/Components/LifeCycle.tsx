import { Button } from "@mui/material";
import React, { Component } from "react";

type MyState = {
  count: number;
};

type MyProps = {};

class LifeCycle extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }

  handleOnClickad() {
    this.setState({ count: this.state.count + 1 });
  }
  handleOnClicksub() {
    if (this.state.count === 0) {
      alert("Can not enter an Negative Number");
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  }
  handlereset() {
    this.setState({ count: 0 });
  }
  render() {
    console.log("rendering");
    return (
      <div>
        <h1>Value</h1>
        <h1>The Count is : {this.state.count}</h1>
        <Button onClick={() => this.handleOnClickad()}>Increment</Button>
        <Button onClick={() => this.handleOnClicksub()}>Decrement</Button>
        <Button onClick={() => this.handlereset()}>Reset</Button>
      </div>
    );
  }
}

export default LifeCycle;
