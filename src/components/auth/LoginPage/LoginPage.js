import React from 'react';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin, uiResetError } from '../../../store/actions';
import { getUi } from '../../../store/selectors';

function LoginPage() {
 

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getUi);
 const resetErrorr = () => dispatch(uiResetError());
  const handleSubmit = async credentials =>  {
    console.log(credentials)   
   dispatch(authLogin(credentials)) 
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
