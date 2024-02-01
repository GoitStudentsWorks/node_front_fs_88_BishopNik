/** @format */

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const RegisterForm = () => {
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
					<Box
						component='form'
						onSubmit={() => alert("Don't Click!")}
						noValidate
						sx={{ mt: 1 }}
					>
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

						<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
							Register
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default RegisterForm;
