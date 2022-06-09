import React, { useState } from 'react';
import Card from '../UI/Card';
import AddUser from './AddUser';
import User from './User';
import classes from './Users.module.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: Math.random().toString(12), ...user },
    ]);
  };
  return (
    <div>
      <AddUser onAddUser={addUser} />
      <Card className={classes.users}>
        <ul>
          {users.map(({ id, username, age }) => (
            <User key={id} username={username} age={age} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Users;
