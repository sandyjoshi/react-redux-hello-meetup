import {
  combineReducers
}
from 'redux';
import {
  routerStateReducer
}
from 'redux-router';
import wish from './wish';

export default combineReducers({
  wish,
  // router: routerStateReducer
});
