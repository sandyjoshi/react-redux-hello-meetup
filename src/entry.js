import React from 'react';
import ReactDOM from 'react-dom';
import HelloMeetupApp from './components/helloMeetupApp';
import rootReducer from './reducers/index';
import {createStore, applyMiddleware} from 'redux';
import thunk                from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(
    rootReducer,
    middleware
);

const node = (
    <HelloMeetupApp store={store}/>
);

ReactDOM.render(node, document.getElementById('app'));
