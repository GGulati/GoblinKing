import React, { Fragment, useRef, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import * as Pixi from "pixi.js"

import Header from './Header'
import AspectRatio from './AspectRatio';
import Copyright from './Copyright';
import { Grid } from '@material-ui/core';

type AppProps = {
  message: string,
  aspectRatio: number,
  pixiApp: Pixi.Application,
}

function App(props: AppProps) {
  const pixiCanvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pixiCanvasRef.current != null) {
      props.pixiApp.resizeTo = pixiCanvasRef.current;
      pixiCanvasRef.current.appendChild(props.pixiApp.view);
    }
  })

  return (
    <Fragment>
      <Header />
      <Container>
        <Typography variant="h5" component="h1" gutterBottom>
          {props.message}
        </Typography>
        <AspectRatio ratio={props.aspectRatio}>
          <div style={{width: '100%', height: '100%'}} ref={pixiCanvasRef} />
        </AspectRatio>

        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          <Grid item>
            <Button variant="contained">Bread</Button>
          </Grid>
          <Grid item>
            <Button variant="contained">Scrap</Button>
          </Grid>
        </Grid>
      </Container>
      <Copyright />
    </Fragment>
  );
}

export default App;