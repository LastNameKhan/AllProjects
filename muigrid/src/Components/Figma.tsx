import React, { Component } from "react";
import { Button, Grid, Typography } from "@mui/material";


class Figma extends Component {
  render() {
    return (
      <>
        <Grid
          sx={{
            backgroundColor: "#74C69D",
            display: "flex",
            justifyContent: "space-between",
            position: "fixed",
            width: "100%",
          }}
        >
          <Grid
            style={{
              backgroundColor: "#fff",
              margin: "auto",
              marginRight: "-80px",
            }}
          >
            <img
              style={{ backgroundColor: "#74C69D", borderBottom: "none" }}
              src={require("file:///home/extended-training-10/Training/React-using-Class-Based-Components1-master/muigrid/src/Utils/Group%201.png")}
              alt="React Image"
            />
          </Grid>
          <Grid item lg={4} sx={{ margin: "auto", marginLeft: "100px" }}>
            <Typography
              style={{
                fontFamily: "sans-serif",
                fontSize: "40px",
                fontWeight: "500",
                color: "#fff",
                margin: "auto",
              }}
            >
              Start
            </Typography>
          </Grid>
          <Grid
            item
            lg={2}
            sx={{
              display: "flex",
              marginTop: "25px",
              margin: "auto",
              columnGap: "30px",
            }}
          >
            <Grid>
              <Typography style={{ color: "#fff" }}>Home</Typography>
            </Grid>
            <Grid>
              <Typography style={{ color: "#fff" }}>Portfolio</Typography>
            </Grid>
            <Grid>
              <Typography style={{ color: "#fff" }}>Services</Typography>
            </Grid>
            <Grid>
              <Typography style={{ color: "#fff" }}>Contact</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column-reverse"
          sx={{
            width: "100%",
            height: "400px",
            backgroundColor: "#74C69D",
          }}
        >
          <Grid lg={6} style={{ border: "1px solid black" }}>
            <Typography>WELCOME</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </Typography>
            <Button>Explore</Button>
          </Grid>
          <Grid lg={6} style={{ border: "1px solid black" }}>
            <img
              style={{
                backgroundColor: "#74C69D",
              }}
              src={require("file:///home/extended-training-10/Training/React-using-Class-Based-Components1-master/muigrid/src/Utils/Group.png")}
              alt="React Image"
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Figma;
