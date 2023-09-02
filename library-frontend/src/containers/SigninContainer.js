import React from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../redux/authSlice'; // Import your signin action

import SigninForm from '../components/SigninForm';

const SigninContainer = () => {
  const dispatch = useDispatch();

  // Handle form submission
  const handleSignin = (credentials) => {
    dispatch(signin(credentials)); // Dispatch the signin action with user credentials
  };

  return (
    <div>
      <h2>Sign In</h2>
      <SigninForm onSignin={handleSignin} />
    </div>
  );
};

export default SigninContainer;
