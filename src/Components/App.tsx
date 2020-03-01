import React, { Component, Fragment, createRef } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import * as Pixi from "pixi.js"

import Copyright from './Copyright'
import Header from './Header'

type AppProps = {
  message: string,
  pixiApp: Pixi.Application
}

class App extends Component<AppProps> {
  pixiCanvasRef = createRef<HTMLDivElement>();

  componentDidMount() {
    if (this.pixiCanvasRef.current != null) {
      this.pixiCanvasRef.current.appendChild(this.props.pixiApp.view);
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create React App v4-beta example with TypeScript
            </Typography>
            <Typography variant="h5" component="h1" gutterBottom>
              {this.props.message}
            </Typography>
            <div ref={this.pixiCanvasRef} />
            <Copyright />
          </Box>
        </Container>
      </Fragment>
    );
  }
}

export default App;