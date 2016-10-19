import constants from '../constants/';
import axios from 'axios';

export function updateWish(msg) {
    return {
        type: constants.UPDATE_WISH,
        payload: msg
    };
}

export function loadInitialMessageCall() {
    return function (dispatch) {
        axios.get('/api/message')
            .then(response => dispatch(updateWish(response.data)))
    }
};


export default {
    wishMorning(msg) {
        return {
            type: constants.WISH_GOOD_MORNING,
            payload: {msg}
        };
    },
    wishNight(msg) {
        return {
            type: constants.WISH_GOOD_NIGHT,
            payload: {msg}
        };
    },
    resetWish() {
        return {
            type: constants.RESET_WISH
        };
    },
    loadInitialMessage : loadInitialMessageCall
}