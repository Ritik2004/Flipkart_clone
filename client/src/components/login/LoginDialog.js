import React from 'react'
 import { useState } from 'react';
import {Dialog, Box, TextField, Typography, Button,styled} from '@mui/material';


const Component = styled(Box)`
     height: 70vh;
     width: 90vh;
`
const Image = styled(Box)`
   background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
   height: 83%;
   width: 28%;
   padding: 45px 35px;
    &>p, &>h5{
       color:#ffffff;
       font-weight: 600;
    }
`;

const LoginButton = styled(Button)`
 text-transform: none;
 background: #FB641B;
 color:#fff;
 height: 48px;
 border-radius: 2px;
`
const RequestOtp = styled(Button)`
 text-transform: none;
 background: #fff;
 color: #2874f0;
 height: 48px;
 border-radius: 2px;
 box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)
`


const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 5px;
  flex: 1;
  & > div, & > button, &>p {
       margin-top: 20px;
  }
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`

const CreateAccount = styled(Typography)`
 font-size: 12px;;
 text-align: center;
 color: #2874f0;
 font-weight: 600;
 cursor: pointer;
`
const accountInitialValues = {
    login:{
        view: 'login',
        heading:'Login',
        subheading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view:'signup',
        heading:"Looks like you're new here",
        subheading:"sign up with your mobile number to get started",

    }
}

const signupInitialVal = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:'',
}

const LoginDialog = ({open, setOpen}) => {

    //Below state is used to switch bw login and signup pages
    const [account, toggleAccount] = useState(accountInitialValues.login); 
    
    const [signup, setSignup] = useState(signupInitialVal);

    const handlClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login)
    }
    const toggleSignup = () => {
       toggleAccount(accountInitialValues.signup);
       
    }
    const onInputchange = (e) => {
          setSignup({...signup, [e.target.name]:e.target.value})
          console.log(signup)
    }

    const signupUser =()=>{
        
    }
  return (
    <div>   
      <Dialog open={open} onClose={handlClose} PaperProps={{sx: {maxWidth:'unset'}}}>
          <Component>
          <Box style={{display:'flex', height:'100%'}}>
            <Image>
                 <Typography variant='h5'>{account.heading}</Typography>
                 <Typography style={{marginTop: 20}}>{account.subheading}</Typography>
            </Image>
            { account.view === 'login' ?
            <Wrapper>
               <TextField variant="standard" label="Enter Email/Mobile number."/>
               <TextField variant='standard' label="Enter Password"/>
               <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
               <LoginButton>Login</LoginButton>
               <Typography style={{textAlign:'center'}}>OR</Typography>
               <RequestOtp>Request OTP</RequestOtp>
               <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
            :

            <Wrapper>
               <TextField variant='standard' onChange={(e)=> onInputchange(e)} name='firstname' label="Enter FirstName"/>
               <TextField variant='standard' onChange={(e)=> onInputchange(e)} name='lastname' label="Enter LastName"/>
               <TextField variant='standard' onChange={(e)=> onInputchange(e)} name='username' label="Enter username"/>
               <TextField variant='standard' onChange={(e)=> onInputchange(e)} name='email' label="Enter Email"/>
               <TextField variant='standard' onChange={(e)=> onInputchange(e)} name='password' label="Enter Password"/>
               <TextField variant='standard' onChange={(e)=> onInputchange(e)} name='phone' label="Enter Phone nos"/>
              
               
               <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
            </Wrapper>
            }
            </Box>
          </Component>
      </Dialog>
    </div>
  )
}


export default LoginDialog
