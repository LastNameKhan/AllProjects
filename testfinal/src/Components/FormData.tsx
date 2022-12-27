import React, { Component } from "react";
import withRouter from "../Components/withRouter";
type IState = {
  data: any[];
  AstroId: number | string;
  DatawithId: any[];
};
type IProps = {
  navigate: any;
};

export class FormData extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: [],
      AstroId: 0,
      DatawithId: [],
    };
  }

  getAllData = async () => {
    try {
      const res = await fetch(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=lVwP7oypTvYgXQuxyupgsEsMCknZJIZ4EmRCXGW1"
      );
      const resJson = await res.json();
      const Astro = resJson.near_earth_objects;
      // localStorage.setItem("Data", JSON.stringify(Astro));
      console.log(Astro);
      console.log(this.state.data, "Index Data");
      this.setState({
        data: Astro,
      });
      //   console.log(this.state.data, "State Data");
    } catch (e) {
      console.log(e);
    }
  };

  getAstroIdInputData = async () => {
    try {
      const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${this.state.AstroId}?api_key=lVwP7oypTvYgXQuxyupgsEsMCknZJIZ4EmRCXGW1`
      );
      const resJson = await res.json();
      this.props.navigate("/details", { state: resJson });
      console.log(this.state.DatawithId, "DataWithId");
      console.log(res.status, "Status");
      console.log(res.status, "error Status");
    } catch (e) {
      console.log(e);
      alert("Please Enter the Correct Value");
    }
  };

  getDataWithStatus = () => {};

  getRandomAsteroid = async () => {
    try {
      const res = await fetch(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=lVwP7oypTvYgXQuxyupgsEsMCknZJIZ4EmRCXGW1"
      );
      const resJson = await res.json();
      const Astro = resJson.near_earth_objects;
      console.log(Astro);
      const randId = Astro[Math.floor(Math.random() * Astro.length)];
      console.log(randId, "Random");
      this.props.navigate("/details", { state: randId });
      this.setState({ AstroId: randId }, () => {
        this.getAstroIdInputData();
      });
      //   console.log(this.state.data, "State Data");
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.props.navigate, "Props");
    return (
      <div>
        <div
          style={{
            height: "100px",
            width: "190px",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <input
            value={this.state.AstroId}
            onChange={(e) => this.setState({ AstroId: e.target.value })}
            placeholder="Enter Astroid ID"
          />
          <button onClick={() => this.getAstroIdInputData()}>Submit</button>
          <button onClick={() => this.getRandomAsteroid()}>Random</button>
        </div>
        {Object.values(this.state.DatawithId).map((InputId: any) => {
          return (
            <div key={InputId.id}>
              <h1>Name :- {InputId.name}</h1>
              <h1>Url :- {InputId.nasa_jpl_url}</h1>
              <h1>
                Risky :-
                {InputId.is_potentially_hazardous_asteroid ? "true" : "false"}
              </h1>
            </div>
          );
        })}
        <button onClick={() => this.getAllData()}>Get All Data</button>
        {Object.values(this.state.data).map((Astroid: any) => {
          return (
            <div key={Astroid.id}>
              <h1>{Astroid.name}</h1>
              <h1>{Astroid.name_limited}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(FormData);
