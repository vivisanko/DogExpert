import * as types from "./actionTypes";
import fetchGetData from "../api/fetchGetData";
import defineUrl from "../helpers/defineUrl";

export const getDogsLoading = query => ({
  type: types.GET_DOGS_LOADING,
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
    dispatch(getDogsLoading(query));
    return fetchGetData(defineUrl(query))
      .then(result => dispatch(getDogsSuccess(query, result.message)))
      .catch(err => {
        // eslint-disable-next-line
        console.log("err", err);
        return dispatch(getDogsFail(err));
      });
  };
}
