import React,{useEffect} from 'react'

import { Box, Typography, styled } from '@mui/material'

import Navbar from './Navbar'
import Banner from './Banner'

import { getProducts } from '../../redux/actions/prouductAction'
import {useDispatch ,useSelector} from 'react-redux'

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;;
`

const Home = () => {

 const getProducts = useSelector(state => state.getProducts)
 const{products} = getProducts;

const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch])

  return (
    <>
      <Navbar/>
      <Component>
      <Banner/>
      </Component>
    </>
  )
}

export default Home
