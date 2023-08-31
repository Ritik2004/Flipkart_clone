import React,{useEffect} from 'react'

import { Box, Typography, styled } from '@mui/material'
import MidSection from './MidSection'
import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide'
import MidSlide from './MidSlide'

import { getProducts } from '../../redux/actions/prouductAction'
import {useDispatch ,useSelector} from 'react-redux'

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;;
`

const Home = () => {

  const {products} = useSelector(state => state.getProducts)
 

const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch])

  return (
    <>
      <Navbar/>
      <Component>
      <Banner/>
      <MidSlide products={products} title="Deal of the day" timer={true}/>
      <MidSection/>
      <Slide products={products} title="Discounts for you" timer={false}/>
      <Slide products={products} title="Suggesting Items" timer={false}/>
      <Slide products={products} title="Top Selection" timer={false}/>
      <Slide products={products} title="Recommended Items" timer={false}/>
      <Slide products={products} title="Trending Offers" timer={false}/>
      <Slide products={products} title="Seasons's top picks" timer={false}/>
      <Slide products={products} title="Top Deals on Accessories" timer={false}/>

      </Component>
    </>
  )
}

export default Home
