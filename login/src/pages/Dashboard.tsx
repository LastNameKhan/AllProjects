import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "../components/withRoute";
import { baseURL, endPoint } from "../config";

interface IProps {
    navigate: any;
}

interface IState {
  posts: any;
  isOpen: boolean;
  about: string;
  title: string;
  subtitle: string;
}

class Dashboard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      posts: {},
      isOpen: false,
      about: "",
      title: "",
      subtitle: "",
    };
  }

  componentDidMount() {
    console.log(this.props)

    this.getAllPosts();
  }

  getAllPosts = async () => {
    try {
      const res = await fetch(baseURL + endPoint.getAllPosts, {
        headers: {
          token: `${sessionStorage.getItem("token")}`,
        },
      });
      const resJson = await res.json();
      // console.log(resJson)
      this.setState({
        posts: resJson,
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleSubmitAction = async() => {
    try {
        const body = {
            title: this.state.title,
            about: this.state.about,
            subtitle: this.state.subtitle
        }

        const res = await fetch(baseURL + endPoint.createPost, {
            method: "POST",
            headers: {
                token: `${sessionStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if(res.status === 200) {
            const resJson = await res.json();
            alert(resJson.message)
            this.getAllPosts();
            this.setState({
                isOpen: false
            })
        }
        
        
      } catch (e) {
        console.log(e);
      }
  };

  render() {
    return (
      <>
        {this.state.isOpen ? (
          <Box style={{ margin: 50 }}>
            <TextField
              variant="outlined"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <TextField
              variant="outlined"
              value={this.state.about}
              onChange={(e) => this.setState({ about: e.target.value })}
            />
            <TextField
              variant="outlined"
              value={this.state.subtitle}
              onChange={(e) => this.setState({ subtitle: e.target.value })}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.setState({ isOpen: false })}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleSubmitAction()}
            >
              Submit
            </Button>
          </Box>
        ) : (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.setState({ isOpen: true })}
            >
              Add Post
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.props.navigate('page2')}
            >
              Go to page 2
            </Button>
            {Object.values(this.state.posts).map((post: any) => {
              return (
                <Box
                  style={{ padding: 20, border: "1px solid #ccc", margin: 20 }}
                >
                  <Typography>{post.title}</Typography>
                  <Typography>{post.about}</Typography>
                </Box>
              );
            })}
          </>
        )}
      </>
    );
  }
}

export default withRouter(Dashboard)