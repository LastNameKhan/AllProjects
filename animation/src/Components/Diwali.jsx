import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import AnimatedText from "react-animated-text-content";
import { DiwaliText } from "./Styling/Styling";
import styled, { keyframes } from "styled-components";
import "../Components/Navbar.css";
import { Fireworks } from "fireworks/lib/react";
import "../Components/Diwali.css";

const Heading = keyframes`
  0% { top: 100.125em; }
  100% { top: 5em;}
`;

const RightImage = keyframes`
  0% { right: -100.125em; }
  100% { right: 3em;}
`;

const LeftImage = keyframes`
   0% { left: -100.125em; }
  100% { left: 3em;}
`;

const BottomImage = keyframes`
   0% { left: 100.125em; }
  100% { left: 3em;}
`;

const BottomHeaderDiv = styled.div`
  h1 {
    font-weight: lighter;
  }
  top: 0;
  animation: ${BottomImage};
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

const LeftHeaderDiv = styled.div`
  h1 {
    font-weight: lighter;
  }
  top: 0;
  animation: ${LeftImage};
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

const RightHeaderDiv = styled.div`
  h1 {
    font-weight: lighter;
  }
  top: 0;
  animation: ${RightImage};
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

const HomeHeader = styled.div`
  h1 {
    font-weight: lighter;
  }
  top: 0;
  animation: ${Heading};
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

const move = keyframes`
  from {
    transform: translateX(0) rotate(0);
  }
  to {
    transform: translateX(100%) rotate(45deg);
  }

`;

