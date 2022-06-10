import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Empty value entered!',
        content: 'Value should not be empty.',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Age is invalid!',
        content: 'Age must be above 0.',
      });
      return;
    }

    const user = {
      username: username,
      age: age,
    };

    props.onAddUser(user);

    resetFormFields();
  };

  const resetFormFields = () => {
    setAge('');
    setUsername('');
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const cancelHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onCancel={cancelHandler}
          title={error.title}
          content={error.content}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            value={username}
            type="text"
            id="name"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            value={age}
            type="number"
            id="age"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
