import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { count } from "./Count";

const Cart = () => {
  const [cartitems, setCartItems] = useState<any>([]);
  const [total, setTotal] = useState<any>(0);
  const [gst, setGst] = useState<any>(0);
  const [final, setFinal] = useState<any>(0);
  const baseURL = "https://empappregular.herokuapp.com/";

  useEffect(() => {
    const gotdata = JSON.parse(localStorage.getItem("cartdata") || "[]");
    setCartItems(gotdata);
    let subtotal = 0;
    for (let i = 0; i < gotdata.length; i++) {
      subtotal += gotdata[i].price;
      setTotal(subtotal);
      var gst_price = (subtotal * 18) / 100;
      setGst(gst_price);
      var finalamount = gst_price + subtotal;
      setFinal(finalamount);
    }
  }, []);

  const handleRemove = (id: any) => {
    const newlengthCart = JSON.parse(
      localStorage.getItem("cartlength") || "[]"
    );
    console.log(newlengthCart, "Cart Length");
    const declength = newlengthCart - 1;
    localStorage.setItem("cartlength", JSON.stringify(declength) || "[]");
    let newData = JSON.parse(localStorage.getItem("cartdata") || "[]");
    newData.splice(id, 1);
    localStorage.setItem("cartdata", JSON.stringify(newData) || "[]");
    setCartItems(newData);
    if (newData.length <= 0) {
      setTotal(0);
      setGst(0);
      setFinal(0);
    } else {
      let newtotal = 0;
      for (let i = 0; i < newData.length; i++) {
        newtotal += newData[i].price * newData[i].qty;
        setTotal(newtotal);
        var gst_price = (newtotal * 18) / 100;
        setGst(gst_price);
        var finalamount = gst_price + newtotal;
        setFinal(finalamount);
      }
    }
  };

  const handleIncreament = (item: any, index: number, quantity: number) => {
    const Incarr = JSON.parse(localStorage.getItem("cartdata") || "[]");
    const Inctemp = cartitems.map((user: any, i: any) => {
      return i === index
        ? {
            ...user,
            qty: quantity,
          }
        : user;
    });
    setCartItems(Inctemp);
    localStorage.setItem("cartdata", JSON.stringify(Inctemp) || "[]");
    let quantitytotal = 0;
    for (let i = 0; i < Inctemp.length; i++) {
      quantitytotal += Inctemp[i].price * Inctemp[i].qty;
      setTotal(quantitytotal);
      var gst_price = (quantitytotal * 18) / 100;
      setGst(gst_price);
      var finalamount = gst_price + quantitytotal;
      setFinal(finalamount);
    }
  };

  const handleDecrement = (item: any, index: number, quantity: number) => {
    const Decarr = JSON.parse(localStorage.getItem("cartdata") || "[]");
    const Dectemp = cartitems.map((user: any, i: any) => {
      return i === index
        ? {
            ...user,
            qty: quantity,
          }
        : user;
    });
    setCartItems(Dectemp);
    if (item.qty <= 1) {
      Dectemp.splice(index, 1);
    }
    localStorage.setItem("cartdata", JSON.stringify(Dectemp) || "[]");
    let decQuantTotal = 0;
    for (let i = 0; i < Dectemp.length; i++) {
      decQuantTotal += Dectemp[i].price * Dectemp[i].qty;
      setTotal(decQuantTotal);
      var gst_price = (decQuantTotal * 18) / 100;
      setGst(gst_price);
      var finalamount = gst_price + decQuantTotal;
      setFinal(finalamount);
    }
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">SubTitle</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Edit Cart</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartitems.map((product: any, index: any) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.author.name}
              </TableCell>
              <TableCell>
                {/* <img
                  style={{ width: "100%", maxHeight: "250px" }}
                  src={baseURL + product.images}
                  alt="This is a png Image"
                /> */}
              </TableCell>
              <TableCell align="right">{product.title}</TableCell>
              <TableCell align="right">{product.subtitle}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() =>
                    handleIncreament(product, index, product.qty + 1)
                  }
                >
                  +
                </Button>
                {product.qty}
                <Button
                  onClick={() =>
                    handleDecrement(product, index, product.qty - 1)
                  }
                >
                  -
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleRemove(index)}
                >
                  Remove Item
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography style={{ textAlign: "right", marginRight: "20px" }}>
        SubTotal :- {total}
      </Typography>
      <Typography style={{ textAlign: "right", marginRight: "20px" }}>
        Gst :- {gst}
      </Typography>
      <Typography style={{ textAlign: "right", marginRight: "20px" }}>
        Total :- {final}
      </Typography>
    </TableContainer>
  );
};

export default Cart;
