import React, { Fragment } from 'react';

import Footer from '../Basic/Footer';
import Header from '../Basic/Header';
import GameContainer from '../Containers/GameContainer';

export default function GamePage() {
  return (
    <Fragment>
      <Header />
    
      <GameContainer />

      <Footer />
    </Fragment>
  );
}