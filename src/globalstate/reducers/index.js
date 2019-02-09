import { combineReducers } from "redux";
import mainPageReducer from "./mainpage";
import characterDetailReducer from "./characterdetail";

export default combineReducers({
  mainPageReducer,
  characterDetailReducer
});
