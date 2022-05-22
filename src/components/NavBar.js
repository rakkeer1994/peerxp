import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar,Toolbar,styled } from '@mui/material'
const Header=styled(AppBar)`
background:#111111
`
const Tabs=styled(NavLink)`
font-size:1.4rem;
margin-right:1%;
color: inherit;
text-decoration:none`
const NavBar = () => {
  return (
    <Header position='static'>
        <Toolbar>
             <Tabs to='/'>Code For Mern</Tabs>
             <Tabs to='/alluser'>All User</Tabs>
             <Tabs to='/adduser'>Add User</Tabs>
        </Toolbar>
    </Header>
  )
}

export default NavBar