/** @format */

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

export const AddColumnModal = ({ isOpen, setIsOpen, board, columnId, columnForEditing }) => {
	const dispatch = useDispatch();
	const isEdit = !!columnForEditing;

	const handleFormSubmit = values => {
		if (columnForEditing) {
			dispatch(updateColumn({ ...values, id: columnId }));
		} else {
			dispatch(addColumn({ ...values, columnId }));
		}
	};

	const onClose = () => setIsOpen(false);

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
			<Formik
				initialValues={{
					name: columnForEditing?.name || '',
					boardId: `${board}`,
				}}
				validationSchema={columnSchema}
				onSubmit={handleFormSubmit}
			>
				{({ isSubmitting }) => (
					<StyledForm autoComplete='off'>
						<HeaderContainer>
							<ModalTitle>{isEdit ? 'Edit' : 'Add'}</ModalTitle>
							<CloseIcon name='close' onClick={onClose} />
						</HeaderContainer>

						<StyledFormField type='text' name='name' placeholder='Title' />
						<StyledErrorMessage name='name' component='div' />
						<BtnAdd type='submit' disabled={isSubmitting}>
							<IconWrapper>
								<AddIcon name='plus' />
							</IconWrapper>
							{isEdit ? 'Edit' : 'Add'}
						</BtnAdd>
					</StyledForm>
				)}
			</Formik>
		</ModalWindow>
	);
};
