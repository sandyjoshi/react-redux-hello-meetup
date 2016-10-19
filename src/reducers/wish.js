import {createReducer}     from '../utils';
import constants from '../constants/';

const initialWish = {
    prefix: 'Good ',
    message: 'Hello!'
};

export default createReducer(initialWish, {

    [constants.WISH_GOOD_MORNING]: (state, payload) => {
        return Object.assign({}, state, {
            message: payload.msg
        });
    },

    [constants.WISH_GOOD_NIGHT]: (state, payload) => {
        return Object.assign({}, state, {
            message: payload.msg
        });
    },

    [constants.RESET_WISH]: (state, payload) => {
        return Object.assign({}, state, {
            message: 'Bye!'
        });
    },

    [constants.UPDATE_WISH]: (state, payload) => {
        return Object.assign({}, state, payload );
    },

    [constants.SHOW_LOADING]: (state, payload) => {
        return Object.assign({}, state );
    }

    

});