import React from 'react'
import {Box,Typography,Grid,styled,Table,TableRow, TableBody, TableCell} from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;


const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border:none;
    }
`


const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
  return (
    <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>8 Ratings & 1 Reviews
           <Box component="span"><img src={fassured} style={{width: 77, marginLeft: 20}} /></Box>
           </Typography>
           <Typography>
            <Box component="span" style={{fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{width: '#388E3C'}}>{product.price.discount}</Box>
           </Typography>
           <Typography>Available Offers</Typography>
           <SmallText>
                <Typography><StyledBadge />Special PriceGet extra 7% off (price inclusive of cashback/coupon)</Typography>
                <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</Typography>
                <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply T&C</Typography>
                <Typography><StyledBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs T&C</Typography>
                <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase T&C</Typography>
           </SmallText>
           <Table>
            <TableBody>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                <TableCell>No Warranty</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Seller</TableCell>
                <TableCell style={{color:'#2874f0'}}>
                    <Box component="span" fontStyle={{color:'#2874f0'}}>
                        SuperComnet
                    </Box>
                    <Typography>GST invoice available</Typography>
                    <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                </TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell colSpan={2}>
                   <img src={adURL} style={{width: 390}} alt="flipkartpoints"/>
                </TableCell>
                </ColumnText>
                <ColumnText>
                <TableCell style={{color:'#878787'}}>Description</TableCell>
                <TableCell>{product.description}</TableCell>
            </ColumnText>
            
            </TableBody>
           </Table>
    </>
  )
}

export default ProductDetail
