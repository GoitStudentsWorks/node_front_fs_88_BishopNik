/** @format */

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
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
} from './RegisterForm.Styled';
import { register } from 'redux/auth/operations';


const ContactShema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .matches(
      /^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('This is a required field'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
      'Please create a stronger password. It must contain one uppercase and one lowercase letter'
    )
    .required('This is a required field'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
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
        validationSchema={ContactShema}
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
              <StyledField name="name" type="text" placeholder="Enter your name" />
              <ErrMessageStyled name="name" component="span" />
            </label>
            <label>
              <StyledField name="email" type="email" placeholder="Enter your email" />
              <ErrMessageStyled name="email" component="span" />
            </label>
            <label>
              <StyledField
                name="password"
                type="password"
                placeholder="Create a password"
              />
              <ErrMessageStyled name="password" component="span" />
            </label>
          </LabelBox>

          <Button type="submit"><ButtonText>Register Now</ButtonText></Button>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default RegisterForm;
