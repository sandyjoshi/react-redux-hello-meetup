import {createReducer}     from '../utils';
import constants from '../constants/';

const initialWish = {
    prefix: 'Good ',
    message: ''
};

export default createReducer(initialWish, {

    [constants.WISH_BYE]: (state, payload) => {
        return Object.assign({}, state, {
            message: 'Good Bye!!'
        });
    },

    [constants.UPDATE_WISH]: (state, payload) => {
        return Object.assign({}, state, {message: payload});
    },

});