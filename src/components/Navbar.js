import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../services/ApiManager';


const Navbar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className='navbar'>
      <div><h1>THPgram</h1></div>
      <div>
        <NavLink to="/">
          <i className="fas fa-home"></i>
        </NavLink>
        <NavLink to="/profile">
          <i className="fas fa-user-circle"></i>
        </NavLink>
      </div>
      <div>
        <i onClick={handleLogout} className="fas fa-sign-out-alt"></i>
      </div>
    </div>
  );
};

export default Navbar;