import { FETCH_ARTICLE_FAILURE, FETCH_ARTICLE_REQUEST, FETCH_ARTICLE_SUCCESS } from "./types";

export const fetchArticleRequest = () => {
  return {
    type: FETCH_ARTICLE_REQUEST,
  };
};
export const fetchArticleSuccess = (article) => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    article,
  };
};
export const fetchArticleFailure = (error) => {
  return {
    type: FETCH_ARTICLE_FAILURE,
    error,
  };
};

