/** @format */

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import LoginSchema from 'components/Helpers/LoginSchema';
import {
  Button,
  ButtonText,
  Container,
  ErrMessageStyled,
  IconHideShow,
  LabelBox,
  Link,
  NavBox,
  StyledField,
  StyledForm,
	Button,
	ButtonText,
	Container,
	ErrMessageStyled,
	IconHideShow,
	LabelBox,
	Link,
	NavBox,
	StyledField,
	StyledFieldContainer,
	StyledForm,
} from './LoginForm.Styled';
import { useState } from 'react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm({ email: '', password: '' });
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
            <Link to="/register">Registation</Link>
            <Link to="/login" end>
              Log In
            </Link>
          </NavBox>
          <LabelBox>
            <label>
              <StyledField name="email" type="email" placeholder="Email" />
              <ErrMessageStyled name="email" component="span" />
            </label>
            <label style={{ position: 'relative' }}>
              <StyledField
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
              />
              <IconHideShow
                name="hide-show"
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '18px',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  stroke: '#FFFFFF4D',
                }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </IconHideShow>
              <ErrMessageStyled name="password" component="span" />
            </label>
          </LabelBox>
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const handleSubmit = (values, actions) => {
		dispatch(logIn(values));
		actions.resetForm({ email: '', password: '' });
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
				<StyledForm autoComplete='off'>
					<NavBox>
						<Link to='/auth/register'>Registation</Link>
						<Link to='/auth/login' end>
							Log In
						</Link>
					</NavBox>
					<LabelBox>
						<label>
							<StyledField name='email' type='email' placeholder='Email' />
							<ErrMessageStyled name='email' component='span' />
						</label>
						<label>
							<StyledFieldContainer>
								<StyledField
									name='password'
									type={showPassword ? 'text' : 'password'}
									placeholder='Create a password'
								/>
								<IconHideShow name='hide-show' onClick={togglePasswordVisibility}>
									{showPassword ? 'Hide' : 'Show'}
								</IconHideShow>
							</StyledFieldContainer>

							<ErrMessageStyled name='password' component='span' />
						</label>
					</LabelBox>

          <Button type="submit">
            <ButtonText>Log In Now</ButtonText>
          </Button>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default LoginForm;
