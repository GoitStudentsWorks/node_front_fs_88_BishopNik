/** @format */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { register } from 'redux/auth/operations';
import { toastError } from 'components/Helpers';
import Loader from 'components/Loader';
import { useAuth } from 'hooks';

function Copyright(props) {
	return (
		<Typography variant='body2' color='text.secondary' align='center' {...props}>
			{'Copyright © '}
			<Link color='inherit' href='/my-phonebook/'>
				My Phonebook
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const defaultTheme = createTheme();

const RegisterForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { statusRegistration, statusRegistrationProcess } = useAuth();

	useEffect(() => {
		if (statusRegistration) navigate('/verify');
	}, [navigate, statusRegistration]);

	const submitForm = async values => {
		if (!values.email || !values.password || !values.name) {
			toastError('Please fill out all fields');
			return;
		}
		if (values.password !== values.сonfirm_password) {
			toastError("Passwords don't match");
			return;
		}
		await dispatch(
			register({
				name: values.name,
				email: values.email,
				password: values.password,
			})
		);
	};

	const handleSubmit = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		submitForm({
			name: data.get('name'),
			email: data.get('email'),
			password: data.get('password'),
			сonfirm_password: data.get('сonfirm_password'),
		});
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<PersonAddIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Create account
					</Typography>
					<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='text'
							label='Name'
							name='name'
							autoComplete='name'
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='сonfirm_password'
							label='Сonfirm Password'
							type='password'
							id='сonfirm_password'
							autoComplete='current-password'
						/>

						<Button
							disabled={statusRegistrationProcess}
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Register
						</Button>

						{statusRegistrationProcess ? <Loader /> : null}

						<Grid container>
							<Grid item xs>
								<Link href='resend?reg=false' variant='body2'>
									{'Resend confirmation email'}
								</Link>
							</Grid>
							<Grid item>
								<Link href='resend?reg=true' variant='body2'>
									{'Forgot your password?'}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>

				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
};

export default RegisterForm;
