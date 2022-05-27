import React from 'react'
import {FaTrain} from 'react-icons/fa'
import { FormControl, FormGroup,Typography, styled, Button } from '@mui/material'

const Formgrp=styled(FormGroup)`width:24%;position:absolute;top:20%;background-color:white;height:60vh;
box-shadow:7px 7px 59px lightblue; lightblue;left:1%;padding:3%;
// margin: 10% auto 0 auto;
& > div{
    margin-top:5%          // formcontrol act like div and i have given css using inside parent ie formgroup
}
`
    
const Login = () => {

    
  const onValueChange=(e)=>{
        // setUser({...user,[e.target.name]:e.target.value})
      
    }

    
  return (
    <div className='bodyBackground'>
        <Formgrp>
        <div className='trainIcon'><FaTrain/></div>
        <Typography variant='h4' style={{textAlign:"center"}}>IRCTC</Typography>
        <Typography variant='h6' style={{textAlign:"center", textDecoration:"underline"}}>OTP Verification</Typography>
        
        <div className='sendotp'>
            <div></div> <div></div> <div></div> <div></div>
        </div>
         
         <div style={{textAlign:"center",fontSize:"1.3rem",color:"blue"}}>Resend Otp</div>
        <FormControl>
            <Button variant='contained'>Verify Otp</Button>
        </FormControl>

      
    </Formgrp>    
    </div>
  )
}

export default Login