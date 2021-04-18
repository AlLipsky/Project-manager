import { combineReducers } from "redux";
import projectReducer, { moduleName as projectModule } from "../model/project";
import taskReducer, { moduleName as tasktModule } from "../model/task";

export default combineReducers({
  [projectModule]: projectReducer,
  [tasktModule]: taskReducer,
});
