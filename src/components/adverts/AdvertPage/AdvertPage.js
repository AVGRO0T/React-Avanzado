import { useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import AdvertDetail from './AdvertDetail';
import {  deleteAdvert } from '../service';

import useMutation from '../../../hooks/useMutation';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertSelector, getUi } from '../../../store/selectors';
import { advertLoad } from '../../../store/actions';

function AdvertPage() {
  const { advertId } = useParams();
  const navigate = useNavigate();
  const { isLoading } = useSelector (getUi);
  const dispatch = useDispatch();
  const  advert  = useSelector(getAdvertSelector(advertId));
  const unmounteRef = useRef(false);
  useEffect(() => {
    dispatch(advertLoad(advertId));
  }, [advertId]);
  
  useEffect(() => {
    return () => {
      unmounteRef.current = true;
    };
  }, []);
  const mutation = useMutation(deleteAdvert);
  
  
  const handleDelete = () => {
    mutation.execute(advertId).then(() => navigate('/'));
  }; 

  if (isLoading) {
    return 'Loading...';
  }

  return (
    advert && (
      <AdvertDetail
        onDelete={handleDelete}
        isLoading={isLoading}
        {...advert}
      />
    )
  );
}

export default AdvertPage;
