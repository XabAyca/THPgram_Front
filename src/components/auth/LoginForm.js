import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginFetch } from '../../services/ApiManager';
import ErrorModal from '../ErrorModal';

const LoginForm = () => {
  const history = useHistory()

  const dispatch = useDispatch();
  const loginEl = useSelector((state) => state.login);

  const handlelogin = (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    dispatch(loginFetch(email, password));
  };
  
  return (
    <form onSubmit={handlelogin} className="loginform">
      <input id="email" type="email" placeholder="Your email ..." />
      <input id="password" type="password" placeholder="Your password ..." />
      {loginEl.error && <ErrorModal errors={loginEl.error} />}

      <input type="submit" value="Login" className="login-btn" />
      <p className="back" onClick={() => history.push("/register")}>
        If you're not register yet ➔
      </p>
    </form>
  );
};

export default LoginForm;