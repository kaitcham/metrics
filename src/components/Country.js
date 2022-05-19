import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './Country.module.scss';
import { getCountryInfo } from '../redux/Country';
import numberWithCommas from '../functions/numberWithCommas';
import defaultState from '../redux/CountriesDefaultState';

function Countries() {
  // const continents = useSelector((state) => state.countriesReducer.continents);
  const dispatch = useDispatch();
  const { country } = useParams();
  const [countryInfo, setCountryInfo] = useState({
    countryCode: 'XXX',
    todayCases: 1,
    todayDeaths: 1,
    yesterdayCases: 1,
    yesterdayDeaths: 1,
    totalCases: 1,
    totalDeaths: 1,
  });
  const [flag, setFlag] = useState('');

  useEffect(() => {
    setFlag(defaultState.countries.filter((el) => el.name === country)[0].flag);
    fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
      .then((response1) => response1.json())
      .then((result1) => {
        fetch(`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true`)
          .then((response2) => response2.json())
          .then((result2) => {
            const newInfo = {
              countryCode: result1.countryInfo.iso2,
              todayCases: result1.todayCases,
              todayDeaths: result1.todayDeaths,
              yesterdayCases: result2.todayCases,
              yesterdayDeaths: result2.todayDeaths,
              totalCases: result1.cases,
              totalDeaths: result1.deaths,
            };
            setCountryInfo(newInfo);
            dispatch(getCountryInfo(countryInfo));
          })
          .catch((error) => `Error: ${error}`);
      }).catch((error) => `Error: ${error}`);
  }, [country]);

  return (
    <main>
      <div className={style.cardContainer}>
        <div
          className={style.card}
          style={{
            flexBasis: '100%', flexDirection: 'row', paddingRight: '15vw', paddingLeft: '15vw',
          }}
        >
          <img src={flag} alt={country} style={{ width: '50%' }} />
          <div className={style.info}>
            <h3>{country}</h3>
          </div>
        </div>
        <div className={style.card}>
          <p>TODAY NEW CASES</p>
          <span>
            {`${`${numberWithCommas(countryInfo.todayCases) + (countryInfo.todayCases > countryInfo.yesterdayCases ? ' (+' : ' (') + (countryInfo.todayCases - countryInfo.yesterdayCases)})`}`}
          </span>
        </div>
        <div className={style.card}>
          <p>TODAY NEW DAETHS</p>
          <span>
            {`${`${numberWithCommas(countryInfo.todayDeaths) + (countryInfo.todayDeaths > countryInfo.yesterdayDeaths ? ' (+' : ' (') + (countryInfo.todayDeaths - countryInfo.yesterdayDeaths)})`}`}

          </span>
        </div>
        <div className={style.card}>
          <p>YESTERDAY NEW CASES</p>
          <span>{numberWithCommas(countryInfo.yesterdayCases)}</span>
        </div>
        <div className={style.card}>
          <p>YESTERDAY NEW DAETHS</p>
          <span>{numberWithCommas(countryInfo.yesterdayDeaths)}</span>
        </div>
        <div className={style.card}>
          <p>TOTAL CASES</p>
          <span>{numberWithCommas(countryInfo.totalCases)}</span>
        </div>
        <div className={style.card}>
          <p>TOTAL DAETHS</p>
          <span>{numberWithCommas(countryInfo.totalDeaths)}</span>
        </div>
        <div
          className={style.card}
          style={{ flexBasis: '100%' }}
        >
          <img src={`https://corona.dnsforfamily.com/graph.png?c=${countryInfo.countryCode}`} alt="chart" style={{ width: '100%' }} />
        </div>
      </div>
    </main>
  );
}

export default Countries;
