import defineUrl from "../../helpers/defineUrl";
import {
  createRandomBreeds,
  createGameQuery,
  createRandomSource,
  shuffleSource
} from "./gameHelper";
import {
  createNewGame,
  createGameSuccess,
  createGameFail
} from "../../actions/game";
import { fetchDogs } from "../../actions/dogs";
import fetchGetData from "../../api/fetchGetData";

const createGame = () => async (dispatch, getState) => {
  let store = getState();
  let { list } = store.dogs;
  const { size, complexity } = store.game;
  if (Object.keys(list).length === 0) {
    await dispatch(
      fetchDogs({
        source: "list",
        exactly: "",
        amount: null
      })
    ).then(() => {
      store = getState();
      list = { ...store.dogs.list };
    });
  }
  dispatch(createNewGame());
  const gameBreeds = createRandomBreeds(size, Object.keys(list), complexity);
  const gameQuery = createGameQuery(gameBreeds, complexity);
  const urls = gameQuery.map(query => defineUrl(query));

  try {
    const arr = await Promise.all(
      urls.map(url => {
        const message = fetchGetData(url)
          .then(result => result)
          .catch(error => {
            // eslint-disable-next-line
            console.log("error", error);
          });
        return message;
      })
    );
    arr.forEach((el, index) => {
      Object.assign(gameQuery[index], el);
    });
    const result = createRandomSource(gameQuery);
    const shuffleResult = shuffleSource(result);
    dispatch(createGameSuccess(shuffleResult));
  } catch (error) {
    dispatch(createGameFail(error));
  }
};

export default createGame;
