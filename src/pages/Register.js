import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {


  return (
    <main className='login'>
      <div className='left-side'></div>
      <div className='right-side'>
        <h1>Register</h1>
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;