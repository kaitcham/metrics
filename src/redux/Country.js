export const GETCOUNTRYINFO = 'covid19/home/GET CONTRYINFO';
const defaultState = {
  countryCode: 'XX',
  todayCases: 0,
  todayDeaths: 0,
  yesterdayCases: 0,
  yesterdayDeaths: 0,
  totalCases: 0,
  totalDeaths: 0,
};

export default function countriesReducer(state = defaultState, action) {
  switch (action.type) {
    case GETCOUNTRYINFO: {
      return { ...state, countryInfo: action.countryInfo };
    }
    default:
      return state;
  }
}

export function getCountryInfo(countryInfo) {
  return { type: GETCOUNTRYINFO, countryInfo };
}
