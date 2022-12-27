import { baseURL, endPoint } from "../Config";
import React, { Component } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

type IProps = {};
type IState = {
  title: string;
  about: string;
  subtitle: string;
  image?: File | null | any;
};

export class CreatePost extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      title: "",
      about: "",
      subtitle: "",
      image: null,
    };
  }
  Onformsubmit = async () => {
    try {
      var formdata = new FormData();
      formdata.append("about", this.state.about);
      formdata.append("title", this.state.title);
      formdata.append("subtitle", this.state.subtitle);
      formdata.append("files", this.state.image, "google.png");

      const res = await fetch(baseURL + endPoint.createPost, {
        method: "POST",
        headers: {
          token: `${sessionStorage.getItem("token")}`,
          //   "Content-Type": "multipart/form-data",
        },
        body: formdata,
      });
      if (res.status === 200) {
        const resJson = await res.json();
        alert(resJson.message);
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div>
        {/* <form onSubmit={() => this.Onformsubmit()}> */}
        <Typography
          style={{
            fontFamily: "sans-serif",
            fontSize: "40px",
            fontWeight: "400",
          }}
        >
          Create Post
        </Typography>
        <Box
          style={{
            margin: "auto",
            height: "350px",
            width: "400px",
            backgroundColor: "#B7BED8",
            transition: "all 0.8s ease",
          }}
        >
          <Typography
            style={{ textAlign: "center", color: "#3f3d36", fontWeight: "600" }}
          >
            Hi,Please Enter Your Title Here
          </Typography>
          <TextField
            variant="standard"
            style={{ width: "320px" }}
            label={"Please enter title"}
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <Typography
            style={{ textAlign: "center", color: "#3f3d36", fontWeight: "600",marginBottom:"-20px" }}
          >
            Please Enter Your Author Here
          </Typography>
          <TextField
            variant="standard"
            style={{ width: "320px", marginTop: "20px" }}
            label={"Please enter author"}
            value={this.state.about}
            onChange={(e) => this.setState({ about: e.target.value })}
          />
          <Typography
            style={{ textAlign: "center", color: "#3f3d36", fontWeight: "600",marginBottom:"-20px" }}
          >
            Please Enter Your Subtitle Here
          </Typography>
          <TextField
            variant="standard"
            style={{ width: "320px", marginTop: "20px" }}
            label={"Please enter subtitle"}
            value={this.state.subtitle}
            onChange={(e) => this.setState({ subtitle: e.target.value })}
          />
          {/* // data.append('images', state.image, image.name)}/ */}
          <Button variant="contained" component="label" style={{width:"350px",marginTop:"20px"}}>
            Upload
            <input
              hidden
              style={{ width: "300px", marginTop: "20px" }}
              accept="image/*"
              multiple
              type="file"
              onChange={(e: any) => this.setState({ image: e.target.files[0] })}
            />
          </Button>
          {/* <input
            // value={this.state.image}
            onChange={(e: any) => this.setState({ image: e.target.files[0] })}
            // onChange={(e: any) => console.log(e)}
            type="file"
            style={{ width: "250px" }}
          /> */}
          <Button
            onClick={() => this.Onformsubmit()}
            style={{ marginTop: "20px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </Box>
        {/* </form> */}
      </div>
    );
  }
}

export default CreatePost;
