import React from 'react';

import './styles/App.scss';

import Welcome from './components/Welcome';
import Landscape from './components/Landscape';
import BlanckSpace from './components/BlanckSpace';

const App=()=> {
  return (
    <div id="App">
      <Welcome />
      <BlanckSpace/>
      <Landscape />
      <BlanckSpace/>
    </div>
  );
}

export default App;
