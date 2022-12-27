import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const Cart = () => {
  const [datagot, setDataGot] = useState<any>([]);
  const [subtotal, setSubTotal] = useState(0);

  useEffect(() => {
    const finaldata = JSON.parse(localStorage.getItem("cartitems") || "[]");
    setDataGot(finaldata);
    var bag = 0;
    for (let i = 0; i < finaldata.length; i++) {
      bag += finaldata[i].price;
    }
    setSubTotal(bag);
  }, []);

  const handleIncreament = (item: any, index: number, quantity: number) => {
    const Incarr = JSON.parse(localStorage.getItem("cartitems") || "[]");
    const Inctemp = datagot.map((user: any, i: any) => {
      return i === index
        ? {
            ...user,
            qty: quantity,
          }
        : user;
    });
    setDataGot(Inctemp);
    localStorage.setItem("cartitems", JSON.stringify(Inctemp) || "[]");
    let quantitytotal = 0;
    for (let i = 0; i < Inctemp.length; i++) {
      quantitytotal += Inctemp[i].price * Inctemp[i].qty;
      setSubTotal(quantitytotal);
    }
  };

  const handleDecrement = (item: any, index: number, quantity: number) => {
    const Decarr = JSON.parse(localStorage.getItem("cartitems") || "[]");
    const Dectemp = datagot.map((user: any, i: any) => {
      return i === index
        ? {
            ...user,
            qty: quantity,
          }
        : user;
    });
    setDataGot(Dectemp);
    if (item.qty <= 1) {
      Dectemp.splice(index, 1);
    }
    localStorage.setItem("cartitems", JSON.stringify(Dectemp) || "[]");
    let decQuantTotal = 0;
    for (let i = 0; i < Dectemp.length; i++) {
      decQuantTotal += Dectemp[i].price * Dectemp[i].qty;
      setSubTotal(decQuantTotal);
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr No:</TableCell>
              <TableCell align="right">Item</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datagot.map((item: any, index: any) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="right">{item.food}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleIncreament(item, index, item.qty + 1)}
                  >
                    +
                  </Button>
                  {item.qty}
                  <Button
                    onClick={() => handleDecrement(item, index, item.qty - 1)}
                  >
                    -
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography style={{ float: "right", marginRight: "10px" }}>
        SubTotal :- {subtotal}
      </Typography>
    </div>
  );
};

export default Cart;
