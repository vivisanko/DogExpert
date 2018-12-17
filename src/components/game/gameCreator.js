import { defineUrl } from "../../helpers/defineUrl";
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

const createGame = (size, list) => async dispatch => {
  if (Object.keys(list).length > 0) {
    dispatch(createNewGame());
    const gameBreeds = createRandomBreeds(size, Object.keys(list));
    const gameQuery = createGameQuery(gameBreeds);
    const urls = gameQuery.map(query => defineUrl(query));
    try {
      const arr = await Promise.all(
        urls.map(url => {
          const message = fetch(url)
            .then(resp => resp.json())
            .then(result => result)
            .catch(error => {
              console.log("error", error);
            });
          return message;
        })
      );
      arr.forEach((el, index) => {
        Object.assign(gameQuery[index], el);
      });
      const result = createRandomSource(gameQuery);
      console.log("result", result);
      const shuffleResult = shuffleSource(result);
      dispatch(createGameSuccess(shuffleResult));
    } catch (error) {
      dispatch(createGameFail(error));
    }
  }
};

export default createGame;
