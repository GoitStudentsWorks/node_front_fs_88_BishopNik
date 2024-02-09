/** @format */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';
import icon from 'components/Icon/icon-spraite.svg';

import {
	ModalTitle,
	StyledForm,
	StyledFormField,
	StyledErrorMessage,
	BtnAdd,
	HeaderContainer,
	CloseIcon,
	IconWrapper,
	AddIcon,
} from './AddColumnModal.styled';
import { useDispatch } from 'react-redux';
import { addColum } from 'redux/columns/operations';

const columnSchema = Yup.object().shape({
	name: Yup.string().required('name is required'),
});

export const AddColumnModal = ({ isOpen, setIsOpen, board }) => {
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		setIsOpen(false);
	};
	return (
		<ModalWindow isOpen={isOpen} onRequestClose={handleCloseModal} style={customStyles}>
			<Formik
				initialValues={{
					name: '',
					boarderId: `${board}`,
				}}
				validationSchema={columnSchema}
				onSubmit={(newColumn, actions) => {
					dispatch(addColum(newColumn));
					handleCloseModal();
				}}
			>
				{({ isSubmitting }) => (
					<StyledForm autoComplete='off'>
						<HeaderContainer>
							<ModalTitle>Add column</ModalTitle>
							<CloseIcon name='close' onClick={handleCloseModal} />
						</HeaderContainer>

						<StyledFormField type='text' name='name' placeholder='Title' />
						<StyledErrorMessage name='name' component='div' />
						<BtnAdd type='submit' disabled={isSubmitting}>
							<IconWrapper>
								<AddIcon width='14' height='14'>
									<use xlinkHref={`${icon}#icon-plus`} />
								</AddIcon>
							</IconWrapper>
							Add
						</BtnAdd>
					</StyledForm>
				)}
			</Formik>
		</ModalWindow>
	);
};
