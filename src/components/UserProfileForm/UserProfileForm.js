/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserIcon /*, UserIconAvatar*/ } from './UserIcon';
import { editProfilShema } from 'components/Helpers';

import { Field, Formik } from 'formik';

import {
  AvatarLabelStyle,
  BattonPasswordDisplayStyle,
  ButtonStyle,
  ErrorMessageStyle,
  IconHideShow,
  LabelBox,
  StyledField,
  StyledFieldImg,
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
        avatar: null,
        login: name,
        email: email,
        password: '',
      }}
      validationSchema={editProfilShema}
      onSubmit={async (values, actions) => {
        const newAvatar = document.getElementById('fileItem').files[0];
        values.avatar = newAvatar;
        handleSubmit(values, actions);
      }}
    >
      <StyledForm>
        <Title>Edit profile</Title>
        <UserIcon />
        <LabelBox>
          <AvatarLabelStyle htmlFor="avatar">
            <StyledFieldImg
              name="avatar"
              id="fileItem"
              placeholder=""
              type="file"
              accept="image/png, image/jpeg"
            />
            <ErrorMessageStyle name="avatar" component="span" />
          </AvatarLabelStyle>

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
