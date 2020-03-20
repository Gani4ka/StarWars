import React from 'react';
import { swapi } from '../../services/swapi.service';
import './person-details.css';

// name
// "Darth Vader"
// height
// "202"
// mass
// "136"
// hair_color
// "none"
// skin_color
// "white"
// eye_color
// "yellow"
// birth_year
// "41.9BBY"
// gender

interface PersonDetailsProps {
  id: number;
}

interface State {
  id: number;
  name: string;
  gender: string;
  birthYear: string;
  eyeColor: string;
}

export const PersonDetails = (prop: PersonDetailsProps): JSX.Element => {
  const { id } = prop;
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    swapi
      .getPerson(id)
      // ???????????????????
      .then(data =>
        Object.entries(data).map(element => {
          swapi.toCamelCase(element[0]);
          return element;
        })
      )
      .then(data => console.log(data));
  }, []);
  return (
    <div className='person-details card'>
      <img
        className='person-image'
        src='https://starwars-visualguide.com/assets/img/characters/3.jpg'
        alt='smth'
      />

      <div className='card-body'>
        <h4>R2-D2</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Gender</span>
            <span>male</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Birth Year</span>
            <span>43</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Eye Color</span>
            <span>red</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
