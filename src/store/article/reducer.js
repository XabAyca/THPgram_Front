import { FETCH_ARTICLE_FAILURE, FETCH_ARTICLE_REQUEST, FETCH_ARTICLE_SUCCESS } from "./types";

const initialState = {
  loading: false,
  error: "",
  article: "",
};

export const articleReducer = (state = initialState, { type, error, article }) => {
  switch (type) {
    case FETCH_ARTICLE_REQUEST:
      return { ...state, loading: true };

    case FETCH_ARTICLE_SUCCESS:
      return { ...state, loading: false, article: article, error: "" };

    case FETCH_ARTICLE_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
