import { areLoadedAdverts, areLoadedTags } from './selectors';
import {AUTH_LOGIN_REQUEST, 
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGOUT_SUCCESS,
    UI_RESET_ERROR,
    ADVERTS_LOADED_SUCCESS,
    ADVERTS_LOADED_REQUEST,
    ADVERTS_LOADED_FAILURE,
    ADVERT_LOADED_SUCCESS,
    ADVERT_LOADED_REQUEST,
    ADVERT_LOADED_FAILURE,
    TAGS_LOADED_SUCCESS,
    TAGS_LOADED_FAILURE,
    TAGS_LOADED_REQUEST,
    NEW_ADVERTS_LOADED_FAILURE,
    NEW_ADVERTS_LOADED_SUCCESS,
    NEW_ADVERTS_LOADED_REQUEST,
    
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
    return async function (dispatch, getState, { api, router }) {
      try {
        dispatch(authLoginRequest());
        await api.auth.login(credentials);
        dispatch(authLoginSuccess());
        
          const from = router.state.location.state?.from?.pathname || '/';
          router.navigate(from, { replace: true });
       
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

  
  //TAGS ACTIONS
export const tagsLoadedSucces = (tags) => ({
  type:TAGS_LOADED_SUCCESS,
  payload: tags,
});
export const tagsLoadedFailure = error => ({
  type: TAGS_LOADED_FAILURE,
  payload: error,
  error: true,
});
export const tagsLoadedRequest = () => ({
  type: TAGS_LOADED_REQUEST,

}); 

export const tagsLoad = () => {
  return async function (dispatch, getState, { api }) {

  const areLoaded = areLoadedTags(getState());
  if (areLoaded) return; 

    try {
      dispatch(tagsLoadedRequest());
          const tags  = await api.adverts.getTags();
          dispatch(tagsLoadedSucces(tags));
          
          } catch (error) {
            dispatch(tagsLoadedFailure(error));
          }
        }
  };
  
  
  
  
  // ADVERTS ACTIONS
  export const advertsLoadedSucces = (adverts) => ({
    type: ADVERTS_LOADED_SUCCESS,
    payload: adverts,
  });
  export const advertsLoadedFailure = error => ({
    type: ADVERTS_LOADED_FAILURE,
    payload: error,
    error: true,
  });
  export const advertsLoadedRequest = () => ({
    type: ADVERTS_LOADED_REQUEST,
   
  }); 
  
  export const advertsLoad = () => {
    return async function (dispatch, getState, { api }) {
      const areLoaded = areLoadedAdverts(getState());
      if (areLoaded) return;
  
      try {
        dispatch(advertsLoadedRequest());
        const adverts = await api.adverts.getAdverts();
        dispatch(advertsLoadedSucces(adverts));
      } catch (error) {
        dispatch(advertsLoadedFailure(error));
      }
    };
  };

  //ADVERT DATAIL ACTIONS 
  export const advertLoadedSucces = (advert) => ({
    type: ADVERT_LOADED_SUCCESS,
    payload: advert,
  });
  export const advertLoadedFailure = error => ({
    type: ADVERT_LOADED_FAILURE,
    payload: error,
    error: true,
  });
  export const advertLoadedRequest = () => ({
    type: ADVERT_LOADED_REQUEST,
   
  }); 


  //NEW ADVERTS ACTIONS 

  export const newAdvertsLoadedSucces = (adverts) => ({
    type: NEW_ADVERTS_LOADED_SUCCESS,
    payload: adverts,
  });
  export const newAdvertsLoadedFailure = error => ({
    type: NEW_ADVERTS_LOADED_FAILURE,
    payload: error,
    error: true,
  });
  export const newAdvertsLoadedRequest = () => ({
    type: NEW_ADVERTS_LOADED_REQUEST
  }); 

  export const advertCreate = advert => {
    return async function (dispatch, getState, { api, router }) {
      try {
        dispatch(newAdvertsLoadedRequest());
        const { id } = await api.adverts.createAdvert(advert);
        const createdAdvert = await api.adverts.getAdvert(id);
        dispatch(newAdvertsLoadedSucces(createdAdvert));
        router.navigate(`/adverts/${createdAdvert.id}`);
        return createdAdvert;
      } catch (error) {
        dispatch(newAdvertsLoadedFailure(error));
      }
    };
  };