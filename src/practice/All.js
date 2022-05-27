import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

import { getUser, deleteUserApi } from '../services/Api'


import {Table,TableHead,TableRow,TableCell, Button} from '@mui/material'
const AllUser = (props) => {
  console.log("props",props.collectDatas)
  const [showUsers,setShowUsers]=useState([])
  useEffect(()=>{
       setShowUsers(props.collectDatas)
       
  },[])

  const getAllUsers=()=>{
          
          
  }
  const deleteUserDetails=(id)=>{
   
  }
 console.log("user at allcomponenet", showUsers)
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
          <Button variant='contained' style={{marginRight:"10px"}} >EDIT</Button>
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