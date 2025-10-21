import React, { useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { Link } from 'react-router'

const Register = () => {
  const [passShow, setPassShow] = useState(false)

  const handlePassShow = () => {
    setPassShow(!passShow)
  }

  const handleFormSubmite = (e) => {
    e.preventDefault()
  }
  return (
    <div className='w-full my-16 flex-center'>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-5">
        <h2 className='text-4xl text-center font-bold'>Register Now!</h2>
        <form onSubmit={(e) => handleFormSubmite(e)} className="card-body">
          <fieldset className="fieldset">

            <label className="label">Name</label>
            <input required type="text" name='name' placeholder="Enter Your Name Here" className="input input-info w-full" />

            <label className="label">Email</label>
            <input required type="email" name='email' placeholder="Email" className="input input-info w-full" />

            <label className="label">Photo URL</label>
            <input required type="text" name='photo' placeholder="Photo URL" className="input input-info w-full" />

            <label className="label">Password</label>
            <label className='input input-success w-full'>
              <input required type={passShow ? "text" : "password"} name='password' placeholder="Password" className="input focus:outline-0" />
              <button type='button' onClick={handlePassShow} className='cursor-pointer'>
                {passShow ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </button>
            </label>

            <div><a className="link link-hover">Forgot password?</a></div>
            <button type='submit' className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="">Don you already have an account? <Link to="/login" className='font-bold text-success hover:underline'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register