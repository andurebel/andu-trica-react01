import { createUser, readUser } from "../../../api/users";

//getUserStats
export const getUserStats = (userId) => {
  return async () => {
    try {
      const stats = await readUser(userId);
      return stats;
    } catch ({ response }) {
      return Promise.reject(response);
    }
  };
};

//postUserStats

export const postUserStats = (userId) => {
  return async () => {
    await createUser(userId);
  };
};
