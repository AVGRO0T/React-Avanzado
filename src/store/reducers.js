import {AUTH_LOGIN_REQUEST, 
        AUTH_LOGIN_SUCCESS,
        AUTH_LOGIN_FAILURE,
        AUTH_LOGOUT_FAILURE,
        AUTH_LOGOUT_REQUEST,
        AUTH_LOGOUT_SUCCESS,
        UI_RESET_ERROR,
} from './types';



const defaultState = {
    auth: false,
    ui: {
      isLoading: false,
      error: null,
    },
};

export function auth( state = defaultState.auth, action){
    switch (action.type){
      case AUTH_LOGIN_SUCCESS: return true;
      case AUTH_LOGOUT_SUCCESS: return false;
      default: return state;
    }

}

export function ui(state = defaultState.ui, action) {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        error: null,
        isLoading: true,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        error: null,
        isLoading: false,
      };
    case AUTH_LOGIN_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
      };
    case UI_RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}