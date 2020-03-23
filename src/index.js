import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { todoStore } from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={todoStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
