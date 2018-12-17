import { combineReducers } from "redux";
import dogs from "./dogs";
import user from "./user";
import game from "./game";

const allReducers = combineReducers({
  dogs,
  user,
  game
});

export default allReducers;
