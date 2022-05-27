import React,{useState} from 'react'
import {FaBell} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import Dashboard from './Dashboard'
import {Link} from 'react-router-dom'


import {AiOutlineLogout} from 'react-icons/ai'

const Navbar = () => {
  const [show,setShow]=useState(false)
  const [cls,setCls]=useState("")
  return (
    <>
    <div className='navbarContainer'>
      <div className='stationLogo'>Station Operator</div>
      <div className='stationLogout'><span><FaBell/></span> || <span><Link to='/'><AiOutlineLogout/></Link></span></div>
      <div className='homeButton' onClick={()=>setShow(!show)}><GoThreeBars/></div>
      {show ? <div><AiOutlineLogout/></div> : null}
    </div>

    <div>
      <Dashboard/>
    </div>
    </>
  )
}

export default Navbar