import React, { Component } from "react";
import PropTypes from "prop-types";

class Game extends Component {
  componentDidMount() {
    const { size, list, createGame } = this.props;
    createGame(size, list);
    console.log("didMount");
  }

  render() {
    const { source } = this.props;
    console.log("source in render", source);

    // console.log("this.props.source", source);
    // createSource(size, list);
    return <div>а тут компонент с картинками</div>;
  }
}

Game.propTypes = {
  createGame: PropTypes.func.isRequired,
  list: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  ).isRequired,
  source: PropTypes.arrayOf(
    PropTypes.shape({
      breed: PropTypes.string,
      image: PropTypes.string
    })
  ).isRequired,
  size: PropTypes.number.isRequired
  // gameQuery: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     source: PropTypes.string,
  //     exactly: PropTypes.string,
  //     amount: PropTypes.number
  //   })
  // ).isRequired
};

// Game.defaultProps = {
//   dispatch: () => ({})
// };
export default Game;
