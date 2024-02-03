/** @format */
import Loader from 'components/Loader';
import RegisterForm from 'components/RegisterForm';
import { useAuth } from 'hooks';

const RegisterPage = () => {
	const {isLoading} = useAuth()
	return (
		<>
			{isLoading && <Loader/>}
			<RegisterForm />
		</>
	);
};

export default RegisterPage;
