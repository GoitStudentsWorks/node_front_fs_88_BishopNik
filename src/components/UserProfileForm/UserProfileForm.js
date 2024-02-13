/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserIcon } from './UserIcon';
import { editProfilShema, toastError } from 'components/Helpers';

import { Formik } from 'formik';

import {
  AvatarLabelStyle,
  BattonPasswordDisplayStyle,
  BlockLogoStyles,
  ButtonIcon,
  ButtonStyle,
  ErrorMessageStyle,
  IconHideShow,
  ImgStyled,
  LabelBox,
  LabelStyle,
  LogoStyles,
  StyledField,
  StyledFieldImg,
  StyledForm,
  Title,
  ErrorMsg,
} from './UserProfileForm.Styled';

import { useAuth } from 'hooks';
import { useNavigate } from 'react-router';
import { changeUserInfo } from 'redux/auth/operations';

export const UserProfileForm = () => {
  const [avatar, setAvatar] = useState(null);
  const [avatarURL, setAvatarURL] = useState(null);
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const { user } = useAuth();

  // const { user } = useAuth();
  const { name, email, theme } = user;
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // const dispatch = useDispatch();

  //   console.log(user);

  useEffect(() => {
    if (avatar) {
      const avatarObjectURL = URL.createObjectURL(avatar);
      setAvatarURL(avatarObjectURL);

      return () => URL.revokeObjectURL(avatarObjectURL);
    }
  }, [avatar]);

  const handleFileChange = ({ target }) => {
    if (!target.files) {
      toastError('Please select image');
      return;
    }
    const file = target.files[0];
    console.log(file);
    // setAvatarURL(file);
    //   user.avatarURL = file;

    if (file && file instanceof File && file.type.startsWith('image/')) {
      setAvatar(file);
    } else {
      toastError('Bad type file');
      target.value = '';
      setAvatarURL(user.avatarURL);
      setAvatar(null);
      target.click();
    }
  };
  const handleSubmit = (values, actions) => {
    console.log(avatar, avatarURL, user.avatarURL);
    values.avatarURL = avatar || avatarURL || user.avatarURL;
    if (!values.avatarURL) {
      values.avatarURL = '';
    }
    console.log(values);
    dispatch(changeUserInfo(values));
    actions.resetForm({ password: '' });
  };

  // =============================================

  // const { user } = useAuth();
  //   const { name, email } = user;
  //   const [showPassword, setShowPassword] = useState(false);

  // export const UserProfileForm = () => {
  // const { user } = useAuth();
  // const { name, email, theme } = user;
  // const [showPassword, setShowPassword] = useState(false);
  // const togglePasswordVisibility = () => {
  // 	setShowPassword(!showPassword);
  // };
  // const dispatch = useDispatch();

  // return (
  // 	<Formik
  // 		initialValues={{
  // 			avatarURL: '',
  // 			name: name,
  // 			email: email,
  // 			password: '',
  // 			theme: theme,
  // 		}}
  // 		validationSchema={editProfilShema}
  // 		onSubmit={(values, actions) => {
  // 			values.avatarURL = document.getElementById('fileItem').files[0];
  // 			if (!values.avatarURL) {
  // 				values.avatarURL = '';
  // 			}
  // 			dispatch(changeUserInfo(values));
  // 			actions.resetForm();
  // 		}}
  // 	>
  // 		<StyledForm>
  // 			<Title>Edit profile</Title>
  // 			<UserIcon />
  // 			<LabelBox>
  // 				<AvatarLabelStyle htmlFor='avatarURL'>
  // 					<StyledFieldImg
  // 						name='avatarURL'
  // 						id='fileItem'
  // 						placeholder=''
  // 						type='file'
  // 						accept='image/png, image/jpeg'
  // 					/>
  // 					<ErrorMsg name='avatarURL' component='span' />
  // 				</AvatarLabelStyle>

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
              <ImgStyled src={avatarURL || user.avatarURL} alt="user avatar" />
              <LogoStyles>
                <ButtonIcon name="add-board"></ButtonIcon>
              </LogoStyles>
            </BlockLogoStyles>

            <input
              type="file"
              name="avatar"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </LabelStyle>
          <label htmlFor="name">
            <StyledField name="name" autocomplete="off" placeholder="login" />
            <ErrorMsg name="name" component="span" />
          </label>

          <label htmlFor="email">
            <StyledField
              name="email"
              autoComplete="off"
              placeholder="email"
              type="email"
            />
            <ErrorMsg name="email" component="span" />
          </label>

          <label style={{ position: 'relative' }}>
            <StyledField
              type={showPassword ? 'text' : 'password'}
              autoComplete="off"
              name="password"
              placeholder="Enter password"
            />

            <IconHideShow
              name="hide-show"
              onClick={togglePasswordVisibility}
              style={BattonPasswordDisplayStyle}
            >
              {showPassword ? 'Hide' : 'Show'}
            </IconHideShow>

            <ErrorMsg name="password" component="span" />
          </label>
        </LabelBox>

        <ButtonStyle type="submit">Send</ButtonStyle>
      </StyledForm>
    </Formik>
  );
};
