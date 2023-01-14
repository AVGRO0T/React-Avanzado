import { Link } from 'react-router-dom';
import { ConfirmationButton } from '../../common';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout} from '../../../store/actions';
import { getIsLogged } from '../../../store/selectors';

const AuthButton = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(getIsLogged);
  const handleLogoutConfirm = async () => { 
    dispatch(authLogout());
    
  };

  return isLogged ? (
    <ConfirmationButton
      confirmation="Are you sure?"
      onConfirm={handleLogoutConfirm}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
};



export default AuthButton;
