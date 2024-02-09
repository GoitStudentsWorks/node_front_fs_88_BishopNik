/** @format */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  ButtonStyle,
  ErrorMessageStyle,
  IconHideShow,
  LabelBox,
  StyledField,
  StyledForm,
} from './UserProfileForm.Styled';

import { refreshUser } from 'redux/auth/operations';

const emailRegex = RegExp(
  /^[A-Z|a-z0-9!#$%&._%+-/=?^]+@[A-Z|a-z0-9.-]+\.[A-Z|a-z]{2,4}$/
);

const passwordRegex = RegExp(/^[A-Z|a-z0-9!#$%&._%+-/=?^]{0,100}$/);

const formShema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Too short!')
    .max(32, 'Too Long!')
    .required('This field is required!'),

  email: Yup.string()
    .matches(emailRegex, 'Invalid email')
    .email('Invalid email')
    .required('email is required'),

  password: Yup.string()
    .matches(passwordRegex, 'Invalid password')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(64, 'Password should be of max 64 characters length')
    .required('This field is required!'),
});

export const UserProfileForm = () => {
  const { name, email } = useSelector(selectUser);

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
      validationSchema={formShema}
      onSubmit={async (values, actions) => {
        console.log(values);
        handleSubmit(values, actions);

        // alert(JSON.stringify(values, null, 2));
      }}
    >
      <StyledForm>
        <LabelBox>
          <label htmlFor="login">
            <StyledField name="login" placeholder="login" />
            <ErrorMessageStyle name="login" component="span" />
          </label>

          <label htmlFor="email">
            <StyledField name="email" placeholder="email" type="email" />
            <ErrorMessageStyle name="email" component="span" />
          </label>

          <label style={{ position: 'relative' }}>
            <StyledField
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
            />

            <IconHideShow
              name="hide-show"
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                top: '24px',
                right: '18px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                stroke: '#FFFFFF4D',
              }}
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
