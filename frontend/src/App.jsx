import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './components/UserList'
import AddUser from './components/AddUser'
import UpdateUser from './components/EditUser'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<UserList/>} />
          <Route path='/addUser' element={<AddUser/>} />
          <Route path='/editUser/:id' element={<UpdateUser/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
