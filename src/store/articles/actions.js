import { FETCH_ARTICLES_FAILURE, FETCH_ARTICLES_REQUEST, FETCH_ARTICLES_SUCCESS } from "./types";

export const fetchArticlesRequest = () => {
  return {
    type: FETCH_ARTICLES_REQUEST,
  };
};
export const fetchArticlesSuccess = (articles) => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    articles,
  };
};
export const fetchArticlesFailure = (error) => {
  return {
    type: FETCH_ARTICLES_FAILURE,
    error,
  };
};

