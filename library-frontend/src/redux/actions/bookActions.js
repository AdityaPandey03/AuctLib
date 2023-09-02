// src/redux/actions/bookActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk action to fetch books
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get('/api/allBooks/'); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
});
