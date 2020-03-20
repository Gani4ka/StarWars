import React from 'react';
import { Planet } from '../../services';

interface RandomPlanetViewProps extends Omit<Planet, 'rotation_period'> {
  rotationPeriod: string;
}

export const RandomPlanetView = (props: RandomPlanetViewProps): JSX.Element => {
  const { name, population, rotationPeriod, diameter, id } = props;
  return (
    <React.Fragment>
      <img
        className='planet-image'
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt='smth'
      />
      <div>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population</span>
            <span>{population}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
