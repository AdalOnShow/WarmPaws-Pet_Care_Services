import React, { useContext, useRef, useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from './../Contexts/AuthContext';
import SocialLogin from '../Components/SocialLogin';
import toast from 'react-hot-toast';



const Register = () => {
  const { registerWithEmailAndPassword, setUser, updateProfileFunc } = useContext(AuthContext)
  const [passShow, setPassShow] = useState(false)
  const [isPassValid, setIsPassValid] = useState(false)
  const passRef = useRef()
  const navite = useNavigate()

  const handlePassShow = () => {
    setPassShow(!passShow)
  }

  const handlePassValidation = () => {
    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (passwordRegEx.test(passRef.current?.value)) {
      setIsPassValid(true)
    }
    return
  }

  const handleSignupError = (error) => {
    if (error.code === "auth/email-already-in-use") {
      return "This email is already registered. Please login instead.";
    } else if (error.code === "auth/invalid-email") {
      return "The email address is not valid. Please enter a correct email.";
    } else if (error.code === "auth/weak-password") {
      return "Password is too weak. Use at least 6 characters with uppercase and lowercase letters.";
    } else if (error.code === "auth/network-request-failed") {
      return "Network error. Check your internet connection and try again.";
    } else {
      return "Something went wrong. Please try again later.";
    }
  };

  const handleFormSubmite = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const photo = e.target.photo.value

    if (isPassValid) {
      registerWithEmailAndPassword(email, password)
        .then(res => {
          setUser(res.user)
          updateProfileFunc(name, photo)
            .then(() => {
              toast.success("User Register success")
              navite('/')
            })
            .catch(error => {
              const massage = handleSignupError(error)
              toast.error(massage)
            })
        })
        .catch(error => {
          const massage = handleSignupError(error)
          toast.error(massage)
        })
    } else {
      toast.warning("Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.")
    }
  }

  return (
    <div className='w-full py-10 flex-center bg-linear-to-b from-info to-success'>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-5">
        <h2 className='text-4xl text-center font-bold'>Register Now!</h2>
        <form onSubmit={(e) => handleFormSubmite(e)} className="card-body">
          <fieldset className="fieldset">

            <label className="label">Name</label>
            <input type="text" name='name' placeholder="Enter Your Name Here" className="input input-info w-full" />

            <label className="label">Email</label>
            <input required type="email" name='email' placeholder="Email" className="input input-success w-full" />

            <label className="label">Photo URL</label>
            <input type="text" name='photo' placeholder="Photo URL" className="input input-info w-full" />

            <label className="label">Password</label>
            <label className={`input w-full ${isPassValid ? "input-success" : "input-error"}`}>
              <input required ref={passRef} onChange={handlePassValidation} type={passShow ? "text" : "password"} name='password' placeholder="Password" className="input focus:outline-0" />
              <button type='button' onClick={handlePassShow} className='cursor-pointer'>
                {passShow ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </button>
            </label>
            <button type='submit' className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="">Don you already have an account? <Link to="/login" className='font-bold text-success hover:underline'>Login</Link></p>
          <div className="divider divider-success">OR</div>
          <SocialLogin />
        </form>
      </div>
    </div>
  )
}

export default Register