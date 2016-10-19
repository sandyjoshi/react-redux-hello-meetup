import constants from '../constants/';
import axios from 'axios';

function updateWish(msg) {
    return {
        type: constants.UPDATE_WISH,
        payload: msg
    };
};

function loadInitialMessage() {
    return function (dispatch) {
        axios.get('/api/message')
            .then(response => dispatch(updateWish(response.data.message)))
    }
};

function saveMessage() {
    return function (dispatch, getState) {
        let message = getState().wish.message;
        axios.post('/api/message', { message })
            .then(response => dispatch(updateWish(message)))
    }
};

export default {
    wishBye() {
        return {
            type: constants.WISH_BYE
        };
    },
    updateWish,
    loadInitialMessage,
    saveMessage : saveMessage
}