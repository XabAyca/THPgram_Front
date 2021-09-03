import { FETCH_ARTICLES_FAILURE, FETCH_ARTICLES_REQUEST, FETCH_ARTICLES_SUCCESS } from "./types";

const initialState = {
  loading: false,
  error: "",
  articles: "",
};

export const articlesReducer = (state = initialState, { type, error, articles }) => {
  switch (type) {
    case FETCH_ARTICLES_REQUEST:
      return { ...state, loading: true };

    case FETCH_ARTICLES_SUCCESS:
      return { ...state, loading: false, articles: articles, error:"" };

    case FETCH_ARTICLES_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
