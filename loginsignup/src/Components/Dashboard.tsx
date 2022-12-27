import { Button, Dialog, DialogContent } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

type IState = {
  posts: any[];
  title: string;
  subtitle: string;
  about: string;
  isOpen: boolean;
};
type IProps = {};

const baseUrl = "https://empappregular.herokuapp.com";

export class Dashboard extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      posts: [],
      title: "",
      subtitle: "",
      about: "",
      isOpen: false,
    };
  }

  //   componentDidMount() {
  //     this.getAllPosts();
  //   }

  getAllPosts = async () => {
    try {
      const data = await fetch(`${baseUrl}/getAllPosts`);
      const resJson = await data.json();
      const response = Object.assign([], resJson);
      console.log(response, "Response");
      this.setState({ posts: response });
      this.setState({ isOpen: !this.state.isOpen });
      console.log(this.state.posts, "posts");
    } catch (e) {
      console.log(e);
    }
  };

  addPostdata = async () => {
    try {
      const body = {
        title: this.state.title,
        about: this.state.about,
        subtitle: this.state.subtitle,
      };

      const res = await fetch(`${baseUrl}/createPost`, {
        method: "POST",
        headers: {
          token: `${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        const resJson = await res.json();
        alert(resJson.message);
        this.getAllPosts();
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">singup</Link>
          <Button onClick={() => this.getAllPosts()}>Get All Data </Button>
          {this.state.isOpen ? (
            <div>
              <input
                onChange={(e) => this.setState({ title: e.target.value })}
                placeholder="Enter Title"
                style={{ height: "50px", border: "2px solid black" }}
              />
              <input
                onChange={(e) => this.setState({ subtitle: e.target.value })}
                placeholder="Enter Subtitle"
                style={{ height: "50px", border: "2px solid black" }}
              />
              <input
                onChange={(e) => this.setState({ about: e.target.value })}
                placeholder="Enter About"
                style={{ height: "50px", border: "2px solid black" }}
              />
              <Button variant="contained" onClick={() => this.addPostdata()}>
                Add Post
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
        {this.state.posts.map((post) => (
          <div
            style={{
              width: "553px",
              border: "1px solid black",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gridTemplateRows: "repeat(1,1fr)",
            }}
            key={post.id}
          >
            <div style={{ borderRight: "1px solid black" }}>
              <h3 style={{ textAlign: "center" }}>{post.title}</h3>
            </div>
            <div style={{ borderRight: "1px solid black" }}>
              <h6>{post.subtitle}</h6>
            </div>
            <div>
              <p>{post.about}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Dashboard;
