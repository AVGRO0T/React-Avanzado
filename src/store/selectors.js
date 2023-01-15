export const getIsLogged = state => state.auth;




export const getAdvertsSelector = state => 
state.adverts.areLoaded ? state.adverts.data : [];

export const areLoadedAdverts = state => state.adverts.areLoaded;

export const areLoadedTags = state => state.tags.areLoaded;


export const getTagsSelector = state => 
state.tags.areLoaded ? state.tags.data : [];


export const getAdvertSelector = advertId => state => {
  
  return state.adverts.data.find(advert => advert.id === advertId) ;
}

export const getUi = state => state.ui;
