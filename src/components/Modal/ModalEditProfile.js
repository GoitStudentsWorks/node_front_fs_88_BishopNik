/** @format */

import { UserProfileForm } from 'components/UserProfileForm/UserProfileForm';
import Modal from 'react-modal';

import { FiltersIcon } from 'components/MainComponent/MainComponent.styled';
import { UserIcon } from 'components/UserProfileForm/UserIcon';

Modal.setAppElement('#modal-root');

const closeIconStyles = {
  position: 'absolute',
  right: '14px',
  top: '14px',
};

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(78, 74, 72, 0.6)',
  },
  content: {
    position: 'relative',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    width: '400px',

    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(21, 21, 21, 1)',
    borderRadius: '8px',
    border: 'none',
    padding: '24px',
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
      <FiltersIcon
        name="close"
        onClick={stateСhangeModal}
        style={closeIconStyles}
      />
      <p>Edit profile</p>
      <UserIcon />

      <UserProfileForm />
    </Modal>
  );
};
