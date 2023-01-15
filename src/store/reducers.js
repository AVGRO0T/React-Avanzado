import {
  ADVERTS_LOADED_SUCCESS,
  ADVERT_LOADED_SUCCESS,
        AUTH_LOGIN_SUCCESS,
        AUTH_LOGOUT_SUCCESS,
       DELETE_ADVERT_SUCCESS,
       NEW_ADVERTS_LOADED_SUCCESS,
       TAGS_LOADED_SUCCESS,
        UI_RESET_ERROR,
} from './types';



const defaultState = {
    auth: false,
    adverts:{
      areLoaded: false,
      data: [],
    },
    tags: {
      areLoaded: false, 
      data:[],
    },
    ui: {
      isLoading: false,
      error: null,
    },
};

//AUTH
export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
}

//ADVERTS 
export function adverts(state = defaultState.adverts,action) {
  if (action.type === ADVERTS_LOADED_SUCCESS){
    return {areLoaded: true, data: action.payload };
  }
  if (action.type === ADVERT_LOADED_SUCCESS){
    return { state, data:action.payload };
  }
  if (action.type === NEW_ADVERTS_LOADED_SUCCESS){
    return { ...state, data: [action.payload, ...state.data] };
  }
  if (action.type === DELETE_ADVERT_SUCCESS){
    return { state, data:action.payload };
  }
  return state;
}

//TAGS
export function tags (state = defaultState.tags,action) {
  if(action.type === TAGS_LOADED_SUCCESS){
    return {areLoaded: true, data: action.payload };
  }
  return state;
}

//UI
export function ui(state = defaultState.ui, action) {
  if (action.error) {
    return {
      isLoading: false,
      error: action.payload,
    };
  }
  if (/_REQUEST$/.test(action.type)) {
    return {
      error: null,
      isLoading: true,
    };
  }
  if (/_SUCCESS$/.test(action.type)) {
    return {
      error: null,
      isLoading: false,
    };
  }
  if (action.type === UI_RESET_ERROR) {
    return {
      ...state,
      error: null,
    };
  }
  return state;
}