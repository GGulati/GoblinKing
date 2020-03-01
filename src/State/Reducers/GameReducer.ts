export type GameState = {
  message: string
}

const INITIAL_STATE: GameState = {
  message: 'Welcome to a very WIP game'
}

function gameReducer(state: GameState = INITIAL_STATE) {
  return state;
}

export default gameReducer;
