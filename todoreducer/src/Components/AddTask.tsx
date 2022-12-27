import React, { useContext, useState } from "react";

import { TaskContext } from "../Contexts/TaskContext";
import { Action } from "../Reducers/TaskReducer";
import { v4 as uuidv4 } from "uuid";
import { Grid, TextField } from "@mui/material";

export const AddTask = () => {
  const { dispatch } = useContext(TaskContext);
  const [description, setDescription] = useState("");

  const onAddTask = (e: any) => {
    e.preventDefault();
    dispatch({
      type: Action.ADD_TASK,
      task: {
        id: uuidv4(),
        isChecked: false,
        created: new Date(),
        description: description,
      },
    });
    setDescription("");
  };

  return (
    <form onSubmit={onAddTask}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          style={{ marginTop: "10px" }}
          label="Add Task"
          variant="outlined"
          size="small"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></TextField>
      </Grid>
    </form>
  );
};

export default AddTask;
