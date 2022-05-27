import React, { useState } from 'react'
import { Button} from '@mui/material'
import AddUser from './AddUser'
import AllUser from './All'
const App = () => {

    const [showForm,setShowForm]=useState(false)
    const [collectData,setCollectData]=useState([])
    const getData=(data)=>{
        console.log("data recieved at app", data)
        setCollectData(data)
    }
  return (
    <>
    <center><h1>All User</h1></center>
    <center><Button variant='contained' onClick={()=>setShowForm(!showForm)}>Add New</Button></center>
    <AllUser collectDatas={collectData}/>
    {showForm ? <AddUser getData={getData}/> : null}
    </>
  )
}

export default App