import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './style.css';

Modal.setAppElement('#root');

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'fixed',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '250px',
    width: '70%',
    maxWidth: '600px',
    height: '220px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};
const FormModal = ({ isModalOpen, closeModal, modalContent }) => {
  const { title, body, isSucceeded } = modalContent;

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        closeModal();
      }, 10000);
      return () => clearTimeout(timer);
    }
    //eslint-disable-next-line
  }, [isModalOpen]);
  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyle}>
      <div className="modal__header">
        <h6
          className={`modal__title ${
            isSucceeded ? 'modal__title--success' : 'modal__title--error'
          }`}
        >
          {title}
        </h6>
        <div className="modal__icon">
          <AiOutlineCloseCircle
            onClick={closeModal}
            style={{ cursor: 'pointer', fontSize: '2rem' }}
          />
        </div>
      </div>
      <p className="modal__body">{body}</p>
    </Modal>
  );
};

FormModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalContent: PropTypes.object.isRequired,
};

export default FormModal;
