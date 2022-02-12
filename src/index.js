import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import { saveFlag } from './features/Auth/AuthSlice';
import { getLoginSuccess } from './common/api/JWT-Token';
import store from './app/store';

if (getLoginSuccess()) {
  console.log(getLoginSuccess());
  store.dispatch(saveFlag('false'));
  // dispatch(saveFlag('false'));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
