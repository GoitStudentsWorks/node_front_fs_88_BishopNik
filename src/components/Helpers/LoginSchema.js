import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
	email: Yup.string()
	  .email('Invalid email address')
	  .required('This is a required field'),
	password: Yup.string().required('This is a required field'),
  });

  export default LoginSchema;