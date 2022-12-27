import React, { Component } from "react";
import { Link } from "react-router-dom";

type IState = {
  data: any[];
  RandomData: any[];
};
type IProps = {};

export class Random extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: [],
      RandomData: [],
    };
  }

  //   RandomData = () => {
  // const LocalData = localStorage.getItem("DatawithId") || [];
  // this.setState({ RandomData: LocalData });
  // console.log(LocalData, "lOcaL");
  // alert(LocalData);
  // console.log(this.state.RandomData, "RandomData State");
  // }

  RandomData = async () => {
    try {
      const res = await fetch(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=lVwP7oypTvYgXQuxyupgsEsMCknZJIZ4EmRCXGW1"
      );
      const resJson = await res.json();
      const Astro = resJson.near_earth_objects;
      console.log(Astro);
      console.log(Astro[Math.floor(Math.random() * this.state.data.length)]);
      //   console.log(this.state.data, "State Data");
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div>
        {this.state.data.map((user: any) => {
          return (
            <div>
              <h1>{user.name}</h1>
            </div>
          );
        })}
        <button onClick={() => this.RandomData()}>All Data</button>
        <button>
          <Link to="/">Back to home</Link>
        </button>
      </div>
    );
  }
}

export default Random;
