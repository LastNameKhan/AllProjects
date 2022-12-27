import React, { useContext } from "react";
import { TaskContext } from "../Contexts/TaskContext";
import { AppBar, Toolbar, Typography } from "@mui/material";
export const Navbar = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <AppBar position="static">
      <Toolbar variant="dense" style={{ justifyContent: "center" }}>
        <Typography variant="h6" color="inherit">
          Todo List ({tasks.length})
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
