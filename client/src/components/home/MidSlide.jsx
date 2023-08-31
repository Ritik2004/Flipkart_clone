import { Box, styled } from '@mui/material' 
import Slide from './Slide'

const Component = styled(Box)`
    display: flex;

`
const LeftCom = styled(Box)(({theme})=>({
 width: '83%',
 [theme.breakpoints.down('md')]:{
    width:'100%'
 }
}))

const RightCom = styled(Box)(({theme}) => ({
 background: '#FFFFF',
 padding: '5px',
 marginTop: 10,
 marginLeft: 10,
 width: '17%',
 textAlign: 'center',
 [theme.breakpoints.down('md')]:{
    display:'none'
 }
}))

  const MidSlide = ({products, title, timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Component>
        <LeftCom>
            <Slide 
            products={products}
            title={title}
             timer={true}/>
        </LeftCom>
        <RightCom>
          <img src={adURL} alt="" style={{width:217}}/>
        </RightCom>

        </Component>
    )
  }

  export default MidSlide