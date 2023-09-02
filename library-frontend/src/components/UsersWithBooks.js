// src/components/UsersWithBooks.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersWithBooks } from '../redux/actions/userActions';

const UsersWithBooks = () => {
  const dispatch = useDispatch();
  const usersWithBooks = useSelector((state) => state.users.usersWithBooks);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsersWithBooks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users with Assigned Books</h1>
      <ul>
        {usersWithBooks.map((user) => (
          <li key={user.id}>
            <h3>{user.username}</h3>
            <ul>
              {user.books.map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersWithBooks;
