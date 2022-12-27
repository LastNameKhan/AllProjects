import React, { Component } from "react";
import { useActionData } from "react-router-dom";

type IProps = {};
type IState = {};

export class Hooks extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return <div></div>;
  }
}

export default Hooks;
