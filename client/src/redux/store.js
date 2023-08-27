import {createStore, combineReducers, applyMiddleware} from 'redux';


//applyMiddleware is used to pass middleware inside devtools
import thunk from 'redux-thunk'

//this is used to attach with the redux dev tool
import {composeWithDevTools} from 'redux-devtools-extension'

import { getProductsReducer } from './reducer/productReducer';

const reducer = combineReducers({
    getProducts: getProductsReducer
})

const middleware = [thunk];

const store = createStore(
   reducer ,
   composeWithDevTools(applyMiddleware(...middleware)) 
)

export default store;