import React from 'react'
import { Box, Grid, Typography, styled, Button } from '@mui/material';

import { addEllipsis } from '../../utils/common-utils';

import { removeFromCart } from '../../redux/actions/cartAction';

import { useDispatch } from 'react-redux';

import ButtonGroup from './ButtonGroup';

const Component = styled(Box)`
  border-top: 1px solid #fefefe;
  display: flex;
  background: #fff;
`

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`
const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`
const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`;


const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
     
    const dispatch = useDispatch();

    const removeItemfromCart = (id) => {
          dispatch(removeFromCart(id));
    }
  
    return (
   <Component>
    <LeftComponent>
        <img src={item.url} alt='poduct' style={{height:110, width: 110}}/>
        <ButtonGroup/>

    </LeftComponent>
    <Box style={{margin:20}}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>Seller:RetailNet
        <Box component="span">
            <img src={fassured} alt="flipkart" style={{width: 50, marginLeft: 10}}/>
        </Box>
        </SmallText>
        <Typography style={{margin: '20px 0'}}>
            <Box component="span" style={{fontSize: 28}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{width: '#388E3C'}}>{item.price.discount}</Box>
           </Typography>
           <Remove onClick={()=>removeItemfromCart(item.id)}>Remove</Remove>
    </Box>
   </Component>
  )
}

export default CartItem
