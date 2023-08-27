import axios from "axios"

const URL = "http://localhost:8000"

export const getProducts = () => async (dispatch) => {
 
    try{
           let response = await axios.get("")
    }
    catch(error){
       console.log('Error while calling api', error.message)
    }
}