/** @format */

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { register } from '../../../redux/auth/operations';
import { RegisterSchema } from 'components/Helpers/ModalSchemas.js';
import React, { useState } from 'react';

import {
	Button,
	ButtonText,
	Container,
	ErrorMsg,
	LabelBox,
	Link,
	NavBox,
	StyledField,
	StyledForm,
	IconHideShow,
	StyledFieldContainer,
} from './RegisterForm.Styled'; // Assuming IconHideShow is defined in RegisterForm.Styled

const RegisterForm = () => {
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = (values, actions) => {
		dispatch(register(values));
		actions.resetForm({ name: '', email: '', password: '' });
	};

	return (
		<Container>
			<Formik
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={(values, actions) => {
					handleSubmit(values, actions);
				}}
				validationSchema={RegisterSchema}
			>
				{({ isSubmitting }) => (
					<StyledForm autoComplete='off'>
						<NavBox>
							<Link to='/auth/register' end>
								Registration
							</Link>
							<Link to='/auth/login'>Log In</Link>
						</NavBox>

						<LabelBox>
							<label>
								<StyledField
									name='name'
									type='text'
									placeholder='Enter your name'
								/>
								<ErrorMsg name='name' component='span' />
							</label>
							<label>
								<StyledField
									name='email'
									type='email'
									placeholder='Enter your email'
								/>
								<ErrorMsg name='email' component='span' />
							</label>
							<label>
								<StyledFieldContainer>
									<StyledField
										name='password'
										type={showPassword ? 'text' : 'password'}
										placeholder='Create a password'
									/>
									<IconHideShow
										name='hide-show'
										onClick={togglePasswordVisibility}
									>
										{showPassword ? 'Hide' : 'Show'}
									</IconHideShow>
								</StyledFieldContainer>

								<ErrorMsg name='password' component='span' />
							</label>
						</LabelBox>

						<Button type='submit' disabled={isSubmitting}>
							<ButtonText>Register Now</ButtonText>
						</Button>
					</StyledForm>
				)}
			</Formik>
		</Container>
	);
};

export default RegisterForm;
