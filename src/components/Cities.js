import React from 'react';

import Building from '../Img/Building.png';
import Castle from '../Img/castle.png';
import City from '../Img/city.png';

const Cities=()=> {
  return (
      <div id="Cities">
        <div className="blue-square"></div>
        <div className="first-group">
            <h2>Amazing Cities</h2>
            <img src={City} alt="City of Edinburgh" /> 
        </div>
        <div className="second-group">
            <img src={Castle} alt="castle" />
            <img src={Building} alt="building" />
          </div>
        <div className="third-group">
            <div className="blue-rectangle"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div> 
    </div>
  );
}

export default Cities;