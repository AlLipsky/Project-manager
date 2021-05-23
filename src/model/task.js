import { createSelector } from "reselect";
import { tasks } from "../JSONdata/tasks.json";

export const moduleName = "tasks";
export const initialState = {
  tasks: tasks,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TASK":
      break;
    default:
      return state;
  }
};

const stateSelector = (state) => state[moduleName];
export const tasksSelector = createSelector(
  stateSelector,
  (state) => state.tasks
);
export default reducer;