export const Diwali = () => {
  const [light, setLight] = useState(true);

  const handleStateChange = () => {
    setLight(!light);
  };

  let fxProps = {
    count: 3,
    interval: 200,
    colors: ["#fa0c0c", "#f5f844", "#fa7000"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section id="home">
        <Grid container>
          <Grid item lg={12} style={{ margin: "auto", marginTop: "80px" }}>
            <DiwaliText>
              <AnimatedText
                type="chars"
                animationType="float"
                interval={0.04}
                duration={1.8}
                animation={{
                  y: "100px",
                  ease: "linear",
                  scale: 3.01,
                }}
              >
                Extended Family Wishes
              </AnimatedText>
            </DiwaliText>
            <DiwaliText>
              <AnimatedText
                type="chars"
                animationType="bounce"
                interval={0.4}
                duration={2}
                animation={{
                  y: "100px",
                  ease: "linear",
                  scale: 3.01,
                }}
              >
                Happy Diwali
              </AnimatedText>
            </DiwaliText>
          </Grid>
          {light ? (
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography
                style={{ float: "right" }}
                onClick={handleStateChange}
              >
                <AnimatedText
                  type="chars"
                  animationType="float"
                  interval={0.04}
                  duration={1.8}
                  animation={{
                    y: "100px",
                    ease: "linear",
                    scale: 3.01,
                  }}
                >
                  Light Me Up
                </AnimatedText>
                <img
                  style={{ width: "10%", backgroundColor: "black" }}
                  src="https://e7.pngegg.com/pngimages/63/588/png-clipart-green-and-red-fireworks-illustration-sivakasi-crackers-shop-crackers-manufacturers-in-sivakasi-crackers-wholesaler-sivakasi-crackers-firecracker-new-year-firecrackers-diwali-fireworks.png"
                />
              </Typography>
            </Grid>
          ) : (
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Fireworks {...fxProps} />
            </Grid>
          )}
        </Grid>
      </section>
      <Grid container>
        <Grid item lg={4}>
          <HomeHeader>
            <iframe
              style={{ width: "75%", border: "none", margin: "auto" }}
              src="https://embed.lottiefiles.com/animation/38695"
            ></iframe>
          </HomeHeader>
        </Grid>
        <Grid item lg={4}>
          <HomeHeader>
            <iframe
              style={{ width: "75%", border: "none", margin: "auto" }}
              src="https://embed.lottiefiles.com/animation/38605"
            ></iframe>
          </HomeHeader>
        </Grid>
        <Grid item lg={4}>
          <RightHeaderDiv>
            <img
              style={{ width: "75%", margin: "auto" }}
              src="https://images7.alphacoders.com/104/thumb-1920-1047223.jpg"
            />
          </RightHeaderDiv>
        </Grid>
      </Grid>
      <section id="wishes">
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography style={{ fontSize: "44px" }}>
              <AnimatedText
                type="chars"
                animationType="float"
                interval={0.04}
                duration={1.8}
                animation={{
                  y: "100px",
                  ease: "linear",
                  scale: 3.01,
                }}
              >
                Wish you a joyous and prosperous Diwali 2022! Hope the festival
                of lights brings your way bright sparkles of peace, contentment,
                joy, and happiness which stay with you throughout this year and
                also in the years to come. May This Divine Festival Color The
                Pages of Your Life With Peace, Joy And Happiness.May The
                Illumination Of Diwali Fill Your Home With The Light Of Bliss
                And Happiness. Wish You A Very Happy Deepawali!!
              </AnimatedText>
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <iframe
              style={{ minHeight: "100%", minWidth: "100%", border: "none" }}
              src="https://embed.lottiefiles.com/animation/38485"
            ></iframe>
          </Grid>
        </Grid>
      </section>
      <section id="gifts">
        <Grid container>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Paper
              style={{
                border: "1px solid black",
                margin: "20px",
                padding: "20px",
                minHeight: "500px",
              }}
              elevation={3}
            >
              <img
                style={{ width: "100%" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
              />
              <Typography
                style={{ fontSize: "20px", margin: "auto", color: "white" }}
              ></Typography>
            </Paper>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Paper
              style={{
                border: "1px solid black",
                margin: "20px",
                padding: "20px",
                minHeight: "500px",
              }}
              elevation={3}
            >
              <img
                style={{ width: "100%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEsE6uFc87_TrIEeGsSYdGPYBcs9g9hik5A&usqp=CAU"
              />
              <Typography
                style={{ fontSize: "20px", margin: "auto", color: "white" }}
              ></Typography>
            </Paper>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Paper
              style={{
                border: "1px solid black",
                margin: "20px",
                padding: "20px",
                minHeight: "500px",
              }}
              elevation={3}
            >
              <img
                style={{ width: "100%" }}
                src="https://ae01.alicdn.com/kf/H06eada0cb7c04894a2b5457c2afcd318y/Photography-Shooting-Decoration-Props-16-Color-Smooth-Silk-Mercerized-Cloth-Photo-Studio-Accessories-Background-Cloth-Fotografia.jpg"
              />
              <Typography
                style={{ fontSize: "20px", margin: "auto", color: "white" }}
              ></Typography>
            </Paper>
          </Grid>
        </Grid>
      </section>
      <section id="aboutus">
        <div
          style={{ margin: "auto", textAlign: "center", marginTop: "100px" }}
        >
          <img
            style={{ width: "50%", height: "50%" }}
            className="App-logo"
            src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-luxury-golden-islamic-mandala-png-image_8545021.png"
          />
        </div>
      </section>
      {/* <Grid container>
        <Grid item lg={6}></Grid>
      </Grid> */}
      {/* <Grid container>
        <Grid item lg={3}>
          <HomeHeader>
          
            <img
              style={{ width: "75%", justifyContent: "flex-start" }}
              src="https://images7.alphacoders.com/104/thumb-1920-1047223.jpg"
            />
          </HomeHeader>
        </Grid>
        <Grid item lg={3}>
          <RightHeaderDiv>
            <img
              style={{ width: "75%" }}
              src="https://c.ndtvimg.com/2018-11/v1unstdo_happy-diwali-2018-diwali-deepavali-diwali-2018-pixabay_625x300_04_November_18.jpg"
            />
          </RightHeaderDiv>
        </Grid>
        <Grid item lg={3}>
          <LeftHeaderDiv>
            <img
              style={{ width: "75%" }}
              src="https://i.pinimg.com/736x/b7/06/61/b706616fa3c1081329f957828539114c.jpg"
            />
          </LeftHeaderDiv>
        </Grid>
        <Grid item lg={3}>
          <BottomHeaderDiv>
            <img
              style={{ width: "50%" }}
              src="https://www.businessupturn.com/wp-content/uploads/2021/09/beautiful-rangoli-designs-diwali.jpeg"
            />
          </BottomHeaderDiv>
        </Grid>
      </Grid> */}
    </>
  );
};

export default Diwali;
