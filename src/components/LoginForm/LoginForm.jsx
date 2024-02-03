import { Field, Form, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { logIn } from "redux/auth/operations";


// Зробіть нормально, я накидав число для того, щоб логін працював 

const LoginForm = () => {
	const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm({ email: '', password: '' });
  };
	return (<>
		<h1>Не працює</h1>
		<Formik
		initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
		>
			<Form>
				<Field name="email" type="email" />
				<Field name="password" type="text" />
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	</>)
}
export default LoginForm;
