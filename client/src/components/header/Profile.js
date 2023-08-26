import react, {useState} from 'react'
import {styled, Box,Button, Typography} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Component = styled(Menu)`
   margin-top: 5px;
  `
  ;

  const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
  `

const Profile = ({account, setAccount}) => {

    const[open,setOpen] = useState(false);
    const handleclick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const logoutuser = () => {
      setAccount('');
    }
  return (
    <>
      <Box onClick={handleclick}><Typography style={{marginTop: 2, cursor: 'pointer'}}>{account}</Typography></Box>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=> {handleClose(); logoutuser();}}>
        <PowerSettingsNewIcon color="primary" fontSize='small'/>
        <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  )
}

export default Profile
