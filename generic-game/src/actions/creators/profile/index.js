import { createUser, readUser, readProfile } from "../../../api/users";

//getUserStats
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
    type: "PROFILE_SET_STATS",
    payload: stats,
  };
};

//postUserStats

export const postUserStats = (userId) => {
  return async () => {
    await createUser(userId);
  };
};

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let creatureColors = {};

    try {
      creatureColors = await readProfile(userId);

      return creatureColors;
    } catch (_) {
      return Promise.reject();
    }
  };
};

export const postUserProfile = (userId) => {
  return async (_, getState) => {
    const { profile } = getState();

    await createUser(userId, profile.creature);
  };
};
