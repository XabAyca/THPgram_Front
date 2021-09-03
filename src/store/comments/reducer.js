import { FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "./types";

const initialState = {
  loading: false,
  error: "",
  comments: "",
};

export const commentsReducer = (state = initialState, { type, error, comments }) => {
  switch (type) {
    case FETCH_COMMENTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: comments, error: "" };

    case FETCH_COMMENTS_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
