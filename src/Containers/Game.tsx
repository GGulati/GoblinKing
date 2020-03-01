import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import * as Pixi from "pixi.js"

import App from '../Components/App';
import gameReducer, { GameState } from '../State/Reducers/GameReducer';

const mapStateToProps = (state: GameState) => ({
  message: state.message,
});

const GameContainer = connect(
  mapStateToProps,
)(App);

const gameStore = createStore(gameReducer);
const pixiApp = new Pixi.Application({transparent: false});

class Game extends Component {
  render() {
    return (
      <Provider store={gameStore}>
        <GameContainer pixiApp={pixiApp} aspectRatio={16 / 9}/>
      </Provider>
    );
  }
}

export default Game;