import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
//import productsReducer, {getProductsAction} from './ducks/ProductsDuck';
import productsReducer, { getProductsThunk } from './ducks/ProductsDuck';
import usersReducer from './ducks/UsersDucks';
import sellersReducer from './ducks/SellerDuck';
import cartReducer from './ducks/CartDuck';
import categoriesReducer, { getCategoriesThunk } from './ducks/CategoryDuck';
import thunk from 'redux-thunk';


let rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    sellers: sellersReducer,
    users: usersReducer,
    cart: cartReducer,
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
    getProductsThunk()(store.dispatch);
    
    // Cargar las categorias del menu
    getCategoriesThunk()(store.dispatch);

    return store;
}