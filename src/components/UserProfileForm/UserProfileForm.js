import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  ButtonStyle,
  ErrorMessageStyle,
  IconHideShow,
  LabelBox,
  StyledField,
  StyledForm,
} from './UserProfileForm.Styled';

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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Formik
      initialValues={{
        login: '',
        email: '',
        password: '',
      }}
      validationSchema={formShema}
      onSubmit={async values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <StyledForm>
        <LabelBox>
          <label htmlFor="login">
            <StyledField id="login" name="login" placeholder="Ivetta" />
          </label>

          <ErrorMessageStyle name="login" component="span" />

          <label htmlFor="email">
            <StyledField
              id="email"
              name="email"
              placeholder="ivetta34@gmail.com"
              type="email"
            />
          </label>

          <ErrorMessageStyle name="email" component="span" />

          <label style={{ position: 'relative' }}>
            <StyledField
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="ivetta1999.23"
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
