import continentsReducer, { getContinents } from '../redux/Continents';

describe('Testing continents action creator', () => {
  it('dispatching action with two continents should return those continents', () => {
    // arrange
    const param = {
      continents: [
        {
          name: 'Asia',
          todayCases: 0,
          todayDeaths: 0,
        },
        {
          name: 'Africa',
          todayCases: 0,
          todayDeaths: 0,
        },
      ],
    };

    // act
    const result = getContinents(param);

    // assert
    expect(result.type).toBe('covid19/home/GET CONTINENTS');
    expect(result.continents.continents).toHaveLength(2);
  });
});

describe('Testing continents reducer', () => {
  it('reducer should return the parameter as state', () => {
    // arrange
    const param = {
      continents: [
        {
          name: 'Asia',
          todayCases: 0,
          todayDeaths: 0,
        },
        {
          name: 'Africa',
          todayCases: 0,
          todayDeaths: 0,
        },
      ],
    };

    // act
    const result = continentsReducer(null, getContinents(param));

    // assert
    expect(result.continents.continents).toHaveLength(2);
  });
});
