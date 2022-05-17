import countriesReducer, { getCountries } from '../redux/Countries';

describe('Testing countries action creator', () => {
  it('dispatching action with two countries should return those countries', () => {
    // arrange
    const param = {
      countries: [
        {
          name: 'Iran',
          todayCases: 0,
          todayDeaths: 0,
        },
        {
          name: 'Afghanistan',
          todayCases: 0,
          todayDeaths: 0,
        },
      ],
    };

    // act
    const result = getCountries(param);

    // assert
    expect(result.type).toBe('covid19/home/GET COUNTRIES');
    expect(result.countries.countries).toHaveLength(2);
  });
});

describe('Testing countries reducer', () => {
  it('reducer should return the parameter as state', () => {
    // arrange
    const param = {
      countries: [
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
    const result = countriesReducer(null, getCountries(param));

    // assert
    expect(result.countries.countries).toHaveLength(2);
  });
});
