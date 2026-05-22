import { useState } from 'react'
import { registerUser } from '../services/authService'

function Register() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await registerUser(formData)
      alert('Registered Successfully')
    } catch (error) {
      alert('Registration failed')
    }
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>

      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-xl shadow-lg w-96'
      >

        <h1 className='text-3xl font-bold mb-6'>Register</h1>

        <input
          type='text'
          placeholder='Username'
          className='w-full border p-3 mb-4 rounded'
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value
            })
          }
        />

        <input
          type='email'
          placeholder='Email'
          className='w-full border p-3 mb-4 rounded'
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value
            })
          }
        />

        <input
          type='password'
          placeholder='Password'
          className='w-full border p-3 mb-4 rounded'
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value
            })
          }
        />

        <button className='bg-green-600 text-white w-full py-3 rounded'>
          Register
        </button>

      </form>
    </div>
  )
}

export default Register
