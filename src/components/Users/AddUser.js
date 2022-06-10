import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [error, setError] = useState();

  const usernameRef = useRef();
  const ageRef = useRef();

  const addUserHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const age = ageRef.current.value;

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
    usernameRef.current.value = '';
    ageRef.current.value = '';
  };

  const cancelHandler = () => {
    setError(null);
  };

  return (
    <>
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
          <input type="text" id="name" ref={usernameRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageRef} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
