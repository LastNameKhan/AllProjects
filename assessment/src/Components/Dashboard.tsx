import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [open, setOpen] = useState(false);
  const [useropen, setUserOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUserOpen = () => setUserOpen(true);
  const handleUserClose = () => setUserOpen(false);

  console.log(open, "Open");

  const handleLogin = () => {
    if (username.length <= 0 && password.length <= 0) {
      alert("Please Enter the credentials");
    } else {
      navigate("/admin");
    }
  };

  const handleUserLogin = () => {
    if (username.length <= 0 && password.length <= 0) {
      alert("Please Enter the credentials");
    } else {
      navigate("/user");
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <Button
            style={{ marginTop: "10px" }}
            variant="contained"
            onClick={handleOpen}
          >
            Admin
          </Button>
        </div>
        <div>
          <Button
            style={{ marginTop: "10px" }}
            variant="contained"
            onClick={handleUserOpen}
          >
            User
          </Button>
        </div>
      </div>
      <div>
        <Modal keepMounted open={open} onClose={handleClose}>
          <Box
            style={{
              margin: "auto",
              height: "250px",
              width: "300px",
              marginTop: "200px",
              border: "1px solid black",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <Typography>Admin Login</Typography>
            <TextField
              style={{ backgroundColor: "white" }}
              onChange={(e: any) => setUsername(e.target.value)}
              placeholder="Please user name"
            />
            <TextField
              style={{ backgroundColor: "white" }}
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="Please Enter password"
            />
            <Button
              variant="contained"
              color="error"
              onClick={() => handleLogin()}
            >
              Login
            </Button>
          </Box>
        </Modal>

        <Modal keepMounted open={useropen} onClose={handleUserClose}>
          <Box
            style={{
              margin: "auto",
              height: "250px",
              width: "300px",
              marginTop: "200px",
              border: "1px solid black",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <Typography>User Login</Typography>
            <TextField
              style={{ backgroundColor: "white" }}
              onChange={(e: any) => setUsername(e.target.value)}
              placeholder="Please Enter your user name"
            />
            <TextField
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="Please Enter password"
            />
            <Button
              variant="contained"
              color="error"
              onClick={() => handleUserLogin()}
            >
              Login
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
