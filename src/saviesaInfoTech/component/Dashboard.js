import React, { useState } from 'react'
import {FaHome} from  'react-icons/fa'
import {BsFillCartPlusFill} from  'react-icons/bs'
import {AiFillDislike} from  'react-icons/ai'
import {BsEyeFill} from  'react-icons/bs'
import {FaHistory} from  'react-icons/fa'
import {GrUserSettings} from  'react-icons/gr'
import {AiFillCheckCircle} from  'react-icons/ai'
import {TiDelete} from  'react-icons/ti'

import {Table,TableHead,TableRow,TableCell, Button} from '@mui/material'
const Dashboard = () => {
    const [showDeshbord,setShowDeshbord]=useState("deshbord")
  return (
    <div className='deshbordContainer'>
        
        <div className='deshbordRightContainer'>
            <div><FaHome onClick={()=>setShowDeshbord("deshbord")}/> <span>Dashboard</span></div>
            <div ><BsFillCartPlusFill onClick={()=>setShowDeshbord("addservices")}/> <span>Add Services</span></div>
            <div><BsFillCartPlusFill onClick={()=>setShowDeshbord("manageservices")}/> <span>Manage Services</span></div>
            <div><AiFillDislike onClick={()=>setShowDeshbord("complaint")}/> <span>Complaint</span></div>
            <div><BsEyeFill onClick={()=>setShowDeshbord("inspection")}/> <span> Inspection</span></div>
            <div><FaHistory onClick={()=>setShowDeshbord("serviceHistory")}/> <span>Service History</span></div>
            <div><GrUserSettings onClick={()=>setShowDeshbord("profile")}/> <span>Profile Setting</span></div>
        </div>
        {
            showDeshbord==="deshbord" && <div className='deshbordLeftContainer' >
            <div className='dashbordDetails'>
                <h1 className='deshHeading'>Dashboard</h1>
                <div style={{display:"flex"}}>
                      <div className='servicesDetails'><p>New Services</p><p>02</p> </div>
                      <div className='servicesDetails'><p>In Process Services</p><p>05</p> </div>
                      <div className='servicesDetails'><p>Processed Services</p><p>05</p> </div>
                </div>
            <div className='tableContainer'>
                 <div className='table1'>
                     <h3 className='deshHeading'>New Servics</h3>
                 <Table>
      <TableHead>
        <TableRow style={{backgroundColor:"black"}}>
        <TableCell style={{color:"white"}}>Name</TableCell>
          <TableCell style={{color:"white"}}>Train Info</TableCell>
          <TableCell style={{color:"white"}}>Delivery Time</TableCell>
          <TableCell style={{color:"white"}}>Items</TableCell>
          <TableCell style={{color:"white"}}>Action</TableCell>
        </TableRow>
      </TableHead>

       <TableRow>
       <TableCell>Name</TableCell>
          <TableCell>Train Info</TableCell>
          <TableCell>Delivery Time</TableCell>
          <TableCell>Items</TableCell>
          <TableCell >
              <AiFillCheckCircle className='deleteIcon'/>
              <TiDelete className='deleteIcon'/>
          </TableCell>
        </TableRow>
    </Table>
                 </div>

                 <div className='table2'>
                     <h3 className='deshHeading'>In Process Servics</h3>
                     <Table>
      <TableHead>
        <TableRow style={{backgroundColor:"black"}}>
        <TableCell style={{color:"white"}}>Name</TableCell>
          <TableCell style={{color:"white"}}>Train Info</TableCell>
          <TableCell style={{color:"white"}}>Delivery Time</TableCell>
          <TableCell style={{color:"white"}}>Items</TableCell>
          <TableCell style={{color:"white"}}>Action</TableCell>
        </TableRow>
      </TableHead>

       <TableRow>
       <TableCell>Name</TableCell>
          <TableCell>Train Info</TableCell>
          <TableCell>Delivery Time</TableCell>
          <TableCell>Items</TableCell>
          <TableCell className='deleteIcon'>
              <AiFillCheckCircle className='deleteIcon'/>
              <TiDelete className='deleteIcon'/>
          </TableCell>
        </TableRow>
    </Table>
                 </div>
            </div>
            </div>
           </div> 
        }
        { showDeshbord==="addservices" && <div>Add various Services</div>}
        {showDeshbord==="manageservices" && <div>Manage Services</div>}
        {showDeshbord==="complaint" && <div>Manage complaint</div> }
       {showDeshbord==="inspection" && <div>Inspection</div> }
       {showDeshbord==="serviceHistory" && <div>About Service history</div> }
       {showDeshbord==="profile" && <div>Manage Profile</div> }
    </div>
  )
}

export default Dashboard