import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import withRouter from "./withRouter";

interface IProps {
  navigate: any;
}

interface IState {
  data: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }[];
  temparr: any[];
  filtercheck: any;
  title: any;
  body: any;
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: [],
      filtercheck: "",
      title: "",
      body: "",
      temparr: [],
    };
  }

  componentDidMount(): void {
    this.getData();
  }

  getData = () => {
    try {
      axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
        console.log("resData", res);
        this.setState({ data: res.data });
      });
    } catch (e) {
      console.log(e, "error");
    }
  };

  handleDelete = (deleteId: any) => {
    try {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${deleteId}`)
        .then((res) => {
          console.log(res, "deleteres");
          if (res.status === 200 || 201 || 204) {
            alert(`User with ${deleteId} has been deleted Successfully`);
            const filter = this.state.data.filter(
              (item) => item.id !== deleteId
            );
            this.getData();
          } else {
            alert("User cant be deleted");
          }
        });
    } catch (e) {
      console.log("error", e);
    }
  };

  handlePost = () => {
    try {
      axios
        .post(`https://jsonplaceholder.typicode.com/posts`, {
          id: this.state.data.length + 1,
          title: this.state.title,
          body: this.state.body,
        })
        .then((res) => {
          console.log("------res", res);
          if (res.status === 200 || 201 || 204) {
            alert("Post has been Updated Successfully");
          } else {
            alert("Request failed error 404");
          }
        });
    } catch (e) {
      console.log(e, "Error");
    }
  };

  handleput = (editId: any) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${editId}`, {
        title: this.state.title,
        body: this.state.body,
      })
      .then((res) => {
        console.log("res", res);
        if (res.status === 200 || 201 || 204) {
          alert(`User ${editId} has been Updated Successfully`);
          this.setState({ data: res.data });
          this.getData();
        } else {
          alert(res.status);
        }
      });
  };

  render() {
    return (
      <div>
        <div>
          <TextField
            placeholder="Enter Title Here..."
            onChange={(e: any) => {
              this.setState({ title: e.target.value });
            }}
          />
          <TextField
            placeholder="Enter body Here..."
            onChange={(e: any) => {
              this.setState({ body: e.target.value });
            }}
          />
          <TextField
            placeholder="Enter Filter Id Here..."
            onChange={(e: any) =>
              this.setState({ filtercheck: e.target.value })
            }
          />

          <Button variant="contained" color="success" onClick={this.handlePost}>
            Post
          </Button>
          <Button variant="contained" color="error" onClick={this.handleDelete}>
            Delete
          </Button>

          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Website</TableCell>
                  <TableCell align="right">Edit/Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>


                
                {this.state.data
                  .filter(
                    (v: any, i: number, a: any) =>
                      a.findIndex((v2: any) => v2.userId === v.userId) === i
                  )
                  .map((item: any) => (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:hover": { backgroundColor: "violet" },
                      }}
                    >
                      <TableCell align="right">{item.userId}</TableCell>
                      <TableCell align="right">{item.body}</TableCell>
                      <TableCell
                        align="right"
                        onClick={() =>
                          this.props.navigate(`/${item.id}`, { state: item })
                        }
                      >
                        {item.title}
                      </TableCell>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <Button
                            onClick={() => this.handleDelete(item.id)}
                            variant="contained"
                            color="error"
                          >
                            Delete
                          </Button>
                        </div>
                        <div>
                          <Button
                            onClick={() => this.handleput(item.id)}
                            variant="contained"
                            color="secondary"
                          >
                            Edit
                          </Button>
                        </div>
                      </div>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
