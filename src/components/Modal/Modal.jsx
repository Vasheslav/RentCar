import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const ModalWindow = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackdropClick} className={css.overley}>
      <div className={css.modal}>{children}</div>
    </div>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalWindow;
