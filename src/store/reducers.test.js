import { tagsLoadedSucces } from "./actions";
import { defaultState, tags } from "./reducers";

describe('tags', () => {
    test('Deberia retonar la accion TAGS_LOADED_SUCCESS', () => {
        const state = defaultState.tags;
        const action = tagsLoadedSucces();
        const resultado = tags(state, action);
        
        expect(resultado).toBeCalled;
    })

    test('Deberia retonar la accion por Defecto usando una accion diferente', () => {
        const state = defaultState.tags;
        const action = 'AUTH_LOGIN';
        const resultado = tags(state, action);
        
        expect(resultado).toBe(state);
    })

})