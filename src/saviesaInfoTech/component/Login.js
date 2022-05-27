import React, { useState } from 'react'
import Dashboard from './Dashboard'
import {Link} from 'react-router-dom'
import {FaTrain} from 'react-icons/fa'


import {AiFillCheckCircle} from 'react-icons/ai'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button, Grid } from '@mui/material'
import Navbar from './Navbar'
import trainImg from './train2.jpg'

    const defaultUser={Name:"",Username:"", Email:"", Phone:""}
const Login = () => {
    
    const [user,setUser]=useState(defaultUser)
    const [showDesh,setShowDesh]=useState(true)
    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
      
    }

    const addUserDetails= async ()=>{
       setShowDesh(!showDesh)
    }
  return (
    <>
   {
       showDesh ?  <div className='bodyBackground'>
           
       <FormGroup className='loginFormRes'>
           
         <div className='trainIcon'><FaTrain/></div>
       <Typography variant='h4' style={{textAlign:"center"}}>IRCTC</Typography>
       <Typography variant='h6' style={{textAlign:"center", textDecoration:"underline"}}>Station Manager Log In</Typography>
     

       <FormControl className='frmControl'>
           <InputLabel>User Name</InputLabel>
           <Input onChange={(e)=> onValueChange(e)} name='Username' required/>
       </FormControl>

       

       <FormControl className='frmControl'>
           <InputLabel>Password</InputLabel>
           <Input onChange={(e)=> onValueChange(e)} name='Phone' type='password' required/>
       </FormControl>
       <br></br> 
       <div>
           <div>Remember Me <AiFillCheckCircle/> </div>
           <div><Link to='/resetPass' style={{textDecoration:"none"}}>Forgot Password</Link></div>
       </div>
       <br></br> 
       <FormControl>
           <Button variant='contained' onClick={addUserDetails}>Log In</Button>
       </FormControl>
       <br></br> <br></br>
     <div><span>New to IRCTC??</span> <span>Create an acount</span></div>
   </FormGroup>    
   </div> : <Navbar/>
   }
    </>
  )
}

export default Login