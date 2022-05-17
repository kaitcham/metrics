import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import image from '../images/wallpaper.jpg';
import style from './Continents.module.scss';
import { getContinents } from '../redux/Continents';
import numberWithCommas from '../functions/numberWithCommas';
import sumFieldOfArray from '../functions/sumFieldOfArray';

function Continents() {
  const continents = useSelector((state) => state.continentsReducer.continents);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://corona.lmao.ninja/v2/continents')
      .then((response) => response.json())
      .then((result) => {
        const continents = result.map((el) => ({
          name: el.continent,
          todayCases: el.todayCases,
          todayDeaths: el.todayDeaths,
        }));
        dispatch(getContinents(continents));
      }).catch((error) => `Error: ${error}`);
  }, []);
  return (
    <main>
      <div className={style.wallpaper}>
        <img src={image} alt="Main page background" />
        <div className={style.overlay}>
          <h1>
            Coronavirus live statictics
          </h1>
        </div>
      </div>
      <div className={style.cardContainer}>
        <NavLink
          key="world"
          to="./Countries/world"
          style={{ gridColumn: '1/3', flexDirection: 'row' }}
        >
          <div
            key="world"
            className={style.card}
            style={{ paddingRight: '15vw', paddingLeft: '15vw' }}
          >
            <img src="../images/world.png" alt="world" style={{ width: '50%' }} />
            <div className={style.info}>
              <h3>World</h3>
              <h4>NEW CASES</h4>
              <h4>{numberWithCommas(sumFieldOfArray(continents, 'todayCases'))}</h4>
              <h4>NEW DEATHS</h4>
              <h4>{numberWithCommas(sumFieldOfArray(continents, 'todayDeaths'))}</h4>
            </div>
          </div>
        </NavLink>
        {continents.map((el) => (
          <NavLink key={el.name} to={`./Countries/${el.name}`}>
            <div className={style.card}>
              <img src={`../images/${el.name}.png`} alt={el.name} />
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

export default Continents;
