import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import * as serviceWorker from './serviceWorker';
import './index.css';
import Theme from './Components/Theme';

import Game from './Containers/Game';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <Game />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
