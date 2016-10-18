import constants from '../constants/';

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
    }
};