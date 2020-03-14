import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

import * as Pixi from "pixi.js"

import AspectRatio from './AspectRatio';
import KingEngine from '../../KingEngine/KingEngine';
import KingGame from '../../KingEngine/KingGame';

export type GameProps = {
  aspectRatio: number,
  pixiApp: Pixi.Application,
  engine: KingEngine,
  game: KingGame,
  saveGame: () => string,
  loadGame: () => void,
  loadGameFromUI: (gameState: string) => void,
}

function Game(props: GameProps) {
  const pixiCanvasRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (pixiCanvasRef.current != null) {
      props.pixiApp.resizeTo = pixiCanvasRef.current;
      pixiCanvasRef.current.appendChild(props.pixiApp.view);

      props.engine.initialize();
    }
  })

  return (
    <Container>
      <AspectRatio ratio={props.aspectRatio}>
        <div style={{width: '100%', height: '100%'}} ref={pixiCanvasRef} />
      </AspectRatio>

      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={() => props.saveGame()}>Save</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => props.loadGame()}>Load</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Game;