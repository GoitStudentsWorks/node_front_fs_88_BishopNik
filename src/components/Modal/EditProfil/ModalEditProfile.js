/** @format */

import React from 'react';
import { UserProfileForm } from 'components/UserProfileForm/UserProfileForm';

import { FiltersIcon } from 'components/Filter/FiltersBtn.styled';
import { UserIcon } from 'components/UserProfileForm/UserIcon';

import { customStyles } from '../Modal.styled';
import ModalWindow from '../Modal';
import { closeIconStyles, modalTextStyles } from './ModalEditProfileStyled';

export const ModalEditProfile = ({ isModalState, stateСhangeModal }) => {
	return (
		<ModalWindow
			isOpen={isModalState}
			onRequestClose={stateСhangeModal}
			style={customStyles}
			contentLabel='onRequestClose'
		>
			<FiltersIcon name='close' onClick={stateСhangeModal} style={closeIconStyles} />
			<p style={modalTextStyles}>Edit profile</p>
			<UserIcon />

			<UserProfileForm />
		</ModalWindow>
	);
};
