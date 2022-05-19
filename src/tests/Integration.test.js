import {
  render,
  screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureStore from '../redux/configureStore';
import App from '../App';
import { getContinents } from '../redux/Continents';

describe('Integration test', () => {
  it('Asia should be in continents list', () => {
    const param = [
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
    ];
    configureStore.dispatch(getContinents(param));
    const Jsx = () => (
      <Provider store={configureStore}>
        <App />
      </Provider>
    );
    const mockCountries = () => {
      render(Jsx());
    };
    mockCountries();
    expect(screen.getByText('Asia')).toBeInTheDocument();
  });
});
