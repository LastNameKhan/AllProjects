import {
  Box,
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";

export const Admin = () => {
  const [datamap, setDataMap] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [qty, setQty] = useState<any>(1);
  const [food, setFood] = useState<any>("");
  const [price, setPrice] = useState<any>(0);
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false);

  useEffect(() => {
    const maindata = JSON.parse(localStorage.getItem("data") || "[]");
    setDataMap(maindata);
  }, [datamap]);

  const handlefoodsubmit = () => {
    if (food.length <= 0 && price <= 0) {
      alert("Please Enter a value");
    } else {
      data.push({
        id: data.length + 1,
        food: food,
        price: parseInt(price),
        qty: parseInt(qty),
      });
      localStorage.setItem("data", JSON.stringify(data));
      console.log(data, "Data");
    }
  };

  const handleDelete = (id: any) => {
    let newData = JSON.parse(localStorage.getItem("data") || "[]");
    newData.splice(id, 1);
    localStorage.setItem("data", JSON.stringify(newData) || "[]");
    setDataMap(newData);
  };

  const handleEdit = (item: any) => {
    setEditOpen(true);
    setFood({
      food: item.food,
      price: item.price,
    });
  };

  const handleEditFodSubmit = () => {};

  return (
    <>
      <div>
        <Button
          onClick={handleOpen}
          style={{ float: "right" }}
          variant="contained"
          color="success"
        >
          +
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sr No:</TableCell>
                <TableCell align="right">Item</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Edit</TableCell>
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
                      onClick={() => handleEdit(item)}
                      variant="contained"
                      color="success"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(index)}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal keepMounted open={open} onClose={handleClose}>
          <Box
            style={{
              height: "250px",
              width: "250px",
              border: "1px solid black",
              borderRadius: "15px",
              margin: "auto",
              marginTop: "200px",
              textAlign: "center",
              boxShadow: "24",
            }}
          >
            <TextField
              style={{ backgroundColor: "white" }}
              placeholder="Enter Food Name"
              onChange={(e: any) => setFood(e.target.value)}
            />
            <TextField
              type="number"
              style={{ backgroundColor: "white" }}
              placeholder="Enter Price"
              onChange={(e: any) => setPrice(e.target.value)}
            />
            <Button
              style={{ margin: "auto" }}
              variant="contained"
              color="success"
              onClick={() => handlefoodsubmit()}
            >
              Submit
            </Button>
          </Box>
        </Modal>

        <Modal keepMounted open={editopen} onClose={handleEditClose}>
          <Box
            style={{
              height: "250px",
              width: "250px",
              border: "1px solid black",
              borderRadius: "15px",
              margin: "auto",
              marginTop: "200px",
              textAlign: "center",
              boxShadow: "24",
            }}
          >
            <TextField
              style={{ backgroundColor: "white" }}
              placeholder="Enter Food Name"
              onChange={(e: any) => setFood(e.target.value)}
            />
            <TextField
              style={{ backgroundColor: "white" }}
              placeholder="Enter Price"
              onChange={(e: any) => setPrice(e.target.value)}
            />
            <Button
              style={{ margin: "auto" }}
              variant="contained"
              color="success"
              onClick={() => handleEditFodSubmit()}
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Admin;
