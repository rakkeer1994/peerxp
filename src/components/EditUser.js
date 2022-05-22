import React, { useState, useEffect } from 'react'
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import { getUserEdit, getUserEditApi } from '../services/Api'
import {useNavigate, useParams} from 'react-router-dom'
const Formgrp=styled(FormGroup)`
width:50%;
margin: 10% auto 0 auto;
& > div{
    margin-top:2%          // formcontrol act like div and i have given css using inside parent ie formgroup
}
`
    const defaultUser={Name:"",Username:"", Email:"", Phone:""}
const EditUser = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [user,setUser]=useState(defaultUser)
    
    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    const editUserDetails= async ()=>{
      await getUserEditApi(user,id)
      navigate('/alluser')
    }

    useEffect(()=>{
        loadUserDetails()
    }, [])

    const loadUserDetails=async()=>{
     const response=await getUserEdit(id)
     setUser(response.data)
    }
  return (
    <Formgrp>
        <Typography variant='h4'>Edit User</Typography>
        <FormControl>  
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='Name' value={user.Name}/>
        </FormControl>

        <FormControl>
            <InputLabel>User Name</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='Username' value={user.Username}/>
        </FormControl>

        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='Email' value={user.Email}/>
        </FormControl>

        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='Phone' value={user.Phone} />
        </FormControl>

        <FormControl>
            <Button variant='contained' onClick={editUserDetails}>Update User</Button>
        </FormControl>
    </Formgrp>
  )
}

export default EditUser