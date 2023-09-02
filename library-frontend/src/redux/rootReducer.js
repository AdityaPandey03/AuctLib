// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authSlice'; 
import bookReducer from './reducers/bookReducer';
import userReducer from './reducers/userReducer';


const rootReducer = combineReducers({
  auth: authReducer, 
  books: bookReducer,
  users: userReducer,

});

export default rootReducer;

