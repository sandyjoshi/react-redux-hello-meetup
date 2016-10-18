import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import rootReducer from './reducers/index';
import {
  createStore
} from 'redux';

const store = createStore(rootReducer);

const node = (
  <Root store={store} />
);

ReactDOM.render(node, document.getElementById('app') );
