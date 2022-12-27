import { TextField } from "@mui/material";
import React, { useState } from "react";
import { StyledButtonSubmit } from "./Styling/Styling";

export const Logic = () => {
  const [first, setFirst] = useState<number>(0);

  const handleFizzBizz = () => {
    var arr = [];
    for (var i = 0; i <= first; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("Fizz Buzz");
      } else if (i % 5 === 0) {
        arr.push("Buzz");
      } else if (i % 3 === 0) {
        arr.push("Fizz Buzz");
      } else {
        arr.push("Neither Fizz Nor Buzz");
      }
    }
    console.log(arr);
  };

  const handlesquare = () => {
    var bag = "";
    for (var i = 0; i < first; i++) {
      for (var j = 0; j < first; j++) {
        bag = bag + "*";
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };

  const handleHollowSquare = () => {
    var bag = "";
    for (var i = 0; i < first; i++) {
      for (var j = 0; j < first; j++) {
        if (i === 0 || i === first - 1) {
          bag = bag + "*";
        } else {
          if (j === 0 || j === first - 1) {
            bag = bag + "*";
          } else {
            bag = bag + " ";
          }
        }
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };

  const handleRightAngleTriangle = () => {
    var bag = "";
    for (var i = 0; i < first; i++) {
      for (var j = i; j >= 0; j--) {
        if (j % 2 === 0) {
          bag = bag + "0";
        } else if (j % 2 === 1) {
          bag = bag + "1";
        }
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };

  return (
    <div>
      <TextField
        placeholder="Please Enter the Value"
        style={{
          backgroundColor: "white",
          marginTop: "10px",
          borderRadius: "10px",
        }}
        onChange={(e: any) => setFirst(e.target.value)}
      />
      <StyledButtonSubmit onClick={handleFizzBizz}>
        Fizz Bizz
      </StyledButtonSubmit>
      <StyledButtonSubmit onClick={handlesquare}>Square</StyledButtonSubmit>
      <StyledButtonSubmit onClick={handleHollowSquare}>
        Hollow Square
      </StyledButtonSubmit>
      <StyledButtonSubmit onClick={handleRightAngleTriangle}>
        RA Triangle
      </StyledButtonSubmit>
    </div>
  );
};

export default Logic;
