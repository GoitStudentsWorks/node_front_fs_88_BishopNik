/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserIcon } from './UserIcon';
import { editProfilShema } from 'components/Helpers';

import { Formik } from 'formik';

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


import { useAuth } from 'hooks';
import { changeUserInfo } from 'redux/auth/operations';

export const UserProfileForm = () => {
  const { user } = useAuth();
  const { name, email, theme} = user;
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        avatarURL: '',
        name: name,
        email: email,
        password: '',
        theme: theme,
      }}
      validationSchema={editProfilShema}
      onSubmit={(values, actions) => {
         values.avatarURL = document.getElementById('fileItem').files[0];
        if (!values.avatarURL) {
          values.avatarURL = '';
        }
        dispatch(changeUserInfo(values))
        actions.resetForm()
      }}
    >
      <StyledForm>
        <Title>Edit profile</Title>
        <UserIcon/>
        <LabelBox>
          <AvatarLabelStyle htmlFor="avatarURL">
            <StyledFieldImg
              name="avatarURL"
              id="fileItem"
              placeholder=""
              type="file"
              accept="image/png, image/jpeg"
            />
            <ErrorMessageStyle name="avatarURL" component="span" />
          </AvatarLabelStyle>

          <label htmlFor="name">
            <StyledField name="name" autoComplete="off" placeholder="name" />
            <ErrorMessageStyle name="name" component="span" />
          </label>

          <label htmlFor="email">
            <StyledField
              name="email"
              autoComplete="off"
              placeholder="email"
              type="email"
            />
            <ErrorMessageStyle name="email" component="span" />
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

            <ErrorMessageStyle name="password" component="span" />
          </label>
        </LabelBox>

        <ButtonStyle type="submit">Send</ButtonStyle>
      </StyledForm>
    </Formik>
  );
};
