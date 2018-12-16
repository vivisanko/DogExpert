import * as types from "./actionTypes";

const setUserName = name => ({
  type: types.SET_USER_NAME,
  name
});

export default setUserName;
