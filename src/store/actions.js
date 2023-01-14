import {AUTH_LOGIN_REQUEST, 
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGOUT_SUCCESS,
    UI_RESET_ERROR,
    ADVERTS_LOADED_SUCCESS,
    ADVERTS_LOADED_REQUEST,
    ADVERTS_LOADED_FAILURE,
    AUTH_LOGOUT_REQUEST,
    AUTH_LOGOUT_FAILURE,
} from './types';
//AUTH  LOGIN ACTIONS 
export const authLoginSuccess = () => ({
    type: AUTH_LOGIN_SUCCESS,
  });

export const authLoginRequest = () => ({
    type: AUTH_LOGIN_REQUEST,
   });
  
export const authLoginFailure = error => ({
    type: AUTH_LOGIN_FAILURE,
    payload: error,
    error: true,
  });
  
  export const authLogin = credentials => {
    return async function (dispatch, getState, { api }) {
      try {
        dispatch(authLoginRequest());
        await api.auth.login(credentials);
        dispatch(authLoginSuccess());
      } catch (error) {
        dispatch(authLoginFailure(error));
        throw error;
      }
    };
  };
//AUTH LOGOUT ATIONS
export const authLogoutSuccess = () => ({
    type: AUTH_LOGOUT_SUCCESS,
  });

export const authLogout = () => {
    return async function (dispatch, getState, { api }) {
      await api.auth.logout();
      dispatch(authLogoutSuccess());
    };
  };

// UI ACTIONS
  export const uiResetError = () => ({
    type: UI_RESET_ERROR,
  });

  
