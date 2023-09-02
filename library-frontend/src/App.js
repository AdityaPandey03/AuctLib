import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupContainer from './containers/SignupContainer';
import SigninContainer from './containers/SigninContainer';

import Books from './components/Books'; 
import UsersWithBooks from './components/UsersWithBooks'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignupContainer />} />
          <Route path="/signin" element={<SigninContainer />} />
          <Route path="/books" element={<Books />} /> 
          <Route path="/users-with-books" element={<UsersWithBooks />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
