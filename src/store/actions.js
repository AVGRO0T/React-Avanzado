import {AUTH_LOGIN_REQUEST, 
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGOUT_FAILURE,
    AUTH_LOGOUT_REQUEST,
    AUTH_LOGOUT_SUCCESS,
} from './types';

export const authLoginSuccess = () => ({
    type: AUTH_LOGIN_SUCCESS,
  });
  
export const authLoginFailure = error => ({
    type: AUTH_LOGIN_FAILURE,
    payload: error,
    error: true,
  });
  
export const authLogoutSuccess = () => ({
    type: AUTH_LOGOUT_SUCCESS,
  });