/** @format */

import { UserProfileForm } from 'components/UserProfileForm';
import { FiltersIcon } from 'components/MainComponent/MainComponent.styled';
import { UserIcon } from 'components/UserProfileForm/UserIcon';
import ModalWindow from '../Modal';
import { customStyles, modalTextStyles, closeIconStyles } from './EditProfileModal.styled';

export const ModalEditProfile = ({ isModalState, stateСhangeModal }) => {
	return (
		<ModalWindow isOpen={isModalState} onRequestClose={stateСhangeModal} style={customStyles}>
			<FiltersIcon name='close' onClick={stateСhangeModal} style={closeIconStyles} />
			<p style={modalTextStyles}>Edit profile</p>
			<UserIcon />
			<UserProfileForm />
		</ModalWindow>
	);
};
