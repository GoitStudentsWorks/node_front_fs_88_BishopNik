/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProfilShema, toastError } from 'components/Helpers';

import { Formik } from 'formik';

import {
	BattonPasswordDisplayStyle,
	BlockLogoStyles,
	ButtonIcon,
	ButtonStyle,
	IconHideShow,
	ImgStyled,
	LabelBox,
	LabelStyle,
	LogoStyles,
	StyledField,
	StyledForm,
	Title,
	ErrorMsg,
} from './UserProfileForm.Styled';

import { useAuth } from 'hooks';
import { changeUserInfo } from 'redux/auth/operations';
import data from 'img/list_img.json';

export const UserProfileForm = ({ stateСhangeModal }) => {
	const [avatar, setAvatar] = useState(null);
	const [userAvatarURL, setUserAvatarURL] = useState(null);
	const dispatch = useDispatch();
	const { user } = useAuth();
	const { name, email, thema: activeUserTheme, avatarURL } = user;
	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	useEffect(() => {
		if (avatar) {
			const avatarObjectURL = URL.createObjectURL(avatar);
			setUserAvatarURL(avatarObjectURL);

			return () => URL.revokeObjectURL(avatarObjectURL);
		}
	}, [avatar]);

	const handleFileChange = ({ target }) => {
		if (!target.files) {
			toastError('Please select image');
			return;
		}
		const file = target.files[0];

		if (file && file instanceof File && file.type.startsWith('image/')) {
			setAvatar(file);
		} else {
			toastError('Bad type file');
			target.value = '';
			setUserAvatarURL(avatarURL);
			setAvatar(null);
			target.click();
		}
	};
	const handleSubmit = (values, actions) => {
		values.avatarURL = avatar || userAvatarURL || user.avatarURL;
		// if (!values.avatarURL) {
		//   values.avatarURL = '';
		// }
		// if (!name || name === '' || name === values.name) {
		//   delete values.name;
		// }
		// if (!email || email === '' || email === values.email) {
		//   delete values.email;
		// }
		// if (!avatarURL || avatarURL === '' || avatarURL === values.avatarURL) {
		//   delete values.avatarURL;
		// }
		// if (!values.password || values.password === '') {
		//   delete values.password;
		// }
		// values.thema = activeUserTheme;
		// values.theme = activeUserTheme;

		dispatch(changeUserInfo(values));
		stateСhangeModal();

		actions.resetForm({ password: '' });
	};

	const setDefaultAvatar = () => {
		if (activeUserTheme === 'Dark') {
			return data.user.dark;
		} else if (activeUserTheme === 'Light') {
			return data.user.light;
		} else if (activeUserTheme === 'Violet') {
			return data.user.violet;
		}
	};

	return (
		<Formik
			initialValues={{
				avatarURL: null,
				name: name,
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

				<LabelBox>
					<LabelStyle>
						<BlockLogoStyles>
							<ImgStyled
								src={userAvatarURL || user.avatarURL || setDefaultAvatar()}
								alt='user avatar'
							/>
							<LogoStyles>
								<ButtonIcon name='add-board'></ButtonIcon>
							</LogoStyles>
						</BlockLogoStyles>

						<input
							type='file'
							name='avatar'
							style={{ display: 'none' }}
							onChange={handleFileChange}
						/>
					</LabelStyle>
					<label htmlFor='name'>
						<StyledField name='name' autoComplete='off' placeholder='login' />
						<ErrorMsg name='name' component='span' />
					</label>

					<label htmlFor='email'>
						<StyledField
							name='email'
							autoComplete='off'
							placeholder='email'
							type='email'
							disabled
						/>
						<ErrorMsg name='email' component='span' />
					</label>

					<label style={{ position: 'relative' }}>
						<StyledField
							type={showPassword ? 'text' : 'password'}
							autoComplete='off'
							name='password'
							placeholder='Enter password'
						/>

						<IconHideShow
							name='hide-show'
							onClick={togglePasswordVisibility}
							style={BattonPasswordDisplayStyle}
						>
							{showPassword ? 'Hide' : 'Show'}
						</IconHideShow>

						<ErrorMsg name='password' component='span' />
					</label>
				</LabelBox>
				<ButtonStyle type='submit'>Send</ButtonStyle>
			</StyledForm>
		</Formik>
	);
};
