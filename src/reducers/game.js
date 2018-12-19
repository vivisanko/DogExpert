import * as types from "../actions/actionTypes";

const initialState = {
  size: 4,
  complexity: 2,
  loading: false,
  error: null,
  source: [],
  score: 0,
  selectedDogs: []
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_NEW_GAME:
      return {
        ...state,
        source: [],
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
    case types.FINISH_GAME: {
      const activeDogs = state.source.filter(el => el.isActive);
      const newSource = state.source.slice();
      activeDogs.forEach(el => {
        newSource[el.id].isActive = false;
      });
      return {
        ...state,
        score: action.score,
        source: newSource,
        selectedDogs: []
      };
    }
    case types.CHANGE_GAME_SETTINGS:
      return {
        ...state,
        size: action.size,
        complexity: action.complexity
      };
    case types.NEXT_MOVE_GAME: {
      const newSource = state.source.slice();
      action.newInActiveDogs.forEach(el => {
        newSource[el.id] = el;
      });
      return {
        ...state,
        source: newSource,
        selectedDogs: action.selectedDogs,
        score: action.score
      };
    }
    default:
      return state;
  }
};

export default game;
