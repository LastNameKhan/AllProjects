import { Button, TextField } from "@mui/material";
import React, { Component } from "react";

type IState = {
  title: string;
  subtitle: string;
  about: string;
};
type IProps = {};

export class Post extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      title: "",
      subtitle: "",
      about: "",
    };
  }

  createPost = () => {
    const httpBody = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      about: this.state.about,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(httpBody),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`https://empappregular.herokuapp.com/createPost`, options)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson) {
          alert("Register Successful");
        } else {
          alert("Please try Again");
        }
      });
  };

  render() {
    return (
      <div
        style={{
          height: "300px",
          border: "1px solid black",
          width: "300px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <TextField
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
          variant="outlined"
          style={{ marginTop: 20 }}
          label="title"
          fullWidth
        />
        <TextField
          value={this.state.subtitle}
          onChange={(e) => this.setState({ subtitle: e.target.value })}
          variant="outlined"
          style={{ marginTop: 20 }}
          label="subtitle"
          fullWidth
        />
        <TextField
          value={this.state.about}
          onChange={(e) => this.setState({ about: e.target.value })}
          variant="outlined"
          style={{ marginTop: 20 }}
          label="about"
          fullWidth
        />
        <Button
          onClick={() => this.createPost()}
          variant="contained"
          style={{ marginTop: "20px" }}
        >
          Send Data
        </Button>
      </div>
    );
  }
}

export default Post;
