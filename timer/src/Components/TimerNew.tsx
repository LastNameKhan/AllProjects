import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const TimerNew = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      if (timer > 100) {
        clearInterval(id);
      } else {
        setTimer(timer + 1);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [timer]);
  return (
    <div>
      Count: {timer}
      <Button onClick={() => setTimer((timer) => timer + 1)}>+</Button>
      <Button onClick={() => setTimer((timer) => timer - 1)}>-</Button>
    </div>
  );
};

export default TimerNew;
