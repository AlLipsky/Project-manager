import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";

const enhanser = applyMiddleware(logger);
export const store = createStore(reducer, enhanser);
