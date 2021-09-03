import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_LOGOUT, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS } from "./types";

const initialState = {
  loading: false,
  error: "",
  login: "",
};

export const loginReducer = (state = initialState, { type, error, login }) => {
  switch (type) {
    case FETCH_LOGIN_REQUEST:
      return { ...state, loading: true };

    case FETCH_LOGIN_SUCCESS:
      return { ...state, loading: false, login: login, error:"" };

    case FETCH_LOGIN_FAILURE:
      return { ...state, loading: false, error: error };
    
    case FETCH_LOGIN_LOGOUT:
      return { ...state, loading: false, error: "", login:"" };

    default:
      return state;
  }
};
