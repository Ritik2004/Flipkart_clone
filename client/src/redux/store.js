import {createStore, combineReducers, applyMiddleware} from 'redux';


//applyMiddleware is used to pass middleware inside devtools
import thunk from 'redux-thunk'

//this is used to attach with the redux dev tool
import {composeWithDevTools} from 'redux-devtools-extension'

import { getProductsReducer, getProductDetailReducer } from './reducer/productReducer';


const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailReducer
})

const middleware = [thunk];

const store = createStore(
   reducer ,
   composeWithDevTools(applyMiddleware(...middleware)) 
)

export default store;