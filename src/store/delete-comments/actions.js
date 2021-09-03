import { FETCH_DELETE_COMMENT_FAILURE, FETCH_DELETE_COMMENT_REQUEST, FETCH_DELETE_COMMENT_SUCCESS } from "./types";

export const fetchDeleteCommentRequest = () => {
  return {
    type: FETCH_DELETE_COMMENT_REQUEST,
  };
};
export const fetchDeleteCommentSuccess = (DeleteComment) => {
  return {
    type: FETCH_DELETE_COMMENT_SUCCESS,
    DeleteComment,
  };
};
export const fetchDeleteCommentFailure = (error) => {
  return {
    type: FETCH_DELETE_COMMENT_FAILURE,
    error,
  };
};

