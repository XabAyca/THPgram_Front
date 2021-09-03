import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { articleReducer } from "./article/reducer";
import { articlesReducer } from "./articles/reducer";
import { commentsReducer } from "./comments/reducer";
import { deleteCommentReducer } from "./delete-comments/reducer";
import { loginReducer } from "./login/reducer";
import { registerReducer } from "./register/reducer";
import { userReducer } from "./user/reducer";
import { usersReducer } from "./users/reducer";

const rootReducers = combineReducers({
  register: registerReducer,
  login: loginReducer,
  article: articleReducer,
  articles: articlesReducer,
  users: usersReducer,
  comments: commentsReducer,
  user: userReducer,
  deleteComment:deleteCommentReducer,
});

export  const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);