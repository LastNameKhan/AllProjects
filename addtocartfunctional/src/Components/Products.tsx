import { Button, Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

export const Products = () => {
  const [data, setData] = useState<any[]>([]);
  const [cart, setCart] = useState<any>([]);
  const [length, setLength] = useState<number>(0);

  const baseURL = "https://empappregular.herokuapp.com/";
  
  const addtocart = (item: any) => {
    cart.push(item);
    localStorage.setItem("cartdata", JSON.stringify(cart));
    const lengthofcart = JSON.parse(localStorage.getItem("cartdata") || "{}");
    localStorage.setItem("cartlength", JSON.stringify(lengthofcart.length));
    setLength(lengthofcart.length);
  };

  useEffect(() => {
    fetch(
      `https://empappregular.herokuapp.com/getPostsByPage?pageNumber=1&limit=200`
    )
      .then((response) => response.json())
      .then((res) => setData(res.products));

    if (data.length >= 0) {
      data.map((v) => Object.assign(v, { qty: 1 }));
    }
  }, [data]);

  return (
    <Grid container>
      {data.map((item) => {
        return (
          <Grid
            item
            lg={3}
            md={4}
            sm={2}
            xs={1}
            style={{ textAlign: "center", marginBottom:"20px", padding:"20px" }}
          >
            <Paper
              style={{ height: "100%", border: "1px solid #ccc", padding: 20 }}
            >
              <img
                style={{ width: "100%", maxHeight: "250px" }}
                src={baseURL + item.images}
                alt="This is a png Image"
              />
              <h1>{item.author.name}</h1>
              <h1>{item.author.id}</h1>
              <h1>₹{item.price}</h1>
              <h1>{item.title}</h1>
              <h1>{item.subtitle}</h1>
              <h1>{item.quantity}</h1>
              <Button variant="contained" onClick={() => addtocart(item)}>Add to cart</Button>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Products;
