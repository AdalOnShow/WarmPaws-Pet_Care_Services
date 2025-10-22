import React, {  useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { Link } from 'react-router'

const Login = () => {
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
        <h2 className='text-4xl text-center font-bold'>Login Now!</h2>
        <form onSubmit={(e) => handleFormSubmite(e)} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" placeholder="Email" className="input input-info w-full" />

            <label className="label">Password</label>
            <label className='input input-success w-full'>
              <input type={passShow ? "text" : "password"} placeholder="Password" className="input focus:outline-0" />
              <button type='button' onClick={handlePassShow} className='cursor-pointer'>
                {passShow ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </button>
            </label>

            <div><a className="link link-hover">Forgot password?</a></div>
            <button type='submit' className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="">Don't have an account? <Link to="/register" className='font-bold text-success hover:underline'>Register</Link></p>
          <div className="divider divider-success">OR</div>

        </form>
      </div>
    </div>
  )
}

export default Login