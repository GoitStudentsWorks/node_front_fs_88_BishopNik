// import { StyledForm } from 'components/LoginForm/LoginForm.Styled';
// import { Formik,Field,Form } from 'formik';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './UserProfileForm.Styled';

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
  return (
    // <Container>
    <Formik
      initialValues={{
        login: '',
        email: '',
        password: '',
      }}
      validationSchema={formShema}
      onSubmit={async values => {
        // await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {/* <StyledForm>
        <label htmlFor="name">Name</label>
        <StyledInput id="name" name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="number">Number</label>
        <StyledInput id="number" name="number" placeholder="111-11-11" />
        <ErrorMessage name="number" />

        <ButAdd type="submit">Add contact</ButAdd>
      </StyledForm> */}

      <StyledForm>
        <label htmlFor="login"></label>
        <Field id="login" name="login" placeholder="Ivetta" />
        <ErrorMessage name="login" />

        <label htmlFor="email"></label>
        <Field
          id="email"
          name="email"
          placeholder="ivetta34@gmail.com"
          type="email"
        />
        <ErrorMessage name="email" />

        <label htmlFor="password"></label>

        <Field
          //   type="password"
          type="text"
          id="password"
          name="password"
          placeholder="ivetta1999.23"
        />

        <ErrorMessage name="password" />

        <button type="submit">Send</button>
      </StyledForm>
    </Formik>
    // </Container>
  );
};
