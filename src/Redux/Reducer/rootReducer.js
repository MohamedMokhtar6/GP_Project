import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import userReducer from "./userReducer";

import authReducer from "./authReducer";
export default combineReducers({
  Courses: courseReducer,
  UserReducer: userReducer,
  authReducer: authReducer,

import CompetitionReducer from "./CompetitionReducer";
export default combineReducers({
  Courses: courseReducer,
  UserReducer: userReducer,
  CompetitionReducer: CompetitionReducer,

});
