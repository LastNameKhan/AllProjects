import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Figma /> */}
      <Grid
        container
        style={{
          position: "fixed",
          backgroundColor: "#74C69D",
          width: "100%",
          height: "60px",
          marginTop: "-50px",
          // border: "1px dashed green",
        }}
      >
        <Grid
          // style={{ border: "1px solid black" }}
          sm={1.5}
          xs={1.5}
          xl={1.5}
          lg={1.5}
          md={1.5}
          item
        ></Grid>
        <Grid
          xl={9}
          lg={9}
          sm={9}
          md={9}
          xs={9}
          container
          style={{
            backgroundColor: "#74C69D",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item style={{ display: "flex", backgroundColor: "#74C69D" }}>
            <img
              style={{ backgroundColor: "#74C69D", height: "49px" }}
              src={require("file:///home/extended-training-10/Training/React-using-Class-Based-Components1-master/muigrid/src/Utils/Group%201.png")}
              alt="React Image"
            />
            <Typography
              style={{
                fontFamily: "sans-serif",
                fontSize: "40px",
                fontWeight: "500",
                color: "#fff",
              }}
            >
              Start
            </Typography>
          </Grid>
          <Grid style={{ columnGap: "30px", display: "flex" }}>
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
          // style={{ border: "1px solid black" }}
          sm={1.5}
          xs={1.5}
          xl={1.5}
          lg={1.5}
          item
        ></Grid>
      </Grid>
      <Grid
        container
        style={{
          marginTop: "50px",
          justifyContent: "center",
          width: "100%",
          // border: "1px solid black",
          backgroundColor: "#74C69D",
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
              md: "column-reverse",
              sm: "column-reverse",
              xs: "column-reverse",
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
            direction="column-reverse"
            item
            xl={6}
            lg={6}
            md={6}
            xs={6}
            sm={6}
            style={{ margin: "auto", justifyContent: "space-around" }}
          >
            <Typography
              style={{
                fontSize: "16px",
                fontFamily: "sans-serif",
                marginTop: "50px",
                marginBottom: "10px",
                color: "#fff",
                fontWeight: "600",
                fontStretch: "ultra-expanded",
              }}
            >
              WELCOME
            </Typography>
            <Typography
              style={{
                marginTop: "50",
                color: "#fff",
                fontSize: "40px",
                fontFamily: "sans-serif",
              }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
            <Typography
              style={{
                color: "#fff",
                fontSize: "15px",
                fontFamily: "sans-serif",
                marginTop: "15px",
                lineHeight: "18.7px",
                fontWeight: "400",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </Typography>
            <Button
              style={{
                marginTop: "20px",
                width: "100px",
                backgroundColor: "#fff",
                borderRadius: "none",
                justifyContent: "center",
                border: "none",
                textAlign: "center",
                color: "#000",
              }}
            >
              Explore
            </Button>
          </Grid>
          <Grid
            direction="column-reverse"
            item
            xl={6}
            lg={6}
            md={6}
            xs={6}
            sm={6}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",

              margin: "auto",
            }}
          >
            <img
              style={{
                backgroundColor: "#74C69D",
                width: "100%",
              }}
              src={require("file:///home/extended-training-10/Training/React-using-Class-Based-Components1-master/muigrid/src/Utils/Group.png")}
              alt="React Image"
            />
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
      <Grid container style={{ width: "100%", marginTop: "50px" }}>
        <Grid item xl={1.5} sm={1.5} xs={1.5} md={1.5} lg={1.5}></Grid>
        <Grid
          xl={9}
          lg={9}
          md={9}
          xs={9}
          sm={9}
          // style={{ border: "1px solid red" }}
        >
          <Typography
            style={{ color: "#74C69D", fontSize: "16px", textAlign: "center" }}
          >
            PARTNERS
          </Typography>
          <Typography
            style={{ color: "#000", fontSize: "40px", textAlign: "center" }}
          >
            Lorem Ipsum Dolor
          </Typography>
          <Typography style={{ textAlign: "center", fontSize: "20px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Grid>
        <Grid
          xl={1.5}
          sm={1.5}
          xs={1.5}
          md={1.5}
          lg={1.5}
          // style={{ border: "1px solid black" }}
        ></Grid>
      </Grid>
      <Grid container style={{ marginTop: "50px" }}>
        <Grid
          item
          xl={0.75}
          sm={0.75}
          xs={0.75}
          md={0.75}
          lg={0.75}
          // style={{ border: "1px solid black" }}
        ></Grid>
        <Grid
          container
          xl={10.5}
          lg={10.5}
          md={10.5}
          xs={10.5}
          sm={10.5}
          style={{ rowGap: "50px" }}
          sx={{
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "column",
              sm: "row",
              xs: "row",
            },
          }}
        >
          {/* Main Content Div * 5 Icons */}
          <Grid
            item
            xl={2.4}
            lg={2.4}
            md={12}
            xs={12}
            sm={12}
            style={{ textAlign: "center" }}
          >
            <img
              src={require("file:///home/extended-training-10/Training/React-using-Class-Based-Components1-master/muigrid/src/Utils/XMLID_24_.png")}
              alt="React Image"
            />
          </Grid>
          <Grid
            item
            xl={2.4}
            lg={2.4}
            md={12}
            xs={12}
            sm={12}
            style={{ textAlign: "center" }}
          >
            <img
              src={require("file:///home/extended-training-10/Training/React-using-Class-Based-Components1-master/muigrid/src/Utils/XMLID_1_.png")}
              alt="React Image"
            />
          </Grid>
          <Grid
            item
            xl={2.4}
            lg={2.4}
            md={12}
            xs={12}
            sm={12}
            style={{ textAlign: "center" }}
          >
            <img
              src={require("file:///home/extended-training-10/Training/React-using-Class-Based-Components1-master/muigrid/src/Utils/XMLID_1_%20(1).png")}
              alt="React Image"
            />
          </Grid>
          <Grid
            item
            xl={2.4}
            lg={2.4}
            md={12}
            xs={12}
            sm={12}
            style={{ textAlign: "center" }}
          >
            <img
              src={require("file:///home/extended-training-10/Training/React-using-Class-Based-Components1-master/muigrid/src/Utils/Group%20(1).png")}
              alt="React Image"
            />
          </Grid>
          <Grid
            item
            xl={2.4}
            lg={2.4}
            md={12}
            xs={12}
            sm={12}
            style={{ textAlign: "center" }}
          >
            <img
              src={require("file:///home/extended-training-10/Training/React-using-Class-Based-Components1-master/muigrid/src/Utils/XMLID_1_%20(2).png")}
              alt="React Image"
            />
          </Grid>
        </Grid>
        <Grid
          item
          xl={0.75}
          sm={0.75}
          xs={0.75}
          md={0.75}
          lg={0.75}
          style={{ textAlign: "center" }}
        ></Grid>
      </Grid>
      <Grid container style={{ marginTop: "50px", width: "100%" }}>
        <Grid
          item
          xl={1.5}
          sm={1.5}
          xs={1.5}
          md={1.5}
          lg={1.5}
          // style={{ border: "1px solid black" }}
        ></Grid>
        <Grid
          item
          xl={9}
          lg={9}
          md={9}
          xs={9}
          sm={9}
          style={{ textAlign: "center" }}
        >
          <Button
            style={{
              width: "125px",
              backgroundColor: "#000",
              borderRadius: "none",
              justifyContent: "center",
              border: "none",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Learn more
          </Button>
        </Grid>
        <Grid
          item
          xl={1.5}
          sm={1.5}
          xs={1.5}
          md={1.5}
          lg={1.5}
          // style={{ border: "1px solid black" }}
        ></Grid>
      </Grid>
      <Grid container style={{ marginTop: "50px", width: "100%" }}>
        <Grid
          item
          xl={1.5}
          sm={1.5}
          xs={1.5}
          md={1.5}
          lg={1.5}
          // style={{ border: "1px solid black" }}
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
          xl={9}
          lg={9}
          md={9}
          xs={9}
          sm={9}
          style={{
            // border: "1px solid red",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            xs={6}
            sm={6}
            style={{
              // border: "1px solid red",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <img
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              src={require("file:///home/extended-training-10/Training/React-using-Class-Based-Components1-master/muigrid/src/Utils/Second.png")}
              alt="React Image"
            />
          </Grid>
          <Grid
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "row",
                xs: "row",
              },
            }}
            item
            xl={6}
            lg={6}
            md={6}
            xs={6}
            sm={6}
            style={{ margin: "auto", justifyContent: "center" }}
          >
            <Typography
              style={{
                marginTop: "50",
                color: "#000",
                fontSize: "40px",
                fontWeight: "600",
              }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
            <Typography
              style={{
                color: "#000",
                fontSize: "15px",
                fontFamily: "sans-serif",
                marginTop: "15px",
                lineHeight: "18.7px",
                fontWeight: "400",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </Typography>
            <Button
              style={{
                marginTop: "20px",
                width: "120px",
                backgroundColor: "#000",
                borderRadius: "none",
                justifyContent: "center",
                border: "none",
                textAlign: "center",
                color: "#fff",
                display: "block",
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          xl={1.5}
          sm={1.5}
          xs={1.5}
          md={1.5}
          lg={1.5}
          // style={{ border: "1px solid black" }}
        ></Grid>
      </Grid>
      <Grid
        container
        style={{
          justifyContent: "center",
          width: "100%",
          // border: "1px solid black",
          marginTop: "50px",
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
              md: "column-reverse",
              sm: "column-reverse",
              xs: "column-reverse",
            },
          }}
          lg={9}
          xl={9}
          sm={9}
          xs={9}
          md={9}
          style={{ display: "flex" }}
          item
        >
          <Grid
            direction="column-reverse"
            item
            xl={6}
            lg={6}
            md={6}
            xs={6}
            sm={6}
            style={{ margin: "auto", justifyContent: "center" }}
          >
            <Typography
              style={{
                marginTop: "50",
                color: "#000",
                fontSize: "40px",
                fontWeight: "600",
              }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
            <Typography
              style={{
                color: "#000",
                fontSize: "15px",
                fontFamily: "sans-serif",
                marginTop: "15px",
                lineHeight: "18.7px",
                fontWeight: "400",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </Typography>
            <Button
              style={{
                marginTop: "20px",
                width: "120px",
                backgroundColor: "#000",
                borderRadius: "none",
                justifyContent: "center",
                border: "none",
                textAlign: "center",
                color: "#fff",
                display: "block",
              }}
            >
              Learn More
            </Button>
          </Grid>
          <Grid
            direction="column-reverse"
            item
            xl={6}
            lg={6}
            md={6}
            xs={6}
            sm={6}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <img
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              src={require("file:///home/extended-training-10/Training/React-using-Class-Based-Components1-master/muigrid/src/Utils/Third.png")}
              alt="React Image"
            />
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
      <Grid container style={{ marginTop: "50px", border: "1px solid black" }}>
        <Grid
          item
          xl={1.5}
          sm={1.5}
          xs={1.5}
          md={1.5}
          lg={1.5}
          // style={{ border: "1px solid black" }}
        ></Grid>
        <Grid
          container
          lg={9}
          xl={9}
          sm={9}
          xs={9}
          md={9}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            justifyContent: "center",
            margin: "auto",
            border: "1px solid red",
          }}
        >
          <Grid
            item
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              justifyContent: "center",
              margin: "auto",
            }}
            lg={3}
            xl={3}
            md={12}
            sm={12}
            xs={12}
          >
            <img
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              src={require("file:///home/extended-training-10/Downloads/Group%2032.png")}
              alt="React Image"
            />
          </Grid>
          <Grid
            item
            style={{ border: "1px solid red" }}
            lg={3}
            xl={3}
            md={12}
            sm={12}
            xs={12}
          >
            <img
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              src={require("file:///home/extended-training-10/Downloads/Group%2029.png")}
              alt="React Image"
            />
          </Grid>
          <Grid
            item
            style={{ border: "1px solid red" }}
            lg={3}
            xl={3}
            md={12}
            sm={12}
            xs={12}
          >
            <img
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              src={require("file:///home/extended-training-10/Downloads/Group%2030.png")}
              alt="React Image"
            />
          </Grid>
          <Grid
            item
            style={{ border: "1px solid red" }}
            lg={3}
            xl={3}
            md={12}
            sm={12}
            xs={12}
          >
            <img
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                margin: "auto",
              }}
              src={require("file:///home/extended-training-10/Downloads/Group%2031.png")}
              alt="React Image"
            />
          </Grid>
        </Grid>
        <Grid
          item
          xl={1.5}
          sm={1.5}
          xs={1.5}
          md={1.5}
          lg={1.5}
          style={{ border: "1px solid black" }}
        >
          3
        </Grid>
      </Grid>
      <Grid container style={{ width: "100%", border: "1px solid black" }}>
        <Grid
          item
          xl={1.5}
          sm={1.5}
          xs={1.5}
          md={1.5}
          lg={1.5}
          style={{ border: "1px solid black" }}
        ></Grid>
        <Grid
          item
          lg={9}
          xl={9}
          sm={9}
          xs={9}
          md={9}
          style={{ border: "1px solid red", textAlign: "center" }}
        >
          <Button
            style={{
              width: "125px",
              backgroundColor: "#000",
              borderRadius: "none",
              justifyContent: "center",
              border: "none",
              textAlign: "center",
              color: "#fff",
              marginTop: "25px",
            }}
          >
            Learn more
          </Button>
        </Grid>
        <Grid
          item
          xl={1.5}
          sm={1.5}
          xs={1.5}
          md={1.5}
          lg={1.5}
          style={{ border: "1px solid black" }}
        ></Grid>
      </Grid>
      <Grid
        container
        style={{ height: "60px", width: "100%", backgroundColor: "#74C69D" }}
      ></Grid>
    </div>
  );
}

export default App;
