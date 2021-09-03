import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./types";

const initialState = {
  loading: false,
  error: "",
  user: "",
};

export const userReducer = (state = initialState, { type, error, user }) => {
  switch (type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };

    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: user, error:"" };

    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
