import * as types from "./actionTypes";

export const createNewGame = () => ({
  type: types.CREATE_NEW_GAME
});

export const createGameSuccess = result => ({
  type: types.CREATE_GAME_SUCCESS,
  result
});

export const createGameFail = error => ({
  type: types.CREATE_GAME_FAIL,
  error
});

export const finishGame = score => ({
  type: types.FINISH_GAME,
  score
});

export const nextMoveGame = (selectedDogs, newInActiveDogs, score) => ({
  type: types.NEXT_MOVE_GAME,
  selectedDogs,
  newInActiveDogs,
  score
});
