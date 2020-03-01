import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

import * as Pixi from "pixi.js"

import AspectRatio from './Basic/AspectRatio';
import Footer from './Basic/Footer';
import Header from './Header';

type AppProps = {
  message: string,
  aspectRatio: number,
  pixiApp: Pixi.Application,
}

function App(props: AppProps) {
  const pixiCanvasRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
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

      <Footer />
    </Fragment>
  );
}

export default App;