import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./types";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user,
  };
};
export const fetchUSerFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    error,
  };
};

