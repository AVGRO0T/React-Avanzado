import { useRef, useEffect } from 'react';
import { useParams} from 'react-router-dom';

import AdvertDetail from './AdvertDetail';


import useMutation from '../../../hooks/useMutation';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertSelector, getUi } from '../../../store/selectors';
import { advertLoad, deleteAdvert } from '../../../store/actions';

function AdvertPage() {
  const { advertId } = useParams();
 
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
  
  
  const handleDelete = async () => {
    dispatch(deleteAdvert(advertId))
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
