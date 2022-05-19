import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar=()=>{
    return(
        <>
         <ul>
             <li><Link to='/'>Dashbord</Link></li>
             <li><Link to='/pages'>Posts</Link></li>
             <li><Link to='/posts'>Links</Link></li>
         </ul>
        </>
    )
}

export default Navbar