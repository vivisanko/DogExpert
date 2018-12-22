import * as types from "../actions/actionTypes";

const initialState = {
  list: {},
  loading: false,
  error: null
};

const dogs = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DOGS_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.GET_DOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.result
      };
    case types.GET_DOGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default dogs;
