import React from "react";
import { useState } from "react";
import UpdatedComponent from "./withCounter";

const HoverCounter = (props) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };
  let { name } = props;
  return (
    <div>
      <h2 onMouseOver={() => incrementCount()}>
        {name}Hovered {count} times
      </h2>
    </div>
  );
};

export default UpdatedComponent(HoverCounter);
