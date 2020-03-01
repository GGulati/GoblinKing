type GameState = {
  message: string
}

const INITIAL_STATE: GameState = {
  message: 'Hello world!'
}

function gameReducer(state: GameState = INITIAL_STATE) {
  return state;
}

export { GameState, gameReducer };
