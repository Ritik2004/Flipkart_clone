import React, { useState } from 'react'
import {Box,Typography,Button,styled} from '@mui/material';

import axios from "axios"
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { addToCart } from '../../redux/actions/cartAction';




const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('md')]: {
      padding: '20px 40px'
  }
}))

const Image = styled('img')({
    width: '95%',
    padding:'15px'
});
 
const StyledButton = styled(Button)(({ theme }) => ({
  width:'48%',
  height:'50px',
  borderRadius:'2px',
  [theme.breakpoints.down('lg')]: {
      width:'46%'
  },
  [theme.breakpoints.down('sm')]: {
    width:'48%'
},

}))
  



const ActionItem = ({product}) => {

  const navigate= useNavigate();
  const[quantity, setQuantity] = useState(1);
  const {id}  = product;
  
  
  const dispatch = useDispatch();

  
  const initPayment = (data) => {
		const options = {
			key: process.env.REACT_APP_KEY_ID ,
			amount: data.amount,
			currency: data.currency,
			 
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "https://flipkartc-back.onrender.com/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

  const handlePayment = async () => {
    try{
     const orderUrl = "https://flipkartc-back.onrender.com/orders"
     const {data} = await axios.post(orderUrl, {amount:product.price.cost})
       console.log(data.data);
       initPayment(data.data)
     }
    catch(error){
      console.log(error);
    }
    }

  const addItemToCart = () =>{
    dispatch(addToCart(id, quantity));

      navigate('/cart');
  }


  return (
    <LeftContainer>
    <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%',}}>
      <Image src={product.detailUrl} alt="product"/>
      </Box>
      <StyledButton variant='contained' onClick={()=> addItemToCart()} style={{marginRight:10, background:'#ff9f00'}}><Cart />ADD TO CART</StyledButton>
      <StyledButton variant='contained' onClick={()=> handlePayment()} style={{background:'#fb641b'}}><Flash />Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem
