import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaTrain} from 'react-icons/fa'
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button, Grid } from '@mui/material'

const Formgrp=styled(FormGroup)`width:24%;position:absolute;top:20%;background-color:white;height:60vh;
box-shadow:7px 7px 59px lightblue; lightblue;left:1%;padding:3%;
// margin: 10% auto 0 auto;
& > div{
    margin-top:5%          // formcontrol act like div and i have given css using inside parent ie formgroup
}
`
    const defaultUser={Name:"",Username:"", Email:"", Phone:""}
const ResetPass = () => {
   
    const [user,setUser]=useState(defaultUser)
    
    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
      
    }

    const addUserDetails= async ()=>{
    
    }
  return (
    <div className='bodyBackground'>
        <Formgrp>
        <div className='trainIcon'><FaTrain/></div>
        <Typography variant='h4' style={{textAlign:"center"}}>IRCTC</Typography>
        <Typography variant='h6' style={{textAlign:"center", textDecoration:"underline"}}>Reset Your Password</Typography>
    

        <FormControl>
            <InputLabel>New Password</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='Username' />
        </FormControl>

      

        <FormControl>
            <InputLabel>Confirm New Password</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='Phone' type='password'/>
        </FormControl>
        
      
        <FormControl>
            <Link to='/sendOtp' style={{textDecoration:"none",textAlign:"center"}}><Button variant='contained' onClick={addUserDetails}>Reset Password</Button></Link>
        </FormControl>

      
    </Formgrp>    
    </div>
  )
}

export default ResetPass