import React from 'react';
import LoginForm from '../components/auth/LoginForm';


const Login = () => {

  return (
    <main className='login'>
      <div className='left-side'>
      </div>
      <div className='right-side'>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;