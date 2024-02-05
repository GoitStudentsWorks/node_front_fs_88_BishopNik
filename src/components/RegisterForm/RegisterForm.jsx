/** @format */

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/operations';
import RegisterSchema from 'components/Helpers/RegisterSchema';
import React, { useState } from 'react';

import {
  Button,
  ButtonText,
  Container,
  ErrMessageStyled,
  LabelBox,
  Link,
  NavBox,
  StyledField,
  StyledForm,
  IconHideShow,
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
          <StyledForm autoComplete="off">
            <NavBox>
              <Link to="/register" end>
                Registration
              </Link>
              <Link to="/login">Log In</Link>
            </NavBox>

            <LabelBox>
              <label>
                <StyledField
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
                <ErrMessageStyled name="name" component="span" />
              </label>
              <label>
                <StyledField
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <ErrMessageStyled name="email" component="span" />
              </label>
              <label style={{ position: 'relative' }}>
                <StyledField
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                />
                <IconHideShow
                  name="hide-show"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '18px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
					stroke: '#FFFFFF4D',
                  }}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </IconHideShow>
                <ErrMessageStyled name="password" component="span" />
              </label>
            </LabelBox>

            <Button type="submit" disabled={isSubmitting}>
              <ButtonText>Register Now</ButtonText>
            </Button>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterForm;
