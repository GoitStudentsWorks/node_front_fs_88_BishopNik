/** @format */

import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Formik } from 'formik';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';

import {
	ModalTitle,
	StyledForm,
	StyledFormField,
	BtnAdd,
	HeaderContainer,
	CloseIcon,
	IconWrapper,
	AddIcon,
	StyledErrorMessage,
} from './AddColumnModal.styled';
import { useDispatch } from 'react-redux';
import { addColumn, updateColumn } from 'redux/columns/operations';
import { columnSchema } from 'components/Helpers/index.js';
import { MainContext } from 'components/Helpers';
import { resetError } from 'redux/columns/columnsSlice';
import { useColumns } from 'hooks';

export const AddColumnModal = ({ board }) => {
	const dispatch = useDispatch();
	const { isOpenAddColumn, setIsOpenAddColumn, columnEdit, setColumnEdit } =
		useContext(MainContext);

	const { isOpen } = useColumns();

	// const isEdit = !!columnForEditing;

	const handleFormSubmit = values => {
		if (columnEdit?._id) {
			dispatch(updateColumn({ ...values, id: columnEdit?._id }));
		} else {
			dispatch(addColumn({ ...values }));
		}
	};

	const onClose = useCallback(() => {
		setIsOpenAddColumn(false);
		setColumnEdit(null);
	}, [setColumnEdit, setIsOpenAddColumn]);

	useEffect(() => {
		if (!isOpen) {
			onClose();
			dispatch(resetError());
		}
	}, [dispatch, isOpen, onClose]);

	return (
		<ModalWindow isOpen={isOpenAddColumn} onRequestClose={onClose} style={customStyles}>
			<Formik
				initialValues={{
					name: columnEdit?.name || '',
					boardId: board,
				}}
				validationSchema={columnSchema}
				onSubmit={handleFormSubmit}
			>
				{({ isSubmitting }) => (
					<StyledForm autoComplete='off'>
						<HeaderContainer>
							<ModalTitle>{columnEdit?._id ? 'Edit' : 'Add'}</ModalTitle>
							<CloseIcon name='close' onClick={onClose} />
						</HeaderContainer>

						<StyledFormField type='text' name='name' placeholder='Title' />
						<StyledErrorMessage name='name' component='div' />
						<BtnAdd type='submit' disabled={isSubmitting}>
							<IconWrapper>
								<AddIcon name='plus' />
							</IconWrapper>
							{columnEdit?._id ? 'Edit' : 'Add'}
						</BtnAdd>
					</StyledForm>
				)}
			</Formik>
		</ModalWindow>
	);
};
