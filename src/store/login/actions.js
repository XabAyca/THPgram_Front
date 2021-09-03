import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_LOGOUT, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS } from "./types";

export const fetchLoginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST,
  };
};
export const fetchLoginSuccess = (login) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    login,
  };
};
export const fetchLoginFailure = (error) => {
  return {
    type: FETCH_LOGIN_FAILURE,
    error,
  };
};
export const fetchLoginLogout = () => {
  return {
    type: FETCH_LOGIN_LOGOUT
  };
};
