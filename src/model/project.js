import { createSelector } from "reselect";
import { projects } from "../JSONdata/projects.json";

export const moduleName = "projects";

export const initialState = {
  projects: projects,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PROJECT":
      break;
    case "EDIT_PROJECT":
      break;
    default:
      return state;
  }
};
export default reducer;

export const stateSelector = (state) => state[moduleName];
export const projectsSelector = createSelector(
  stateSelector,
  (state) => state.projects
);
