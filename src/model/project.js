import { createSelector } from "reselect";
import axios from 'axios'

export const moduleName = "projects";

const GET_PROJECT_LIST = `${moduleName}/GET_PROJECT_LIST`
const ADD_PROJECT = `${moduleName}/ADD_PROJECT`
const EDIT_PROJECT = `${moduleName}/EDIT_PROJECT`

export const initialState = {
  projects: null,
  activeProject: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROJECT_LIST:
      return {...state, projects: payload}
      break;
    case ADD_PROJECT:
      break;
    case EDIT_PROJECT:
      break;
    default:
      return state;
  }
};

export const stateSelector = (state) => state[moduleName];
export const projectsSelector = createSelector(
  stateSelector,
  (state) => state.projects
);


export const getProjectList = () => (dispatch) => {

  axios.get('http://localhost:8000/projects').then(({data}) => {
    dispatch({
      type: GET_PROJECT_LIST,
      payload: data
    })
  })

}