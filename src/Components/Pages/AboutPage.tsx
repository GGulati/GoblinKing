import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


import Header from '../Basic/Header';
import Footer from '../Basic/Footer';

export default function About() {
  return (
    <Fragment>
      <Header />
      
      <Container component="main" maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Goblin King
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center">
          Created for 7drl by Gurwinder Singh Gulati
        </Typography>
        <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Container>

      <Footer />
    </Fragment>
  );
}