export const getIsLogged = state => state.auth;

export const getUi = state => state.ui;

export const getFilters = state => state.filters;

export const getAdvertsSelector = state => 
    state.adverts.areLoaded ? state.adverts.data : [];

export const areLoadedAdverts = state => state.adverts.areLoaderd;