import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList />
        </div>
        <div className='col-md-6'>
          <PersonDetails id={4} />
        </div>
      </div>
    </div>
  );
};
