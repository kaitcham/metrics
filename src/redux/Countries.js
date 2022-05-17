import defaultState from './CountriesDefaultState';

export const GETCOUNTRIES = 'covid19/home/GET COUNTRIES';

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
