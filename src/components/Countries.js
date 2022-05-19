import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import style from './Countries.module.scss';
import { getCountries } from '../redux/Countries';
import numberWithCommas from '../functions/numberWithCommas';
import sumFieldOfArray from '../functions/sumFieldOfArray';
import defaultState from '../redux/CountriesDefaultState';

function Countries() {
  // const continents = useSelector((state) => state.countriesReducer.continents);
  const dispatch = useDispatch();
  const { continent } = useParams();
  const [countries, setCountries] = useState([]);
  const selectedCountries = defaultState.countries.filter((el) => el.continent === continent).map((el) => el.name).join(',');

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v2/countries/${selectedCountries}`)
      .then((response) => response.json())
      .then((result) => {
        setCountries(result.map((el) => ({
          name: el.country,
          flag: el.countryInfo.flag,
          todayCases: el.todayCases,
          todayDeaths: el.todayDeaths,
        })));
        dispatch(getCountries(countries));
      }).catch((error) => `Error: ${error}`);
  }, []);

  return (
    <main>
      <div className={style.cardContainer}>
        <div
          key={continent}
          className={style.card}
          style={{
            gridColumn: '1/3',
            flexDirection: 'row',
            paddingRight: '15vw',
            paddingLeft: '15vw',
          }}
        >
          <img src={`../images/${continent}.png`} alt={continent} style={{ width: '50%' }} />
          <div className={style.info}>
            <h3>{continent}</h3>
            <h4>NEW CASES</h4>
            <h4>{numberWithCommas(sumFieldOfArray(countries, 'todayCases'))}</h4>
            <h4>NEW DEATHS</h4>
            <h4>{numberWithCommas(sumFieldOfArray(countries, 'todayDeaths'))}</h4>
          </div>
        </div>
        {countries.map((el) => (
          <NavLink key={el.name} to={`/country/${el.name}`}>
            <div className={style.card}>
              <div className={style.img} style={{ backgroundImage: `url('${el.flag}')` }} />
              <div className={style.info}>
                <h3>{el.name}</h3>
                <h4>NEW CASES</h4>
                <h4>{numberWithCommas(el.todayCases)}</h4>
                <h4>NEW DEATHS</h4>
                <h4>{numberWithCommas(el.todayDeaths)}</h4>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </main>
  );
}

export default Countries;
