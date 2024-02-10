/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserIcon } from './UserIcon';
import { editProfilShema } from 'components/Helpers';

import { Formik } from 'formik';

import {
	ButtonStyle,
	ErrorMessageStyle,
	IconHideShow,
	LabelBox,
	StyledField,
	StyledForm,
	Title,
} from './UserProfileForm.Styled';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserProfileForm = () => {
	const { user } = useAuth();
	const { name, email } = user;
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		dispatch(refreshUser(values));
		actions.resetForm({ password: '' });
	};

	return (
		<Formik
			initialValues={{
				login: name,
				email: email,
				password: '',
			}}
			validationSchema={editProfilShema}
			onSubmit={async (values, actions) => {
				handleSubmit(values, actions);
			}}
		>
			<StyledForm>
				<Title>Edit profile</Title>
				<UserIcon />
				<LabelBox>
					<label htmlFor='login'>
						<StyledField name='login' placeholder='login' />
						<ErrorMessageStyle name='login' component='span' />
					</label>

					<label htmlFor='email'>
						<StyledField name='email' placeholder='email' type='email' />
						<ErrorMessageStyle name='email' component='span' />
					</label>

					<label style={{ position: 'relative' }}>
						<StyledField
							type={showPassword ? 'text' : 'password'}
							name='password'
							placeholder='Enter password'
						/>

						<IconHideShow
							name='hide-show'
							onClick={togglePasswordVisibility}
							style={{
								position: 'absolute',
								top: '24px',
								right: '18px',
								transform: 'translateY(-50%)',
								cursor: 'pointer',
							}}
						>
							{showPassword ? 'Hide' : 'Show'}
						</IconHideShow>

						<ErrorMessageStyle name='password' component='span' />
					</label>
				</LabelBox>

				<ButtonStyle type='submit'>Send</ButtonStyle>
			</StyledForm>
		</Formik>
	);
};
