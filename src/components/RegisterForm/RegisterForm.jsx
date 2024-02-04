/** @format */

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
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
import { toastError, toastSuccess } from 'components/Helpers';
import RegisterSchema from 'components/Helpers/RegisterSchema';


const RegisterForm = () => {

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    toastSuccess("Successfuly registered!"); // Should be done after redux logic
	toastError("Unsuccesfully registered!"); // Should be done after redux logic
    actions.resetForm({ name: '', email: '', password: '' });
  };

	return (
		<Container>
			<Formik
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={(values, actions) => {
					handleSubmit(values, actions);
				}}
				validationSchema={RegisterSchema}
			>
				<StyledForm autoComplete='off'>
					<NavBox>
						<Link to='/register' end>
							Registation
						</Link>
						<Link to='/login' end>
							Log In
						</Link>
					</NavBox>

					<LabelBox>
						<label>
							<StyledField name='name' type='text' placeholder='Enter your name' />
							<ErrMessageStyled name='name' component='span' />
						</label>
						<label>
							<StyledField name='email' type='email' placeholder='Enter your email' />
							<ErrMessageStyled name='email' component='span' />
						</label>
						<label>
							<StyledField
								name='password'
								type='password'
								placeholder='Create a password'
							/>
							<ErrMessageStyled name='password' component='span' />
						</label>
					</LabelBox>

					<Button type='submit'>
						<ButtonText>Register Now</ButtonText>
					</Button>
				</StyledForm>
			</Formik>
		</Container>
	);
};

export default RegisterForm;
