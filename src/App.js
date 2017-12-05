import React, {Component} from 'react';
import { connect } from 'redux-zero/react';
import { Navigator} from './Components/Navbar';
import { Header } from './Components/Header';
import { About } from './Components/About';
import {Portfolio} from './Components/Portfolio';
import {Contact} from './Components/Contact';

const App = ({personal, info, socials, repos}) => {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

const mapToProps = ({personal, info, socials, repos}) => ({personal, info, socials, repos});
export default connect(mapToProps)(App);