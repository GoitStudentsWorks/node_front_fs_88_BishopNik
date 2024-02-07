import * as Yup from 'yup';

export const needHelpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
  comment: Yup.string().required('This is a required field'),
});

export const createBoardSchema = Yup.object().shape({
	title: Yup.string().required('This is a required field'),
	icon: Yup.string().required('This is a required field'),
	background: Yup.string().required('This is a required field'),
});
