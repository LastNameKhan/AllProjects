import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

type IProps = {};
type IState = {};

export class Navbar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Grid
        container
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          justifyContent: "space-between",
          height: "60px",
          width: "100%",
          backgroundColor: "teal",
          position: "sticky",
        }}
      >
        <Grid
          item
          lg={2}
          md={2}
          sm={1}
          xs={1}
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid
            style={{
              backgroundColor: "#d4d3d3",
              marginTop: "10px",
              height: "40px",
              color: "#000",
              margin: "auto",
              textAlign: "center",
              marginLeft: "30px",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
            }}
          >
            <Typography style={{ marginTop: "6px" }}>
              <Link
                style={{
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#000",
                }}
                to="/"
              >
                Home
              </Link>
            </Typography>
          </Grid>
          <Grid
            style={{
              backgroundColor: "#d4d3d3",
              marginTop: "10px",
              height: "40px",
              color: "#000",
              textAlign: "center",
              marginLeft: "10px",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
            }}
          >
            <Typography style={{ marginTop: "6px" }}>
              <Link
                style={{
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#000",
                }}
                to="/getallpost"
              >
                GetAllPost
              </Link>
            </Typography>
          </Grid>
          <Grid
            style={{
              backgroundColor: "#d4d3d3",
              marginTop: "10px",
              height: "40px",
              color: "#000",
              textAlign: "center",
              marginLeft: "10px",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
            }}
          >
            <Typography style={{ marginTop: "6px" }}>
              <Link
                style={{
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#000",
                }}
                to="/createpost"
              >
                CreatePost
              </Link>
            </Typography>
          </Grid>
          <Grid
            style={{
              backgroundColor: "#d4d3d3",
              marginTop: "10px",
              height: "40px",
              width: "100px",
              color: "#000",
              textAlign: "center",
              marginLeft: "10px",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
            }}
          >
            <Typography style={{ marginTop: "6px" }}>
              <Link
                style={{
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#000",
                }}
                to="/signup"
              >
                SignUp
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          style={{
            backgroundColor: "#d4d3d3",
            marginTop: "10px",
            height: "40px",
            width: "100px",
            color: "#000",
            textAlign: "center",
            marginLeft: "10px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
          }}
        >
          <Typography style={{ marginTop: "6px" }}>
            <Link
              style={{
                alignItems: "center",
                textDecoration: "none",
                color: "#000",
              }}
              to="/factors"
            >
              Factors
            </Link>
          </Typography>
        </Grid>
        <Grid
          style={{
            backgroundColor: "#d4d3d3",
            marginTop: "10px",
            height: "40px",
            width: "100px",
            color: "#000",
            marginRight: "10px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
          }}
        >
          <Typography style={{ marginTop: "6px" }}>
            <Link
              style={{
                alignItems: "center",
                textDecoration: "none",
                color: "#000",
              }}
              to="/logic"
            >
              Logic
            </Link>
          </Typography>
        </Grid>
        <Grid
          style={{
            backgroundColor: "#d4d3d3",
            marginTop: "10px",
            height: "40px",
            color: "#000",
            textAlign: "center",
            marginLeft: "10px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
          }}
        >
          <Typography style={{ marginTop: "6px" }}>
            <Link
              style={{
                alignItems: "center",
                textDecoration: "none",
                color: "#000",
              }}
              to="/singlepagedata"
            >
              Single Page Data
            </Link>
          </Typography>
        </Grid>
        <Grid
          style={{
            backgroundColor: "#d4d3d3",
            marginTop: "10px",
            height: "40px",
            width: "100px",
            color: "#000",
            marginRight: "10px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
          }}
        >
          <Typography style={{ marginTop: "6px" }}>
            <Link
              style={{
                alignItems: "center",
                textDecoration: "none",
                color: "#000",
              }}
              to="/Login"
            >
              Login
            </Link>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Navbar;
