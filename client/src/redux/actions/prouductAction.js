import axios from "axios"

import * as actionTypes from '../constants/productConstant'

const URL = "http://localhost:8000"

export const getProducts = () => async (dispatch) => {
 
    try{
        //    let response = await axios.get(`${URL}/products`);
           //in payload we will send everyting we get by hitting the API.
           //we will get object from that object we want only data
           //so we are destructuring
          
           const {data} = await axios.get(`${URL}/products`);

           dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS, payload:data })
           //as we call dispatch reducer will be called

    }
    catch(error){
       dispatch({type:actionTypes.GET_PRODUCTS_FAIL, payload:error.message})
    }
}