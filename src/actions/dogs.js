import * as types from "./actionTypes";
import { defineUrl } from "../helpers/defineUrl";

export const getDogsBegin = query => ({
  type: types.GET_DOGS_BEGIN,
  query
});

export const getDogsSuccess = (query, result) => ({
  type: types.GET_DOGS_SUCCESS,
  query,
  result
});

export const getDogsFail = error => ({
  type: types.GET_DOGS_FAIL,
  error
});

export function fetchDogs(query) {
  return dispatch => {
    dispatch(getDogsBegin(query));
    return fetch(defineUrl(query))
      .then(resp => resp.json())
      .then(result => dispatch(getDogsSuccess(query, result.message)))
      .catch(err => {
        console.log("err", err);
        return dispatch(getDogsFail(err));
      });
  };
}
