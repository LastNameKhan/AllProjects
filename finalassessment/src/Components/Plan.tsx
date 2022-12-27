import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Plan = () => {
  const [gotfromlocal, setGotFromLocal] = useState<any>([]);
  const [col, setCol] = useState<boolean>(false);

  const colchange = (item: any, index: any) => {
    var updateData = gotfromlocal.map((el: any, idx: any) => {
      if (idx === index) {
        el.color = !el.color;
      }
      return el;
    });
    setGotFromLocal(updateData);
  };

  useEffect(() => {
    const getdatalocal = JSON.parse(localStorage.getItem("plandata") || "[]");
    setGotFromLocal(getdatalocal);
  }, []);
  return (
    <>
      <Grid container>
        {gotfromlocal.map((item: any, index: any) => {
          return (
            <Grid item lg={4} md={4} sm={12} style={{ padding: "20px" }}>
              <Paper
                elevation={3}
                style={{ minHeight: "600px", lineHeight: "30px" }}
              >
                <img
                  style={{
                    width: "100%",
                    backgroundColor: item.color ? "#1DD05D" : "black",
                  }}
                  src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                  alt="This is a Image"
                />
                <Button
                  variant="contained"
                  onClick={() => colchange(item, index)}
                >
                  SubscriIbe
                </Button>
                <Typography
                  style={{
                    fontSize: "42px",
                    fontFamily: "sans-serif",
                    fontWeight: "900",
                  }}
                >
                  {item.selectplan}
                </Typography>
                <Typography
                  style={{
                    fontSize: "24px",
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                  }}
                >
                  {item.nameplan}
                </Typography>
                <Typography
                  style={{
                    fontSize: "30px",
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                  }}
                >
                  ₹{item.planprice}
                </Typography>
                {item.feature.map((feat: any) => {
                  return (
                    <li style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                      {feat}
                    </li>
                  );
                })}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Plan;
