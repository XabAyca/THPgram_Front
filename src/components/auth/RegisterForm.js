import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerFetch } from '../../services/ApiManager';
import ErrorModal from '../ErrorModal';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const registerEl = useSelector((state) => state.register);
  const history = useHistory()

  const handleRegister = (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const password_confirmation = document.querySelector(
      "#password_confirmation"
    ).value;
    dispatch(registerFetch(username, email, password, password_confirmation));
  };
  
  return (
    <form onSubmit={handleRegister} className="loginform">
      <input id="username" type="text" placeholder="Username ..." />
      <input id="email" type="email" placeholder="Your email ..." />
      <input id="password" type="password" placeholder="Password ..." />
      <input
        id="password_confirmation"
        type="password"
        placeholder="Confirm password ..."
      />
      {registerEl.error && <ErrorModal errors={registerEl.error}/>}
 
      <input type="submit" value="Register" className="login-btn" />
      <p className='back' onClick={() => history.push("/login")}>
        If you're already register  ➔
      </p>
    </form>
  );
};

export default RegisterForm;