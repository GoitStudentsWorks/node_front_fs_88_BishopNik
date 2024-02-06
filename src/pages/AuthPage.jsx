import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function AuthPage() {
    const { page } = useParams(null);
    const [idPage, setPage] = useState(null);

    useEffect(() => {
        setPage(page);
    }, [page]);

return(
    <div>
        {page === idPage ? <LoginForm/> : <RegisterForm/>}
    </div>
)
}

export default AuthPage;