import React, { useEffect } from 'react';



import NewAdvertForm from './NewAdvertForm';

import { useDispatch, useSelector } from 'react-redux';
import { getUi } from '../../../store/selectors';
import { advertCreate, authLoginSuccess } from '../../../store/actions';
import storage from '../../../utils/storage';
function NewAdvertPage() {

  const accessToken = storage.get('auth');
  const dispatch = useDispatch();
  const { isLoading} = useSelector(getUi);
  useEffect(() => {
    if (!!accessToken){ // USADO PARA SABER SI HAY TOKEN EN EL STORAGE
      dispatch(authLoginSuccess());
    } 
  }, [dispatch,accessToken]);
  const handleSubmit = async newAdvert => {

   dispatch(advertCreate(newAdvert));
  };

  return <NewAdvertForm onSubmit={handleSubmit} isLoading={isLoading} />;
}

export default NewAdvertPage;
