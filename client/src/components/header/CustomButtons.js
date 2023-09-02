import { useState, useContext } from 'react';

import {styled, Box,Button, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DataContext } from '../../context/DataProvider';
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      textDecoration: 'none',
      color: '#FFFFFF',
      fontSize: 12,
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
          color: '#2874f0',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10
      }
  },
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));


const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));


const Loginbtn = styled(Button)`
  color:#2874f0;
  background: #FFFFFF;
  text-transform: none;
  padding:5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 34px;

`
const CustomButtons = () => {

  const[open,setOpen] = useState(false);

  const {account, setAccount} = useContext(DataContext);
 
  const openDialog = () => {
    setOpen(true);
  }

  return (
 <Wrapper>
 {
   account ? <Profile account={account} setAccount={setAccount}/>
   :
   <Loginbtn variant='contained' onClick={()=> openDialog()} >Login</Loginbtn>
 }
  
   <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
   <Typography style={{marginTop: 3}}>More</Typography>

   <Container>
   <ShoppingCartIcon/>
    <Typography>Cart</Typography>
   </Container>
   <LoginDialog open={open} setOpen={setOpen}/>
 </Wrapper>
  )
}

export default CustomButtons
