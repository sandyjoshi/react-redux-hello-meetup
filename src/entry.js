import React from 'react';
import ReactDOM from 'react-dom';
import HelloMeetupApp from './components/helloMeetupApp';
import rootReducer from './reducers/index';
import {
    createStore
} from 'redux';

const store = createStore(rootReducer);

const node = (
    <HelloMeetupApp store={store}/>
);

ReactDOM.render(node, document.getElementById('app'));
