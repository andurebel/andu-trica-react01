import { initializeGoogleAuth } from "../../../api/googleAuth";

import { postUserStats, getUserStats } from "../profile";

import { AUTH_LOGOUT, AUTH_LOGIN } from "./../../types/auth";

export const login = (user) => {
  //switch to thunk
  // return {
  //   type: AUTH_LOGIN,
  //   payload: user,
  // };
  return async (dispatch) => {
    const { id } = user;
    try {
      await dispatch(getUserStats(id));
    } catch (error) {
      await dispatch(postUserStats(id));
    }
    dispatch(setLogin(user));
  };
};

export const setLogin = (user) => {
  return {
    type: AUTH_LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const requestSignIn = () => {
  return async () => {
    return initializeGoogleAuth().then((GoogleAuth) => {
      GoogleAuth.signIn();
    });
  };
};

export const requestLogOut = () => {
  return async () => {
    return initializeGoogleAuth().then((GoogleAuth) => {
      GoogleAuth.signOut();
    });
  };
};
