import { createReducer }     from '../utils';
import constants from '../constants/';

const initialState = {
	name: 'Hello Guys',
  wish: 'Good Evening'
};

export default createReducer(initialState, {

  [constants.WISH_GOOD_MORNING] : (state, payload) => {
    return Object.assign({}, state, {
      wish: 'Good Morning'
    });
  },

  [constants.WISH_GOOD_NIGHT] : (state, payload) => {
    return Object.assign({}, state, {
      wish: 'Good Night'
    });
  },

  [constants.RESET_WISH] : (state, payload) => {
    return Object.assign({}, state, {
      wish: 'Good Evening'
    });
  }

});