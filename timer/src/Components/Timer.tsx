import { Box, Button, Typography } from "@mui/material";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { count } from "console";
import React, { Component } from "react";
import LifeCycle from "./LifeCycle";

type MyState = {
  count: number;
  buttonstate: boolean;
  tracker?: null | any;
  open: boolean;
};

type MyProps = {};

class Timer extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      count: 0,
      buttonstate: true,
      tracker: null,
      open: false,
    };
  }

  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }

  start = () => {
    this.setState({ count: this.state.count + 1 });
  };

  timer = () => {
    // this.state.tracker = setInterval(this.start, 1000);
    this.setState({ buttonstate: !this.state.buttonstate });
  };

  reset = () => {
    clearInterval(this.state.tracker);
    this.setState({ count: 0 });
    this.setState({ buttonstate: !this.state.buttonstate });
    this.setState({ open: !this.state.open });
  };

  stop = () => {
    clearInterval(this.state.tracker);
    setTimeout(() => console.log("Set Timout Working"), 3000);
  };
  render() {
    return (
      <div>
        <Box>
          <Typography style={{ fontFamily: "sans-serif", fontSize: "40px" }}>
            Timer
          </Typography>
          <Typography style={{ fontFamily: "sans-serif", fontSize: "30px" }}>
            {this.state.count}
          </Typography>
          {this.state.buttonstate ? (
            <Box>
              <Button onClick={() => this.timer()}>Start</Button>
              <Button disabled onClick={() => this.stop()}>
                Stop
              </Button>
              <Button disabled onClick={() => this.reset()}>
                Reset
              </Button>
            </Box>
          ) : (
            <Box>
              <Button disabled onClick={() => this.timer()}>
                Start
              </Button>
              <Button onClick={() => this.stop()}>Stop</Button>
              <Button onClick={() => this.reset()}>Reset</Button>
            </Box>
          )}
        </Box>
        {this.state.open && <LifeCycle />}
      </div>
    );
  }
}

export default Timer;
