import React, { Component } from "react";
import { useActionData, Form, redirect } from "react-router-dom";

type IProps = {};
type IState = {
  email: string;
  password: string;
};

const errors = useActionData();

export class ActionData extends Component<IProps, IState> {
  constructor(props: IState) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div>
        <h1>useActionData</h1>
        <Form>
          <input type="text" name="email" />
          {/* {errors?.this.state.email && <span>{errors.this.state.email}</span>} */}
        </Form>
      </div>
    );
  }
}

export default ActionData;
