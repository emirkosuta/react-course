/* eslint-disable operator-linebreak */
import React from 'react';
import ReactDOM from 'react-dom';
import PropType from 'prop-types';
import Card from './Card';
import classes from './Modal.module.css';

function Backdrop(props) {
  const { onCancel } = props;
  return (
    <div className={classes.backdrop} onClick={onCancel} aria-hidden="true" />
  );
}

function ModalOverlay(props) {
  const {
    title,
    children: content,
    onHideModal,
    okButtonTitle,
    onOkButton,
  } = props;

  return (
    <Card className={classes.modal}>
      {title && (
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
      )}
      <div className={classes.content}>{content}</div>
      <footer className={classes.actions}>
        <button
          type="button"
          onClick={onHideModal}
          className={classes['button--alt']}
        >
          Close
        </button>
        {okButtonTitle && (
          <button type="button" onClick={onOkButton} className={classes.button}>
            {okButtonTitle}
          </button>
        )}
      </footer>
    </Card>
  );
}

function Modal(props) {
  const { children: content, onHideModal } = props;

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCancel={onHideModal} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ModalOverlay {...props}>{content}</ModalOverlay>,
        document.getElementById('modal-root'),
      )}
    </>
  );
}

Backdrop.propTypes = {
  onCancel: PropType.func.isRequired,
};

ModalOverlay.propTypes = {
  onHideModal: PropType.func.isRequired,
  title: PropType.string,
  children: PropType.node.isRequired,
  okButtonTitle: PropType.string,
  onOkButton(props, propName) {
    if (
      props.okButtonTitle === null ||
      props[propName] === undefined ||
      typeof props[propName] !== 'function'
    ) {
      return new Error(
        'You must provide both ok button title and handle method',
      );
    }
    return null;
  },
};

Modal.propTypes = {
  onHideModal: PropType.func.isRequired,
  children: PropType.node.isRequired,
};

ModalOverlay.defaultProps = {
  title: null,
  okButtonTitle: null,
  onOkButton: null,
};

export default Modal;
