/** @format */

import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';

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
import toast from 'react-hot-toast';

const columnSchema = Yup.object().shape({
	title: Yup.string().required('Title is required'),
});

export const AddColumnModal = ({ isOpen, setIsOpen }) => {
	const [errorMessage, setErrorMessage] = useState(null);

	const handleSubmit = ({ title }, { setSubmitting }) => {
		setSubmitting(true);

		if (!title.trim()) {
			setErrorMessage('Title is required');
			setSubmitting(false);
			return;
		}
		toast.success('Column created');
		setIsOpen(false); // Corrected onClose to setIsOpen
	};

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
			<Formik
				initialValues={{
					title: '',
				}}
				validationSchema={columnSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<StyledForm autoComplete='off'>
						<HeaderContainer>
							<ModalTitle>Add column</ModalTitle>
							<CloseIcon name='close' onClick={() => setIsOpen(false)} />
						</HeaderContainer>

						<StyledFormField type='text' name='title' placeholder='Title' />
						<StyledErrorMessage name='title' component='div' />
						<BtnAdd type='submit' disabled={isSubmitting}>
							<IconWrapper>
								<AddIcon name='add-board' />
							</IconWrapper>
							Add
						</BtnAdd>
						{errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
					</StyledForm>
				)}
			</Formik>
		</ModalWindow>
	);
};
