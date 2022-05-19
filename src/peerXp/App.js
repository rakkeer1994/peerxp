import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Dashbord from './component/Dashbord'
import Pages from './component/Pages'
import Post from './component/Post'
import Navbar from './Navbar'
// import {ContextData} from './Context'
const App=()=>{
    return(
        // <ContextData>
       <BrowserRouter>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Dashbord/>}/>
           <Route path='/pages' element={<Pages/>}/>
           <Route path='/Posts' element={<Post/>}/>
           <Route path='*' element={<Dashbord/>}/>
       </Routes>
       </BrowserRouter>
        // </ContextData>
    )
}

export default App