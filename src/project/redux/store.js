import {applyMiddleware, combineReducers, createStore} from 'redux';
import productsReducer from './reducers/productReducer'
import {addProductToBasket} from './middleWare'
const reducer = combineReducers({productsReducer})

const store = createStore(reducer,applyMiddleware(addProductToBasket));
window.store = store;
export default store;