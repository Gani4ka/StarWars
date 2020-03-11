import React, { useState } from 'react';
import { swapi, Planet } from '../../services';
import './random-planet.css';
import { Spinner } from '../spinner/spinner';
import { RandomPlanetView } from './random-planet-view';

interface State extends Omit<Planet, 'rotation_period'> {
  rotationPeriod: string;
  loading: boolean;
}

export const RandomPlanet = (): JSX.Element => {
  const initialState: State = {
    id: 0,
    name: '',
    population: '0',
    rotationPeriod: '0',
    diameter: '0',
    loading: true
  };

  const [state, updateState] = useState(initialState);

  const getPlanet = (id: number): void => {
    swapi.getPlanet(id).then(planet =>
      updateState({
        id: planet.id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
        loading: false
      })
    );
  };

  React.useEffect(() => {
    getPlanet(1);

    const interval = setInterval(() => {
      const randomId = Math.floor(Math.random() * 25 + 2); // magic numbers
      getPlanet(randomId);
    }, 5000);

    return (): void => {
      clearInterval(interval);
    };
  }, []);

  const { name, population, rotationPeriod, diameter, id, loading } = state;
  // add catch error
  return (
    <div className='random-planet jumbotron rounded'>
      {loading ? (
        <Spinner />
      ) : (
        <RandomPlanetView
          name={name}
          population={population}
          rotationPeriod={rotationPeriod}
          diameter={diameter}
          id={id}
        />
      )}
    </div>
  );
};
