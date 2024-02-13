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
} from './UserProfileForm.Styled';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router';

export const UserProfileForm = () => {
  const [avatar, setAvatar] = useState(null);
  const [avatarURL, setAvatarURL] = useState(null);
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const { user } = useAuth();

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

  // =============================================

  // const { user } = useAuth();
  const { name, email } = user;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, actions) => {
    console.log(avatar, avatarURL, user.avatarURL);
    values.avatarURL = avatar || avatarURL || user.avatarURL;
    if (!values.avatarURL) {
      values.avatarURL = '';
    }
    console.log(values);
    dispatch(refreshUser(values));
    actions.resetForm({ password: '' });
  };

  return (
    <Formik
      initialValues={{
        avatarURL: null,
        login: name,
        email: email,
        password: '',
      }}
      validationSchema={editProfilShema}
      onSubmit={async (values, actions) => {
        handleSubmit();
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

          <label htmlFor="login">
            <StyledField name="login" autocomplete="off" placeholder="login" />
            <ErrorMessageStyle name="login" component="span" />
          </label>

          <label htmlFor="email">
            <StyledField
              name="email"
              autocomplete="off"
              placeholder="email"
              type="email"
            />
            <ErrorMessageStyle name="email" component="span" />
          </label>

          <label style={{ position: 'relative' }}>
            <StyledField
              type={showPassword ? 'text' : 'password'}
              autocomplete="off"
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

            <ErrorMessageStyle name="password" component="span" />
          </label>
        </LabelBox>

        <ButtonStyle type="submit">Send</ButtonStyle>
      </StyledForm>
    </Formik>
  );
};
