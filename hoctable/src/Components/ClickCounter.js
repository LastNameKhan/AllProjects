import React, { useState } from "react";
import UpdatedComponent from "./withCounter";

const ClickCounter = (props) => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prevState) => prevState + 1);
  };
  let { name } = props;
  return (
    <div>
      <button onClick={() => incrementCounter()}>
        {name} Clicked {count} times
      </button>
    </div>
  );
};

export default UpdatedComponent(ClickCounter);
