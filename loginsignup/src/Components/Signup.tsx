import React, { Component } from "react";
import {
  Box,
  Button,
  Grid,
  Hidden,
  // Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

type MyProps = {};

type MyState = {
  employeID: string | null;
  name: string | null;
  password: string | null;
  error: string | null;
};

const baseUrl = "https://empappregular.herokuapp.com";

class Signup extends Component<MyState, MyProps> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      employeId: "",
      name: "",
      password: "",
      error: "",
    };
  }

  register = async () => {
    try {
      const body = {
        emp_id: this.state.employeId,
        name: this.state.name,
        password: this.state.password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      const res = await fetch(`${baseUrl}/signUp`);
      const resJson = await res.json();
      if (res.status === 200) {
        if (resJson?.token) {
          console.log(resJson);
          sessionStorage.setItem("token", resJson.token);
          sessionStorage.setItem("user", JSON.stringify(resJson.user));
          //navigate('/')
        }
      } else {
        this.setState({ error: resJson.message });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        <Grid container>
          <Grid>
            <Typography
              style={{
                fontFamily: "sans-serif",
                fontSize: "20px",
                fontWeight: "600",
                marginTop: "10px",
                marginLeft: "20px",
              }}
            >
              <img
                style={{ height: "50px", backgroundColor: "#000" }}
                src={
                  "https://www.freepnglogos.com/uploads/star-wars-logo-0.png"
                }
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            marginTop: "50px",
            justifyContent: "center",
            width: "100%",
            // border: "1px solid black",
          }}
        >
          <Grid
            // style={{ border: "1px solid black" }}
            item
            sm={1.5}
            xs={1.5}
            md={1.5}
            xl={1.5}
            lg={1.5}
          ></Grid>
          <Grid
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
            }}
            lg={9}
            xl={9}
            sm={9}
            xs={9}
            md={9}
            style={{
              display: "flex",
              // border: "1px solid black",
            }}
            item
          >
            <Grid
              //   direction="column-reverse"
              item
              xl={6}
              lg={6}
              md={6}
              xs={6}
              sm={6}
              style={{
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
                // border: "1px solid black",
                margin: "auto",
                marginTop: "100px",
                // justifyContent: "space-around",
              }}
            >
              <Typography
                style={{
                  fontSize: "50px",
                  fontFamily: "sans-serif",
                  marginBottom: "10px",
                  fontWeight: "600",
                  fontStretch: "ultra-expanded",
                }}
              >
                Sign Up to
              </Typography>
              <Typography
                style={{
                  fontWeight: "500",
                  marginTop: "50",
                  fontSize: "35px",
                  fontFamily: "sans-serif",
                }}
              >
                Lorem ipsum id simply
              </Typography>
              <Typography
                style={{
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  marginTop: "15px",
                  lineHeight: "18.7px",
                  fontWeight: "400",
                }}
              >
                If you already have an account.
              </Typography>
              <Typography>
                You can{" "}
                <Link
                  to="/login"
                  style={{
                    color: "#4D47C3",
                    fontWeight: "800",
                    textDecoration: "none",
                  }}
                >
                  Login here !
                </Link>
              </Typography>
            </Grid>
            <Grid
              //   direction="column-reverse"
              item
              xl={6}
              lg={6}
              md={6}
              xs={6}
              sm={6}
              style={{
                margin: "auto",
                // border: "1px solid black",
                // marginTop: "200px",
                // marginLeft: "-150px",
              }}
            >
              <Hidden lgDown>
                <img
                  style={{
                    width: "100%",
                    // marginLeft: "100px",
                  }}
                  src={require("file:///home/extended-training-10/Downloads/Saly-14.png")}
                  alt="React Image"
                />
              </Hidden>
            </Grid>
            <Grid
              //   direction="column-reverse"
              item
              xl={6}
              lg={6}
              md={6}
              xs={6}
              sm={6}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                // border: "1px solid black",
                // marginLeft: "200px",
                margin: "auto",
              }}
            >
              <Typography
                style={{
                  fontWeight: "550",
                  fontSize: "30px",
                  fontFamily: "sans-Serif",
                  lineHeight: "45px",
                }}
              >
                Sign Up
              </Typography>
              <TextField
                fullWidth
                onChange={(e) => this.setState({ employeId: e.target.value })}
                label="Enter Employee ID"
                InputLabelProps={{
                  style: {
                    width: "100%",
                    color: "#A7A3FF",
                  },
                }}
                style={{
                  marginTop: "30px",
                  backgroundColor: "#F0EFFF",
                  borderRadius: "8px",
                }}
              />
              <TextField
                fullWidth
                onChange={(e) => this.setState({ name: e.target.value })}
                label="Enter name"
                InputLabelProps={{
                  style: {
                    width: "100%",
                    color: "#A7A3FF",
                  },
                }}
                style={{
                  marginTop: "30px",
                  backgroundColor: "#F0EFFF",
                  borderRadius: "8px",
                }}
              />
              <TextField
                fullWidth
                type="number"
                label="Contact Number"
                InputLabelProps={{
                  style: {
                    width: "100%",
                    color: "#A7A3FF",
                  },
                }}
                style={{
                  marginTop: "30px",
                  backgroundColor: "#F0EFFF",
                  borderRadius: "8px",
                }}
              />
              <TextField
                fullWidth
                onChange={(e) => this.setState({ password: e.target.value })}
                type="password"
                label="Password"
                InputLabelProps={{
                  style: {
                    width: "100%",
                    color: "#A7A3FF",
                  },
                }}
                style={{
                  marginTop: "30px",
                  backgroundColor: "#F0EFFF",
                  borderRadius: "8px",
                }}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                InputLabelProps={{
                  style: {
                    width: "100%",
                    color: "#A7A3FF",
                  },
                }}
                style={{
                  marginTop: "30px",
                  backgroundColor: "#F0EFFF",
                  borderRadius: "8px",
                }}
              />
              <Button
                onClick={() => this.register()}
                variant="contained"
                fullWidth
                style={{
                  borderRadius: "8px",
                  height: "59px",
                  backgroundColor: "#4D47C3",
                }}
                sx={{ mt: 3 }}
              >
                Register
              </Button>
              <Typography
                style={{
                  color: "#B5B5B5",
                  fontSize: "16px",
                  marginTop: "30px",
                  textAlign: "center",
                }}
              >
                or continue with
              </Typography>
              <Box
                style={{
                  marginTop: "30px",
                  textAlign: "center",
                }}
              >
                <img
                  style={{
                    marginRight: "20px",
                  }}
                  src={require("file:///home/extended-training-10/Downloads/Facebook.png")}
                />
                <img
                  style={{
                    marginRight: "20px",
                  }}
                  src={require("file:///home/extended-training-10/Downloads/apple.png")}
                />
                <img
                  style={{
                    marginRight: "20px",
                  }}
                  src={require("file:///home/extended-training-10/Downloads/google.png")}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            // style={{ border: "1px solid black" }}
            item
            xl={1.5}
            sm={1.5}
            xs={1.5}
            md={1.5}
            lg={1.5}
          ></Grid>
        </Grid>
      </>
    );
  }
}

export default Signup;
