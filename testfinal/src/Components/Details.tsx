import React, { Component } from "react";
import { Link } from "react-router-dom";
import withRouter from "../Components/withRouter";

type IProps = {
  location: any;
};
type IState = {
  Display: any;
};

export class Details extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      Display: this.props.location.state,
    };
  }
  
  render() {
    console.log(this.props.location.state, "Display Data");
    return (
      <div>
            <div key={this.state.Display.id}>
              <h1>Name :- {this.state.Display.name}</h1>
              <h1>URL :- {this.state.Display.nasa_jpl_url}</h1>
              <h1>Risky :- {this.state.Display.is_potentially_hazardous_asteroid ? "true" : "false"}</h1>
            </div>
        <button onClick={() => {}}>
          <Link to="/">Get Back to Home page</Link>
        </button>
      </div>
    );
  }
}

export default withRouter(Details);
