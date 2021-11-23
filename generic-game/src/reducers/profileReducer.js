import { PROFILE_SET_STATS, PROFILE_SET_COLOR } from "../actions/types/profile";

const initialState = {
  stats: {
    gamesWon: 0,
    gamesLost: 0,
    gamesPlayed: 0,
  },
  creature: {
    mainColor: "#ffabce",
    secondaryColor: "#ff7bad",
    eyeColor: "#000000",
  },
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_SET_STATS:
      return {
        ...state,
        stats: payload,
      };

    case PROFILE_SET_COLOR:
      return {
        ...state,
        creature: {
          ...state.creature,
          [payload.targetProperty]: payload.color,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;
