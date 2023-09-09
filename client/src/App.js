import React, { useState} from 'react';

import Header from './components/header/Header'
import Home from './components/home/Home'
import DetailView from './components/details/DetailView';

import Cart from './components/cart/Cart';

import DataProvider from './context/DataProvider';
import ChatBot from './chatBot/ChatBot';
import Button from './chatBot/Button'
import { Box } from '@mui/material';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
   const [isChatOpen, setIsChatOpen] = useState(false);
  
   const toggleChat = () => {
      setIsChatOpen(!isChatOpen);
    };

 return(
    <DataProvider>
    <BrowserRouter>
    <Header/>
    <Box style={{marginTop:54}}>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product/:id" element={<DetailView/>}/>
    <Route path='/cart' element={<Cart/>}/>
     
    </Routes>
   
    </Box>
    {isChatOpen && <ChatBot />}
    <Button onClick={toggleChat} />
    </BrowserRouter>
    </DataProvider>
 )
}

export default App;
  