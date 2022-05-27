import React from 'react'
import Login from './component/Login'
import ResetPass from './component/ResetPass'
import SendOtp from './component/SendOtp'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import './style.css'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/resetPass' element={<ResetPass/>}/>
        <Route path='/sendOtp' element={<SendOtp/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App