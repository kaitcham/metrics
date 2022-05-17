export const GETCONTINENTS = 'covid19/home/GET CONTINENTS';

const defaultState = {
  continents: [
    {
      name: 'North America',
      todayCases: 0,
      todayDeaths: 0,
    },
    {
      name: 'South America',
      todayCases: 0,
      todayDeaths: 0,
    },
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
    {
      name: 'Europe',
      todayCases: 0,
      todayDeaths: 0,
    },
    {
      name: 'Oceania',
      todayCases: 0,
      todayDeaths: 0,
    },
  ],
};

export default function continentsReducer(state = defaultState, action) {
  switch (action.type) {
    case GETCONTINENTS: {
      return { ...state, continents: action.continents };
    }
    default:
      return state;
  }
}

export function getContinents(continents) {
  return { type: GETCONTINENTS, continents };
}
