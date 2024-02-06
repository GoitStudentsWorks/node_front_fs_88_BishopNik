/** @format */

import { Formik } from 'formik';
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
	customStyles,
} from './NeedHelpModal.styled';
import ModalWindow from '../Modal';

export const NeedHelpModal = ({ isOpen, setIsOpen }) => {
	const handleSubmit = () => {};

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
			<Formik
				initialValues={{ email: '', comment: '' }}
				onSubmit={(values, actions) => {
					handleSubmit(values, actions);
				}}
				// validationSchema={LoginSchema}
			>
				<StyledForm autoComplete='off'>
					<HeaderContainer>
						<Title>Need help</Title>
						<CloseIcon name='close' onClick={() => setIsOpen(false)} />
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
