import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

import { getUser, deleteUserApi } from '../services/Api'


import {Table,TableHead,TableRow,TableCell, Button} from '@mui/material'
const AllUser = () => {
  
  const [showUsers,setShowUsers]=useState([])
  useEffect(()=>{
       getAllUsers()
       
  },[])

  const getAllUsers=async()=>{
          let getUserRes=await getUser()
          setShowUsers(getUserRes.data)
          
  }
  const deleteUserDetails=async(id)=>{
   await deleteUserApi(id)
   getAllUsers()
  }
 
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
        {
          showUsers.map((val)=>{
            return(
         <TableRow key={val._id+1}>
          <TableCell>{val._id}</TableCell>
          <TableCell>{val.Name}</TableCell>
          <TableCell>{val.Username}</TableCell>
          <TableCell>{val.Phone}</TableCell>
          <TableCell>
            <Link to={`/edituser/${val._id}`}><Button variant='contained' style={{marginRight:"10px"}} >EDIT</Button></Link>
            <Button variant='contained' color='secondary' onClick={()=>deleteUserDetails(val._id)}>DELETE</Button>
          </TableCell>
        </TableRow>
            )
          })
        }
      </TableHead>
    </Table>
  )
}

export default AllUser