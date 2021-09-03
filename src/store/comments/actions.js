import { FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "./types";

export const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};
export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    comments,
  };
};
export const fetchCommentsFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    error,
  };
};

