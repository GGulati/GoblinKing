import React from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import * as Pixi from "pixi.js"

import gameReducer, { GameState } from '../../State/Reducers/GameReducer';
import Game from '../Basic/Game';

const gameStore = createStore(gameReducer);
const pixiApp = new Pixi.Application({transparent: false});

const InternalGameContainer = connect((state: GameState) => { return { state } })(Game);

export default function GameContainer() {
  return (
    <Provider store={gameStore}>
      <InternalGameContainer pixiApp={pixiApp} aspectRatio={16 / 9}/>
    </Provider>
  );
}