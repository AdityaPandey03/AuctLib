// src/redux/reducers/userReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersWithBooks } from '../actions/userActions';

const initialState = {
  usersWithBooks: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersWithBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersWithBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.usersWithBooks = action.payload;
      })
      .addCase(fetchUsersWithBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
