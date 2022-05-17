import defaultState from './ContinentsDefaultState';

export const GETCONTINENTS = 'covid19/home/GET CONTINENTS';

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
