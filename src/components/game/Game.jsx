import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Game.css";
import classNames from "classnames";

class Game extends Component {
  componentDidMount() {
    const { size, list, createGame } = this.props;
    createGame(size, list);
    console.log("didMount");
  }

  // handleClick = breed => {
  //   console.log("click on breed", breed);
  //   this.props.selectDog(breed);
  // };

  render() {
    const { source, selectDog, selectedDogs, game } = this.props;

    const box = source.map(el => {
      const dogClass = classNames("Game__boxElem", {
        Game__boxElem_inactive: !el.isActive,
        Game__boxElem_selected:
          selectedDogs.length !== 0 && selectedDogs[0].id === el.id
      });
      return (
        <div
          key={el.image}
          className={dogClass}
          role="button"
          onClick={() => selectDog(el, game)}
          onKeyUp={() => {}}
          tabIndex="-1"
        >
          <img className="Game__boxImage" src={el.image} alt="dog" />
        </div>
      );
    });
    console.log("box", box);

    // console.log("this.props.source", source);
    // createSource(size, list);
    return <div className="Game">{box}</div>;
  }
}

Game.propTypes = {
  createGame: PropTypes.func.isRequired,
  selectDog: PropTypes.func.isRequired,
  selectedDogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  list: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  ).isRequired,
  source: PropTypes.arrayOf(
    PropTypes.shape({
      breed: PropTypes.string,
      image: PropTypes.string
    })
  ).isRequired,
  size: PropTypes.number.isRequired,
  game: PropTypes.object.isRequired
  // gameQuery: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     source: PropTypes.string,
  //     exactly: PropTypes.string,
  //     amount: PropTypes.number
  //   })
  // ).isRequired
};

export default Game;
