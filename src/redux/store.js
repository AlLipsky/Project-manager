import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const enhanser = applyMiddleware(thunk, logger);
export const store = createStore(reducer, enhanser);
