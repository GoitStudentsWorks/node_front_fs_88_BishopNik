/** @format */

import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';
import {
	CloseButton,
	ModalContainer,
	TextArea,
	RadioButton,
	AddButton,
	FormTitle,
	SubTitles,
	RadioButtonContainer,
	IconClose,
	StyledInput,
} from './AddCardModal.styled';
import MyDatePicker from '../../DatePicker/MyDatePicker';
import { addCardValidationSchema } from 'components/Helpers';
import { useDispatch } from 'react-redux';
import { resetError } from 'redux/cards/cardsSlice';
import { addCard, updateCard } from 'redux/cards/operations';
import { useCards } from 'hooks';

export const AddCardModal = ({ isOpen, onRequestClose, columnId, cardForEditing }) => {
	const dispatch = useDispatch();
	const { statusCreateCard } = useCards();

	const isEdit = !!cardForEditing;

	const handleFormSubmit = values => {
		if (cardForEditing) {
			dispatch(updateCard({ ...values, columnId, id: cardForEditing?._id }));
		} else {
			dispatch(addCard({ ...values, columnId }));
		}
	};

	useEffect(() => {
		if (statusCreateCard === false && isOpen) {
			dispatch(resetError());
			onRequestClose();
		}
	}, [dispatch, isOpen, onRequestClose, statusCreateCard]);

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
			<ModalContainer>
				<CloseButton onClick={onRequestClose}>
					<IconClose name='close' />
				</CloseButton>
				<FormTitle>{isEdit ? 'Edit' : 'Add'} Card</FormTitle>
				<Formik
					initialValues={{
						name: '',
						text: '',
						priority: '',
						deadline: '',
					}}
					validationSchema={addCardValidationSchema}
					onSubmit={handleFormSubmit}
				>
					{({ setFieldValue, values }) => (
						<Form>
							<StyledInput type='text' name='name' placeholder='Title' />
							<ErrorMessage name='name' component='div' />

							<Field
								type='text'
								name='description'
								placeholder='Description'
								as={TextArea}
							/>

							<div>
								<SubTitles>Label color:</SubTitles>
								<RadioButtonContainer>
									<label>
										<Field
											type='radio'
											name='priority'
											value='priwithoutority1'
											as={RadioButton}
										/>
									</label>
									<label>
										<Field
											type='radio'
											name='priority'
											value='low'
											as={RadioButton}
										/>
									</label>
									<label>
										<Field
											type='radio'
											name='priority'
											value='medium'
											as={RadioButton}
										/>
									</label>
									<label>
										<Field
											type='radio'
											name='priority'
											value='high'
											as={RadioButton}
										/>
									</label>
								</RadioButtonContainer>
								<ErrorMessage name='priority' component='div' />
							</div>

							<div>
								<SubTitles>Deadline:</SubTitles>

								<MyDatePicker
									value={values.deadline}
									onChange={value => setFieldValue('deadline', value)}
								/>

								<ErrorMessage name='deadline' component='div' />
							</div>

							<AddButton type='submit'>{isEdit ? 'Edit' : 'Add'}</AddButton>
						</Form>
					)}
				</Formik>
			</ModalContainer>
		</ModalWindow>
	);
};
