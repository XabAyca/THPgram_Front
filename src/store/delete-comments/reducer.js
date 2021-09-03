import { FETCH_DELETE_COMMENT_FAILURE, FETCH_DELETE_COMMENT_REQUEST, FETCH_DELETE_COMMENT_SUCCESS } from "./types";

const initialState = {
  loading: false,
  error: "",
  deleteComment: "",
};

export const deleteCommentReducer = (state = initialState, { type, error, deleteComment }) => {
  switch (type) {
    case FETCH_DELETE_COMMENT_REQUEST:
      return { ...state, loading: true };

    case FETCH_DELETE_COMMENT_SUCCESS:
      return { ...state, loading: false, deleteComment: deleteComment, error: "" };

    case FETCH_DELETE_COMMENT_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
