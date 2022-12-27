import { Button, Grid, Typography, Pagination, Stack } from "@mui/material";
import React, { Component } from "react";
import withRouter from "./withRouter";
import { baseURL, endPoint } from "../Config";

type IProps = {
  navigate: any;
};
type IState = {
  allpost: any[];
  page: number;
  totalpage: number;
  pagesize: number;
  loading: boolean;
};

export class GetAllpost extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      allpost: [],
      page: 0,
      totalpage: 0,
      pagesize: 0,
      loading: true,
    };
  }

  getAllPost = async () => {
    try {
      const res = await fetch(
        `https://empappregular.herokuapp.com/getPostsByPage?pageNumber=${this.state.page}&limit=${this.state.pagesize}`
      );
      const resJson = await res.json();
      const data = resJson.posts;
      this.setState({ totalpage: resJson.numberOfPages });
      this.setState({ allpost: data });
    } catch (e) {
      console.log(e);
    }
  };

  getItemById = (item: any) => {
    this.props.navigate("/singlepagedata", { state: item });
  };

  handleOnPageChange = (e: any, value: any) => {
    this.setState({ page: value }, () => {
      this.getAllPost();
    });
  };

  handlePageSizeChange = (e: any) => {
    this.setState({ pagesize: e.target.value }, () => {
      this.getAllPost();
    });
  };

  componentDidMount = () => {
    this.setState({ loading: false });
  };

  render() {
    return (
      <div>
        <Stack spacing={2} style={{ marginLeft: "39%", marginTop: "8px" }}>
          <Pagination
            page={this.state.page}
            count={this.state.totalpage}
            boundaryCount={2}
            shape="rounded"
            onChange={(e, value) => this.handleOnPageChange(e, value)}
            style={{ backgroundColor: "#ccc", width: "200px" }}
          />
          <select
            style={{ width: "50px" }}
            onChange={(e) => this.handlePageSizeChange(e)}
            value={this.state.pagesize}
          >
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
          </select>
        </Stack>
        <Grid container>
          {Object.values(this.state.allpost).map((item) => {
            return (
              <Grid
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  marginTop: "10px",
                  marginLeft: "10px",
                  backgroundColor: "#471725",
                  color: "#fff",
                  borderRadius: "10px",
                }}
                item
                xs={12}
                sm={12}
                md={2.9}
                lg={2.9}
                key={item.index}
              >
                <img
                  style={{ width: "100%", maxHeight: "250px" }}
                  src={baseURL + item.images}
                  alt="This is a png Image"
                />
                <Typography>Author :- {item.author.name}</Typography>
                <Typography>Id :- {item.author.id}</Typography>
                <Typography>Date :- {item.date}</Typography>
                <Typography>Title :- {item.title}</Typography>
                <Typography>Subtitle :- {item.subtitle}</Typography>
                <Typography>About :- {item.about}</Typography>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => this.getItemById(item)}
                >
                  Send
                </Button>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default withRouter(GetAllpost);
