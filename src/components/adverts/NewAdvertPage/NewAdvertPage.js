import React from 'react';



import NewAdvertForm from './NewAdvertForm';

import { useDispatch, useSelector } from 'react-redux';
import { getUi } from '../../../store/selectors';
import { advertCreate } from '../../../store/actions';

function NewAdvertPage() {


  const dispatch = useDispatch();
  const { isLoading} = useSelector(getUi);
  const handleSubmit = async newAdvert => {
   dispatch(advertCreate(newAdvert));
  };

  return <NewAdvertForm onSubmit={handleSubmit} isLoading={isLoading} />;
}

export default NewAdvertPage;
