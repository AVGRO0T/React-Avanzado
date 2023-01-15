import { useRef, useEffect } from 'react';
import { useParams} from 'react-router-dom';

import AdvertDetail from './AdvertDetail';
import storage from '../../../utils/storage';


import { useDispatch, useSelector } from 'react-redux';
import { getAdvertSelector, getUi } from '../../../store/selectors';
import { advertLoad, deleteAdvert, authLoginSuccess } from '../../../store/actions';

function AdvertPage() {
  const { advertId } = useParams();
 
  const { isLoading } = useSelector (getUi);
  const dispatch = useDispatch();
  const  advert  = useSelector(getAdvertSelector(advertId));

  const accessToken = storage.get('auth');
 
 
  const unmounteRef = useRef(false);
  useEffect(() => {
    if (!!accessToken){ // USADO PARA SABER SI HAY TOKEN EN EL STORAGE
      dispatch(authLoginSuccess());
    } 
    dispatch(advertLoad(advertId));
  }, [advertId,dispatch,accessToken]);
  
  useEffect(() => {
    return () => {
      unmounteRef.current = true;
    };
  }, []);
  
  
  
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
