import { nextMoveGame, finishGame } from "../../actions/game";

const gameMove = (dog, game) => dispatch => {
  if (game.selectedDogs.length === 0) {
    const newSelectedDogs = [dog];
    return dispatch(nextMoveGame(newSelectedDogs, [], game.score));
  }

  const dog0 = game.selectedDogs[0];
  const isMatch =
    dog.breed === dog0.breed &&
    game.selectedDogs.filter(el => el.id === dog.id).length === 0;
  if (!isMatch) {
    return dispatch(nextMoveGame([], [], game.score));
  }
  const currentRound = game.selectedDogs.length + 1 < game.complexity;
  const dogsOneBreed = game.selectedDogs.concat(dog);
  const newSelectedDogs = currentRound ? dogsOneBreed : [];
  let newInActiveDogs = currentRound ? [] : dogsOneBreed;
  let diffScore = 0;
  if (newInActiveDogs.length !== 0) {
    newInActiveDogs = newInActiveDogs.map(el => ({ ...el, isActive: false }));
    diffScore = game.complexity;
  }
  const newScore = game.score + diffScore;
  const isGameOver = game.source.filter(el => el.isActive).length === 0;
  if (isGameOver) {
    return dispatch(finishGame(newScore));
  }
  return dispatch(nextMoveGame(newSelectedDogs, newInActiveDogs, newScore));
};
export default gameMove;
