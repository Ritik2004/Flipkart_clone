import axios from 'axios';
import * as actionTypes from '../constants/cartConstant.js';

const URL = 'https://flipkartc-back.onrender.com';

export const addToCart = (id,quantity) => async(dispatch) => {
      try{
         const {data} = await axios.get(`${URL}/product/${id}`);

         dispatch({type:actionTypes.ADD_TO_CART, payload: {...data, quantity}})
      }
      catch(error){
        console.log('Error while calling cart API');
      }
}

export const removeFromCart =  (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
}