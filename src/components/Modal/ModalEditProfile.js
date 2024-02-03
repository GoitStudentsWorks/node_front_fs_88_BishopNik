import Modal from 'react-modal';

Modal.setAppElement('#modal-root');

const customStyles = {
  overlay: {
    backgroundColor: '#4e4a48',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ModalEditProfile = ({ isModalState, stateСhangeModal }) => {
  return (
    <Modal
      isOpen={isModalState}
      onRequestClose={stateСhangeModal}
      style={customStyles}
      contentLabel="onRequestClose"
    >
      <p>I am Modal Window</p>
      <button type="button" onClick={stateСhangeModal}>
        Close
      </button>
    </Modal>
  );
};
