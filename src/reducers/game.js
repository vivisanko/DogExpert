import * as types from "../actions/actionTypes";

const initialState = {
  size: 4,
  loading: false,
  error: null,
  source: []
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_NEW_GAME:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.CREATE_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        source: action.result
      };
    case types.CREATE_GAME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case types.FINISH_GAME:
      return {
        ...state,
        loading: false,
        error: null,
        source: []
      };
    default:
      return state;
  }
};

export default game;
