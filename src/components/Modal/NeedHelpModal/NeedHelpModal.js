/** @format */

import { useContext } from 'react';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
// import { modalsSlice } from 'redux/modals/modalSlice';
// import { needHelpModalState } from 'redux/modals/selectors';
import { sendHelpReq } from 'redux/modals/operations';
import { needHelpSchema } from '../../Helpers/ModalSchemas';
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
	ErrorMsg,
} from './NeedHelpModal.styled';
import ModalWindow from '../Modal';
import { customStyles } from '../Modal.styled';
import { MainContext } from 'components/Helpers';

export const NeedHelpModal = () => {
	const dispatch = useDispatch();
	// const { isOpen } = useSelector(needHelpModalState);
	const { isOpenHelp, setIsOpenHelp } = useContext(MainContext);

	return (
		<ModalWindow
			isOpen={isOpenHelp}
			onRequestClose={() => setIsOpenHelp(false)}
			style={customStyles}
		>
			<Formik
				initialValues={{ email: '', comment: '' }}
				onSubmit={(values, actions) => {
					dispatch(sendHelpReq(values));
				}}
				validationSchema={needHelpSchema}
			>
				<StyledForm autoComplete='off'>
					<HeaderContainer>
						<Title>Need help</Title>
						<CloseIcon name='close' onClick={() => setIsOpenHelp(false)} />
					</HeaderContainer>
					<LabelBox>
						<label>
							<StyledField
								name='email'
								type='email'
								placeholder='Email address'
								autoFocus
							/>
							<ErrorMsg name='email' component='span' />
						</label>
						<label>
							<Field
								name='comment'
								type='text'
								placeholder='Comment'
								as={StyledTextArea}
							/>
							<ErrorMsg name='comment' component='span' />
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
