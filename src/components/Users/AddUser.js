import React, { useState, useRef } from 'react';

import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  // Always is an object, which always has a CURRENT prop. Holding actual value that ref is connected with.
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // No longer using state, now using ref
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault(); /// Don't want request sent
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    /// Validation
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      /// Set Error State
      return;
    }
    // If enteredAge is less then one, conversion of enteredAge to a number by add the plus sign
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid name age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = '';
    enteredUserAge.current.value = '';
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'> Username</label>
          <input
            id='username'
            type='text'
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor='age'> Age (Years) </label>
          <input
            id='age'
            type='number'
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type='submit'> Add User </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

// div soup = eyes bleeding
// nameInputRef, connection will be established. Rendered code will set values stored in nameInputRef to the native DOM element the rendered based on the input. Becoming a real DOM element.
