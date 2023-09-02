// src/redux/authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Async action for user registration
export const userSignup = createAsyncThunk('auth/signup', async (userData) => {
  try {
    const response = await fetch('/api/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return data.user;
  } catch (error) {
    throw error;
  }
});

// Async action for user login
export const userLogin = createAsyncThunk('auth/login', async (userData) => {
  try {
    const response = await fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return data.user;
  } catch (error) {
    throw error;
  }
});
