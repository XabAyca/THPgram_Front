import { FETCH_REGISTER_FAILURE, FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_UNREGISTER } from "./types";

const initialState = {
  loading: false,
  error: "",
  register: "",
};

export const registerReducer = (state = initialState, { type, error, register }) => {
  switch (type) {
    case FETCH_REGISTER_REQUEST:
      return { ...state, loading: true };

    case FETCH_REGISTER_SUCCESS:
      return { ...state, loading: false, register: register, error:"" };

    case FETCH_REGISTER_FAILURE:
      return { ...state, loading: false, error: error };
    
    case FETCH_REGISTER_UNREGISTER:
      return { ...state, loading: false, error: "", register:"" };

    default:
      return state;
  }
};
