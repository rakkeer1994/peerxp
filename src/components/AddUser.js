import React, { useState } from 'react'
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import { addUserApi } from '../services/Api'
import {useNavigate} from 'react-router-dom'
const Formgrp=styled(FormGroup)`
width:50%;
margin: 10% auto 0 auto;
& > div{
    margin-top:2%          // formcontrol act like div and i have given css using inside parent ie formgroup
}
`
    const defaultUser={Name:"",Username:"", Email:"", Phone:""}
const AddUser = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState(defaultUser)
    
    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
      
    }

    const addUserDetails= async ()=>{
      await addUserApi(user)
      navigate('/alluser')
    }
  return (
    <Formgrp>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>  
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='Name'/>
        </FormControl>

        <FormControl>
            <InputLabel>User Name</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='Username' />
        </FormControl>

        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='Email'/>
        </FormControl>

        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='Phone' />
        </FormControl>

        <FormControl>
            <Button variant='contained' onClick={addUserDetails}>Add User</Button>
        </FormControl>
    </Formgrp>
  )
}

export default AddUser