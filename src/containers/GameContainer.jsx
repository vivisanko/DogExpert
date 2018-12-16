import React from "react";
import { connect } from "react-redux";
import Game from "../components/game/Game";
import createGame from "../components/game/gameCreator";

const GameContainer = props => (
  // console.log("props", props);
  // const { size, list, create } = props;
  // create(size, list);
  <Game {...props} />
);
function mapDispatchToProps(dispatch) {
  return {
    createGame: (size, list) => dispatch(createGame(size, list))
  };
}

const mapStateToProps = state => ({
  list: state.dogs.list,
  size: state.game.size,
  source: state.game.source
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
