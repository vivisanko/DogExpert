import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "../components/game/Game";
import createGame from "../components/game/gameCreator";
import gameMove from "../components/game/gameMove";
import { fetchDogs } from "../actions/dogs";

class GameContainer extends Component {
  render() {
    return <Game {...this.props} />;
  }
}

const mapDispatchToProps = {
  createGame: () => dispatch => dispatch(createGame()),
  selectDog: dog => (dispatch, getState) => {
    const store = getState();
    const { game } = store;
    dispatch(gameMove(dog, game));
  },
  fetchDogsList: query => dispatch => dispatch(fetchDogs(query))
};

const mapStateToProps = state => ({
  list: state.dogs.list,
  size: state.game.size,
  complexity: state.game.complexity,
  score: state.game.score,
  source: state.game.source,
  selectedDogs: state.game.selectedDogs
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
