import { defineUrl } from "../../helpers/defineUrl";
import {
  createRandomBreeds,
  createGameQuery,
  createRandomSource
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
    // try {
    //   const arr = await urls.map(async (url, index) => {
    //     try {
    //       const queryResp = await fetch(url)
    //         .then(resp => resp.json())
    //         .then(result => {
    //           gameQuery[index].images = result.message;
    //           return result;
    //         });
    //       console.log("queryResp", queryResp);
    //       return queryResp;
    //     } catch (error) {
    //       console.log("error", error);
    //     }
    //     return arr;
    //   });
    //   console.log("arr", arr);

    //   console.log("gameQuery", gameQuery);

    //   const result = createRandomSource(gameQuery);
    //   console.log("result", result);

    //   dispatch(createGameSuccess(result));
    // } catch (error) {
    //   dispatch(createGameFail(error));
    // }
    try {
      const arr = await Promise.all(
        urls.map(url => {
          const message = fetch(url)
            .then(resp => resp.json())
            .then(result => result)
            .catch(error => {
              console.log("error", error);
              // dispatch(createGameFail(error));
            });
          return message;
        })
      );
      console.log("arr", arr);
      arr.forEach((el, index) => {
        Object.assign(gameQuery[index], el);
      });
      console.log("gameQuery", gameQuery);

      const result = createRandomSource(gameQuery);
      console.log("result", result);

      dispatch(createGameSuccess(result));
      // } catch (error) {
      //   dispatch(createGameFail(error));
      // }
    } catch (error) {
      dispatch(createGameFail(error));
    }
  }
};

export default createGame;
