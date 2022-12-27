import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Link,
  List,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  HelpCenterChildDiv,
  LogoImagetag,
  Navbarheadertag,
  TopBarInnerDiv,
  HelpCenterText,
  NavbarButtonsdiv,
  NavbarInsidediv,
  NavbarButtonSignIn,
  NavbarbuttonSubmit,
  SearchBardiv,
  SearchTextDiv,
  InsideSearchDiv,
  MainTextDiv,
  InputForm,
  SearchInput,
  HelpButton,
  HamburgerIscon,
  DrawerSubmit,
  DrawerSignIn,
} from "./Styling/Styling.styles";
import { CloseRounded, MenuTwoTone, Search } from "@material-ui/icons";
import { cardData } from "./CardData";

type Anchor = "top" | "left" | "bottom" | "right";

export const Help = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "#000" }}
    >
      <Navbarheadertag>
        <TopBarInnerDiv>
          <HelpCenterChildDiv>
            <LogoImagetag src="https://assets.website-files.com/5ff3926f03b3ba26b7d639cb/60c388b0019f5b05862fd062_Abstract_Wordmark-White.png" />
            <HelpCenterText>Help Center</HelpCenterText>
          </HelpCenterChildDiv>
        </TopBarInnerDiv>
        <NavbarButtonsdiv>
          <CloseRounded></CloseRounded>
        </NavbarButtonsdiv>
      </Navbarheadertag>
      <List
        style={{
          color: "white",
          fontSize: "24px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <DrawerSignIn>Submit a request</DrawerSignIn>
      </List>
      <Divider />
      <div
        style={{
          width: "50%",
          textAlign: "center",
          height: "2px",
          backgroundColor: "#3d3b3b",
          margin: "auto",
        }}
      ></div>
      <List
        style={{
          color: "white",
          fontSize: "24px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <DrawerSubmit>Sign in</DrawerSubmit>
      </List>
    </Box>
  );
  return (
    <>
      <Navbarheadertag>
        <TopBarInnerDiv>
          <HelpCenterChildDiv>
            <LogoImagetag src="https://assets.website-files.com/5ff3926f03b3ba26b7d639cb/60c388b0019f5b05862fd062_Abstract_Wordmark-White.png" />
            <HelpCenterText>Help Center</HelpCenterText>
          </HelpCenterChildDiv>
          <NavbarButtonsdiv>
            <HamburgerIscon
              style={{
                backgroundColor: "#000",
                textDecoration: "none",
                color: "white",
              }}
            >
              {(["top"] as const).map((anchor) => (
                <>
                  <MenuTwoTone
                    style={{
                      backgroundColor: "#000",
                      color: "white",
                      padding: "10px",
                      overflow: "hidden",
                    }}
                    onClick={toggleDrawer("top", true)}
                  ></MenuTwoTone>
                  <Drawer
                    anchor={"top"}
                    open={state["top"]}
                    onClose={toggleDrawer("top", false)}
                  >
                    {list("top")}
                  </Drawer>
                </>
              ))}
              {/* <Search style={{ display: "block" }}></Search> */}
            </HamburgerIscon>
            <NavbarInsidediv>
              <NavbarButtonSignIn>Submit a request</NavbarButtonSignIn>
              <NavbarbuttonSubmit>Sign in</NavbarbuttonSubmit>
            </NavbarInsidediv>
          </NavbarButtonsdiv>
        </TopBarInnerDiv>
      </Navbarheadertag>
      <SearchBardiv>
        <SearchTextDiv>
          <InsideSearchDiv>
            <MainTextDiv>How can we help?</MainTextDiv>
            <InputForm>
              <SearchInput placeholder="Search..."></SearchInput>
            </InputForm>
          </InsideSearchDiv>
        </SearchTextDiv>
      </SearchBardiv>
      <Grid container style={{ padding: "150px" }}>
        {cardData.map((item: any) => {
          return (
            <Grid item lg={6} sm={12} md={6} xl={6} style={{ margin: "auto" }}>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div>
                  <img
                    style={{ width: "100%", marginTop: "45px" }}
                    src={item.image}
                  />
                </div>
                <div style={{ textAlign: "left" }}>
                  <h4 style={{ fontSize: "24px" }}>{item.name}</h4>
                  <p style={{ fontSize: "24px" }}>{item.description}</p>
                  <Button variant="outlined" style={{ border: "none" }}>
                    <Link href={item.learn_more_url}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <footer style={{ position: "relative", backgroundColor: "#000000" }}>
        <Grid container>
          <Grid
            item
            style={{ color: "white", marginTop: "20px", padding: "50px" }}
            lg={2.4}
          >
            <Typography
              style={{
                textAlign: "start",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Abstarct
            </Typography>
            <Typography style={{ textAlign: "start" }}>Start Trial</Typography>
            <Typography style={{ textAlign: "start" }}>Pricing</Typography>
            <Typography style={{ textAlign: "start" }}>Download</Typography>
          </Grid>
          <Grid
            item
            style={{ color: "white", marginTop: "20px", padding: "50px" }}
            lg={2.4}
          >
            <Typography
              style={{
                textAlign: "start",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Resources
            </Typography>
            <Typography style={{ textAlign: "start" }}>Blog</Typography>
            <Typography style={{ textAlign: "start" }}>Help Center</Typography>
            <Typography style={{ textAlign: "start" }}>
              Release Notes
            </Typography>
            <Typography style={{ textAlign: "start" }}>Status</Typography>
          </Grid>
          <Grid
            item
            style={{ color: "white", marginTop: "20px", padding: "50px" }}
            lg={2.4}
          >
            <Typography
              style={{
                textAlign: "start",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Community
            </Typography>
            <Typography style={{ textAlign: "start" }}>Twitter</Typography>
            <Typography style={{ textAlign: "start" }}>LinkedIn</Typography>
            <Typography style={{ textAlign: "start" }}>Facebook</Typography>
            <Typography style={{ textAlign: "start" }}>Dribble</Typography>
            <Typography style={{ textAlign: "start" }}>Podcast</Typography>
          </Grid>
          <Grid
            item
            style={{ color: "white", marginTop: "20px", padding: "50px" }}
            lg={2.4}
          >
            <Typography
              style={{
                textAlign: "start",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Company
            </Typography>
            <Typography style={{ textAlign: "start" }}>About Us</Typography>
            <Typography style={{ textAlign: "start" }}>Careers</Typography>
            <Typography style={{ textAlign: "start" }}>Legal</Typography>
            <Typography
              style={{
                textAlign: "start",
                fontSize: "16px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Contact Us
            </Typography>
            <Typography style={{ textAlign: "start" }}>
              info@abstract.com
            </Typography>
          </Grid>
          <Grid
            item
            style={{ color: "white", marginTop: "20px", padding: "50px" }}
            lg={2.4}
          >
            <Typography
              style={{
                textAlign: "start",
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "125px",
              }}
            >
              <img
                style={{ width: "20%" }}
                src="https://assets.website-files.com/5ff3926f03b3ba26b7d639cb/600211d2d5625c70ed5ba4e1_abstract-white-badge.png"
              />
            </Typography>
            <Typography style={{ textAlign: "start", fontSize: "20px" }}>
              © Copyright 2022
            </Typography>
            <Typography style={{ textAlign: "start", fontSize: "20px" }}>
              Abstract studio Design,Inc.
            </Typography>
            <Typography style={{ textAlign: "start", fontSize: "20px" }}>
              All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </footer>
      <HelpButton>Help</HelpButton>
    </>
  );
};

export default Help;
