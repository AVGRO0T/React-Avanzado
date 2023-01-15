import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { defaultState } from '../../../store/reducers'
import LoginPage from './LoginPage'
import { authLogin } from '../../../store/actions'

jest.mock('../../../store/actions');

describe('LoginPage', () => {
    
        
        const store = {
            getState:()=>defaultState,
            dispatch: jest.fn(),
            subscribe: () => {},
        }
        const renderComponent = () =>
        render(
          <Provider store={store}>
            <LoginPage />
          </Provider>,
        );
    
      test('Creando una Snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
      });
      /* test('should dispatch authLogin action', () => {
        const credentials = {
            email: 'nicolas@paycom.es',
            password: 'string',
            remember: false,
        }
       renderComponent();
        
        expect(authLogin).toHaveBeenLastCalledWith({email:'nicolas',password:'string',remeber:false});
      }); */
});