export const Action = {
  ADD_TASK: "add-task",
  CHECK_TASK: "check-task",
  REMOVE_TASK: "remove-task",
};

export const TaskReducer = (state: any, action: any) => {
  switch (action.type) {
    case Action.ADD_TASK: {
      return [...state, action.task];
    }

    case Action.CHECK_TASK: {
      let taskIndex = state.findIndex((t: any) => t.id === action.task.id);
      state[taskIndex].isChecked = action.task.isChecked;
      return state.filter((task: any) => task.id !== action.id);
    }

    case Action.REMOVE_TASK: {
      return state.filter((task: any) => task.id !== action.id);
    }
    default:
      return state;
  }
};
