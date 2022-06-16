import propTypes from 'prop-types';
import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  // eslint-disable-next-line object-curly-newline
  const { value, type, valid, id, onChange, onBlur, children } = props;
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => ({
    focus,
  }));

  return (
    <div
      className={`${classes.control} ${valid === false ? classes.invalid : ''}`}
    >
      <label htmlFor={id}>
        {children}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={inputRef}
        />
      </label>
    </div>
  );
});

Input.propTypes = {
  value: propTypes.string.isRequired,
  type: propTypes.string,
  valid: propTypes.bool,
  id: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onBlur: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
};

Input.defaultProps = {
  type: 'text',
  valid: true,
};

export default Input;
