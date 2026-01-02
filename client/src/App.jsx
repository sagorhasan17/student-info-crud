import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './components/User';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/update' element={<UpdateUser />} />
          <Route path='/delete' element={<DeleteUser />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
