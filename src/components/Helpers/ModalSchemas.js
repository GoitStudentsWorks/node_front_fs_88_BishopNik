/** @format */

import * as Yup from 'yup';

const emailRegex = RegExp(
  /^[A-Z|a-z0-9!#$%&._%+-/=?^]+@[A-Z|a-z0-9.-]+\.[A-Z|a-z]{2,4}$/
);

const passwordRegex = RegExp(/^[A-Z|a-z0-9!#$%&._%+-/=?^]{0,100}$/);

export const needHelpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
  comment: Yup.string().required('This is a required field'),
});

export const createBoardSchema = Yup.object().shape({
  name: Yup.string().required('This is a required field'),
  icon: Yup.string().required('This is a required field'),
  background: Yup.string().required('This is a required field'),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
  password: Yup.string().required('This is a required field'),
});

export const RegisterSchema = Yup.object().shape({
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

export const addCardValidationSchema = Yup.object().shape({
  name: Yup.string().required('Title is required'),
  text: Yup.string(),
  priority: Yup.string(),
  deadline: Yup.date(),
});

export const editProfilShema = Yup.object().shape({
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
    .max(64, 'Password should be of max 64 characters length'),
  // .required('This field is required!'),
});
