import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/user/userSlice';

const Users = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, fetchUsers]);

  const loadingState = <p>Loading...</p>;

  const errorState = <p>{error}</p>;

  const defaultState = (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} {user.surname}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {isLoading && loadingState}
      {error && errorState}
      {users.length > 0 && defaultState}
    </div>
  );
};

export default Users;
