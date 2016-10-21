import constants from '../constants/';

function updateWish(msg) {
    return {
        type: constants.UPDATE_WISH,
        payload: msg
    };
}

export default {
    wishBye() {
        return {
            type: constants.WISH_BYE
        };
    },
    updateWish,
}