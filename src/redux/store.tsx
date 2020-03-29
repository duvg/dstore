import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import productsReducer, {getProductsAction} from './ducks/ProductsDuck';
import usersReducer from './ducks/UsersDucks';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
    products: productsReducer,
    users: usersReducer,
})

export default function generateStore() {
    let store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                trace: true, // (action) => { return ‘trace as string’; }
                traceLimit: 25,
             }) && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
            //(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        ) 
    );

    // cargar productos al inicio
    getProductsAction()(store.dispatch);

    return store;

}