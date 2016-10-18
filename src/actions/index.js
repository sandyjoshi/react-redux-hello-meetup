import constants from '../constants/';

export default {
  wishMorning() {
    return {
      type: constants.WISH_GOOD_MORNING
    };
  },
  wishNight() {
    return {
      type: constants.WISH_GOOD_NIGHT
    };
  },
  resetWish() {
    return {
      type: constants.RESET_WISH
    };
  }
};