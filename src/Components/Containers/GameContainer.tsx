import React from 'react';

import * as Pixi from 'pixi.js';

import Game, { GameProps } from '../Basic/Game';
import KingGame from '../../KingEngine/KingGame';
import KingEngine from '../../KingEngine/KingEngine';


const SAVE_GAME_NAME = "goblin_king_game";

function createGameEngine(): GameProps {
  const pixiApp = new Pixi.Application({transparent: false});
  const kingGame = new KingGame();
  const kingEngine = new KingEngine(pixiApp, kingGame);

  const saveGame = () => {
    const gameState = kingGame.getSaveGame();
    localStorage.setItem(SAVE_GAME_NAME, gameState);
    return gameState;
  }
  const loadGame = () => {
    const savedState = localStorage.getItem(SAVE_GAME_NAME);
    if (savedState != null) {
      kingGame.loadSavedGame(savedState);
    }
  }
  const loadGameFromUI = (gameState: string) => { kingGame.loadSavedGame(gameState) }

  return {
    aspectRatio: 16 / 9,
    pixiApp,
    game: kingGame,
    engine: kingEngine,
    saveGame: saveGame,
    loadGame: loadGame,
    loadGameFromUI: loadGameFromUI,
  }
}

export default function GameContainer() {
  const engine = React.useMemo(createGameEngine, undefined);

  return (
    <Game {...engine} />
  );
}