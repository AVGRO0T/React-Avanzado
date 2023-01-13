import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../context';
import { login } from '../service';
import LoginForm from './LoginForm';
import useMutation from '../../../hooks/useMutation';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin, authLoginFailure, authLoginRequest, authLoginSuccess, uiResetError } from '../../../store/actions';
import { getUi } from '../../../store/selectors';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
 const { handleLogin } = useAuthContext();
 
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getUi);
 const resetErrorr = () => dispatch(uiResetError());
  const handleSubmit = async credentials =>  {
     

   dispatch(authLogin(credentials))
   .then(handleLogin)
   .then(() => {
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      })
     
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      {isLoading && <p>...login in nodepop</p>}
      {error && (
        <div onClick={resetErrorr} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
