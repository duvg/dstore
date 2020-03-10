import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import productsReducer, {getProductsAction} from './ducks/ProductsDuck';
import usersResucer from './ducks/UsersDucks';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let rootReducer = combineReducers({
    products: productsReducer,
    users: usersResucer,
    form: formReducer

})

export default function generateStore() {
    let store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        ) 
    );

    // cargar productos al inicio
    getProductsAction()(store.dispatch);

    return store;

}