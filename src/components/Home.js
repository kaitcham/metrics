import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import image from '../images/wallpaper.jpg';
import style from './Home.module.scss';
import { getContinents } from '../redux/Continents';
import numberWithCommas from '../functions/numberWithCommas';
import sumFieldOfArray from '../functions/sumFieldOfArray';

function Home() {
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
      })
      .catch((error) => `Error: ${error}`);
  }, []);
  return (
    <main>
      <img className={style.wallpaper} src={image} alt="Main page background" />
      <div className={style.cardContainer}>
        <div
          key="world"
          className={style.card}
          style={{ gridColumn: '1/3', flexDirection: 'row' }}
        >
          <img src="../images/world.png" alt="world" style={{ width: '50%' }} />
          <div className={style.info}>
            <h3>World</h3>
            <h4>{`NEW CASES: ${numberWithCommas(
              sumFieldOfArray(continents, 'todayCases')
            )} `}</h4>
            <h4>{`NEW DEATHS: ${numberWithCommas(
              sumFieldOfArray(continents, 'todayDeaths')
            )} `}</h4>
          </div>
        </div>
        {continents.map((el) => (
          <div key={el.name} className={style.card}>
            <img src={`../images/${el.name}.png`} alt={el.name} />
            <div className={style.info}>
              <h3>{el.name}</h3>
              <h4>{`NEW CASES: ${numberWithCommas(el.todayCases)} `}</h4>
              <h4>{`NEW DEATHS: ${numberWithCommas(el.todayDeaths)} `}</h4>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
