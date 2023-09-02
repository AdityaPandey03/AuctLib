// SignupContainer.js
import React from 'react';
import { useDispatch } from 'react-redux';
import SignupForm from '../components/SignupForm';
import { userSignup } from '../redux/authActions';

const SignupContainer = () => {
  const dispatch = useDispatch();

  const handleSignup = (values) => {
    dispatch(userSignup(values)); // Dispatch the signup action
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <SignupForm onSubmit={handleSignup} />
    </div>
  );
};

export default SignupContainer;
