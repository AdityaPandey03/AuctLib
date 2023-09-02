// src/redux/actions/userActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk action to fetch users with assigned books
export const fetchUsersWithBooks = createAsyncThunk('users/fetchUsersWithBooks', async () => {
  try {
    const response = await axios.get('/api/users-with-books/'); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});
