/** @format */

import { UserProfileForm } from 'components/UserProfileForm/UserProfileForm';
import Modal from 'react-modal';

import data from '../../img/list_img.json';
import { FiltersIcon } from 'components/MainComponent/MainComponent.styled';

Modal.setAppElement('#modal-root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(78, 74, 72, 0.6)',
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
      <FiltersIcon name="close" onClick={stateСhangeModal} />

      <UserProfileForm />
    </Modal>
  );
};
