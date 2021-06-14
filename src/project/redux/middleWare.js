import {actions} from './actions'
export const addProductToBasket = ({ dispatch, getState }) => next => action => {
    if (action.type === "ADD_PRODUCT_TO_BASKET") {
       var product={...action.payload};
        product.amount = 1;
        product.disable=1;
        product.totalPrice=product.price;
        dispatch(actions.addProduct(product))
    }
    // call the next function
    return next(action);
}
