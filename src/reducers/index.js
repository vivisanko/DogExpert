import { combineReducers } from "redux";
import dogs from "./dogs";
import user from "./user";

const allReducers = combineReducers({
  dogs,
  user
});

export default allReducers;
