/** @format */

import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AuthPage() {
	const navigate = useNavigate();
	const { page } = useParams(null);

	useEffect(() => {
		if (page !== 'login' && page !== 'register') navigate('/');
	}, [navigate, page]);

	return <>{page === 'register' ? <RegisterForm /> : <LoginForm />}</>;
}

export default AuthPage;
