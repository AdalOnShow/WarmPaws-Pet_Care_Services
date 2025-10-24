import React, { use, useRef, useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router'
import SocialLogin from '../Components/SocialLogin'
import { AuthContext } from '../Contexts/AuthContext'
import toast from 'react-hot-toast'

const Login = () => {
  const { signInWithEmailAndPasswordFunc, setUser } = use(AuthContext)
  const [passShow, setPassShow] = useState(false)
  const navigate = useNavigate()
  const location = useLocation();
  const emailRef = useRef()

  const from = location.state?.from?.pathname || "/";

  const handlePassShow = () => {
    setPassShow(!passShow)
  }

  const handleSigninError = (error) => {
    if (error.code === "auth/invalid-email") {
      return "Invalid email format"
    } else if (error.code === "auth/invalid-credential") {
      return "Invalid credentials. Please try again."
    } else if (error.code === "auth/user-disabled") {
      return "User has been disabled"
    } else if (error.code === "auth/user-not-found") {
      return "No user found with this email"
    } else if (error.code === "auth/wrong-password") {
      return "Incorrect password"
    } else if (error.code === "auth/too-many-requests") {
      return "Too many login attempts. Please try again later."
    } else if (error.code === "auth/network-request-failed") {
      return "Network error. Please check your connection."
    } else {
      return "Something went wrong. Please try again later.";
    }
  };

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setUser(res.user)
        toast.success("Signin Successfull")
        setTimeout(() => {
          navigate(from, { replace: true })
        }, 300)
      })
      .catch(err => {
        const massage = handleSigninError(err)
        toast.error(massage)
      })
  }

  const handleForgetPass = () => {
    const emailValue = emailRef.current?.value || ''
    navigate("/forget-password", { state: { email: emailValue } })
  }
  return (
    <div className='w-full py-10 flex-center bg-linear-to-b from-info to-success'>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-5">
        <h2 className='text-4xl text-center font-bold'>Login Now!</h2>
        <form onSubmit={(e) => handleLogin(e)} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input required name='email' ref={emailRef} type="email" placeholder="Email" className="input input-info w-full" />

            <label className="label">Password</label>
            <label className='input input-success w-full'>
              <input required name='password' type={passShow ? "text" : "password"} placeholder="Password" className="input focus:outline-0" />
              <button type='button' onClick={handlePassShow} className='cursor-pointer'>
                {passShow ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </button>
            </label>

            <div><button onClick={handleForgetPass} type='button' className="link link-hover">Forgot password?</button></div>
            <button type='submit' className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="">Don't have an account? <Link to="/register" className='font-bold text-success hover:underline'>Register</Link></p>
          <div className="divider divider-success">OR</div>
          <SocialLogin />
        </form>
      </div>
    </div>
  )
}

export default Login