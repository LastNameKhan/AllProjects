import { Grid } from "@mui/material";
import React, { Component } from "react";

type IProps = {};
type IState = {
  cart: any;
};

export class Cart extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    const localdata = JSON.parse(localStorage.getItem("cartdata") || "{}");
    this.state.cart.push(localdata);
    console.log(this.state.cart, "Cart");
  }
  render() {
    return (
      <Grid container>
        {this.state.cart.map((item: any) => {
          return (
            <Grid lg={12} md={12} sm={12} xs={12} item key={item.index}>
              <h1>Price :- {item.price}</h1>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default Cart;
