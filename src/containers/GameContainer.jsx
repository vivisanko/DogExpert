import React from "react";
import { connect } from "react-redux";
import Game from "../components/game/Game";
import createGame from "../components/game/gameCreator";
import gameMove from "../components/game/gameMove";

const GameContainer = props => <Game {...props} />;
function mapDispatchToProps(dispatch) {
  return {
    createGame: (size, list, complexity) =>
      dispatch(createGame(size, list, complexity)),
    selectDog: (dog, game) => dispatch(gameMove(dog, game))
  };
}

const mapStateToProps = state => ({
  list: state.dogs.list,
  size: state.game.size,
  complexity: state.game.complexity,
  game: state.game,
  source: state.game.source,
  selectedDogs: state.game.selectedDogs
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
