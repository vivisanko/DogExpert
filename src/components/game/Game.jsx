import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Game.css";
import classNames from "classnames";

class Game extends Component {
  componentDidMount() {
    this.createNewGame();
  }

  createNewGame = () => {
    const { size, list, createGame } = this.props;
    createGame(size, list);
  };

  render() {
    const { source, selectDog, selectedDogs, game } = this.props;
    const boxElem = source.map((el, index) => {
      const dogClass = classNames("Game__boxElem", {
        Game__boxElem_inactive: !el.isActive,
        Game__boxElem_selected:
          selectedDogs.length !== 0 && selectedDogs[0].id === el.id
      });
      return (
        <div
          key={`${el.image}_${index.toString()}`}
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

    return (
      <div className="Game">
        <div className="Game__moveDescription">
          <p>Find dogs of the same breed</p>
          <p>
            <span className="Game__description">selected breed: </span>
            {selectedDogs.length !== 0 ? selectedDogs[0].breed : ""}
          </p>
          <p>
            <span className="Game__description">score: </span>
            {game.score}
          </p>
          <div className="Game__navigation">
            <button
              type="button"
              className="Game__buttonNew"
              onClick={this.createNewGame}
            >
              Start another game
            </button>
          </div>
        </div>
        <div className="Game__area">{boxElem}</div>
      </div>
    );
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
};

export default Game;
