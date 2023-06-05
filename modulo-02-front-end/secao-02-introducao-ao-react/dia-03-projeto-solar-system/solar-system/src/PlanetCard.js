import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altName = `Planeta ${planetName}`;
    return (
      <div data-testid='planet-card'>
        <p data-testid='planet-name'>{planetName}</p>
        <img src={planetImage} alt={altName} />
      </div>
    );
  }
}

export default PlanetCard;