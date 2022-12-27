import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import withRouter from "./withRouter";

type IProps = {
  location: any;
};
type IState = {
  Display: any;
  date: any;
  time: any;
};

export class SinglePageData extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      Display: this.props.location.state,
      date: "",
      time: "",
    };
  }

  todaysdate = () => {
    var stringdate = new Date().toDateString();
    var stringtime = new Date().toLocaleTimeString();
    this.setState({ date: stringdate, time: stringtime });
  };
  componentDidMount(): void {
    this.todaysdate();
  }
  render() {
    console.log(this.props.location.state, "Data");
    console.log(this.state.date, "Date");

    return (
      <div>
        <h1>SinglePageData</h1>
        <Box>
          <Typography>Emp Id :- {this.state.Display.author.id}</Typography>
          <Typography>Title :- {this.state.Display.title}</Typography>
          <Typography>
            SubTitle :- {this.state.Display.subtitle}
          </Typography>{" "}
          <Typography>About :- {this.state.Display.about}</Typography>
          <Typography>Author :- {this.state.Display.author.name}</Typography>
          <Typography>Date :- {this.state.date}</Typography>
          <Typography>Time :- {this.state.time}</Typography>
        </Box>
      </div>
    );
  }
}

export default withRouter(SinglePageData);
