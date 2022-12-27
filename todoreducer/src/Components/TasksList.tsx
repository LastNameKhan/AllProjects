import React, { useContext } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { TaskContext } from "../Contexts/TaskContext";
import { Action } from "../Reducers/TaskReducer";

export const TasksList = () => {
  const { sortedTasks, dispatch } = useContext(TaskContext);

  
  const onChecked = (id: any, isChecked: any) => {
    dispatch({
      type: Action.CHECK_TASK,
      task: {
        id,
        isChecked,
      },
    });
  };

  return (
    <List>
      {sortedTasks.map((task: any) => {
        return (
          <ListItem
            key={task.id}
            dense
            onClick={() => {
              onChecked(task.id, !task.isChecked);
            }}
          >
            <ListItemText primary={task.description} />
            <ListItemSecondaryAction>
            <Button style={{height:"30px",marginRight:"5px"}} variant="contained" color="success">Edit</Button>
              <Button
                style={{ height: "30px" }}
                variant="contained"
                color="error"
                onClick={() => {
                  dispatch({
                    type: Action.REMOVE_TASK,
                    id: task.id,
                  });
                }}
              >
                Delete
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TasksList;
