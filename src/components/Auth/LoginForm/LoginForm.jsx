/** @format */

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginSchema } from 'components/Helpers/ModalSchemas.js';
import {
  Button,
  ButtonText,
  Container,
  ErrMessageStyled,
  IconHideShow,
  LabelBox,
  Link,
  NavBox,
  StyledField,
  StyledFieldContainer,
  StyledForm,
  ButtonGoogle,
  GoogleIcon,
  IconContainer,
} from './LoginForm.Styled';
import { useState } from 'react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm({ email: '', password: '' });
  };
  return (
    <Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
        validationSchema={LoginSchema}
      >
        <StyledForm autoComplete="off">
          <NavBox>
            <Link to="/auth/register">Registation</Link>
            <Link to="/auth/login" end>
              Log In
            </Link>
          </NavBox>
          <LabelBox>
            <label>
              <StyledField name="email" type="email" placeholder="Email" />
              <ErrMessageStyled name="email" component="span" />
            </label>
            <label>
              <StyledFieldContainer>
                <StyledField
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                />
                <IconHideShow
                  name="hide-show"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </IconHideShow>
              </StyledFieldContainer>

              <ErrMessageStyled name="password" component="span" />
            </label>
          </LabelBox>

          <Button type="submit">
            <ButtonText>Log In Now</ButtonText>
          </Button>
          <ButtonGoogle type="submit">
            <IconContainer>
              <GoogleIcon name="Google__G__logo" />
            </IconContainer>
            <ButtonText>Log In with Google</ButtonText>
          </ButtonGoogle>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default LoginForm;
