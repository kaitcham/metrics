export const GETCOUNTRIES = 'covid19/home/GET CONTRIES';

const defaultState = {
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

export default function countriesReducer(state = defaultState, action) {
  switch (action.type) {
    case GETCOUNTRIES: {
      return { ...state, countries: action.countries };
    }
    default:
      return state;
  }
}

export function getCountries(countries) {
  return { type: GETCOUNTRIES, countries };
}
