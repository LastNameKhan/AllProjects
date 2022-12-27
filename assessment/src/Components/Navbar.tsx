import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleClickhome = () => {
    navigate("/");
  };

  const handleClickCart = () => {
    navigate("/cart");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "50px",
        width: "100%",
        textAlign: "left",
        backgroundColor: "#c72121",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <div>
        <Button
          onClick={() => handleClickhome()}
          variant="contained"
          color="success"
          style={{ margin: "6px" }}
        >
          Home
        </Button>
      </div>
      <div>
        <Button
          onClick={() => handleClickCart()}
          variant="contained"
          color="success"
          style={{ margin: "6px" }}
        >
          Cart
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
