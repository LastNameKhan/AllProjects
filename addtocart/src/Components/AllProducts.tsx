import { Button, Grid } from "@mui/material";
import React, { Component } from "react";

type IProps = {};
type IState = {
  data: any[];
  cart: any[];
};

const baseURL = "https://empappregular.herokuapp.com/";

export class AllProducts extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: [],
      cart: [],
    };
  }

  addtocart = (product: any) => {
    this.state.cart.push(product);
    localStorage.setItem("cartdata", JSON.stringify(this.state.cart));
    console.log(this.state.cart, "Cart");
  };

  getAllProducts = async () => {
    const res = await fetch(
      `https://empappregular.herokuapp.com/getPostsByPage?pageNumber=1&limit=200`
    );
    const resJson = await res.json();
    this.setState({ data: resJson.products });
    console.log(this.state.data, "JSON");
  };

  render() {
    return (
      <Grid container>
        {Object.values(this.state.data).map((product) => {
          return (
            <Grid
              lg={3}
              md={3}
              sm={2}
              xs={1}
              item
              key={product.index}
              style={{ border: "1px solid black" }}
            >
              <img
                style={{ width: "100%", maxHeight: "250px" }}
                src={baseURL + product.images}
                alt="This is a png Image"
              />
              <h1>{product.author.name}</h1>
              <h1>{product.author.id}</h1>
              <h1>₹{product.price}</h1>
              <h1>{product.title}</h1>
              <h1>{product.subtitle}</h1>
              <Button onClick={() => this.addtocart(product)}>
                Add to cart
              </Button>
            </Grid>
          );
        })}
        <Button onClick={() => this.getAllProducts()}>Get Products</Button>
      </Grid>
    );
  }
}

export default AllProducts;
