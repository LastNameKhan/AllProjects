import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

export const User = () => {
  const [datamap, setDataMap] = useState<any>([]);
  const [cartitemdata, setCartItemData] = useState<any>([]);

  useEffect(() => {
    const maindata = JSON.parse(localStorage.getItem("data") || "[]");
    setDataMap(maindata);
  }, [datamap]);

  const addtocart = (item: any, index: any) => {
    cartitemdata.push(item);
    localStorage.setItem("cartitems", JSON.stringify(cartitemdata));
    const maindata = JSON.parse(localStorage.getItem("data") || "[]");
    setDataMap(maindata);
    let newData = JSON.parse(localStorage.getItem("data") || "[]");
    newData.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(newData) || "[]");
    setDataMap(newData);
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
            {datamap.map((item: any, index: any) => (
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
                    onClick={() => addtocart(item, index)}
                    variant="contained"
                    color="success"
                  >
                    Add to Cart
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default User;
