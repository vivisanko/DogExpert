import * as types from "../actions/actionTypes";

const initialState = {
  name: "guest"
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

export default user;
