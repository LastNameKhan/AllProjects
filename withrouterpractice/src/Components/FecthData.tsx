import React, { Component } from "react";

type IProps = {};
type IState = {
  name: string;
  author: string;
  data: any[];
};

class FetchData extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "",
      author: "",
      data: [],
    };
  }

  postData = async () => {
    const httpbody = {
      title: this.state.name,
      body: this.state.author,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(httpbody),
      header: {
        "Content-Type": "application.json",
      },
    };

    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options
    );
    const resJson = await res.json();
    this.getData();
    console.log(resJson, "Data");
  };

  getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resJson = await res.json();
    this.setState({ data: resJson });
    console.log(this.state.data, "data");
  };
  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          placeholder="Please Enter the Data here"
        />
        <input
          placeholder="Please Enter the Author"
          value={this.state.author}
          onChange={(e) => this.setState({ author: e.target.value })}
        />
        <button onClick={() => this.postData()}>Submit</button>
        {this.state.data.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.title}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FetchData;
