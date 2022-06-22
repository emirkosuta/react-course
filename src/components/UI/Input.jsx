/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropType from 'prop-types';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const { input, label } = props;

  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>
        <span>{label}</span>
        <input {...input} ref={ref} />
      </label>
    </div>
  );
});

Input.propTypes = {
  label: PropType.string.isRequired,
  input: PropType.shape({
    id: PropType.string.isRequired,
    type: PropType.string.isRequired,
    min: PropType.number,
    max: PropType.number,
    step: PropType.number,
    defaultValue: PropType.number,
  }).isRequired,
};

export default Input;
