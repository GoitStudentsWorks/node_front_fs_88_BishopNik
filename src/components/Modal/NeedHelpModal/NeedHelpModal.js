/** @format */

import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { modalsSlice } from 'redux/modals/modalSlice';
import { needModalState} from 'redux/modals/selectors'
import { sendHelpReq} from 'redux/modals/operations'
import {
	StyledForm,
	HeaderContainer,
	CloseIcon,
	StyledTextArea,
	LabelBox,
	StyledField,
	Button,
	ButtonText,
	Title,
} from './NeedHelpModal.styled';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';

export const NeedHelpModal = () => {

	const dispatch = useDispatch();

	const {isOpen} = useSelector(needModalState);

	

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={() => dispatch(modalsSlice.actions.openNeedHeplModal(false))} style={customStyles}>
			<Formik
				initialValues={{ email: '', comment: '' }}
				onSubmit={(values, actions) => {
					dispatch( sendHelpReq(values) )
				}}
				// validationSchema={LoginSchema}
			>
				<StyledForm autoComplete='off'>
					<HeaderContainer>
						<Title>Need help</Title>
						<CloseIcon name='close' onClick={() => dispatch(modalsSlice.actions.openNeedHeplModal(false))} />
					</HeaderContainer>
					<LabelBox>
						<label>
							<StyledField name='email' type='email' placeholder='Email address' />
							{/* <ErrMessageStyled name="email" component="span" /> */}
						</label>
						<label>
							<StyledTextArea name='comment' type='text' placeholder='Comment' />
							{/* <ErrMessageStyled name="password" component="span" /> */}
						</label>
					</LabelBox>

					<Button type='submit'>
						<ButtonText>Send</ButtonText>
					</Button>
				</StyledForm>
			</Formik>
		</ModalWindow>
	);
};
