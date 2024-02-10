/** @format */

import React, { useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
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
	Input,
	Label,
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
		console.log('🚀 ~ handleFormSubmit ~ values:', values);
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
			<StyleSheetManager shouldForwardProp={prop => prop !== 'isOpen'}>
				<ModalContainer>
					<CloseButton onClick={onRequestClose}>
						<IconClose name='close' />
					</CloseButton>
					<FormTitle>{isEdit ? 'Edit' : 'Add'} Card</FormTitle>
					<Formik
						initialValues={{
							name: cardForEditing?.name || '',
							text: cardForEditing?.text || '',
							priority: cardForEditing?.priority || '',
							deadline: cardForEditing?.deadline || '',
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
									name='text'
									placeholder='Description'
									as={TextArea}
								/>

								<div>
									<SubTitles>Label color:</SubTitles>
									<RadioButtonContainer>
										<Field name='priority'>
											{({ field }) => (
												<>
													<RadioButton>
														<Input
															type='radio'
															{...field}
															value='without'
															id='without'
														/>
														<Label
															for='without'
															color='rgba(255, 255, 255, 0.3)'
														></Label>
													</RadioButton>
													<RadioButton>
														<Input
															type='radio'
															{...field}
															value='low'
															id='low'
														/>
														<Label
															for='low'
															color='rgba(143, 161, 208, 1)'
														></Label>
													</RadioButton>
													<RadioButton>
														<Input
															type='radio'
															{...field}
															value='medium'
															id='medium'
														/>
														<Label
															for='medium'
															color='rgba(224, 156, 181, 1)'
														></Label>
													</RadioButton>
													<RadioButton>
														<Input
															type='radio'
															{...field}
															value='high'
															id='high'
														/>
														<Label
															for='high'
															color='rgba(190, 219, 176, 1)'
														></Label>
													</RadioButton>{' '}
												</>
											)}
										</Field>
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
			</StyleSheetManager>
		</ModalWindow>
	);
};
