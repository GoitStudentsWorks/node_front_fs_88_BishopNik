/** @format */

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginSchema } from 'components/Helpers/ModalSchemas';
import {
	Button,
	ButtonText,
	Container,
	ErrorMsg,
	IconHideShow,
	LabelBox,
	Link,
	NavBox,
	StyledField,
	StyledFieldContainer,
	StyledForm,
	ButtonGoogle,
	GoogleIcon,
	IconContainer,
	FieldContainer,
} from './LoginForm.styled';
import { useState } from 'react';
import { useAuth } from 'hooks';
import Loader from 'components/Loader';

const LoginForm = () => {
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const { isLoading } = useAuth();

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const handleSubmit = (values, actions) => {
		dispatch(logIn(values));
		actions.resetForm({ email: '', password: '' });
	};
	return isLoading ? (
		<Loader />
	) : (
		<Container>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values, actions) => {
					handleSubmit(values, actions);
				}}
				validationSchema={LoginSchema}
			>
				<StyledForm autoComplete='off'>
					<NavBox>
						<Link to='/auth/register'>Registation</Link>
						<Link to='/auth/login' end>
							Log In
						</Link>
					</NavBox>
					<LabelBox>
						<FieldContainer>
							<StyledField name='email' type='email' placeholder='Email' />
							<ErrorMsg name='email' component='span' />
						</FieldContainer>
						<FieldContainer>
							<StyledFieldContainer>
								<StyledField
									name='password'
									type={showPassword ? 'text' : 'password'}
									placeholder='Create a password'
								/>
								<IconHideShow name='hide-show' onClick={togglePasswordVisibility}>
									{showPassword ? 'Hide' : 'Show'}
								</IconHideShow>
							</StyledFieldContainer>

							<ErrorMsg name='password' component='span' />
						</FieldContainer>
					</LabelBox>

					<Button type='submit'>
						<ButtonText>Log In Now</ButtonText>
					</Button>
					<ButtonGoogle type='submit'>
						<IconContainer>
							<GoogleIcon name='Google__G__logo' />
						</IconContainer>
						<ButtonText>Log In with Google</ButtonText>
					</ButtonGoogle>
				</StyledForm>
			</Formik>
		</Container>
	);
};

export default LoginForm;
