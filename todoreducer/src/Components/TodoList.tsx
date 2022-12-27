import React from "react";
import { Grid, makeStyles } from "@mui/material";
import TasksList from "./TasksList";
import AddTask from "./AddTask";

export const TodoList = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AddTask></AddTask>
        </Grid>
        <Grid item xs={12}>
          <TasksList></TasksList>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoList;
