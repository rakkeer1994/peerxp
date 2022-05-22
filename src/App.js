
import NavBar from './components/NavBar'
import CodeForMern from './components/CodeForMern'
import AddUser from './components/AddUser'
import AllUser from './components/AllUser'
import EditUser from './components/EditUser'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<CodeForMern/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/alluser' element={<AllUser/>}/>
      <Route path='/edituser/:id' element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
