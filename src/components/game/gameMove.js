import { nextMoveGame, finishGame } from "../../actions/game";

const gameMove = (dog, game) => dispatch => {
  if (game.selectedDogs.length === 0) {
    const newSelectedDogs = [dog];
    return dispatch(nextMoveGame(newSelectedDogs, [], game.score));
  }
  const dog0 = game.selectedDogs[0];
  const isMatch = dog.breed === dog0.breed && dog.id !== dog0.id;
  if (!isMatch) {
    return dispatch(nextMoveGame([], [], game.score));
  }
  const newDog0 = Object.assign({}, dog0);
  const newDog = Object.assign({}, dog);
  newDog0.isActive = false;
  newDog.isActive = false;
  const newScore = game.score + 2;
  const isGameOver = game.source.filter(el => el.isActive).length === 2;
  if (isGameOver) {
    return dispatch(finishGame(newScore));
  }
  return dispatch(nextMoveGame([], [newDog0, newDog], newScore));
};
export default gameMove;
