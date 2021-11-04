import React, {useState} from 'react';

import './styles/App.scss';

import Welcome from './components/Welcome';
import BlanckSpace from './components/BlanckSpace';
import Landscape from './components/Landscape';
import Cities from './components/Cities';
import Animals from './components/Animals';
import Banner from './components/banner';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  const [banner, setBanner] = useState(true);
  return (
    <div id="App">
      <NavBar/>
      <Welcome />
      <BlanckSpace/>
      <Landscape />
      <BlanckSpace />
      <Cities />
      <BlanckSpace />
      <Animals />
      <BlanckSpace />
      <Footer />
      {banner === true && <Banner setBanner={setBanner} />}
      
      
    </div>
  );
}

export default App;
