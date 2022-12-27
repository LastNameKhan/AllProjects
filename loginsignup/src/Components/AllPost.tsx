import React, { Component } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
type MyState = {
  posts: any[];
};

type MyProps = {};

const baseUrl = "https://c72f-49-205-115-133.in.ngrok.io";

export class AllPost extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  getAllPosts = () => {
    console.log("Hann Kaam kariya Hun");
    axios
      .get(`https://empappregular.herokuapp.com/getAllPosts`)
      .then((response) => {
        // console.log(response.data.data, "Double Data");
        console.log(response.data, "Single Data");
        const resp = Object.assign([], response.data);
        console.log(resp, "This was a scam");
        const resData = response.data;
        // console.log("data is loaded",resData);
        this.setState({ posts: resp });

        // this.state.posts.push({ resData Data});Data
        // console.log(this.state.posts, "State");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log("Check post data --->", this.state.posts);

    return (
      <>
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <h6>{post.subtitle}</h6>
            <p>{post.about}</p>
          </div>
        ))}
        <button onClick={() => this.getAllPosts()}>Get Posts</button>
      </>
    );
  }
}

export default AllPost;
