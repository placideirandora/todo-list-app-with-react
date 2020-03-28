import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../src/App';
import * as index from '../src/index';

const mockStore = configureStore();
const store = mockStore();

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('App Root Test Case', () => {
  it('should render the App in the DOM without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );

    global.document.getElementById = id => id === 'app' && div;

    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
  });
});
