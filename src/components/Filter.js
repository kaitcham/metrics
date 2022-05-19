import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import countries from '../redux/CountriesDefaultState';
import continents from '../redux/ContinentsDefaultState';

function Filter(props) {
  const { searchText, claerSearchText } = props;
  const suggestions1 = continents.continents.filter(
    (el) => el.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  const suggestions2 = countries.countries.filter(
    (el) => el.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const suggestions = [];
  suggestions1.forEach((el) => {
    suggestions.push({ name: el.name, category: 'continents' });
  });
  suggestions2.forEach((el) => {
    suggestions.push({ name: el.name, category: 'countries' });
  });

  return (
    <ul>
      {
        searchText.length < 2 || suggestions1.length + suggestions2.length > 10
          ? <li key="type more"><h5>Please type more letters</h5></li>
          : suggestions.map((el) => (
            <li key={el.name}>
              <NavLink
                to={`./${el.category === 'continents' ? 'Countries' : 'Country'}/${el.name}`}
                onClick={claerSearchText}
              >
                <h3>{el.name}</h3>
                <span>
                  {`  (${el.category}) `}
                </span>
              </NavLink>
            </li>
          ))
      }

    </ul>
  );
}

Filter.propTypes = {
  searchText: PropTypes.string.isRequired,
  claerSearchText: PropTypes.func.isRequired,
};

export default Filter;
