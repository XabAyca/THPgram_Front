import Cookies from "js-cookie";
import { fetchArticleFailure, fetchArticleRequest, fetchArticleSuccess } from "../store/article/actions";
import { fetchArticlesFailure, fetchArticlesRequest, fetchArticlesSuccess } from "../store/articles/actions";
import { fetchCommentsFailure, fetchCommentsRequest, fetchCommentsSuccess } from "../store/comments/actions";
import { fetchLoginFailure, fetchLoginLogout, fetchLoginRequest, fetchLoginSuccess } from "../store/login/actions";
import { fetchRegisterFailure, fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterUnregister } from "../store/register/actions";
import { fetchUSerFailure, fetchUserRequest, fetchUserSuccess } from "../store/user/actions";
import { fetchUSersFailure, fetchUsersRequest, fetchUsersSuccess } from "../store/users/actions";

const baseUrl = "http://localhost:3000";



/////// REGISTER //////
export const registerFetch = (username, email, password, passwordConfirmation) => {
  const data = {
    user: {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    },
  };
  return (dispatch) => {
    let token
    dispatch(fetchRegisterRequest());
    fetch(baseUrl + "/api/signup", {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.headers.get("authorization")) {
          token = response.headers.get("authorization").split("Bearer ")[1];
        }
        return response.json()
      })
      .then((response ) => {
        if (response.errors || response.error) {
          dispatch(fetchRegisterFailure(response.errors));
        } else {
          Cookies.set("Token", token);
          Cookies.set("UserId", response.data.id);
          dispatch(fetchRegisterSuccess(response));
        }
      });
  };
};


/////// LOGOUT //////
export const logout = () => {
  return (dispatch) => {
    Cookies.remove('Token')
    Cookies.remove("UserId");
    dispatch(fetchRegisterUnregister())
    dispatch(fetchLoginLogout())
  }
};

/////// LOGIN //////
export const loginFetch = (
  email,
  password
) => {
  const data = {
    user: {
      email,
      password
    },
  };
  return (dispatch) => {
    let token;
    dispatch(fetchLoginRequest());
    fetch(baseUrl + "/api/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.headers.get("authorization")) {
          token = response.headers.get("authorization").split("Bearer ")[1];
        }
        return response.json();
      })
      .then((response) => {
        if (response.errors || response.error) {
          dispatch(fetchLoginFailure(response.errors));
        } else {
          Cookies.set("Token", token);
          Cookies.set('UserId',response.data.id);
          dispatch(fetchLoginSuccess(response));
        }
      });
  };
};

/////// GET ALL PUBLIC ARTICLES //////
export const articlesFetch = () => {
  return (dispatch) => {
    dispatch(fetchArticlesRequest());
    fetch(baseUrl + "/api/v1/articles", {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "Authorization":"Bearer "+Cookies.get('Token')
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          dispatch(fetchArticlesFailure(response.errors));
        } else {
          dispatch(fetchArticlesSuccess(response));
        }
      });
  };
};

/////// GET ALL USERS //////
export const usersFetch = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch(baseUrl + "/api/v1/users", {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "Authorization":"Bearer "+Cookies.get('Token')
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          dispatch(fetchUSersFailure(response.errors));
        } else {
          dispatch(fetchUsersSuccess(response));
        }
      });
  };
};

/////// GET ARTICLE //////
export const articleFetch = (id) => {
  return (dispatch) => {
    dispatch(fetchArticleRequest());
    fetch(baseUrl + `/api/v1/articles/${id}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "Authorization":"Bearer "+Cookies.get('Token')
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          dispatch(fetchArticleFailure(response.errors));

        } else {
          dispatch(fetchArticleSuccess(response));
        }
      });
  };
};

/////// GET COMMENTS BY ARTICLE //////
export const commentsFetch = (article_id) => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest());
    fetch(baseUrl + `/api/v1/articles/${article_id}/comments`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "Authorization":"Bearer "+Cookies.get('Token')
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          dispatch(fetchCommentsFailure(response.errors));

        } else {
          dispatch(fetchCommentsSuccess(response));
        }
      });
  };
};

/////// DELETE COMMENT BY ID //////
export const commentDeleteFetch = (article_id,comment_id) => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest());
    fetch(baseUrl + `/api/v1/articles/${article_id}/comments/${comment_id}`, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        "Authorization":"Bearer "+Cookies.get('Token')
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          dispatch(fetchCommentsFailure(response.errors));

        } else {
          dispatch(fetchCommentsSuccess(response));
        }
      });
  };
};

/////// GET USER BY iD //////
export const userFetch = (id) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    fetch(baseUrl + `/api/v1/users/${id}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "Authorization":"Bearer "+Cookies.get('Token')
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          dispatch(fetchUSerFailure(response.errors));
        } else {
          dispatch(fetchUserSuccess(response));
        }
      });
  };
};

