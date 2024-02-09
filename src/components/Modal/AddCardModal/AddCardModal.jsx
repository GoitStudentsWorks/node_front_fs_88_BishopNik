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
import { addCard } from 'redux/cards/operations';
import { useCards } from 'hooks';

export const AddCardModal = ({ isOpen, onRequestClose, columnId }) => {
	const dispatch = useDispatch();
	const { statusCreateCard } = useCards();

	const handleFormSubmit = values => {
		// API ne dae vidprvutu description i color

		const { title, description, color, ...rest } = values;
		dispatch(addCard({ ...rest, name: title, columnId }));
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
				<FormTitle>Add Card</FormTitle>
				<Formik
					initialValues={{
						title: '',
						description: '',
						color: '',
						deadline: '',
					}}
					validationSchema={addCardValidationSchema}
					onSubmit={handleFormSubmit}
				>
					{({ isSubmitting, setFieldValue }) => (
						<Form>
							<StyledInput type='text' name='title' placeholder='Title' />
							<ErrorMessage name='title' component='div' />

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
											name='color'
											value='color1'
											as={RadioButton}
										/>
									</label>
									<label>
										<Field
											type='radio'
											name='color'
											value='color2'
											as={RadioButton}
										/>
									</label>
									<label>
										<Field
											type='radio'
											name='color'
											value='color3'
											as={RadioButton}
										/>
									</label>
									<label>
										<Field
											type='radio'
											name='color'
											value='color4'
											as={RadioButton}
										/>
									</label>
								</RadioButtonContainer>
								<ErrorMessage name='color' component='div' />
							</div>

							<div>
								<SubTitles>Deadline:</SubTitles>
								{/* <Field name="deadline" as={MyDatePicker} /> */}

								<MyDatePicker
									onChange={value => setFieldValue('deadline', value)}
								/>

								<ErrorMessage name='deadline' component='div' />
							</div>

							<AddButton type='submit'>
								{isSubmitting ? 'Adding...' : 'Add'}
							</AddButton>
						</Form>
					)}
				</Formik>
			</ModalContainer>
		</ModalWindow>
	);
};
