import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import thunk  from 'redux-thunk';
import {compose, createStore, applyMiddleware} from 'redux';

import App from './components/App/App';
import {rootReducer} from './redux/reducer/rootReducer';
import './index.css';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render(
  app,
  document.getElementById('root')
);
