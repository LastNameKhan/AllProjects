import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { count } from "./Count";
import { useNavigate } from "react-router-dom";

const Navbar = (props: any) => {
  const navigate = useNavigate();
  const [datalength, setdatalength] = useState<any>(0);
  useEffect(() => {
    const getlength = JSON.parse(localStorage.getItem("cartlength") || "[]");
    setdatalength(getlength);
    const updatestate = JSON.parse(localStorage.getItem("cartdata") || "[]");
    setdatalength(updatestate.length);
  }, [datalength]);

  console.log(props);

  return (
    <Grid container>
      <Grid
        item
        lg={12}
        md={12}
        sm={6}
        xs={6}
        style={{
          justifyContent: "space-between",
          display: "flex",
          textAlign: "center",
          backgroundColor: "#ccc",
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
      >
        <Grid
          item
          lg={6}
          style={{
            border: "1px solid balck",
            height: "50px",
            margin: "auto",
            color: "black",
            backgroundColor: "#ccc",
          }}
          onClick={() => count + 1}
        >
          <Button
            style={{ backgroundColor: "green", marginTop: "5px" }}
            variant="contained"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </Grid>
        <Grid
          item
          lg={6}
          style={{
            border: "1px solid balck",
            height: "50px",
            margin: "auto",
            backgroundColor: "#ccc",
            color: "black",
          }}
        >
          <Button
            variant="contained"
            style={{ backgroundColor: "green", marginTop: "5px" }}
            onClick={() => navigate("/cart")}
          >
            Cart
          </Button>
        </Grid>
        <Grid
          item
          lg={6}
          style={{
            border: "1px solid balck",
            height: "50px",
            margin: "auto",
            backgroundColor: "#ccc",
            color: "black",
          }}
        >
          {datalength}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
