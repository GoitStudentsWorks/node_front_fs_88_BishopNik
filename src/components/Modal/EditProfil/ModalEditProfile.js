import React from 'react';
import { UserProfileForm } from 'components/UserProfileForm/UserProfileForm';

import { FiltersIcon } from 'components/Filter/FiltersBtn.styled';

import { customStyles } from '../Modal.styled';
import ModalWindow from '../Modal';
import { closeIconStyles } from './ModalEditProfileStyled';

export const ModalEditProfile = ({ isModalState, stateСhangeModal }) => {
  return (
    <ModalWindow
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

      <UserProfileForm />
    </ModalWindow>
  );
};
