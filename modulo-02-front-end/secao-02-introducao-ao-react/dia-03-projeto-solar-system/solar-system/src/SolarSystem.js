import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid='solar-system'>
        < Title headline='Planetas' />
        < PlanetCard planetName='Mercúrio' planetImage='https://solarsystem.nasa.gov/system/stellar_items/image_files/2_feature_1600x900_mercury.jpg' />
      </div>
    );
  }
}

export default SolarSystem;