import React, { useState } from 'react';
import { swapi, Planet } from '../../services';
import './random-planet.css';
import { Spinner } from '../spinner/spinner';
import { RandomPlanetView } from './random-planet-view';

interface State extends Omit<Planet, 'rotation_period'> {
  rotationPeriod: string;
  loading: boolean;
  error: boolean;
}

const numberOfPlanets = 25;
const startFrom = 3;

export const RandomPlanet = (): JSX.Element => {
  const initialState: State = {
    id: 0,
    name: '',
    population: '0',
    rotationPeriod: '0',
    diameter: '0',
    loading: true,
    error: false
  };

  const [state, updateState] = useState(initialState);

  const getPlanet = (idRandom: number): void => {
    swapi
      .getPlanet(idRandom)
      .then(planet =>
        updateState({
          id: idRandom,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter,
          loading: false,
          error: false
        })
      )
      .catch(() =>
        updateState({
          ...state,
          error: true,
          loading: false
        })
      );
  };

  React.useEffect(() => {
    getPlanet(1);

    const interval = setInterval(() => {
      const randomId = Math.floor(Math.random() * numberOfPlanets + startFrom);
      getPlanet(randomId);
    }, 5000);

    return (): void => {
      clearInterval(interval);
    };
  }, []);

  const {
    name,
    population,
    rotationPeriod,
    diameter,
    loading,
    error,
    id
  } = state;

  return (
    <div className='random-planet jumbotron rounded'>
      {loading && <Spinner />}

      {!loading && !error && (
        <RandomPlanetView
          name={name}
          population={population}
          rotationPeriod={rotationPeriod}
          diameter={diameter}
          id={id}
        />
      )}

      {error && <p>Something went wrong...</p>}
    </div>
  );
};
