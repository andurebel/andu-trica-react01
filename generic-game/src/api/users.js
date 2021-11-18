import axios from "axios";

const emptyStats = {
  gamesWon: 0,
  gamesLost: 0,
  gamesPlayed: 0,
};

const usersApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

//CRUD -> create read update delete

//create user
export const createUser = async (userId) => {
  const payload = {
    id: userId,
    stats: emptyStats,
  };

  return await usersApi.post("/users", payload);
};

//read user

export const readUser = async (userId) => {
  const endpoint = `users/${userId}`;

  const { data } = await usersApi.get(endpoint);
  if (data.stats) {
    return data.stats;
  }
  return undefined;
};

//create profile
//POST /profiles/123123

export const createProfile = async (userId, colors) => {
  const payload = {
    id: userId,
    creature: colors,
  };
  return await usersApi.post(`/profiles/${userId}`, payload);
};

//read profile

export const readProfile = async (userId) => {
  const { data } = await usersApi.get(`/profiles/${userId}`);

  if (data.creature) {
    return data.creature;
  }
};

//update profile

export default usersApi;
