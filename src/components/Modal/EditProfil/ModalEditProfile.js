/** @format */
// import styled from 'styled-components';

import React from 'react';
import { UserProfileForm } from 'components/UserProfileForm/UserProfileForm';

import { FiltersIcon } from 'components/Filter/FiltersBtn.styled';
// import { UserIcon } from 'components/UserProfileForm/UserIcon';

// import { customStyles } from '../Modal.styled';
import ModalWindow from '../Modal';
import {
  //   HeaderContainer,
  closeIconStyles,
  //   modalTextStyles,
} from './ModalEditProfileStyled';

export const ModalEditProfile = ({ isModalState, stateСhangeModal }) => {
  return (
    <ModalWindow
      isOpen={isModalState}
      onRequestClose={stateСhangeModal}
      // style={customStyles}
      contentLabel="onRequestClose"
    >
      {/* <HeaderContainer> */}
      <FiltersIcon
        name="close"
        onClick={stateСhangeModal}
        style={closeIconStyles}
      />

      <UserProfileForm />
      {/* </HeaderContainer> */}
    </ModalWindow>
  );
};
