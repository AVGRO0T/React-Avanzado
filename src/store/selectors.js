export const getIsLogged = state => state.auth;

export const getUi = state => state.ui;



export const getAdvertsSelector = state => 
state.adverts.areLoaded ? state.adverts.data : [];

export const areLoadedAdverts = state => state.adverts.areLoaded;

export const areLoadedTags = state => state.tags.areLoaded;


export const getTagsSelector = state => 
state.tags.areLoaded ? state.tags.data : [];

export const getAdvert = advertId => state =>
  state.advert.data.find(advert => advert.id.toString() === advertId);