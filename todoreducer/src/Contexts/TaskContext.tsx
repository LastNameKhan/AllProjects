import React, { createContext, useReducer } from "react";
import { TaskReducer } from "../Reducers/TaskReducer";

export const TaskContext = createContext(null as any);

//Context provides a way to pass data through the component
//tree without having to pass down manually at every level

const TaskContextProvider = (props: any) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const sortedTasks = tasks.sort((t: any, f: any) =>
    f.isChecked === t.isChecked ? 0 : f.isChecked ? -1 : 1
  );

  return (
    <TaskContext.Provider value={{ tasks, sortedTasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
