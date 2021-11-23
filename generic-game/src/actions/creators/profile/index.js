import {
  createProfile,
  createUser,
  readProfile,
  readUser,
  updateProfile,
} from "../../../api/users";
import {
  PROFILE_SET_COLOR,
  PROFILE_SET_STATS,
  PROFILE_SET_COLORS,
} from "../../types/profile";

// getUserStats
export const getUserStats = (userId) => {
  return async (dispatch) => {
    try {
      const stats = await readUser(userId);

      dispatch(setUserStats(stats));

      return stats;
    } catch ({ response }) {
      return Promise.reject(response);
    }
  };
};

export const setUserStats = (stats) => {
  return {
    type: PROFILE_SET_STATS,
    payload: stats,
  };
};

// postUserStats
export const postUserStats = (userId) => {
  return async (dispatch) => {
    await createUser(userId);
  };
};

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let creatureColors = {};

    try {
      creatureColors = await readProfile(userId);
      // set colors in state
      dispatch(setCreatureColors(creatureColors));

      return creatureColors;
    } catch (error) {
      const response = error.response;
      return Promise.reject(response);
    }
  };
};

export const postUserProfile = (userId) => {
  return async (_, getState) => {
    const { profile } = getState();

    await createProfile(userId, profile.creature);
  };
};

export const setCreatureColor = (targetProperty, color) => {
  return {
    type: PROFILE_SET_COLOR,
    payload: {
      targetProperty,
      color,
    },
  };
};

export const patchUserProfile = (userId, colors) => {
  return async () => {
    await updateProfile(userId, colors);
  };
};

export const setCreatureColors = (creatureColors) => {
  return {
    type: PROFILE_SET_COLORS,
    payload: creatureColors,
  };
};
