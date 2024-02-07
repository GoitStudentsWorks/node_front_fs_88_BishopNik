import * as Yup from 'yup';

export const needHelpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
  comment: Yup.string().required('This is a required field'),
});
