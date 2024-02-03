import { Field, Form, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { logIn } from "redux/auth/operations";


import {  toastSuccess } from 'components/Helpers';
import LoginSchema from 'components/Helpers/LoginSchema';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, ButtonText, Container, ErrMessageStyled, LabelBox, Link, NavBox, StyledField, StyledForm } from './LoginForm.Styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm({ email: '', password: '' });
    toastSuccess('Successfuly registered!'); // Should be done after redux logic
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
            <Link to="/register" end>
              Registation
            </Link>
            <Link to="/login" end>
              Log In
            </Link>
          </NavBox>
          <LabelBox>
            <label>
              <StyledField name="email" type="email" placeholder="Email" />
              <ErrMessageStyled name="email" component="span" />
            </label>
            <label>
              <StyledForm name="password" type="password" placeholder="Password" />
              <ErrMessageStyled name="password" component="span" />
            </label>
          </LabelBox>

          <Button type="submit"><ButtonText>Log In Now</ButtonText></Button>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default LoginForm;
