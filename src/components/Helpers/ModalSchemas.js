/** @format */

import * as Yup from 'yup';

export const needHelpSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email address').required('This is a required field'),
	comment: Yup.string().required('This is a required field'),
});

export const createBoardSchema = Yup.object().shape({
	name: Yup.string().required('This is a required field'),
	icon: Yup.string().required('This is a required field'),
	background: Yup.string().required('This is a required field'),
});

export const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email address').required('This is a required field'),
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
	email: Yup.string().email('Invalid email address').required('This is a required field'),
	password: Yup.string()
		.matches(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
			'Please create a stronger password. It must contain one uppercase and one lowercase letter'
		)
		.required('This is a required field'),
});

export const addCardValidationSchema = Yup.object().shape({
	name: Yup.string().required('Title is required'),
	description: Yup.string(),
	priority: Yup.string().required('Color is required'),
	deadline: Yup.date(),
});
