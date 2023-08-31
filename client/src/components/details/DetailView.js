import React,{useEffect} from 'react'

import {styled, Box,Button, Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { getProductsDetail } from '../../redux/actions/prouductAction'

const DetailView = () => {
   const dispatch = useDispatch();

   const { id } = useParams();
const {loading, product} = useSelector(state => state.getProductsDetail)
   
   useEffect(()=>{
    if(product && id!==product.id)
        dispatch(getProductsDetail(id))
    }, [dispatch, id, product, loading])

  return (
    <Box>
      {
       product && Object.keys(product).length &&
        <Box>
         <Box></Box>
         <Box>
            <Typography>{product.title}</Typography>
         </Box>
        </Box>
      }
    </Box>
  )
}

export default DetailView
