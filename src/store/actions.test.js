import { authLogout, authLogoutSuccess, tagsLoadedSucces } from "./actions";
import { TAGS_LOADED_SUCCESS } from "./types";

describe ('tags', ( )=> {
    test('Deberia Retornar la accion Síncrona: TAGS_LOADED_SUCCESS', () =>{
    const tags = 'tags'
    const expectedAction = {
        type: TAGS_LOADED_SUCCESS,
        payload: tags,
        }
        const action = tagsLoadedSucces(tags);
        expect(action).toEqual(expectedAction);
    }) 
})

describe ('authLogout', () => { //accion Asyncrona
    const accion = authLogout();
    const dispatch = jest.fn();
    const api = { auth: {} };
    describe ('Cuando la promesa de la acción authLogout se resuelve',() => {
        test('Deberia hacer Logout', async () =>{
            api.auth.logout = jest.fn().mockResolvedValue();
           await accion(dispatch,undefined, { api });
            expect(api.auth.logout).toHaveBeenCalled
        });
    });
   

})