import React, {Component} from 'react';
import { connect } from 'redux-zero/react';
import { Header } from './Components/Header';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Portfolio } from './Components/Portfolio';
import {Contact} from './Components/Contact';


const App = ({}) => {
  return (
    <div>
      <Header />
      <About />
      <Skills/>
      <Portfolio/>
      <Contact />
    </div>
  );
}

export default App
// const mapToProps = ({personal, info, socials, repos}) => ({personal, info, socials, repos});
// export default connect(mapToProps)(App);

