import { AnyAction, Dispatch} from 'redux';
import { IState } from './index';
import { ILogin } from '../../Interfaces/UserInterfaces';


// Constantes
const START_USER_LOGIN = "START_USER_LOGIN";

export default function reducer(state = {}, action: AnyAction) {
    switch (action.type) {
        case START_USER_LOGIN:
            return {
                ...state,
            }    
        default:
            return state;
    }
}

export const login = ({email, password}: ILogin) =>
    (dispatch: Dispatch, getState: () => IState) => {
        console.log(email, password);
    }