import { getAdvertSelector } from "./selectors";

describe('getAdvert', () => {
  test('Deberia Retornar un anuncion con el ID', () => {
    const advertId = 'asfsafcasf12vd';
    const adverts = [{ id: advertId }];
    const state = { adverts: { data: adverts } };
    expect(getAdvertSelector(advertId)(state)).toBe(adverts[0]);
  });

   test('Deberia retornar undefined ', () => {
   const advertId = '98212231';
    const adverts = [{ id: advertId }];
    const state = { adverts: { data: adverts } };
    expect(getAdvertSelector(advertId)(state)).toBe(adverts[0])
  }); 
});
