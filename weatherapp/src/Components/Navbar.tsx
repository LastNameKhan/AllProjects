import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./Styling/Styling";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "teal",
        width: "100%",
        height: "60px",
        justifyContent: "space-evenly",
        boxShadow:
          "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      }}
    >
      <StyledButton onClick={() => navigate("/")}>Home</StyledButton>
      <StyledButton onClick={() => navigate("/dashboard")}>
        Dashboard
      </StyledButton>
      <StyledButton onClick={() => navigate("/singlecity")}>
        SingleCity
      </StyledButton>
      <StyledButton onClick={() => navigate("/hourlydata")}>
        HourlyData
      </StyledButton>
      <StyledButton onClick={() => navigate("/map")}>Map</StyledButton>
    </div>
  );
};

export default Navbar;
