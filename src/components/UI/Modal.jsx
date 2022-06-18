import React from 'react';
import { ReactDOM } from 'react-dom';
import PropType from 'prop-types';
import Card from './Card';
import classes from './Modal.module.css';

function Backdrop(props) {
  const { onCancel } = props;
  return (
    <div className={classes.backdrop} onClick={onCancel} aria-hidden="true" />
  );
}

function Modal(props) {
  const { title, content } = props;
  const { onCancel } = props;

  return (
    <>
      {ReactDOM.createPortal(
        Backdrop,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{title}</h2>
          </header>
          <div className={classes.content}>{content}</div>
          <footer className={classes.actions}>
            <button type="button" onClick={onCancel}>
              Close
            </button>
          </footer>
        </Card>,
        document.getElementById('modal-root'),
      )}
    </>
  );
}

Backdrop.propTypes = {
  onCancel: PropType.func.isRequired,
};

Modal.propTypes = {
  onCancel: PropType.func.isRequired,
  title: PropType.string.isRequired,
  content: PropType.element.isRequired,
};

export default Modal;
