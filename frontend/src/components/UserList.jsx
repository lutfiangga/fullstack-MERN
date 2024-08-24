import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {
  const [user, setUser] = useState([])

  const apiUrl = import.meta.env.VITE_PRIVATE_API_URL

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await axios.get(`${apiUrl}/users`)
    // console.table(response.data)
    setUser(response.data)
  }

  const deleteUser = async id => {
    try {
      await axios.delete(`${apiUrl}/users/${id}`)
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container mx-auto p-4 pt-6 md:p-6 lg:p-12'>
      <h1 className='text-3xl font-bold mb-4'>Users</h1>
      <Link
        to={'/addUser'}
        className='bg-blue-500 my-4 text-white px-4 py-2 rounded-lg'
      >
        Add User
      </Link>
      <table className='table-auto w-full text-left'>
        <thead>
          <tr>
            <th className='px-4 py-2'>No</th>
            <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>Email</th>
            <th className='px-4 py-2'>Gender</th>
            <th className='px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr key={user._id}>
              <td className='px-4 py-2'>{index + 1}</td>
              <td className='px-4 py-2'>{user.name}</td>
              <td className='px-4 py-2'>{user.email}</td>
              <td className='px-4 py-2'>{user.gender}</td>
              <td className='px-4 py-2 text-white'>
                <Link
                  to={`editUser/${user._id}`}
                  type='button'
                  className='btn-sm px-4 rounded-md py-2 bg-gray-500 mr-2'
                >
                  edit
                </Link>
                <button
                  onClick={() => deleteUser(user._id)}
                  type='button'
                  className='btn-sm px-4 rounded-md py-2 bg-red-500'
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
