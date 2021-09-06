import React from 'react';

import './styles/App.scss';

import Welcome from './components/Welcome';
import BlanckSpace from './components/BlanckSpace';
import Landscape from './components/Landscape';
import Cities from './components/Cities';
import Animals from './components/Animals';

const App=()=> {
  return (
    <div id="App">
      <Welcome />
      <BlanckSpace/>
      <Landscape />
      <BlanckSpace />
      <Cities />
      <BlanckSpace />
      <Animals/>
    </div>
  );
}

export default App;
