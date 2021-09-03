import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./types";

const initialState = {
  loading: false,
  error: "",
  users: "",
};

export const usersReducer = (state = initialState, { type, error, users }) => {
  switch (type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };

    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: users, error:"" };

    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
