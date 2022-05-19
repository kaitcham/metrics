import countryReducer, { getCountryInfo } from '../redux/Country';

describe('Testing country action creator', () => {
  it('dispatching action with a country info should return that country info', () => {
    // arrange
    const param = {
      countryCode: 'IR',
      todayCases: 1000,
      todayDeaths: 100,
      yesterdayCases: 900,
      yesterdayDeaths: 90,
      totalCases: 100000,
      totalDeaths: 7000000,
    };

    // act
    const result = getCountryInfo(param);

    // assert
    expect(result.type).toBe('covid19/home/GET CONTRYINFO');
    expect(result.countryInfo.countryCode).toBe('IR');
  });
});

describe('Testing country reducer', () => {
  it('reducer should return the parameter as state', () => {
    // arrange
    const param = {
      countryCode: 'IR',
      todayCases: 1000,
      todayDeaths: 100,
      yesterdayCases: 900,
      yesterdayDeaths: 90,
      totalCases: 100000,
      totalDeaths: 7000000,
    };

    // act
    const result = countryReducer(null, getCountryInfo(param));

    // assert
    expect(result.countryInfo.todayCases).toBe(1000);
  });
});
