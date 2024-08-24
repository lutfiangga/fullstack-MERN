import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  const apiUrl = import.meta.env.VITE_PRIVATE_API_URL

  useEffect(() => {
    getUserById()
  },[])

  const getUserById = async () => {
    const response = await axios.get(`${apiUrl}/users/${id}`)
    setName(response.data.name)
    setEmail(response.data.email)
    setGender(response.data.gender)
  }

  const updateUser = async e => {
    e.preventDefault()
    try {
      await axios.patch(`${apiUrl}/users/${id}`, {
        name,
        email,
        gender
      })
      console.log('User updated:', { name, email, gender })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mt-12'>
      <div className='max-w-md m-auto py-8 border rounded-lg flex flex-col items-center justify-center'>
        <h3 className='text-center font-bold'>ADD USER</h3>
        <form onSubmit={updateUser}>
          <label class='block text-sm font-medium mb-1'>Nama:</label>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='nama'
            class='w-full p-2 pl-10 text-sm text-gray-700'
          />
          <br />
          <label class='block text-sm font-medium mb-1'>Email:</label>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='email@example.com'
            class='w-full p-2 pl-10 text-sm text-gray-700'
          />
          <br />
          <label class='block text-sm font-medium mb-1'>Gender:</label>
          <select
            value={gender}
            onChange={e => setGender(e.target.value)}
            class='w-full p-2 pl-10 text-sm text-gray-700'
          >
            <option value='' selected disabled>
              Select Gender
            </option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
          <br />
          <div className='flex justify-center'>
            <Link
              to={'/'}
              class='bg-gray-500 mr-2 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4'
            >
              Back
            </Link>
            <button
              type='submit'
              class='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4'
            >
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
