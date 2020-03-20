import React from 'react';
import { swapi } from '../../services/swapi.service';

import './item-list.css';

const initialState: Array<string> = ['Lada', 'Dada'];

export const ItemList = (): JSX.Element => {
  const [state, setState] = React.useState(initialState);
  const getPeopleList = (): void => {
    swapi
      .getAllPeople()
      .then(data => data.map(el => el.name))
      .then(arr => setState(arr));
  };
  // loading, error
  // useMemo, Memo
  React.useEffect(() => {
    getPeopleList();
  }, []);

  const PersonItem = state.map(el => (
    <li key={el} className='list-group-item'>
      {el}
    </li>
  ));

  return <ul className='item-list list-group'>{PersonItem}</ul>;
};
