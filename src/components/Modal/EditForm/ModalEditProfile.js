import React from 'react';
import { UserProfileForm } from 'components/UserProfileForm/UserProfileForm';
import Modal from 'react-modal';

import { FiltersIcon } from 'components/Filter/FiltersBtn.styled';
import { UserIcon } from 'components/UserProfileForm/UserIcon';

import './ModalEditProfile.css';
import { customStyles } from '../Modal.styled';
import ModalWindow from '../Modal';
import { closeIconStyles, modalTextStyles } from './ModalEditProfileStyled';

export const ModalEditProfile = ({ isModalState, stateСhangeModal }) => {
  return (
    <ModalWindow
      isOpen={isModalState}
      onRequestClose={stateСhangeModal}
      // overlayClassName={'modal-overlay'}
      // className={'modal-content'}
      style={customStyles}
      contentLabel="onRequestClose"
    >
      <FiltersIcon
        name="close"
        onClick={stateСhangeModal}
        style={closeIconStyles}
      />
      <p style={modalTextStyles}>Edit profile</p>
      <UserIcon />

      <UserProfileForm />
    </ModalWindow>
  );
};
