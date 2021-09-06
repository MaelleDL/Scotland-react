import React from 'react';

import Sheep from '../Img/Sheep.png';
import Cow from '../Img/Cow.png';

const Animals=()=> {
  return (
      <div id="Animals">
          <div className="green-rectangle"></div>
          <div className="contenu">
            <img src={Sheep} className="img-1" alt="Sheep" />
            <img src={Cow} className="img-2" alt="a scottish cow" />
            <div className="text">
                <h2>Cute Animals</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
    </div>
  );
}

export default Animals;