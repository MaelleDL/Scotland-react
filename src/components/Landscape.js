import React from 'react';

import LandscapeIm from '../Img/Landscape.png';

const Landscape=()=> {
  return (
      <div id="Landscape">
          <img src={LandscapeIm} alt='Landscape' />
          <div className="Text L-Text">
              <h2>Incredible Lanscape</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          
    </div>
  );
}

export default Landscape;