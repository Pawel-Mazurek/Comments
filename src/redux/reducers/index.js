import { combineReducers } from "redux";
import comments from "./comments";
import { routerReducer } from "react-router-redux";

export default combineReducers({ comments, routing: routerReducer });
